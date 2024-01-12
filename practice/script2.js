// const months = require('./script')
// import { months, Animal } from "./script.js";
// export const data = [1,2,3];
// console.log(months)

let Name = "Ruchi";
// console.log(Name)
// console.log(Name.padStart(10, 'a'));
// console.log(Name.padEnd(10, 'a'))


// classes 
// let cat = new Animal('cat', 4);

// console.log(cat.legs)

// callback = jab ham ek function me dusra function use kr rahe ho 
function sum(a, b) {
    console.log(a + b);
}

function calculater(a, b, sumCallback) {
    sumCallback(a, b);
}

// calculater(1, 2, sum)

// callback hell: nested callback

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData){
//             getNextData();
//         }
//     }, 2000)
// }
// callback hell - nested callback - hard to understand
// getData(1, () => {
//     console.log("getting data2.....")
//     getData(2, () => {
//         console.log("getting data3.....")
//         getData(3, () => {
//             console.log("getting data4.....")
//             getData(4)
//         })
//     })
// })







// promises = three state - pending, resolve , reject


function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
        }, 2000)
    })
}
// async-await

async function getAllData(){
    console.log("getting data1...")
    await getData(1);
    console.log("getting data2...")
    await getData(2);
    console.log("getting data3...")
    await getData(3);
    console.log("getting data4...")
    await getData(4);
    console.log("getting data5...")
    await getData(5);
}



// through promise chaining
// getData(1).then((res) => {
//     console.log(res)
//     getData(2).then((res) => {
//         console.log(res);
//         getData(3).then((res) => {
//             console.log(res);
//         })
//     })
// })

//more simplified

// getData(1).then((res) => {
//     return getData(2);
// }).then((res) =>{
//     return getData(3)
// }).then((res) => {
//     console.log(res)
// })


// in api promises bane banaye aynege hame bus unka use karna hai 
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("this is a promise");
        // resolve("success")
        reject("error")
    })
}

// let promise = getPromise();
// this execute when promise resolve
// promise.then((res) => {
//     console.log("promise fulfilled", res)
// })
// this execute when promise rejected
// promise.catch((err) => {
//     console.log("promise rejected", err)
// })




function asyncfun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1");
            resolve("success")
        }, 4000)
    })
}
function asyncfun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 2");
            resolve("success")
        }, 4000)
    })
}
// promise chain
// console.log("fetching data1....")
// let p1 = asyncfun1();
// p1.then((res) => {
//     console.log("fetching data2....")
//     let p2 = asyncfun2();
//     p2.then((res) => {})
// })
// more simplified
// console.log("fetching data1....")
// asyncfun1().then((res) => {
//     console.log("fetching data2....")
//     asyncfun2().then((res) => {})
// })

//Async-await function
// async function always return a promise
// await pauses the execution of its surrounding async function until the promise is settle

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000)
    })
}

// async function apiWeatherData(){
//     await api();
//     await api();
// }


