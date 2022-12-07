// Write your JavaScript code here!

// const { pickPlanet } = require("./scriptHelper");

// const { addDestinationInfo } = require("./scriptHelper");








window.addEventListener("load", function() {
    console.log('page loaded');
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
      
        let document = window.document;
        let list = document.getElementById('faultyItems');
        let pilotName = document.querySelector("input[name = pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
       
        
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert('All fields required!');
            event.preventDefault();
        }   else  {
            formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
            event.preventDefault();
            
            
            
            
         
    };

       


    });


   let listedPlanets = [];
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {

        console.log(listedPlanets);
       destination = pickPlanet(listedPlanets);
    //    console.log(pickPlanet(listedPlanets));
    //    console.log(missionTarget.innerHTML);
    //    console.log(destination.name);
    
        pickPlanet(listedPlanets);
        addDestinationInfo(document, destination.name, destination.diameter, destination.star, destination.distance, destination.moons, destination.image)
        console.log(missionTarget.innerHTML);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   });
   
});