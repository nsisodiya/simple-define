/* 
	simple-define 0.0.1
	(c) 2014 Narendra Sisodiya, narendra@narendrasisodiya.com
	simple-define is distributed under the MIT license.
	For all details and documentation:
	https://github.com/nsisodiya/simple-define

	0.0.1 - Simple code

*/

(function(window) {
  "use strict";
  var lib = {};

  function registerModule(moduleName, value) {
    lib[moduleName] = value;
  }

  function logInfo(message) {
    if (console && console.info && typeof console.info === "function") {
      console.info(message);
    }
  }

  window.define = function(moduleName, moduleFunc) {
    logInfo("Registering " + moduleName);

    if (typeof moduleFunc === "function") {
      var headStr = moduleFunc.toString().split("{")[0];
      var headStrArg = headStr.substr(headStr.indexOf("(") + 1).split(")")[0];
      var depList;
      if (headStrArg === "") {
        depList = [];
      } else {
        depList = headStrArg.split(",").map(function(v, i) {
          var r = require(v.trim());
          if (r === undefined) {
            throw new Error("Unable to resolve dependancy for " + v.trim() + " while registering moduleName = " + moduleName);
          }
          return r;
        });
      }
      registerModule(moduleName, moduleFunc.apply(this, depList));
    } else {
      throw new Error("Second argument of define function must be a function : Error while registering moduleName = " + moduleName);
    }
  };

  window.require = function(moduleName) {
    return lib[moduleName];
  };

})(window);
