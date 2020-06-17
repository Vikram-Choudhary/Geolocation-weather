import "./SeasonDisplay.css";
import "./Snowflake.css";
import "./Summer.css";
import React from "react";
import { WeatherCard, ForecastCardGrid } from "./WeatherCard";
import { Summer, Winter } from "./WeatherBackground";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
    Component: "Summer",
  },
  winter: {
    text: "Burr it is cold!",
    iconName: "snowflakes",
    Component: "Winter",
  },
};

const SeasonDisplay = (props) => {
  const { list, city } = { ...props.forecastData };
  return (
    <div>
      <Summer name={"sun"} />
      <WeatherCard
        date={new Date(parseInt(list && list[0].dt) * 1000).toDateString()}
        cityName={city && city.name}
        temp={list && list[0].main.temp}
      />
      <ForecastCardGrid weatherDetails={list} />
    </div>
  );
};

export default SeasonDisplay;
