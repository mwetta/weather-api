// import getData from './dataFetcher.js';
import './style.css'

//Fetch weather data
const getData = (() => {
    const fetchWeatherData = async function(city) {
        try {
            const weather = await fetch(`https://api.weatherapi.com/v1/current.json?key=2924c3986bf946cc828152529231805&q=${city}`, {mode: 'cors'});
            return weather.json()
        } catch (err) {
            console.log(err)
        }
    }
    return {fetchWeatherData}
})();

// export default getData;

//process JSON data from API and return object with only data required for app
const jsonProcessor = (() => {
    const processWeatherData = async function(city) {
        try {
            let result = await getData.fetchWeatherData(`${city}`);
            console.log(result);
            return result
        } catch (err) {
            console.log(err);
        }
    }
    return {processWeatherData}
})();


jsonProcessor.processWeatherData('london');

const uiController = (() => {

    
    const writeMain = (content) => {
        let main = document.createElement('div');
        main.setAttribute('id', 'main');
        content.appendChild(main);
        writeDefault();
    }

    const clearMain = () => {
        let main = document.getElementById('main');
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            } 
    }

    const writeForm = () => {

    }

})();
