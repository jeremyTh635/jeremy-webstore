import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Register from "./components/Register";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='products' element={<Products />} />
        <Route path='cart' element={<Cart />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
