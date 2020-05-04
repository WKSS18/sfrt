import React from 'react';
import Index from "./views/Index/Index"
import "./assets/styles/reset.css"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
function App() {
  return (
      <Router>
        <Switch>
          <Route path="/index" component={Index}></Route>
          <Redirect exact from="/" to="/index"></Redirect>
          <Route path="*" render={() => {
            return <h1>page not found 404 </h1>
          }}></Route>
        </Switch>
      </Router>
  );
}

export default App;
