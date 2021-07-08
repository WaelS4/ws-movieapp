import React from "react";
import { Card, Button } from "react-bootstrap";
import { FiveStar } from "./FiveStar";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={movie.srcImg}
          style={{ height: "350px" }}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            <FiveStar rate={movie.Rate} />
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => window.open(movie.srcVideo, "_blank")}
          >
            Trailler
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
