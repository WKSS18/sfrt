import React from 'react';
import Index from "./views/Index/Index"
import "./assets/styles/reset.css"
import Login from "./views/Index/profile/Profile"
import DetailProduct from "views/Index/detail/Miproduct"
import Search from "./components/search/Search"
import User from  "views/Index/profile/User.jsx"
import Logout from "views/Index/profile/Logout"
import Shop from "views/Index/shop/Shop"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
function App() {
  return (
      <Router>
        <Switch>
          <Route path="/index" component={Index}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path="/detail/miproduct/:id" component={DetailProduct}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/Shop" component={Shop}></Route>
          <Redirect exact from="/" to="/index"></Redirect>
          <Route path="*" render={() => {
            return <h1>page not found 404 </h1>
          }}></Route>
        </Switch>
      </Router>
  );
}

export default App;
