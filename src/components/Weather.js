import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div>
        {
        this.props.weatherData.map((item) => {
          return<>
            <h1>{item.date}</h1>
            <h1>{item.description}</h1>
          </>
        })
        }
      </div>
    );
  }
}

export default Weather;
