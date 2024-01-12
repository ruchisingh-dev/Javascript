// destructring
const personalInfo = {
    firstName : "Ruchi",
    lastName : "Singh",
    city : "Badarpur",
    state : "Delhi",
    zipcode : 110044
};

const {firstName:fn , lastName:ln} = personalInfo;

// console.log(`My name is ${fn} ${ln}.`)

// destructuring arrays
let [firstName, middleName, lastName] = ["Ruchi", "Singh", "Rajput"];
// console.log(`${firstName} ${middleName} ${lastName}`)
