import React from "react";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImgCC1 from "./assets/img-cc1.png";
import ImgCC2 from "./assets/img-cc2.png";
import PageBottom from "./PageBottom";

const CareerConsulting = () => {
  return (
    <>
      <Navigation />
      <Container id="about" className="about">
        <Row>
          <Col lg={6}>
            <h3>Career Consulting</h3>
            <h5>
              Mehnaz Tabassum is a dynamic multipotentialite
              who&nbsp;has&nbsp;made significant&nbsp;strides in business and
              community&nbsp;development.
            </h5>
            <p>
              With a track record of success, Mehnaz has established herself as
              a prominent figure in both the public and private sectors. She is
              a sought-after keynote speaker, digital content creator, and
              decision-maker. Mehnaz co-founded and serves as the Executive
              Director of NL Eats Community Outreach Inc., and she holds the
              position of Vice President of Operations at the Project Management
              Institute - Ottawa Valley Outaouais Chapter. Additionally, Mehnaz
              works as a digital content creator, crafting storytelling content
              for businesses, and empowers individuals to unlock their
              multipotentiality through her consulting services. Mehnaz is a
              true testament that you no longer need to follow a linear career
              path and can pursue multiple careers at once through the use of
              technology. Your voice, your vision, your impact. Let's amplify
              it.
            </p>
          </Col>
          <Col lg={6} className="ps-photo">
            <img src={ImgCC1}></img>
            <img src={ImgCC2}></img>
          </Col>
        </Row>
      </Container>
      <PageBottom />
    </>
  );
};

export default CareerConsulting;
