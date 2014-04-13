(function(window) {
  "use strict";
  var lib = {};
  window.define = function(moduleName, moduleFunc) {
        console.log("Registering " + moduleName);

        if (typeof moduleFunc === "function") {
		    var headStr = moduleFunc.toString().split("{")[0];
		    var headStrArg = headStr.substr(headStr.indexOf("(") + 1).split(")")[0];
		    var depList;
		    if (headStrArg === "") {
		      depList = [];
		    } else {
		      depList = headStrArg.split(",").map(function(v,i){
			   return require(v.trim());
			  });
		    }
			lib[moduleName] = moduleFunc.apply(this, depList);
        } else {
			//TODO = through Exception.
			console.log("Error");
        }
  };

  window.require = function(moduleName) {
		if(lib[moduleName] === undefined){
			//TODO throw Error
			console.error("Unable to find module :" + moduleName);
		}else{
			return lib[moduleName];
		}
  };
})(window);
