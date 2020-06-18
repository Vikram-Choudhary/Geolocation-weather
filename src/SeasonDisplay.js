import "./SeasonDisplay.css";
import "./Snowflake.css";
import "./Summer.css";
import React from "react";
import { WeatherCard, ForecastCardGrid } from "./WeatherCard";
import { Summer } from "./WeatherBackground";

const formatDate = () => {
  let d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};
const SeasonDisplay = (props) => {
  const { list, city } = { ...props.forecastData };
  const forecast = list.filter((data) => {
    if (!data.dt_txt.includes(formatDate()) && data.dt_txt.includes("12:00:00"))
      return data;
  });
  const todaysFilteredData = list.filter((data) => {
    if (data.dt_txt.includes(formatDate())) return data;
  });
  return (
    <div>
      <Summer name={"sun"} />
      <WeatherCard cityName={city.name} todaysData={todaysFilteredData} />
      <ForecastCardGrid weatherDetails={forecast} />
    </div>
  );
};

export default SeasonDisplay;
