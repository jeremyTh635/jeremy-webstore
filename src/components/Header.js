import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  const userName = useSelector(state => state.user.user?.userName);
  console.log(userName);
  return (
    <div>
      <Navbar expand="lg" bg="myColor" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/products">PRODUCTS</Nav.Link>
            <Nav.Link as={Link} to="/cart">YOUR CART</Nav.Link>
            <Nav.Link as={Link} to="/register">REGISTER</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="displayUsername">
        <h3><span>Welcome:</span>&nbsp;&nbsp;&nbsp;{userName}</h3>
      </div>
    </div>
  );
}

export default Header;
