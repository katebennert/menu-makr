import React, { useState } from "react";
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
  const [menus, setMenus] = useState({
    1: { id: 1, name: "Turkey Day" },
    2: { id: 2, name: "Roast Beast" },
    3: { id: 3, name: "Classy Party" },
  });

  return ( 
    <div>
      <NavBar />
      <Switch>
        <Route path="/featured">
          <FeaturedMenus />
        </Route>
        <Route path="/new">
          <NewMenuForm />
        </Route>
        <Route path="/menus">
          <MenusPage menus={menus} />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;