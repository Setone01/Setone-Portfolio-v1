import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/about/About";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
