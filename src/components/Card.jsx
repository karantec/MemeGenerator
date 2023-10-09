import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const MemeCard = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card className="imgCard" style={{ width: "18rem", margin: "20px" , border:'2px solid black' , padding:'5px' , backgroundColor:'#e9ecef'  }}>
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