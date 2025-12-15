import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import "./App.css";
import { BrowserRouter, Route ,Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>} ></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
