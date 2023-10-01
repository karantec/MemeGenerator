import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const MemeCard = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          margin: "18px",
          backgroundColor: props.lightMode ? "#fff" : "#333",
          color: props.lightMode ? "#000" : "#fff",
          borderColor: props.lightMode ? "#d1d1d1" : "#818181",
        }}
      >
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button
            onClick={(e) => navigate(`/edit?url=${props.img}`)}
            variant="primary"
          >
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default MemeCard;
