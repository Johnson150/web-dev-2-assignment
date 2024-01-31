const kmToMi = (kilometers) => kilometers * 0.621371;
const miToKm = (miles) => miles / 0.621371;

const lbsToKg = (pounds) => pounds * 0.453592;
const kgToLbs = (kilograms) => kilograms / 0.453592;

const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

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

    if (weightDirection == "KgToLbs") {
        if (typeof kgResult === 'number') {
            resultElement.textContent = `${input} pounds is equal to ${kgResult.toFixed(2)} kilograms.`;
        } else {
            resultElement.textContent = 'Invalid input or conversion.';
        }
    }
    else {
        if (typeof lbsResult === 'number') {
            resultElement.textContent = `${input} kilograms is equal to ${lbsResult.toFixed(2)} pounds.`;
        } else {
            resultElement.textContent = 'Invalid input or conversion.';
        }
    }
    document.getElementById('Input').value = '';
};

const convertTemperature = () => {
    const input = document.getElementById('Input').value;
    const fahrenheitResult = unitConverter('celsius', 'fahrenheit', input);
    const celsiusResult = unitConverter('fahrenheit', 'celsius', input);
    const resultElement = document.getElementById('result');
    var temperatureDirection = document.querySelector('input[name="temperatureDir"]:checked').id;

    if (temperatureDirection == "celsiusToFahrenheit") {
        if (typeof fahrenheitResult === 'number') {
            resultElement.textContent = `${input} °C is equal to ${fahrenheitResult.toFixed(0)} °F.`;
        } else {
            resultElement.textContent = 'Invalid input or conversion.';
        }
    }
    else {
        if (typeof celsiusResult === 'number') {
            resultElement.textContent = `${input} °F is equal to ${celsiusResult.toFixed(0)} °C.`;
        } else {
            resultElement.textContent = 'Invalid input or conversion.';
        }
    }
    document.getElementById('Input').value = '';
};

const convertDistance = () => {
    const input = document.getElementById('Input').value;
    const kmResult = unitConverter('mi', 'km', input);
    const miResult = unitConverter('km', 'mi', input);
    const resultElement = document.getElementById('result');
    var distanceDirection = document.querySelector('input[name="distanceDir"]:checked').id;

    if (distanceDirection == "miToKm") {
        if (typeof kmResult === 'number') {
            resultElement.textContent = `${input} miles is equal to ${kmResult.toFixed(2)} km.`;
        } else {
            resultElement.textContent = 'Invalid input or conversion.';
        }
    }
    else {
        if (typeof miResult === 'number') {
            resultElement.textContent = `${input} km is equal to ${miResult.toFixed(2)} miles.`;
        } else {
            resultElement.textContent = 'Invalid input or conversion.';
        }
    }

    document.getElementById('Input').value = '';

};

const convertManyWeight = () => {
    const manyInput = document.getElementById('manyInput').value;
    const resultElement = document.getElementById('manyResult');
    var weightDirection = document.querySelector('input[name="weightDir"]:checked').id;

    const resultsArray = [];
    const weightsArray = manyInput.split(',').map(Number);

    weightsArray.forEach(input => {
        const lbsResult = unitConverter('kg', 'lbs', input);
        const kgResult = unitConverter('lbs', 'kg', input);

        if (weightDirection === "KgToLbs") {
            if (typeof kgResult === 'number') {
                resultsArray.push(`${kgResult.toFixed(2)}kg,`);
            } else {
                resultsArray.push('Invalid input or conversion.');
            }
        } else {
            if (typeof lbsResult === 'number') {
                resultsArray.push(`${lbsResult.toFixed(2)}lbs,`);
            } else {
                resultsArray.push('Invalid input or conversion.');
            }
        }
    });

    resultElement.textContent = resultsArray.join('\n');
    document.getElementById('manyInput').value = '';

}



const convertManyTemperature = () => {
    const manyInput = document.getElementById('manyInput').value;
    const resultElement = document.getElementById('manyResult');
    var temperatureDirection = document.querySelector('input[name="temperatureDir"]:checked').id;

    const resultsArray = [];
    const temperaturesArray = manyInput.split(',').map(Number);

    temperaturesArray.forEach(input => {
        const fahrenheitResult = unitConverter('celsius', 'fahrenheit', input);
        const celsiusResult = unitConverter('fahrenheit', 'celsius', input);

        if (temperatureDirection === "celsiusToFahrenheit") {
            if (typeof fahrenheitResult === 'number') {
                resultsArray.push(`${fahrenheitResult.toFixed(0)}°F,`);
            } else {
                resultsArray.push('Invalid input or conversion.');
            }
        } else {
            if (typeof celsiusResult === 'number') {
                resultsArray.push(`${celsiusResult.toFixed(0)}°C,`);
            } else {
                resultsArray.push('Invalid input or conversion.');
            }
        }
    });

    resultElement.textContent = resultsArray.join('\n');
    document.getElementById('manyInput').value = '';
}

const convertManyDistance = () => {
    const manyInput = document.getElementById('manyInput').value;
    const resultElement = document.getElementById('manyResult');
    var distanceDirection = document.querySelector('input[name="distanceDir"]:checked').id;

    const resultsArray = [];
    const distancesArray = manyInput.split(',').map(Number);

    distancesArray.forEach(input => {
        const kmResult = unitConverter('mi', 'km', input);
        const miResult = unitConverter('km', 'mi', input);

        if (distanceDirection === "miToKm") {
            if (typeof kmResult === 'number') {
                resultsArray.push(`${kmResult.toFixed(2)} km,`);
            } else {
                resultsArray.push('Invalid input or conversion.');
            }
        } else {
            if (typeof miResult === 'number') {
                resultsArray.push(`${miResult.toFixed(2)} miles,`);
            } else {
                resultsArray.push('Invalid input or conversion.');
            }
        }
    });

    resultElement.textContent = resultsArray.join('\n');

    document.getElementById('manyInput').value = '';
}




