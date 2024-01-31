const kmToMi = (kilometers) => kilometers * 0.621371;
const miToKm = (miles) => miles / 0.621371;

const lbsToKg = (pounds) => pounds * 0.453592;
const kgToLbs = (kilograms) => kilograms / 0.453592;

const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit * 5 / 9) - 32;

const unitConverter = (startingUnit, endingUnit, value) => {
    let convertedResult;

    switch (`${startingUnit}-${endingUnit}`) {
        case 'km-mi':
            convertedResult = kmToMi(value);
            break;
        case 'mi-km':
            convertedResult = miToKm(value);
            break;
        case 'lbs-kg':
            convertedResult = lbsToKg(value);
            break;
        case 'kg-lbs':
            convertedResult = kgToLbs(value);
            break;
        case 'fahrenheit-celsius':
            convertedResult = fahrenheitToCelsius(value);
            break;
        case 'celsius-fahrenheit':
            convertedResult = celsiusToFahrenheit(value);
            break;
        default:
            convertedResult = 'Invalid units';
    }

    return convertedResult;
};

const convertWeight = () => {
    const input = document.getElementById('Input').value;
    const lbsResult = unitConverter('kg', 'lbs', input);
    const kgResult = unitConverter('lbs', 'kg', input);
    const resultElement = document.getElementById('result');
    var weightDirection = document.querySelector('input[name="weightDir"]:checked').id;
    
    if(weightDirection == "KgToLbs"){
        if (typeof kgResult === 'number') {
        resultElement.textContent = `${input} pounds is equal to ${kgResult} kilograms.`;
    } else {
        resultElement.textContent = 'Invalid input or conversion.';
    }
    }
    else{
        if (typeof lbsResult === 'number') {
            resultElement.textContent = `${input} kilograms is equal to ${lbsResult} pounds.`;
        } else {
            resultElement.textContent = 'Invalid input or conversion.';
        }
    }
    

};





