import React from "react";
import { useSelector, useDispatch } from "react-redux";
import photos from "./photos";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Cart() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
     <Container>
      <Row>
        <Col></Col>
        <Col>
          {state.map()}
        </Col>
        <Col></Col>
      </Row>
     </Container>
    </div>
  );
}

export default Cart;
