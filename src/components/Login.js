import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/userState";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = ({ show, handleClose, navigate }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },

    validationSchema: Yup.object({

      userName: Yup.string()
        .min(8, "Must not be less than 8 characters")
        .max(20, "Must not be more than 20 characters")
        .required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .matches(/[0-9]/, "Password must contain a number")
        .matches(/[a-z]/, "Password must contain a lowercase letter")
        .matches(/[A-Z]/, "Password must contain an uppercase letter")
        .matches(/[^\w]/, "Password must contain a special character")
        .required("Required"),
    }),
    onSubmit: (values, actions) => {
      dispatch(loginUser(values, actions));
      console.log(state);
      handleClose();
    },
  });

  return (
    <div>
      <Modal className="login" show={show} onHide={handleClose}>
        <Modal.Header style={{ justifyContent: "center" }}>
          <Modal.Title>Login Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="userName">Username</Form.Label>
              <Form.Control
                id="userName"
                name="userName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
              />

              {formik.touched.firstName && formik.errors.userName ? (
                <div>{formik.errors.userName}</div>
              ) : null}

              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />

              {formik.touched.firstName && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
              <Button
                variant="secondary"
                type="submit"
                style={{ marginTop: "1rem" }}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
