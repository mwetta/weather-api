// import getData from './dataFetcher.js';

const getData = (() => {
    const fetchWeatherData = async function(city) {
        try {
            console.log(city);
            console.log(`https://api.weatherapi.com/v1/current.json?key=2924c3986bf946cc828152529231805&q=${city}`);
            const weather = await fetch(`https://api.weatherapi.com/v1/current.json?key=2924c3986bf946cc828152529231805&q=${city}`, {mode: 'cors'});
            console.log(weather);
            return weather
        } catch (err) {
            console.log(err)
        }
    }

    return {fetchWeatherData}
})();

// export default getData;

getData.fetchWeatherData('london');