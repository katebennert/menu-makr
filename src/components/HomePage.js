import React from "react";
import { Container, Carousel } from 'react-bootstrap';

function HomePage() {
  return (
    <div>
        <Container>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1345496527/photo/senior-woman-saying-grace-before-thanksgiving-lunch-at-home.jpg?b=1&s=170667a&w=0&k=20&c=jCNEhNeVTYNoioRsfyEorZq8DYPElIrzKgnckqqaM0I="
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1421572711/photo/autumn-composition-green-desk-with-pumpkins-and-eucalyptus-branch-flat-lay-top-view-copy.jpg?b=1&s=170667a&w=0&k=20&c=V09WM3aijFptd5IdvDQz6flUcbnhjSuoxhHe0lWgZ2w="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1435123306/photo/stuffed-turkey-for-thanksgiving-holidays.jpg?b=1&s=170667a&w=0&k=20&c=1kOePgO13VeYgd6tBjx96HmbKDLKot6W2B_Cu81r5AI="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
            </Carousel>
            
        </Container>
    </div>
  )
}

export default HomePage;