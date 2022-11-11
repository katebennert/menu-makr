import React from "react";
import { useParams } from "react-router-dom";
import { Container, Nav, Card, Button, CardGroup, ListGroup } from "react-bootstrap";

function MenuDetails({ menus }) {
  
  let params = useParams();
  let index = params.menuID - 1;
  // is this index var a bandaid?
  // why when i refresh this page does the value of menus go back to the empty array? Do I need to find a way to maintain state?
  

  return (
    <div>
        <Container>
            <br/>
            <br/>
            <br/>
            <CardGroup>
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
      <Card.Img src={menus[index].menuImage} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{menus[index].menuName}</Card.Title>
        <Card.Text>
          {menus[index].menuDescription}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Recipes:</ListGroup.Item>
        <ListGroup.Item>Check out the {menus[index].menuName} playlist on Spotify!</ListGroup.Item>
        <ListGroup.Item>Shopping List:</ListGroup.Item>
      </ListGroup>
    </Card>
    </CardGroup>
      </Container>
    </div>
  );
}

export default MenuDetails;