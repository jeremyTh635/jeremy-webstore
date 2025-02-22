// Import React
import React from "react";
// UseNavigate to send user back to Home after registering
import { useNavigate } from "react-router-dom";
// Imports for form management and validation
import { useFormik } from "formik";
import * as Yup from "yup";
// Imports from Redux and store for form functionality
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../store/userState";
// Imports from Bootstrap for UI
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = () => {
  // Variables for page functionality
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const navigate = useNavigate();

  // Initial formik values
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    },

    // Yup validation scheme
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

    // Actions to take place on submit
    onSubmit: (values, actions) => {
      dispatch(registerUser(values, actions));
      console.log(state.users);
      navigate("/");
    },
  });

  return (
    <div>
      {/* Style for submit button */}
      <style type="text/css">
        {`
              .btn-flat {
                background-color: mediumvioletred;
                color: white;
              }
              .btn-xl {
                padding: 0.5rem 1rem;
                font-size: 1rem
              }
            `}
      </style>

      {/* Heading for form */}
      <h4 style={{ marginBottom: "3rem" }}>Please Enter Your Details Below</h4>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            {/* Form managed by Formik */}
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Label
                  htmlFor="firstName"
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  First Name
                </Form.Label>
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

                <Form.Label
                  htmlFor="lastName"
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  Last Name
                </Form.Label>
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

                <Form.Label
                  htmlFor="userName"
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  Username
                </Form.Label>
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

                <Form.Label
                  htmlFor="email"
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  Email
                </Form.Label>
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

                <Form.Label
                  htmlFor="password"
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  Password
                </Form.Label>
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
                  variant="flat"
                  size="xl"
                  type="submit"
                  style={{ textAlign: "center" }}
                  className="loginButton"
                >
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
