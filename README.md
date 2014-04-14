simple-define
=============

Simple define.js for static module loading with dependency injection

Demo
=============

```javascript
define("addModule", function(){
	return function(a, b){
		return a+b;
	}
});

define("main", function(addModule){
	window.alert("3+4=" + addModule(3,4));
})
```
