/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/GLobal Binding - 
* 2. Implicit Binding
* 3. New Binding - 
* 4. Explicit Binding - 
*
* write out a code example of each explanation above
*/

// 1) Window/GLobal Binding - 
//    When "this" used in a global/window scope it will bind to global/window depending on your IDE.
//
// 2) Implicit Binding - 
//    When you call a function and . and it gets invoked look to the left of the function and that is where "this" will bind to.
//
// 3) New Binding - 
//    When using the new keyword to invoke an object "this" will bind to the instance of the object.
//
// 4) Explicit Binding - 
//    When using explicit binding you will tell "this" how it should behave with the functions call. .bind or .apply.

// Principle 1

// code example for Window Binding
function sayName(name) {
  console.log(this);
  return name;
  }

  sayName('Sascha');

// Principle 2

// code example for Implicit Binding
const animal = {
  noise: 'bark',
  age: 5,
  sayHello: function (name) {
  console.log(`${this.noise}, I am ${name}!`);
  console.log(this);
    }
  };

  //the function got invoked to this refers to the thing left from the . notation which is here the animal object
  animal.sayHello('Doggo'); 


// Principle 3

// code example for New Binding

let Icecream = function(color, taste, name){
  // this = {}
  this.color = color;
  this.taste = taste;
  this.name = name;
}

// When an object is invoked with the new Keyword the this will be bound to the instance of the object.
let raspberryIceCream = new Icecream("red", "raspberry", "sour");


/* other version */
/* function Person(greeter) {
  this.greeting = 'Hello';
  this.greeter = greeter;
  this.speak = function() {
  console.log(this.greeting + " " + this.greeter);
  console.log(this);
  };
  }
  
  const jerry = new Person('jerry');
  const sascha = new Person('sascha');
  
  jerry.speak();
  sascha.speak(); */


// Principle 4

// code example for Explicit Binding

let changeColor = function(state1, state2, state3){
  console.log('My color is ' + this.color + ' and I am currently ' + state1 + " and want to " + state2 + " so I will end up as " + state3 + ".");
};

let cube = {
  name: 'icecube',
  color: 'blue'
};

let state = ["solid", "melt", "water"]

// .call, .apply and .bind will tell explictly how the this should behave
// .call and .apply work kinda the same by immediately invoking the function
// .bind ist like .call but returns a new function

// .call have the arguments inserted one by one
changeColor.call(cube, state[0], state[1], state[2]); 
// .apply uses an array for inserting arguments
changeColor.apply(cube, state); 
// this also works with the spread operator to insert the whole array as an argument
changeColor.call(cube, ...state); 
// .bin will return a new function instead of invoking the original function. It will bind this to the cube object, insert the arguments and return the newFunction.
let newFunction = changeColor.bind(cube, state[0], state[1], state[2]); 
console.log(newFunction());


/* other versions */

/* function Person(greeter) {
  this.greeting = 'Hello';
  this.greeter = greeter;
  this.speak = function() {
  console.log(this.greeting + " " + this.greeter);
  console.log(this);
  };
  }
  
  
  const kevin = new Person('jerry ');
  const elan = new Person('sascha');
  
  jerry.speak.call(sascha);
  sascha.speak.apply(jerry);
  
  sascha.speak();
  jerry.speak();



  function hello() {
    console.log(this)
  }  */
  
/*
function sayHello(name) {
    console.log('this', this);
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }

  const myObj = {
    'greeting': 'Hello',
    'sayHello': sayHello
  };
  const travelingMe = {
    greeting: 'Hola',
  };

const testHello = myObj.sayHello

sayHello.call(travelingMe, 'Rosie')
sayHello.call({
    greeting: 'Meow'}, 'Rosie')

const boundHello = sayHello.bind({greeting: 'Mau'}, 'Kittie')

boundHello() */
