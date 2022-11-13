import React from "react";
import { Container, Carousel } from 'react-bootstrap';

// use state to setFeaturedMenus so you can use it in other places?

function HomePage({ menus }) {

    const featuredMenus = menus.filter(menu => menu.featured);

    const featuredCarouselSlide = (
        featuredMenus.map(menu => (
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={menu.menuImage}
                    alt="First slide"
                />
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
            <Carousel fade style={{ width: '70rem' }}>
                {featuredCarouselSlide}
            </Carousel>
            
        </Container>
    </div>
  )
}

export default HomePage;