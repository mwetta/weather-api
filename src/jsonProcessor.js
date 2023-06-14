import getData from "./dataFetcher";
import uiController from "./uiController";

const jsonProcessor = (() => {
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
        current["name"] = location.name.toUpperCase();
        current["condition"] = current.condition.text;
        console.log(current.condition.text);
        console.log(current);
        let spans = Array.from(uiController.getElements('span'));
        spans.forEach(span => {
            let text = current[`${span.id}`];
            console.log(text);
            uiController.setText(span, text);
        })
    }


    return {processWeatherData}
})();

export default jsonProcessor;