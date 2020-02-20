const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function Number(num) {
	return (num * 100) / 100;
}

function celciusTofahrenheitAndkelvin() {
	
	const cTemp = parseFloat(celciusInput.value);
	const fTemp = (cTemp * (9/5)) + 32;
	const kTemp = cTemp + 273.15;
	fahrenheitInput.value = Number(fTemp);
	kelvinInput.value = Number(kTemp);


};

function fahrenheitTocelsiusAndkelvin() {
	
	const fTemp = fahrenheitInput.value;
	const cTemp = (fTemp - 32) * 5/9;
	const kTemp = (fTemp + 459.67) * 5/9;
	celciusInput.value = Number(cTemp);
	kelvinInput.value = Number(kTemp);

};

function kelvinTocelsiusAndfahrenheit() {
	
	const kTemp = kelvinInput.value;
	const cTemp = kTemp - 273.15;
	const fTemp = (kTemp * 9/5) - 459.67 ;
	celciusInput.value = Number(cTemp);
	fahrenheitInput.value = Number(fTemp);
	

};

function main() {
celciusInput.addEventListener("input", celciusTofahrenheitAndkelvin);


fahrenheitInput.addEventListener("input", fahrenheitTocelsiusAndkelvin);

kelvinInput.addEventListener("input", kelvinTocelsiusAndfahrenheit);
}

main();