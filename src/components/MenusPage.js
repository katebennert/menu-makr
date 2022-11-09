import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MenuList from "./MenuList";
import MenuDetails from "./MenuDetails";
import { Container } from 'react-bootstrap';

function MenusPage() {

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/menus")
      .then(r => r.json())
      .then(menuData => setMenus(menuData))
  }, []);

  console.log(menus)

  const match = useRouteMatch();

  return (
    <div>
      <Route path={`${match.url}/:menuID`}>
        <MenuDetails menus={menus}/>
      </Route>
      <MenuList menus={menus}/>
    </div>
  );
}

export default MenusPage;