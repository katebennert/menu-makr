import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Route, Switch, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
//import FeaturedMenus from "./FeaturedMenus";
import HomePage from "./HomePage";
import MenuDetails from "./MenuDetails";
import MenusPage from "./MenusPage";
import NewMenuForm from "./NewMenuForm";

// Add a ScrollToTop compnent to fix scrolling issues AHHHHH https://v5.reactrouter.com/web/guides/scroll-restoration

function App() {

  const [menus, setMenus] = useState([]);
  const [dropFilter, setDropFilter] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3004/menus")
      .then(r => r.json())
      .then(menuData => setMenus(menuData))
  }, []);

  function onAddMenu(newMenuData) {
    setMenus([...menus, newMenuData]);
    history.push(`/menus/${newMenuData.id}`)
  }

  function onDelete(menuID) {
    setMenus(menus.filter(menu => menu.id !== menuID));
    history.push(`/menus`);
  }

  function handleNavClick(category) {
    setDropFilter(category);
  }

  return ( 
    <div>
      <NavBar handleNavClick={handleNavClick}/>
      <Switch>
        {/* <Route path="/featured">
          <FeaturedMenus menus={menus}/>
        </Route> */}
        <Route path="/menus/new">
          <NewMenuForm menus={menus} onAddMenu={onAddMenu}/>
        </Route>
        <Route path="/menus">
          <MenusPage menus={menus} dropFilter={dropFilter} onDelete={onDelete}/>
        </Route>
        <Route exact path="/">
          <HomePage menus={menus}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;