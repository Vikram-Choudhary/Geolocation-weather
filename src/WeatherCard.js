import React from "react";
import "./SeasonDisplay";
export const WeatherCard = (props) => {
  const current = props.todaysData && props.todaysData[0];
  return (
    <div className="widget">
      <div className="panel">
        <div className="date">{`Today, ${new Date(
          parseInt(current.dt) * 1000
        ).toDateString()}`}</div>
        <div className="city">{props.cityName}</div>
        <div className="temp">{current.main.temp}&deg;C</div>
        <div className="other">
          Min:&nbsp;&nbsp;{current.main.temp_min}
          &deg;C&nbsp;&nbsp;&nbsp;&nbsp;Humidity:&nbsp;&nbsp;
          {current.main.humidity}%
        </div>
        <div className="other">
          Max:&nbsp;&nbsp;{current.main.temp_max}
          &deg;C&nbsp;&nbsp;&nbsp;&nbsp;Wind:&nbsp;&nbsp;
          {current.wind.speed} km/h
        </div>
      </div>
      <div className="right-panel panel">
        <div className="icon-description">{current.weather[0].description}</div>
        <img
          src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
          alt={`${current.weather[0].description}`}
          width="140px"
        />
      </div>
    </div>
  );
};

export const ForecastCardGrid = (props) => {
  const array = props.weatherDetails;
  const list = array.map((data) => (
    <ForecastCard
      key={data.dt}
      date={data.dt}
      temp={data.main}
      wind={data.wind.speed}
      weather={data.weather[0].description}
      icon={data.weather[0].icon}
    />
  ));
  return <ul className="grid-container">{list}</ul>;
};

const ForecastCard = (props) => {
  return (
    <li className="grid-item">
      <div className="card night">
        <div className="date">
          {new Date(parseInt(props.date) * 1000).toDateString()}
        </div>
        <div className="icon-description">{props.weather}</div>
        <img
          src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt={`${props.weather}`}
          width="140px"
        />
        <div className="temp">{props.temp.temp}&deg;C</div>
        <div className="other">
          Feel like:&nbsp;{props.temp.feels_like}&deg;C
        </div>
        <div className="other">
          Min:&nbsp;{props.temp.temp_min}
          &deg;C&nbsp;&nbsp;Humidity:&nbsp;
          {props.temp.humidity}%
        </div>
        <div className="other">
          Max:&nbsp;{props.temp.temp_max}
          &deg;C&nbsp;&nbsp;Wind:&nbsp;
          {props.wind} km/h
        </div>
      </div>
    </li>
  );
};
