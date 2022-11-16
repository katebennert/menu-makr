import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from 'react-bootstrap';

function NewMenuForm() {

    const [menuName, setMenuName] = useState("");
    const [menuImage, setMenuImage] = useState("");
    const [menuDescription, setMenuDescription] = useState("");
    const [recipe1, setRecipe1] = useState({recipeID:1});
    const [recipe2, setRecipe2] = useState({recipeID:2});
    const [recipe3, setRecipe3] = useState({recipeID:3});
    const [ingredientList, setIngredientList] = useState([]);
    const [prepTime, setPrepTime] = useState("");
    const [cost, setCost] = useState("");
    const [partySize, setPartySize] = useState("");
    const [eventCategory, setEventCategory] = useState("");
    const [filterTags, setFilterTags] = useState([]);
    const [featured, setFeatured] = useState(false);

    function handleNewMenuSubmit(e) {
        e.preventDefault();
        const newMenu = {
            menuName: menuName,
            menuImage: menuImage,
            menuDescription: menuDescription,
            recipes: [
                recipe1,
                recipe2,
                recipe3
            ],
            ingredientList: ingredientList,
            prepTime: prepTime,
            cost: cost,
            partySize: partySize,
            eventCategory: eventCategory,
            filterTags: filterTags,
            featured: featured
        }

        console.log(newMenu)
    }

    //     fetch("http://localhost:3004/menus", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(newMenu)
    //     })
    //         .then(r => r.json())
    //         .then(newMenuData => console.log(newMenuData))
    // }

  return (
    <div>
        <Container>
            <br/>
            <br/>
            <br/>
            <h1>Create a New Menu:</h1>
            <br/>
            <Form onSubmit={handleNewMenuSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="menuName">
                    <Form.Label column sm={2}>
                        Menu Name:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="menuName" placeholder="New Menu" onChange={e => setMenuName(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="menuImage">
                    <Form.Label column sm={2}>
                        Menu Image:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="menuURL" placeholder="Image URL" onChange={e => setMenuImage(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="menuDescription">
                    <Form.Label column sm={2}>Menu Description:</Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" rows={3} onChange={e => setMenuDescription(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Featured" onChange={() => setFeatured(!featured)}/>
                    </Col>
                </Form.Group>

                <h4>Recipe 1:</h4>
                    <Form.Group as={Row} className="mb-3" controlId="recipeName1">
                        <Form.Label column sm={2}>
                            Recipe Name:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="recipeName" placeholder="Recipe Name" onChange={e => setRecipe1({...recipe1, recipeName: e.target.value})}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="recipeLink1">
                        <Form.Label column sm={2}>
                            Recipe Link:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="recipeURL" placeholder="Recipe URL" onChange={e => setRecipe1({...recipe1, recipeLink: e.target.value})}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="recipeImage1">
                        <Form.Label column sm={2}>
                            Recipe Image:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="recipeImageURL" placeholder="Image URL" onChange={e => setRecipe1({...recipe1, recipeImage: e.target.value})}/>
                        </Col>
                    </Form.Group>
                <br/>

                <h4>Recipe 2:</h4>
                    <Form.Group as={Row} className="mb-3" controlId="recipeName2">
                        <Form.Label column sm={2}>
                            Recipe Name:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="recipeName" placeholder="Recipe Name" onChange={e => setRecipe2({...recipe2, recipeName: e.target.value})}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="recipeLink2">
                        <Form.Label column sm={2}>
                            Recipe Link:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="recipeURL" placeholder="Recipe URL" onChange={e => setRecipe2({...recipe2, recipeLink: e.target.value})}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="recipeImage2">
                        <Form.Label column sm={2}>
                            Recipe Image:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="recipeImageURL" placeholder="Image URL" onChange={e => setRecipe2({...recipe2, recipeImage: e.target.value})}/>
                        </Col>
                    </Form.Group>
                <br/>

                <h4>Recipe 3:</h4>
                    <Form.Group as={Row} className="mb-3" controlId="recipeName3">
                        <Form.Label column sm={2}>
                            Recipe Name:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="recipeName" placeholder="Recipe Name" onChange={e => setRecipe3({...recipe3, recipeName: e.target.value})}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="recipeLink3">
                        <Form.Label column sm={2}>
                            Recipe Link:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="recipeURL" placeholder="Recipe URL" onChange={e => setRecipe3({...recipe3, recipeLink: e.target.value})}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="recipeImage3">
                        <Form.Label column sm={2}>
                            Recipe Image:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="recipeImageURL" placeholder="Image URL" onChange={e => setRecipe3({...recipe3, recipeImage: e.target.value})}/>
                        </Col>
                    </Form.Group>
                <br/>

                <h4>Menu Aspects:</h4>
                <Form.Group as={Row} className="mb-3" controlId="ingredientList">
                    <Form.Label column sm={2}>Details:</Form.Label>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Row>
                        <Col>
                            <fieldset onChange={e => setPrepTime(e.target.value)}>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label as="legend" column sm={2}>
                                        Prep Time:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            label="⏰"
                                            value="⏰"
                                            name="prepTimeRadio"
                                            id="prepTimeRadio1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="⏰⏰"
                                            value="⏰⏰"
                                            name="prepTimeRadio"
                                            id="prepTimeRadio2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="⏰⏰⏰"
                                            value="⏰⏰⏰"
                                            name="prepTimeRadio"
                                            id="prepTimeRadio3"
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>
                        </Col>
                        <Col>
                            <fieldset onChange={e => setPartySize(e.target.value)}>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label as="legend" column sm={2}>
                                        Party Size:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            label="Small"
                                            value="Small"
                                            name="partySizeRadio"
                                            id="partySizeRadio1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Medium"
                                            value="Medium"
                                            name="partySizeRadio"
                                            id="partySizeRadio2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Large"
                                            value="Large"
                                            name="partySizeRadio"
                                            id="partySizeRadio3"
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>
                        </Col>
                        <Col>
                            <fieldset onChange={e => setCost(e.target.value)}>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label as="legend" column sm={2}>
                                        Cost:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            label="$"
                                            value="$"
                                            name="costRadio"
                                            id="costRadio1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="$$"
                                            value="$$"
                                            name="costRadio"
                                            id="costRadio2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="$$$"
                                            value="$$$"
                                            name="costRadio"
                                            id="costRadio3"
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>
                        </Col>
                    </Row>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="ingredientList">
                    <Form.Label column sm={2}>Ingredient List:</Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" rows={3} onChange={e => setIngredientList(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Select aria-label="Default select example" onChange={e => setEventCategory(e.target.value)}>
                            <option>Event Category:</option>
                            <option value="Holidays">Holidays</option>
                            <option value="Birthday Celebrations">Birthday Celebrations</option>
                            <option value="Pool Parties">Pool Parties</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="filterTags">
                    <Form.Label column sm={2}>Filter Tags:</Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" rows={3} onChange={e => setFilterTags(e.target.value.split(","))}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" variant="success">Create Menu</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    </div>
  )
}

export default NewMenuForm;