import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImgMehnaz from "./assets/mehnaz-profile.png";

const About = () => {
  return (
    <>
      <Container className="about">
        <Row>
          <Col md={6}>
            <h3>Get to know me.</h3>
            <h5>Sed sed leo ut tortor vestibulum ultrices.</h5>
            <p>
              Mauris a pharetra justo. Suspendisse fringilla odio ut ex
              vehicula, id aliquam metus pellentesque. Sed sed leo ut tortor
              vestibulum ultrices. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Suspendisse ante nisi, tempor eu viverra vel,
              efficitur vel risus. Cras mollis lorem sed rutrum feugiat.
              Praesent sem urna, elementum vel massa nec, ornare varius turpis.
              Morbi porta lacus porta, mollis quam id, pretium lorem.{" "}
            </p>

            <h2 className="handwriting text-end">xx Mehnaz</h2>
          </Col>
          <Col md={6} className="about-photo">
            <img src={ImgMehnaz}></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
