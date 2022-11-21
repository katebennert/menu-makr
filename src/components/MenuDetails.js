import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, CardGroup, ListGroup, Breadcrumb, Form, Badge } from "react-bootstrap";

function MenuDetails({ menus }) {
  
    const params = useParams();
    const index = params.id - 1;
  // why when i refresh this page does the value of menus go back to the empty array? Do I need to find a way to maintain state?

  return (
    <div>
        <Container>
            <br/>
            <br/>
            <br/>
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Img src={menus[index].menuImage} alt="Card image" />
                    <Card.ImgOverlay className="text-white">
                        <Card.Title><h1>{menus[index].menuName}</h1></Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.ImgOverlay>
                    <Card.Body>
                        {menus[index].menuDescription}
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Recipes:
                            <Breadcrumb>
                                {menus[index].recipes.map(recipe => (
                                    <Breadcrumb.Item key={recipe.recipeID} href={recipe.recipeLink} target="_blank">{recipe.recipeName}</Breadcrumb.Item>
                                ))
                                }
                            </Breadcrumb>
                        </ListGroup.Item>
                        <ListGroup.Item>Prep Time: {menus[index].prepTime} | Cost: {menus[index].cost} |  {menus[index].filterTags.map(filterTag => (
                    <Badge bg="light" text="dark" key={menus[index].filterTags.indexOf(filterTag)}>{filterTag}</Badge>
                ))}</ListGroup.Item>
                        <ListGroup.Item><strong>Shopping List: </strong>
                            <Container>
                                {menus[index].ingredientList.map(ingredient => (
                                    <Form.Check key={menus[index].ingredientList.indexOf(ingredient)} label={ingredient} />
                                    
                            ))}
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