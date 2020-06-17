import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import axios from "axios";

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
    const key = "1e35c7294c92e3b7ab34c28cc8cd8b56";
    const URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    await axios.get(URL).then((response) => {
      this.setState({ forecastData: response.data });
    });
  };

  renderContent() {
    if (this.state.errorMessage && !this.state.forecastData) {
      return <div>Error: {this.state.errorMessage}</div>;
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
