import React, { useState } from "react";
import { Container, Card, ListGroup, Col, Row, Badge, Button, Form } from "react-bootstrap";
import { isCompositeComponent } from "react-dom/test-utils";
import { LinkContainer } from 'react-router-bootstrap';

function MenuCard({ menu }) {

    const [featured, setFeatured] = useState(menu.featured);
    const [likes, setLikes] = useState(menu.likes);

    function handleLikeClick(e) {

        fetch(`http://localhost:3004/menus/${menu.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "likes": menu.likes++,
            })
        })
        .then(r => r.json())
        .then(menuData => setLikes(menuData.likes));
    }
  
  return (
    <Col>
    <Card key={menu.menuID} style={{ width: '18rem' }}>
    <LinkContainer to={`/menus/${menu.id}`}><Card.Img variant="top" src={menu.menuImage} /></LinkContainer>
        <Card.Body>
        <Card.Title>{menu.menuName}</Card.Title>
            <Card.Text>
                {menu.menuDescription}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Prep Time: {menu.prepTime}</ListGroup.Item>
            <ListGroup.Item>Cost: {menu.cost}</ListGroup.Item>
            <ListGroup.Item>
                {menu.filterTags.map(filterTag => (
                    <Badge bg="light" text="dark" key={menu.filterTags.indexOf(filterTag)}>{filterTag}</Badge>
                ))}
            </ListGroup.Item>
            <ListGroup.Item>  
                <Button variant="outline-success" onClick={handleLikeClick}>❤️ {likes} Likes</Button>
                {" "}
            </ListGroup.Item>
        </ListGroup>
    </Card>
</Col>
  );
}

export default MenuCard;