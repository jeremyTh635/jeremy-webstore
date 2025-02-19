import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartState";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Cart() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleRemoveFromCart = (item) => {
    console.log(item);
    dispatch(removeFromCart(item));
  };

  let premium = 25;
  let standard = 12;

  const addPremium = () => {
    state.totalPrice += premium * state.cart.length;
  };

  const addStandard = () => {
    state.totalPrice += standard * state.cart.length;
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
            <h3>Total Price:&nbsp;&nbsp;&nbsp;£{state.totalPrice}</h3>
            <br />
            <br />
            <button className="infoButton" onClick={handleShow}>
              <img
                src="images/info_icon_white.png"
                alt="Info Icon"
                width={40}
              />
            </button>
            <p style={{ fontSize: "12px" }}>Read about shipping details here</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} style={{color: "black"}}>
        <Modal.Header>
          <Modal.Title>About Shipping Costs</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              We offer our customers two choices for shipping. The first is
              Premium which guarantees next-day delivery at a cost of £25 per
              item.</p>
              <p>Alternatively, you may choose Standard delivery which costs £12 per item and usually takes about four days.</p>
              <p>You can select your delivery type below. </p>
              <Form>
                {['radio'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                     type={type}
                     id="premium"
                     label="Premium"
                     onClick={addPremium}
                    />
                    <Form.Check
                      type={type}
                      id="standard"
                      label="Standard"
                      onClick={addStandard}
                    />
                  </div>
                ))}
              </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>Close</Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
