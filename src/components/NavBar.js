import React from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  return (
    <div>
      <Navbar bg="light" fixed="top" variant="light">
        <Container>
          <LinkContainer exact to="/">
            <Navbar.Brand>MENU MAKr</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/featured">
                <Nav.Link>See Our Featured Menus!</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/new">
                <Nav.Link>Create New Menu (Admin Only)</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Browse Menus By Occasion" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Holidays
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Birthday Celebrations
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Pool Parties
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <LinkContainer to="/menus">
                  <NavDropdown.Item>All Menus</NavDropdown.Item>
                </LinkContainer>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;