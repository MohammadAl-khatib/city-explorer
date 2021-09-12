import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";



class MapForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit}> 
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Location Name</Form.Label>
            <Form.Control type="text" placeholder="i.e. Amman"  onChange={this.props.handlePlace}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore
          </Button>
        </Form>
      </div>
    );
  }
}

export default MapForm;
