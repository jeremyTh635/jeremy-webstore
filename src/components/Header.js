// Import React
import React from "react";
// Import link for navbar
import { Link } from "react-router-dom";
// Import useSelector to display userName
import { useSelector } from "react-redux";
// Import Bootstrap modules for navBar
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  // Use useSelector to display username after login
  const userName = useSelector((state) => state.user.user?.userName);

  return (
    <div>
      {/* Code to create navbar */}
      <Navbar expand="lg" bg="myColor" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              PRODUCTS
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              YOUR CART
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              REGISTER
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="displayUsername">
        {/* Code to display username */}
        <h3>
          <span>Welcome:</span>&nbsp;&nbsp;&nbsp;{userName}
        </h3>
      </div>
    </div>
  );
}

export default Header;
