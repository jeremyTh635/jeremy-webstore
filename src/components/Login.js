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
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      userName: Yup.string()
        .min(8, "Must not be less than 8 characters")
        .max(20, "Must not be more than 20 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .matches(/[0-9]/, "Password must contain a number")
        .matches(/[a-z]/, "Password must contain a lowercase letter")
        .matches(/[A-Z]/, "Password must contain an uppercase letter")
        .matches(/[^\w]/, "Password must contain a special character")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        userName: values.userName,
        email: values.email,
        password: values.password,
      };
      dispatch(loginUser(payload));
      console.log(state);
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
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />

              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}

              <Form.Label htmlFor="lastName">Last Name</Form.Label>
              <Form.Control
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />

              {formik.touched.firstName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}

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

              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              {formik.touched.firstName && formik.errors.email ? (
                <div>{formik.errors.email}</div>
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
                style={{ textAlign: "center" }}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
