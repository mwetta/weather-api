const uiController = (() => {

    const getDiv = (item) => {
        console.log(item);
        let object = document.querySelectorAll('div');
        for (const element of object.entries()) {
            if (element[1].id === item){
                return element[1]
            }
        }
    }

    const getElements = (type) => {
        let elements = document.querySelectorAll(`${type}`);
        return elements
    }

    const setText = (element, text) => {
        element.innerText = text;
    }

    const setIcon = (filename) => {
        console.log(filename);
        let img = document.getElementById('condition-icon');
        img.setAttribute('src', `../src/icons/${filename}`);
    }
    
    
    return {setText, getElements, setIcon}
})();

export default uiController;