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





document.addEventListener("DOMContentLoaded", () => {
    const conversionSelect = document.getElementById("conversionSelect");
    const weightForm = document.getElementById("weightForm");
    const distanceForm = document.getElementById("distanceForm");
    const temperatureForm = document.getElementById("temperatureForm");

    conversionSelect.addEventListener("change", () => {
        const selectedConversion = conversionSelect.value;

        weightForm.style.display = "none";
        distanceForm.style.display = "none";
        temperatureForm.style.display = "none";

        if (selectedConversion === "kgToLbs" || selectedConversion === "lbsToKg") {
            weightForm.style.display = "block";
        } else if (selectedConversion === "miToKm" || selectedConversion === "kmToMi") {
            distanceForm.style.display = "block";
        } else if (selectedConversion === "celsiusToFahrenheit" || selectedConversion === "fahrenheitToCelsius") {
            temperatureForm.style.display = "block";

        }

    });



    weightForm.addEventListener("submit", (event) => event.preventDefault());
    distanceForm.addEventListener("submit", (event) => event.preventDefault());
    temperatureForm.addEventListener("submit", (event) => event.preventDefault());

});


