simple-define
=============

Simple define.js for static module loading with dependency injection

Demo 1
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
url - http://nsisodiya.github.io/simple-define/


Demo2
========
url - http://jsfiddle.net/nsisodiya/Dt8K7/

```javascript
//File person.js
define("Person", function () {
    var Person = function (name, id) {
        this.name = name;
        this.id = id;
    }
    Person.prototype.alertName = function () {
        alert("Name is "+ this.name);
    }
    return Person;
});

//File main.js
define("main", function (Person) {
    var n = new Person("Narendra Sisodiya", 34533);
    n.alertName();
})

```
