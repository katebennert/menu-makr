import React from "react";
import { Container, Card, Image } from 'react-bootstrap';

function FeaturedMenus({ menus }) {

    const featuredMenus = menus.filter(menu => menu.featured);

    const renderFeaturedCard = (
        featuredMenus.map(menu => (
            <div key={menu.menuID}>
                <Card style={{ width: '45rem' }}>
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