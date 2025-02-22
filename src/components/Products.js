// Import React
import React from "react";
// Import from react-redux for interaction with cart
import { useDispatch } from "react-redux";
// Reducer to add items to cart
import { addToCart } from "../store/cartState";
// useNavigate to send user directly to after adding item
import { useNavigate } from "react-router-dom";
// Import photos to generate page content
import photos from "./photos";
// Import necessary Bootstrap modules for UI
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Products() {
  // Variables for page functionality
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Event handler for 'Add to Cart' button
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };
  return (
    <div>
      {/* Page heading */}
      <div className="mainHead">
        <h1>Our Products</h1>
      </div>
      <Container
        style={{ marginLeft: "150px", marginRight: "auto", marginTop: "50px" }}
      >
        <Row>
          {/* Map method to generate cards */}
          {photos.map((item) => (
            <Card
              key={item.id}
              style={{
                width: "18rem",
                marginLeft: "7px",
                marginRight: "8px",
                marginTop: "15px",
                paddingBottom: "12px",
              }}
              className="productCard"
            >
              <Card.Img variant="top" src={item.image} className="img-fluid" />
              <Card.Text>Title:&nbsp;&nbsp;{item.title}</Card.Text>
              <Card.Text>
                Photographer:&nbsp;&nbsp;{item.photographer}
              </Card.Text>
              <Card.Text>Year:&nbsp;&nbsp;{item.year}</Card.Text>
              <Card.Subtitle>£{item.price}</Card.Subtitle>
              <Button variant="dark" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </Button>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
