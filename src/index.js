// import getData from './dataFetcher.js';
import jsonProcessor from './jsonProcessor.js';
import './style.css'
import uiController from './uiController.js';



let london = await jsonProcessor.processWeatherData('london');
// console.log(london);

// let result = await uiController.updateLocationDipslay(london);

// TODO: make modal a module
const modal = document.getElementById("myModal");
const btn = document.getElementById("new-location-search-icon");
const span = document.getElementsByClassName("close")[0];
const newLocation = document.getElementById("new-location");

btn.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  newLocation.addEventListener('click', function () {
    //get new weather data
    //print new weather data
  })