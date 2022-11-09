import React from "react";
import { Container, Card, ListGroup, Col, Row, Badge } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom"; //(figure out link container for styling when you have cards)

function MenuList({ menus }) {

    console.log(menus)

    const renderMenus = menus.map(menu => (
        
          <Card key={menu.menuID} style={{ width: '18rem' }}>
            <Link to={`/menus/${menu.menuID}`}><Card.Img variant="top" src={menu.menuImage} /></Link>
            <Card.Body>
                <Card.Title>{menu.menuName}</Card.Title>
                <Card.Text>
                    This fancy bird, high-class stuffing, and sparkly cocktail is perfect for friendsgiving or your first time hosting thanksgiving!
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
            </ListGroup>
            </Card>
      ));
    
      return (
        <Container>
            <br/>
            <br/>
            <br/>
            {renderMenus}
                
        </Container>
      )
}

export default MenuList;