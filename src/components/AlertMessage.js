import React, { Component } from "react";
import { Alert } from "react-bootstrap";

class AlertMessage extends Component {
  render() {
    return (
      <div>
        <Alert key='danger' variant='danger'>
          {this.props.error}
        </Alert>
      </div>
    );
  }
}

export default AlertMessage;
