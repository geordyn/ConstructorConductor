//Create a Person constructor that accepts name and age as parameters and sets those properties
//accordingly in the Constructor.

var Person = function(name, age) {
  this.name = name;
  this.age = age;
};


//Now create three instances of Person with data you make up

var kyle = new Person ('kyle', 20);
var sarah = new Person ('sarah', 22);
var erin = new Person ('erin', 30);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
  alert(this.name);
};

kyle.sayName();
