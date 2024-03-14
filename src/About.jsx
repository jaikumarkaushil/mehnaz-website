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
