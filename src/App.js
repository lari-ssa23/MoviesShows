import React, { Component } from "react";
import styled from "styled-components";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Home from "./components/Home";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
const Topicos = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  font-size: 2em;
  background-color: #FFFFFF;
`;
const Back = styled.div`
background-color: #8B0000;
`;
class App extends Component {
  render() {
    return (
      <Router>
        <Back>
          <nav>
            <Topicos>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/series">Series</Link>
              </li>
            </Topicos>
          </nav>

          <Switch>
            <Route path="/series">
              <Series />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Back>
      </Router>
    );
  }
}

export default App;
