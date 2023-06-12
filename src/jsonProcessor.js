import getData from "./dataFetcher";

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

export default jsonProcessor;