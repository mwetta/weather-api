import getData from "./dataFetcher";
import uiController from "./uiController";
const weatherConditions = require('./icons/weather_conditions.json')
import { format } from 'date-fns';

const jsonProcessor = (() => {

    const lookupWeatherConditionIconCode = (code) => {
        let weatherIconCodes = {};
        weatherConditions.forEach(condition => {
            weatherIconCodes[`${condition.code}`] = condition.icon;
        })         
        return weatherIconCodes[`${code}`];
    }

    const lookupWeatherConditionFileName = (hour, code) => {
        if (hour > 6 && hour < 19) {
            let weatherIconCodes = {};
            weatherConditions.forEach(condition => {
                weatherIconCodes[`${condition.code}`] = condition["day-file"];
            })         
            return weatherIconCodes[`${code}`];
        } else {
            let weatherIconCodes = {};
            weatherConditions.forEach(condition => {
                weatherIconCodes[`${condition.code}`] = condition["night-file"];
            })         
            return weatherIconCodes[`${code}`];
        }

    }

    
    const fetchWeatherData = async function(city) {
        try {
            let result = await getData.fetchWeatherData(`${city}`);
            console.log(result);
            return result
        } catch (err) {
            console.log(err);
        }
    }

    const processWeatherData = async function(city) {
        let result = await fetchWeatherData(city);
        let location = result["location"];
        let current = result["current"];
        console.log(current);
        console.log(location["localtime_epoch"]);
        let hour = format(new Date(location["localtime_epoch"] * 1000), 'MM/dd/yyyy HH:mm');
        console.log(hour);

        //TODO: pull out hour from string and use that as hour instead
        console.log(current["last_updated_epoch"]);
        let localHour = format(new Date(current["last_updated_epoch"] * 1000), 'MM/dd/yyyy HH:mm');
        console.log(localHour);
        //pull out file name
        uiController.setIcon(lookupWeatherConditionFileName(hour,`${current.condition.code}`));


        //format basic data received from JSON
        current["name"] = location.name.toUpperCase();
        current["condition"] = current.condition.text;
        //compare keys to display items & set text
        let currentSpans = Array.from(uiController.getElements('.current'));
        console.log(currentSpans.length);
        let keys = Object.keys(current);
        console.log(keys.length);
        //CHECK: switch this operation for efficiency -- what do I actually want to take?
        currentSpans.forEach(span => {
            if (keys.includes(`${span.id}`)) {
                let text = current[`${span.id}`];
                uiController.setText(span, text);
            }
        })
        
        //TODO: add forecast data
    }


    return {processWeatherData}
})();

export default jsonProcessor;