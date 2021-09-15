import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Weather extends Component {
  render() {
    return (
      <div id ='weather-content'>
            {this.props.weatherData.map((item) => {
              return (
                <>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Text>
                      {item.date}
                      {": "}
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                  </Card>
                </>
              );
            })}
      </div>
    );
  }
}

export default Weather;
