/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function hello(name)
{
    return `Hello ${this.name}`
}
console.log(hello("Jose"))
// Principle 2

// code example for Implicit Binding
const man = {
    name: 'Jose',
    age: 20,
    work: function() {
        return `${this.name} is ${this.age}`
    }
}
console.log(man.work());

// Principle 3

// code example for New Binding

function Guy(greet)
{
    this.name = 'Jose';
    this.say = function() {
        return "I am " + this.name;
    };

}

var name = 'Jeff';
var result = new Guy();
console.log(result.name);


// Principle 4
// code example for Explicit Binding
const person = {
    "name": "Jose"
}

function introduction(skill1,skill2, skill3){
    return `Hello my name is ${this.name} and I like to program in: ${skill1}, ${skill2}, ${skill3}`;
}
const skills = ["HTML", "CSS", "JS"];

console.log(introduction.call(person, ...skills));