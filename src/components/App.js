import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import FeaturedMenus from "./FeaturedMenus";
import HomePage from "./HomePage";
import MenuDetails from "./MenuDetails";
import MenusPage from "./MenusPage";
import NewMenuForm from "./NewMenuForm";

function App() {

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/menus")
      .then(r => r.json())
      .then(menuData => setMenus(menuData))
  }, []);

  return ( 
    <div>
      <NavBar />
      <Switch>
        <Route path="/featured">
          <FeaturedMenus menus={menus}/>
        </Route>
        <Route path="/new">
          <NewMenuForm menus={menus}/>
        </Route>
        <Route path="/menus">
          <MenusPage menus={menus}/>
        </Route>
        <Route exact path="/">
          <HomePage menus={menus}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;