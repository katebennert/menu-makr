import React from "react";
import { Container, Card, Image, Accordion, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function FeaturedMenus({ menus }) {

    const featuredMenus = menus.filter(menu => menu.featured);

    const renderFeaturedCard = (
        featuredMenus.map(menu => (
            <div key={menu.id}>
                <Card style={{ width: '65rem' }}>
                    <Card.Img variant="top" src={menu.menuImage} />
                    <Card.ImgOverlay>
                        <Image src="https://cdn.pixabay.com/photo/2017/11/17/14/13/holly-2957539_1280.png" style={{ width: '10rem' }}></Image>
                        <Card.Title className="text-white">2022 Holiday Menu</Card.Title>
                    </Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>{menu.menuName}</Card.Title>
                        <Card.Text>
                            {menu.menuDescription}
                        </Card.Text>
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Recipes:</Accordion.Header>
                                <Accordion.Body>
                                    <Button variant="outline-success">Success</Button>{' '}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                </Card>
                <br/>
            </div>
        ))
    );

  return (
    <div>
        <Container>
            <br/>
            <br/>
            <br/>
            <h1>'Tis the Season</h1>
            <Container>
                <br/>
                {renderFeaturedCard}
            </Container>
        </Container>
    </div>
  )
}

export default FeaturedMenus;