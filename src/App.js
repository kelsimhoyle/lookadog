import React, { useContext } from "react";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { UserProvider } from "./Context/UserProvider";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";

Amplify.configure(config);

function App() {

  return (
    <UserProvider>
      <Router>
      <Header />

        <Switch>
          <Route exact path="/">
            {Home}
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
