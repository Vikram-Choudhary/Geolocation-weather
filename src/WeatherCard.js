import React from "react";
import "./SeasonDisplay";
export const WeatherCard = (props) => {
  return (
    <div class="widget">
      <div class="left-panel panel">
        <div class="date">{props.date}</div>
        <div class="city">{props.cityName}</div>
        <div class="temp">{props.temp}&deg;C</div>
      </div>
      <div class="right-panel panel">
        <img
          src="https://s5.postimg.cc/yzcm7htyb/image.png"
          alt=""
          width="60"
        />
      </div>
    </div>
  );
};

export const ForecastCardGrid = (props) => {
  const array = props.weatherDetails;
  console.log(array,"--->",array[0]);
  const list = array.map((data) => (
    <ForecastCard temp={data.main.temp} weather={data.weather[0].main} icon={data.weather[0].icon}/>
  ));
  return <ul className="grid-container">{list}</ul>;
};

const ForecastCard = (props) => {
  return (
    <li className="grid-item">
      <div class="card night">
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`}
          alt={`${props.weather}`}
          //width="60"
        />
      </div>
      <div class="status">
        <p>{props.temp}&deg;C</p>
        <p>{props.weather}</p>
      </div>
    </li>
  );
};
