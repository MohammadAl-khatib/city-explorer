import React, { Component } from "react";
import Location from "./components/Location";
import MapForm from "./components/Form";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: "",
      lat: "",
      lon: "",
      showData: false,
    };
  }

  handlePlace = (event) => {
    let placeName = event.target.value;
    this.setState({
      placeName: placeName,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.placeName}`,
    };

    axios(config).then((res) => {
      let response = res.data[0];
      this.setState({
        placeName: response.display_name,
        lon: response.lon,
        lat: response.lat,
        showData: true,
      });
    });
  };

  render() {
    return (
      <div>
        <Header />
        <MapForm handleSubmit={this.handleSubmit} handlePlace={this.handlePlace} />
        {this.state.showData && (
          <Location
            placeName={this.state.placeName}
            lat={this.state.lat}
            lon={this.state.lon}
          />
        )}
        <Footer/>
      </div>
    );
  }
}

export default App;
