// import getData from './dataFetcher.js';
import jsonProcessor from './jsonProcessor.js';
import './style.css'
import uiController from './uiController.js';





jsonProcessor.processWeatherData('london');

// const uiController = (() => {

    
//     const writeMain = (content) => {
//         let main = document.createElement('div');
//         main.setAttribute('id', 'main');
//         content.appendChild(main);
//         writeDefault();
//     }

//     const clearMain = () => {
//         let main = document.getElementById('main');
//             while (main.firstChild) {
//                 main.removeChild(main.firstChild);
//             } 
//     }

//     const writeForm = () => {

//     }

// })();


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
    //print new weather data
  })