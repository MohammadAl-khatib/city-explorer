import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { col } from "react-bootstrap";


export class Location extends Component {
  render() {
    return (
      <div className ="row">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.placeName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Coordinations
            </Card.Subtitle>
            <Card.Text>
            Longitude: {this.props.lon} <br/>
            Latitude: {this.props.lat}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Location;
