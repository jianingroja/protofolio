import { Route, Link, Switch } from "react-router-dom";
//Style
import "./style/app.scss";
//Components
import Nav from "./components/Nav";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
