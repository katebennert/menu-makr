import React, { useState } from "react";
import { Container, Card, ListGroup, Col, Row, Badge } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import MenuCard from './MenuCard';
//import { v4 as uuid } from 'uuid';
//import { Link } from "react-router-dom"; 

// How do I create a unique ID for each column????

function MenuList({ menus, dropFilter }) {

    const allMenus = menus.map(menu => <MenuCard key={menu.id} menu={menu} />);
    const filteredMenus = allMenus.filter(menu => menu.props.menu.eventCategory === dropFilter);
    
      return (
        <Container>
            <br/>
            <br/>
            <br/>
            <Row xs={1} md="auto" className="g-4" >
            {(dropFilter === "") ? allMenus : filteredMenus}
            </Row>
        </Container>
      )
}

export default MenuList;