// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById('missionTarget');
    // destination = pickPlanet(listedPlanets);
    missionTarget.innerHTML += `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li> 
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
  ` 
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
   
    // let window = document.window;
    let faultyItems = document.getElementById('faultyItems');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    
    
    
if (validateInput(pilot.value) === "Is a Number" || 
    validateInput(copilot.value) === "Is a Number" || 
    validateInput(fuelLevel.value) === "Not a Number" || 
    validateInput(cargoLevel.value) === "Not a Number") {
    alert("Invalid input");
} else {
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    faultyItems.style.visibility = 'visible';
   
}  if (fuelLevel.value < 10000) {
     fuelStatus.innerHTML = 'Fuel level too low for launch';
    // faultyItems.style.visibility = 'visible';
     launchStatus.innerHTML = "Launch not ready for take off";
     launchStatus.style.color = 'red';
}
   else if (cargoLevel.value > 10000) {
        cargoStatus.innerHTML = 'Cargo mass too high for take off';
        launchStatus.innerHTML = "Launch not ready for take off";
        launchStatus.style.color = 'red';
    }

    else {
        // faultyItems.style.visibility = 'visible';
        fuelStatus.innerHTML = 'Fuel level high enough for launch'
        launchStatus.innerHTML = "Launch ready for take off";
        launchStatus.style.color = 'green';
}
};


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
            
            return response.json();   
        
        });
      

    return planetsReturned;
}

function pickPlanet(planets) {
    planet = planets[Math.floor(Math.random()*planets.length)];
    return planet;
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
