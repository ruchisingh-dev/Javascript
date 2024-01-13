// API base URL for currency conversion data
const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

// Selecting DOM elements
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const msg = document.querySelector(".msg")

// Populating dropdowns with currency options and setting default selections
for (let select of dropdowns) {
    // Iterate through currency codes and create options for the dropdown
    for (currCode in country_codes) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        
         // Set default selections for 'from' and 'to' dropdowns
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if (select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }

        // Append the new option to the dropdown
        select.append(newOption)
    }
    // Add event listener to update flag when dropdown value changes
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

// Function to update flag based on selected currency
const updateFlag = (element) => {
    let currCode = element.value;
    let country_list = country_codes[currCode];
    let newSrc = `https://flagsapi.com/${country_list}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// Event listener for the conversion button
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    // Get user input amount
    let amount = document.querySelector(".Amount input")
    let amtVal = amount.value;

    // Set default amount if not provided or less than 1
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }

    // Build the API URL for currency conversion
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

    // Fetch conversion data from the API
    let response = await fetch(URL)
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()]

    // Calculate and display the converted amount
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
})






