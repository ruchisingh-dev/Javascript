
let incomes = [10000, 20000, 30000];
let total = 0
// let fullName = "Ruchi singh"
for (const income of incomes){
    // console.log(income);
    total += income;
}
// for (const char of fullName){
    // console.log(char)
// }

for (let income of incomes){
    income = income + 5000;
    // console.log(income)
}


// SPREAD OPERATOR(...)
let numbers = [1, 2, 3, 4, 5, 6];
let number2 = [...numbers, 7, 8, 9, 10]

// console.log(number2)

//REST OPERATOR
// function add(...nums){
    // console.log(nums);
// }
// add(4,5,6,7,8)


// this keyword 
const person = {
    firstName : "Ruchi",
    lastName : "singh",
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
// console.log(person.fullName())


//Arrow function
// Old method
// const square = function(number){
//     return number*number;
// }  
// New method 
// const square = (number) => {
//     return number * number;
// }
// simplified version
const square2 = number => number*number;

// console.log(square2(12))


const jobs = [
    { id : 1, isActive : true},
    { id : 2, isActive : true},
    { id : 3, isActive : false}
];

const activeJob = jobs.filter(function(job) {return job.isActive});
const activeJob2 = jobs.filter(job => job.isActive);
// console.log(activeJob)

function add(...nums){
    let total = nums.reduce((x,y) => x + y )
    console.log(total)
}
// add(4,5,6,7);


function add2(numArray = []){
    let total = 0;
    numArray.forEach((element) => {
        total += element;
    });
    console.log(total)
}
// add2([1,2,3]);


let numArray = [1,2,3,4,5];
// tells whether the value is exits or not in boolean
// console.log(numArray.includes(1)


export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// console.log(months)
// module.exports = months


// class
export class Animal{
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }    
}
