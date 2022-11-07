import React from "react";
import { Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom"; //(figure out link container for styling when you have cards)

function MenuList({ menus }) {

    const renderMenus = Object.keys(menus).map((menuID) => (
        <li key={menuID}>
          <Link to={`/menus/${menuID}`}>{menus[menuID].name}</Link>
        </li>
      ));
    
      return (
        <Container>
            <br/>
            <br/>
            <br/>
            <ul>{renderMenus}</ul>
        </Container>
      )
    
}

export default MenuList;