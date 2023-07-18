// do not share your api key in public
const api_key = `fce3ef3a36b7e32d32e0564248b5d51a`;

const loadTemperature = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    console.log(url);
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayTempereture(data);
        console.log(data)
    }
    catch{
        console.log('Error:-', error)
    }

    fetch(url)
    .then(res => res.json())
    .then(data => displayAdvice(data.slip))
};

const displayTempereture = data => {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = `
        <h1>${data.name}</h1>
        <h3><span>38.06</span>&deg;C</h3>
        <h1 class="lead">Clouds</h1>
    `
}

loadTemperature('dhaka');
