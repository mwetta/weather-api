import getData from './dataFetcher.js';
import jsonProcessor from './jsonProcessor.js';
import './style.css'






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
