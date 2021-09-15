import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class Location extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.placeName.split(',')[0]}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Coordinations
            </Card.Subtitle>
            <Card.Text>
            Longitude: {this.props.lon} <br/>
            Latitude: {this.props.lat}
            </Card.Text>
          </Card.Body>
        </Card>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=1-18`} alt = {this.props.placeName}/>
      </div>
    );
  }
}

export default Location;
