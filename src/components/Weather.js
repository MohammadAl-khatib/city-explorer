import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Weather extends Component {
  render() {
    return (
      <div>
        {/* {
        this.props.weatherData.map((item) => {
          return<>
            <h1>{item.date}</h1>
            <h1>{item.description}</h1>
          </>
        })
        } */}
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.placeName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Weather Forecast
            </Card.Subtitle>
            {this.props.weatherData.map((item) => {
              return (
                <>
                  <Card.Text>
                    {item.date}{': '}{item.description}
                  </Card.Text>
                </>
              );
            })}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Weather;
