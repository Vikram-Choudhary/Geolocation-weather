import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

/*Css Import*/
import "./SeasonDisplay.css";
import "./Snowflake.css";

/*Component Import*/
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "", forecastData: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.fetchWeatherData(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  fetchWeatherData = async (lat, lon) => {
    const apiKey =
      process.env
        .REACT_APP_WEATHER_API_KEY; /*Paste API key here, Sign up and get an API key https://openweathermap.org/appid */
    const URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    await axios
      .get(URL)
      .then((response) => {
        this.setState({ forecastData: response.data });
      })
      .catch((err) => {
        let message = err.response && err.response.data.message;
        this.setState({ errorMessage: message });
      });
  };

  renderContent() {
    if (this.state.errorMessage && !this.state.forecastData) {
      return <div className="error">Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.forecastData) {
      return <SeasonDisplay forecastData={this.state.forecastData} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
