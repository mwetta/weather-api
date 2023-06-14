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
        console.log(current["last_updated_epoch"]);
        let hour = format(new Date(location["localtime_epoch"] * 1000), 'H');
        console.log(hour);
        //pull out icon code
        let iconCode = lookupWeatherConditionIconCode(`${current.condition.code}`);
        uiController.setIcon(hour, iconCode);
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