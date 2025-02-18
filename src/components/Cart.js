import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartState";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Cart() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
      console.log(item);
      dispatch(removeFromCart(item))
    }

  return (
    <div>
     <Container>
      <Row>
        <Col></Col>
        <Col>
          {state.cart.map((item) => (
            <Card
              key={item.id}
              style={{
                width: "18rem",
                marginLeft: "7px",
                marginRight: "8px",
                marginTop: "15px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "12px",
              }}
              className="productCard"
            >
              <Card.Img variant="top" src={item.image} className="img-fluid" />
              <Card.Text>{item.title}</Card.Text>
              <Card.Text>Quantity:&nbsp;&nbsp;&nbsp;{item.quantity}</Card.Text>
              <Card.Subtitle>£{item.price}</Card.Subtitle>
              <Button variant="dark" onClick={() => handleRemoveFromCart(item)}>Remove from Cart</Button>
            </Card>
          ))}
        </Col>
        <Col>
          <h3>Total Price:&nbsp;&nbsp;&nbsp;£{state.totalPrice}</h3>
        </Col>
        <Col></Col>
      </Row>
     </Container>
    </div>
  );
}

export default Cart;
