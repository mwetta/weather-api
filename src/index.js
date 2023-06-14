// import getData from './dataFetcher.js';
import jsonProcessor from './jsonProcessor.js';
import './style.css'
import uiController from './uiController.js';


jsonProcessor.processWeatherData('bangkok');

// TODO: make modal a module
const btn = document.getElementById("new-location-search-icon");
const input = document.getElementById("new-location-search-input");



btn.onclick = function() {
    console.log(input.value);
    jsonProcessor.processWeatherData(`${input.value}`);
    input.value = '';
  }
  