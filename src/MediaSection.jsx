import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import blogImg from "./assets/blog-example.png";
import podcastImg from "./assets/podcast-example.png";
import mediaHighlightImg from "./assets/media-section-highlight.png";

const MediaSection = () => {
  return (
    <>
      <Container className="media-section">
        <Row>
          <Col lg={5}>
            <Row>
              <Col className="media-intro-section">
                <h1>Unlock your potential</h1>
                <p>
                  Here are some amazing resources I’ve created for you, in order
                  to get a head start on launching your best self! Quisque
                  elementum suscipit arcu ac blandit. Vestibulum orci ex,
                  vestibulum eget rhoncus sit amet, cursus quis velit. Ut id
                  tincidunt magna.
                </p>
              </Col>
            </Row>
            <Row className="youtube-section">
              <Col>
                <h3>prefer videos?</h3>
                <p>Check out my Youtube channel!</p>
                <button>watch now</button>
              </Col>
            </Row>
          </Col>
          <Col lg={7}>
            <Row className="podcast-blog-section">
              <Col xl={6}>
                <div className="podcast-section">
                  <img src={podcastImg}></img>
                  <div className="podcast-blog-content">
                    <h3>latest podcast</h3>
                    <h5> What I learned from starting my own business</h5>
                    <p>
                      Quisque elementum suscipit arcu ac blandit. Vestibulum
                      orci ex, vestibulum eget vestibulum eget rhoncus sit amet,
                      cursus.
                    </p>
                    <button>listen now</button>
                  </div>
                </div>
              </Col>
              <Col xl={6}>
                <div className="blog-section">
                  <img src={blogImg}></img>
                  <div className="podcast-blog-content">
                    <h3>latest blog</h3>

                    <h5> 10 ways to boost your online presence</h5>
                    <p>
                      Quisque elementum suscipit arcu ac blandit. Vestibulum
                      orci ex, vestibulum eget vestibulum eget rhoncus sit amet,
                      cursus quis velit.
                    </p>
                    <button>read now</button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="highlight-section">
                <img src={mediaHighlightImg}></img>
              </Col>
            </Row>
            <Row>
              <Col className="newsletter-section">
                <h2>Stay tuned</h2>
                <h5>
                  My course on starting
                  <span className="green-highlight"> your dream business </span>
                  is coming.
                </h5>
                <p>
                  Sed ut dolor lacinia felis rhoncus faucibus. Pellentesque
                  malesuada nunc mollis neque maximus, vitae fermentum elit
                  sagittis. Vivamus interdum quam ac sagittis tincidunt. Quisque
                  elementum suscipit arcu ac blandit. Vestibulum orci ex,
                  vestibulum eget rhoncus sit amet, cursus quis velit.
                </p>
                <button>get notified</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MediaSection;
