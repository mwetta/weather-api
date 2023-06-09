// import getData from './dataFetcher.js';

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
        //TODO: drill down to find out how to transform
    }
    return {processWeatherData}
})();

jsonProcessor.processWeatherData('london');