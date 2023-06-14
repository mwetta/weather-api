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
        current["condition-code"] = current.condition.code;
        // console.log(current.condition.text);
        // console.log(current);
        let spans = Array.from(uiController.getElements('span'));
        let keys = Object.keys(current);
        spans.forEach(span => {
            if (keys.includes(`${span.id}`)) {
                let text = current[`${span.id}`];
                uiController.setText(span, text);
            }
            
            // console.log(text);
            
        })
    }


    return {processWeatherData}
})();

export default jsonProcessor;