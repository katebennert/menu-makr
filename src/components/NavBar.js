import React from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar({ handleNavClick }) {

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
              {/* <LinkContainer to="/featured">
                <Nav.Link>Browse Our Featured Menus!</Nav.Link>
              </LinkContainer> */}
              <NavDropdown title="Browse Menus By Occasion" id="basic-nav-dropdown">
                <LinkContainer to="/menus">
                  <NavDropdown.Item onClick={e => handleNavClick(e.target.innerText)}>Holidays</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/menus">
                  <NavDropdown.Item onClick={e => handleNavClick(e.target.innerText)}>Birthday Celebrations</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/menus">
                  <NavDropdown.Item onClick={e => handleNavClick(e.target.innerText)}>Pool Parties</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/menus">
                  <NavDropdown.Item onClick={e => handleNavClick("")}>All Menus</NavDropdown.Item>
                </LinkContainer>
            </NavDropdown>
              <LinkContainer to="/menus/new">
                <Nav.Link>Create New Menu (Admin Only)</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;