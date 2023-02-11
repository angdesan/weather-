import {weather_data} from './data.js';


let loadDayForecastData = () => {
	let id = "city";
    let city = document.getElementById(id);
    console.log(city);
    city.innerHTML = weather_data[0].city;

    let idDate = "date";
    let date = document.getElementById(idDate);
    date.innerHTML = weather_data[0].date;

    let idMaxtemperature = 'maxtemperature';
    let maxtemperature = document.getElementById(idMaxtemperature);
    maxtemperature.innerHTML = weather_data[0].maxtemperature;

    let idMintemperature = 'mintemperature';
    let mintemperature = document.getElementById(idMintemperature);
    mintemperature.innerHTML = weather_data[0].mintemperature;

    let idCloudiness = 'cloudiness';
    let cloudiness = document.getElementById(idCloudiness);
    cloudiness.innerHTML = weather_data[0].cloudiness;

    let idWind = 'wind';
    let wind = document.getElementById(idWind);
    wind.innerHTML = weather_data[0].wind;

    let idRainfall = 'rainfall';
    let rainfall = document.getElementById(idRainfall);
    rainfall.innerHTML = weather_data[0].rainfall;




    let idLate_icon = 'late_icon';
    let late_icon = document.getElementById(idLate_icon);
    late_icon.innerHTML = weather_data[0].forecast_today[0].icon

    let idLate_temperature = 'late_temperature';
    let late_temperature= document.getElementById(idLate_temperature);
    late_temperature.innerHTML = weather_data[0].forecast_today[0].temperature;

    let idLate_forecast = 'late_forecast';
    let late_forecast = document.getElementById(idLate_forecast);
    late_forecast.innerHTML =  weather_data[0].forecast_today[0].forecast;

    let idLate_text = 'late_text';
    let late_text = document.getElementById(idLate_text);
    late_text.innerHTML = weather_data[0].forecast_today[0].text;



    let idNight_icon = 'night_icon';
    let night_icon = document.getElementById(idNight_icon);
    night_icon.innerHTML = weather_data[0].forecast_today[1].icon

    let idNight_temperature = 'night_temperature';
    let night_temperature= document.getElementById(idNight_temperature);
    night_temperature.innerHTML = weather_data[0].forecast_today[1].temperature;

    let idNight_forecast = 'night_forecast';
    let night_forecast = document.getElementById(idNight_forecast);
    night_forecast.innerHTML =  weather_data[0].forecast_today[1].forecast;

    let idNight_text = 'night_text';
    let night_text = document.getElementById(idNight_text);
    night_text.innerHTML = weather_data[0].forecast_today[1].text;

    




}

let loadWeekForecastData = () => {

    let classUse = "list-group";
    console.log("hola",weather_data.forecast_week);
    let {day,text,date,temperature,icon} = (weather_data[0].forecast_week)[0]
    let li_list_group = document.getElementsByClassName(classUse);
    console.log(li_list_group);

    let message_template = `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
      <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
      <span class="text-xs">${date}</span>
    </div>
    <div class="d-flex align-items-center ">
      <span class="font-weight-bold text-dark mx-2">${temperature.max}</span> |  <span class="text-dark mx-2">${temperature.min}</span>
      <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
    </div>
  </li>`
    li_list_group[0].innerHTML = message_template;
    

    
    
	
	
}

document.addEventListener("DOMContentLoaded", (event) => {
    //Código a ejecutar
    loadDayForecastData();
});
  
let element = document.getElementById("loadinfo");

element.addEventListener('click', (event) => {
    //Código a ejecutar
    loadWeekForecastData();
});
