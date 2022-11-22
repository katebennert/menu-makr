import React from "react";
import { Container, Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function HomePage({ menus }) {

    const featuredMenus = menus.filter(menu => menu.featured);

    const featuredCarouselSlide = (
        featuredMenus.map(menu => (
            
            <Carousel.Item key={menu.id}>
                <LinkContainer to={`/menus/${menu.id}`}>
                <img
                    className="d-block w-100"
                    src={menu.menuImage}
                    alt="First slide"
                />
                </LinkContainer>
                <Carousel.Caption>
                    <h3>{menu.menuName}</h3>
                    <p>{menu.menuDescription}</p>
                </Carousel.Caption>
            </Carousel.Item> 
            
        ))
    )

  return (
    <div>
        <Container>
            <br/>
            <br/>
            <br/>
            <Carousel fade style={{ width: '60rem' }} className="carousel">
                {featuredCarouselSlide}
            </Carousel>
        </Container>
    </div>
  )
}

export default HomePage;