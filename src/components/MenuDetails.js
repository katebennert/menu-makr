import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function MenuDetails({ menus }) {
  
  let params = useParams();
  let index = params.menuID - 1;
  // is this index var a bandaid?
  // why when i refresh this page does the value of menus go back to the empty array? Do I need to find a way to maintain state?
  

  return (
    <div>
        <Container>
            <br/>
            <br/>
            <br/>
            <h3>{menus[index].menuName}</h3>
      </Container>
    </div>
  );
}

export default MenuDetails;