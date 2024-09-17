// There are 2 types of Datatypes (Premitive and non-premitive)

// Premitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggin = true 
const temp = null
let emailId; // (emailId) == (emailId = undefined)

const id = Symbol("123")
const anotherid = Symbol("123")

// console.log(id === anotherid);

const bigNumber = 45318465146846313546n //This is BigInt

// Reference (Non-Premitive)
// Array, Objects, Functions

//Array
const heros = ["Deadpool", "Wolverine", "Spyderman"]

//Object
let myData={
    name : "Asad",
    age : 21
}

//Functions
const myFunction = function(){
    console.log("Hello");
    
}

console.log(typeof name);

// Master the Objects and Browser events then you will become java-script master

// java-script is dynamic type langauge and not static