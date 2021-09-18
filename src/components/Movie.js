import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Movie extends Component {
  render() {
    return this.props.movieData.map((item) => {
      return (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w500/${item.image_URL}`} />
            <Card.Body >
              <Card.Title>{item.title}</Card.Title>
              <Card.Text >{item.overview}</Card.Text>
              <p>Average Votes: {item.average_votes}</p>
              <p>Total Votes: {item.total_votes}</p>
              <p>Popularity: {item.popularity}</p>
              <p>Release Date: {item.released_on}</p>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }
}

export default Movie;
