// Import React
import React from "react";
import { useState } from "react";
// Imports to add functionality to page
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addShipping } from "../store/cartState";
// Imports from Bootstrap for UI
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Cart() {
  // Variables for useSelector and useDispatch
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // State variable to show/hide modal
  const [show, setShow] = useState(false);
  // State variable to disable radio buttons after selecting shipping
  const [disabled, setDisabled] = useState(false);

  // Functions to show/hide modal
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Function to remove items from cart
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  // Functions to add shipping with payload & disable radio buttons
  const addPremium = () => {
    dispatch(addShipping(12));
    setDisabled(true);
  };

  const addStandard = () => {
    dispatch(addShipping(6));
    setDisabled(true);
  };

  return (
    <div>
      <div className="mainHead">
        {/* Page heading */}
        <h1>Your Cart</h1>
        {/* Map method to generate cart item cards  */}
      </div>
      <Container style={{ marginTop: "50px" }}>
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
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="img-fluid"
                />
                <Card.Text>{item.title}</Card.Text>
                <Card.Text>
                  Quantity:&nbsp;&nbsp;&nbsp;{item.quantity}
                </Card.Text>
                <Card.Subtitle>£{item.price}</Card.Subtitle>

                <Button
                  variant="dark"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove from Cart
                </Button>
              </Card>
            ))}
          </Col>
          <Col>
            {/* Code to display total price of cart */}
            <h3>Total Price:&nbsp;&nbsp;&nbsp;£{state.totalPrice}</h3>
            <br />
            <br />

            {/* Button to display shipping information */}
            <button className="infoButton" onClick={handleShow}>
              <img
                src="images/info_icon_white.png"
                alt="Info Icon"
                width={40}
              />
            </button>
            {/* Explanation of button for user */}
            <p style={{ fontSize: "12px" }}>Read about shipping details here</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
        <Modal.Header>
          <Modal.Title>About Shipping Costs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            We offer our customers two choices for shipping. The first is
            Premium which guarantees next-day delivery at a cost of £12 per
            item.
          </p>
          <p>
            Alternatively, you may choose Standard delivery which costs £6 per
            item and usually takes about four days.
          </p>
          <p>You can select your delivery type below. </p>
        </Modal.Body>

        {/* Form to add cost of shipping */}
        <Form style={{ marginLeft: "60px" }}>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                disabled={disabled}
                type={type}
                name="group1"
                id="premium"
                label="Premium"
                onClick={addPremium}
              />
              <Form.Check
                inline
                disabled={disabled}
                type={type}
                name="group1"
                id="standard"
                label="Standard"
                onClick={addStandard}
              />
            </div>
          ))}
        </Form>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
