const kmToMi = (kilometers) => kilometers * 0.621371;
const miToKm = (miles) => miles / 0.621371;

const lbsToKg = (pounds) => pounds * 0.453592;
const kgToLbs = (kilograms) => kilograms / 0.453592;

const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit * 5 / 9) - 32;

const unitConverter = (startingUnit, endingUnit, value) => {
    let convertedResult;

    switch (`${startingUnit}-${endingUnit}`) {
        case 'kmToMi':
            convertedResult = kmToMi(value);
            break;
        case 'miToKm':
            convertedResult = miToKm(value);
            break;
        case `lbsToKg`:
            convertedResult = lbsToKg(value);
            break;
        case 'kgToLbs':
            convertedResult = kgToLbs(value);
            break;
        case 'fahrenheitToCelsius':
            convertedResult = fahrenheitToCelsius(value);
            break;
        case 'celsiusToFahrenheit':
            convertedResult = celsiusToFahrenheit(value);


    }

    return convertedResult;
};









