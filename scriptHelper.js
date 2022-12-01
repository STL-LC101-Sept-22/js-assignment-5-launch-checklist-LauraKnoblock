// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li> 
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
 
    
  }


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log('formSubmission')
    let window = document.window;
    let faultyItems = document.getElementById('faultyItems');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');

    console.log('pilot', pilot.value);
    
if (validateInput(pilot.value) === "Is a Number" || 
    validateInput(copilot.value) === "Is a Number" || 
    validateInput(fuelLevel.value) === "Not a Number" || 
    validateInput(cargoLevel.value) === "Not a Number") {
    alert("Invalid input");
} else {
    pilotStatus.innerHTML = `Pilot Name: ${pilot.value}`;
    copilotStatus.innerHTML = `Co-pilot Name: ${copilot.value}`;
    list.style.visibilty = 'visible !important';
    console.log(list, list.style)
}   if (fuelLevel < 10000) {
    list.style.visibilty = 'visible';
}
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
