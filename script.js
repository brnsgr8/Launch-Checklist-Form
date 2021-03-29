// Write your JavaScript code here!

window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response ){
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
                <h2 id = "Destination">Mission Destination</h2>
                   <ol>
                     <li>Name: ${json[0].name}</li>
                     <li>Diameter: ${json[0].diameter}</li>
                     <li>Star: ${json[0].star}</li>
                     <li>Distance from Earth: ${json[0].distance}</li>
                     <li>Number of Moons: ${json[0].moon}</li>
                  </ol>
                  <img src="${json[0].image}">
                  `;
      })
           
   let form = document.querySelector("form");
   
   let faultyItems= document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus= document.getElementById("fuelStatus");
   let cargoStatus= document.getElementById("cargoStatus");
   let launchStatus= document.getElementById("launchStatus");   

   form.addEventListener("submit", function(){
   
      event.preventDefault()

      let pilotInput = document.querySelector("input[name=pilotName]"); 
      let pilotNumber= Number(pilotInput.value);
      let coPilotInput = document.querySelector("input[name=copilotName]"); 
      let coPilotNumber= Number(coPilotInput.value); 
      let fuelLevel = document.querySelector("input[name=fuelLevel]"); 
      let fuelLevelNumber = Number(fuelLevel.value);
      let cargoMass = document.querySelector("input[name=cargoMass]"); 
      let cargoMassNumber = Number(cargoMass.value);
      
      if (pilotInput.value ===""|| coPilotInput.value ==="" || fuelLevel.value ===""|| cargoMass.value ===""){
      alert("Enter all required fields.");
    
       }else if (isNaN(pilotNumber)===false|| isNaN(coPilotNumber)===false|| isNaN(fuelLevelNumber) || isNaN(cargoMassNumber)){
      alert(" Input is not valid.")
         }else{
         /*change div id faulty items to visible*/
            faultyItems.style.visibility ="visible"
            pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`  
            copilotStatus.innerHTML =`Co-pilot ${coPilotInput.value} is ready for launch`
           
            if (fuelLevel.value<10000){
            fuelStatus.innerHTML =`Not enough fuel for the journey`;
         
            launchStatus.style.color= "crimson";
            launchStatus.innerHTML = `Shuttle not ready for launch`;  

            };

            if (cargoMass.value>10000){
               cargoStatus.innerHTML =`Cargo mass too heavy for the journey`;
               launchStatus.style.color= "crimson";
               launchStatus.innerHTML = `Shuttle not ready for launch`;

            }else{
               launchStatus.style.color= "green";
               launchStatus.innerHTML = `Shuttle ready for launch`;
            }


               
            }
         
        
    })
   })
})



 // {<h2 id = "Destination">Mission Destination</h2>}