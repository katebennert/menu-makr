import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function MenuDetails({ menus }) {
  
  const params = useParams();

  return (
    <div>
        <Container>
            <br/>
            <br/>
            <br/>
            <h3>{menus[params.menuId].name}</h3>
      </Container>
    </div>
  );
}

export default MenuDetails;