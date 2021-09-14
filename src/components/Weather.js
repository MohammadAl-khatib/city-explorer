import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Weather extends Component {
  render() {
    return (
      <div>
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
                    {item.date}
                    {": "}
                    {item.description}
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
