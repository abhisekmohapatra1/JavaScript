// Datatypes :- 1.Primitive datatype (stack memory)  2.Non-Primitive datatype / reference datatype (Heap memory)

// 1.Primitive datatype 
// number -- 2 to the power 53
// bigint -- 
// String -- ""
// Boolean -- true/false
// null -- standalone value
// undefined 
// symbol -- unique 

// object
console.log(typeof null); //object
console.log(typeof undefined); //undefined 

let usrname; //now its value is undefined 
let usrname1 = undefined; // we can define like this also.


const id = Symbol('123') 
const anotherId = Symbol('123')
console.log(id === anotherId) // both returns diffrent value


//2. Non-Primitive Datatype
// Array, Objects, Functions

const employees = ["Abhisek", "Zack", "Stiven"];

let myobj={
    name:"Abhisek",
    age:22 
}

//In stack memory change in duplicate variable doesnot reflect in original variable because when we assign it to the duplicate it gives a copy of the original .
// But in heap memory change in duplicate reflects in the original one because it gives the reference .