// import css
import "./App.css";
// Import routes
import { Routes, Route } from "react-router-dom";
// Import components
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Register from "./components/Register";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* Ensure navbar and username appear on all pages */}
      <Header />
      {/* Routes to all components other than modals and photos */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
