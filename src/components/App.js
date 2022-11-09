import React from "react";
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
          <MenusPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;