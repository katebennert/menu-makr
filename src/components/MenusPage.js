import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MenuList from "./MenuList";
import MenuDetails from "./MenuDetails";
import { Container } from 'react-bootstrap';

function MenusPage({ menus, dropFilter, onDelete }) {

  const match = useRouteMatch();

  return (
    <div>
      <Route path={`${match.url}/:id`}>
        <MenuDetails menus={menus} onDelete={onDelete}/>
      </Route>
      <MenuList menus={menus} dropFilter={dropFilter}/>
    </div>
  );
}

export default MenusPage;