import React from "react";
import { useParams } from "react-router-dom";
import { Container, Nav, Card, Button, CardGroup, ListGroup, Breadcrumb, Row, Col } from "react-bootstrap";
//import { v4 as uuid } from 'uuid';

function MenuDetails({ menus }) {
  
    const params = useParams();
    const index = params.id - 1;
  // is this index var a bandaid?
  // why when i refresh this page does the value of menus go back to the empty array? Do I need to find a way to maintain state?
  // how do i make a unique id for each breadcrumbitem
  // use state for a checked off grocery list

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
                        <ListGroup.Item>Recipes:
                            <Breadcrumb>
                                {menus[index].recipes.map(recipe => (
                                    <Breadcrumb.Item href={recipe.recipeLink} target="_blank">{recipe.recipeName}</Breadcrumb.Item>
                                ))
                                }
                            </Breadcrumb>
                        </ListGroup.Item>
                        <ListGroup.Item>Check out the {menus[index].menuName} playlist on Spotify!</ListGroup.Item>
                        <ListGroup.Item><strong>Shopping List: </strong>
                            <Container>
                                <Row>
                                    {menus[index].ingredientList.map(ingredient => (
                                    <Col>{ingredient}</Col>
                                    ))
                                    }
                                </Row>
                            </Container>
                        </ListGroup.Item>
                    </ListGroup>
                 </Card>
            </CardGroup>
      </Container>
    </div>
  );
}

export default MenuDetails;