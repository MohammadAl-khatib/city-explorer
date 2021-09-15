import React, { Component } from "react";
import Location from "./components/Location";
import MapForm from "./components/Form";
import axios from "axios";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AlertMessage from "./components/AlertMessage";
import Weather from "./components/Weather";
import Movie from "./components/Movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: "",
      lat: "",
      lon: "",
      map: "",
      showData: false,
      error: "",
      showError: false,
      weatherData: [],
      movieData: [],
      showMovie:false
    };
  }

  handlePlace = (event) => {
    let placeName = event.target.value;
    this.setState({
      placeName: placeName,
      map: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.placeName}`,
    };

    axios(config)
      .then((res) => {
        let response = res.data[0];
        this.setState({
          placeName: response.display_name,
          lon: response.lon,
          lat: response.lat,
          showData: true,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
          showError: true,
          showData: false,
        });
      });

    axios
      .get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}weather?lat=${this.state.lat}&lon=${this.state.lon}`
      )
      .then((res) => {
        this.setState({
          weatherData: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
          showError: true,
        });
      });

    axios
      .get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}movies?place=${this.state.placeName}`
      )
      .then((res) => {
        this.setState({
          movieData: res.data,
          showMovie:true
        });
        console.log(this.state.movieData)
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div class="main-content">
        <MapForm
          handleSubmit={this.handleSubmit}
          handlePlace={this.handlePlace}
        />
        {this.state.showData && (
          <Location
            placeName={this.state.placeName}
            lat={this.state.lat}
            lon={this.state.lon}
            map={this.state.map}
          />
        )}
        {this.state.showError && <AlertMessage error={this.state.error} />}
        <Weather weatherData={this.state.weatherData} />
        </div>
        <div class='movie'>
        {this.state.showMovie && <Movie movieData = {this.state.movieData}/>}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
