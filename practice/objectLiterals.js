function addressMaker(city, state){
    // const newAdress = {newCity : city, newState : state}
    const newAdress = {city, state} // both worked the same but this is more effective
    console.log(newAdress)
}

// addressMaker("Badarpur", "delhi")

// Challenge.
function addressMaker2(address){
    const {city, state} = address;

    const newAddress = {city, state, country:"India"};
    console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
}
addressMaker2({city:"Badarpur", state:"delhi"});
