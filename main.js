define("addModule", function(){
	return function(a, b){
		return a+b;
	}
});

define("main", function(addModule){
	window.alert("3+4=" + addModule(3,4));
})
