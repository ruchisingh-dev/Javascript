// API URL - Application programming interface works as a mediator between client and server
const URL = "https://cat-fact.herokuapp.com/facts";

// Selecting HTML elements
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

//***  Function to fetch cat facts and update the HTML element ***
// async function getFacts() {
//     factPara.innerHTML = "Loading..."
//   try {
//     // Fetching the API and converting data to a JSON object for use in JavaScript
//     const response = await fetch(URL);

//     const data = await response.json(); // Convert the response to a JSON object
//     factPara.innerHTML = data[Math.floor(Math.random() * 5)].text; // Display a specific cat fact in the HTML element
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//   }
// }

//***  Function to fetch cat facts and update the HTML element ***
function getFacts() {
  // Fetching the API and converting data to a JSON object for use in JavaScript
  factPara.innerHTML = "Loading...";
  fetch(URL)
    .then((reponse) => reponse.json())
    .then((data) => {
      const randomNum = Math.floor(Math.random() * 5);
      factPara.innerHTML = data[randomNum].text;
    });
}

// Event listener for the button click
btn.addEventListener("click", getFacts);

// Understanding Terms:
// - AJAX stands for Asynchronous JavaScript & XML.
// - JSON stands for JavaScript Object Notation.
// - The response from the API comes in JSON format, and we use the json() method to convert it into a JavaScript object.
// - The fetch() function returns a promise that resolves to the Response object representing the completion or failure of the request.
// - We chain promises using the then() method to handle the asynchronous flow of data.
