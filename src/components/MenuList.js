import React from "react";
import { Container, Card, ListGroup, Col, Row, Badge } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
//import { v4 as uuid } from 'uuid';
//import { Link } from "react-router-dom"; 

// How do I create a unique ID for each column????

function MenuList({ menus }) {

    const renderMenus = menus.map(menu => (
        <Col>
            <Card key={menu.menuID} style={{ width: '18rem' }}>
                <LinkContainer to={`/menus/${menu.menuID}`}><Card.Img variant="top" src={menu.menuImage} /></LinkContainer>
                <Card.Body>
                <LinkContainer to={`/menus/${menu.menuID}`}><Card.Title>{menu.menuName}</Card.Title></LinkContainer>
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
                </ListGroup>
            </Card>
        </Col>
      ));
    
      return (
        <Container>
            <br/>
            <br/>
            <br/>
            <Row xs={1} md="auto" className="g-4" >
                {renderMenus}
            </Row>
        </Container>
      )
}

export default MenuList;