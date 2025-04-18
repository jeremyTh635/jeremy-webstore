// Imports for React functionality
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import photos for carousel
import photos from "./photos";
// Import Bootstrap modules for UI
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
// Import Login for prop sharing
import Login from "./Login";

function Home() {
  // Use Navigate to send user directly to Products
  const navigate = useNavigate();

  // Initial state for Login modal
  const [show, setShow] = useState(false);

  // Functions to control visibility of Login modal
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    navigate("/products");
  };

  return (
    <div>
      <Container>
        <Row>
          {/* Main title and header for app */}
          <div className="mainHead">
            <h1>Brandon & Lewis</h1>
            <h3>Dealers In Fine Art Photography Since 2008</h3>
          </div>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Carousel
              // Attributes for carousel
              controls={false}
              indicators={false}
              style={{
                width: "28rem",
                height: "23rem",
                backgroundColor: "black",
                marginTop: "20px",
                paddingTop: "2rem",
              }}
            >
              {/* Carousel items */}
              <Carousel.Item>
                <img src={photos[0].image} alt={photos[0].title} height={300} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={photos[1].image} alt={photos[1].title} height={300} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={photos[2].image} alt={photos[2].title} height={300} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={photos[3].image} alt={photos[3].title} height={300} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={photos[4].image} alt={photos[4].title} height={300} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={photos[5].image} alt={photos[5].title} height={300} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={photos[6].image} alt={photos[6].title} height={300} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={photos[7].image} alt={photos[7].title} height={300} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={photos[8].image} alt={photos[8].title} height={300} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={photos[9].image} alt={photos[9].title} height={300} />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={photos[10].image}
                  alt={photos[10].title}
                  height={300}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={photos[11].image}
                  alt={photos[11].title}
                  height={300}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={photos[12].image}
                  alt={photos[12].title}
                  height={300}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={photos[13].image}
                  alt={photos[13].title}
                  height={300}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={photos[14].image}
                  alt={photos[14].title}
                  height={300}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            {/* information about company & webstore */}
            <div className="about">
              <p>
                Brandon & Lewis are proud to present to a selection of
                high-quality prints of photos by some of the brightest emerging
                stars in the photographic world today. Our prints are all on
                top-quality photographic paper, measure 20x16" and come matted
                and framed in stylish aluminium. The mat also bears the personal
                signature of the artist. To find out more about our photographs
                —including their prices — and order prints, please go to the Register page from the top menu, then log in below
                and you will be sent directly to our Products page.
              </p>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            {/* Style attributes for login button */}
            <div className="loginButton">
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
              {/* Button to bring up login modal */}
              <Button variant="flat" size="xl" onClick={handleShow}>
                Login
              </Button>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      {/* Pass props to Login.js */}
      <Login show={show} handleClose={handleClose} navigate={navigate} />
    </div>
  );
}

export default Home;
