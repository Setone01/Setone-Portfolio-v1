import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Header from "./component/header/Header";
import Project from "./component/projects/Project";
import Home from "./Layout/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
