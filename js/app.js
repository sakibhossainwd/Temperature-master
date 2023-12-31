// do not share your api key in public
const api_key = `fce3ef3a36b7e32d32e0564248b5d51a`;

const loadTemperature = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    console.log(url);
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayTemperature(data);
        // console.log(data)
    }
    catch{
        console.log('Error:-', error)
    }

    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayTemperature(data))
};

const displayTemperature = data => {
    console.log(data.main.temp)
    const temperatureContainer = document.getElementById('temperature');
    temperatureContainer.innerText = `${data.main.temp}`
    const temperatureCity = document.getElementById('city-name');
    temperatureCity.innerText = `${data.name}`
}

document.getElementById('Search-btn').addEventListener('click', function(){
    const inputIdField = document.getElementById('input-field');
    const cityName = inputIdField.value;
    console.log(cityName);
    loadTemperature(cityName);
    inputIdField.value = "";

    if(cityName  === ''){
        alert('Please Enter your city name');
    }
})

// serach field will when press Enter
const input = document.getElementById('input-field');
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("Search-btn").click();
    }
  });

loadTemperature('comilla');





// const inputIdField = document.getElementById('input-field');
    // const cityName = inputIdField.value;
    // console.log(cityName);
    // loadTemperature(cityName);
    // const dataContainer = document.getElementById('data-container');
    // const div = document.createElement('div');
    // dataContainer.innerHTML = `
    //     <h1>${data.name}</h1>
    //     <h3><span>38.06</span>&deg;C</h3>
    //     <h1 class="lead">Clouds</h1>
    // `
    // dataContainer.appendChild(div);
    // inputIdField.value = "";