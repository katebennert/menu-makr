import React from "react";
import { Container } from 'react-bootstrap';

function FeaturedMenus({ menus }) {

    const renderFeaturedCard = (
        menus.map(menu => (
            menu.featured ? <p>{menu.menuName}</p> : <></>
        ))
    )

  return (
    <div>
        <Container>
            <br/>
            <br/>
            <br/>
            <h1>'Tis the Season</h1>
            <Container>
                <br/>
                {renderFeaturedCard}
            </Container>
        </Container>
    </div>
  )
}

export default FeaturedMenus;