import React from "react";
import { Container, Carousel } from 'react-bootstrap';

// use state to setFeaturedMenus so you can use it in other places?

function HomePage({ menus }) {

    const featuredCarouselSlide = (
        menus.map(menu => (
            menu.featured ? <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={menu.menuImage}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{menu.menuName}</h3>
                    <p>{menu.menuDescription}</p>
                </Carousel.Caption>
            </Carousel.Item> : <></>
        ))
    )

  return (
    <div>
        <Container>
            <Carousel fade>
                {featuredCarouselSlide}
            </Carousel>
            
        </Container>
    </div>
  )
}

export default HomePage;