import Hero from "./components/hero";
import About from "./components/About";
import Projects from "./components/projects";
import Contact from "./components/Contact";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
