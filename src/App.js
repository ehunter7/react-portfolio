import Hero from "./components/hero";
import About from "./components/About";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import ProjectGallery from "./components/ProjectGallery";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <ProjectGallery />
      <Contact />
    </div>
  );
}

export default App;
