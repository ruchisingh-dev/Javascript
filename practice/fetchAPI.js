// fetch API
// API - application programming interface
const URL = "https://cat-fact.herokuapp.com/facts";
// if we cannot put any option in fetch method is default set by "GET request"
// let promise = fetch(URL);
// console.log(promise);
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// const getFacts = async () => {
//     console.log("getting data.....");
//     let response = await fetch(URL); // response is an object
//     console.log(response);// JSON formate
//     let data = await response.json()
//     // console.log(data[0].text);
//     factPara.innerHTML = data[3].text;
// }

// PROMISE CHANING

function getFacts() {
    fetch(URL)
    .then((reponse) => {
        return reponse.json();
    }).then((data) => {
        console.log(data)
        factPara.innerHTML = data[3].text;
    })
}


btn.addEventListener("click", getFacts);

// Understanding Terms
// AJAX is Asynchronous JS & XML
// JSON is Javascript Object Notation
// response comes in JSON formate
// we have to comvert it into JS object
// we use json() method to do this -> returns a second promise




