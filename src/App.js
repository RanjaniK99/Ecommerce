import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" elemtent={<Home />} />
        <Route path="/products" elemtent={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
