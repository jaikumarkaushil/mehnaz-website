import React from "react";
import Navigation from "./Navigation";
import VideoHeader from "./VideoHeader";
import About from "./About";
import LogoGrid from "./LogoGrid";
import Container from "react-bootstrap/Container";
import CardCarousel from "./CardCarousel";
import MediaSection from "./MediaSection";

const App = () => {
  return (
    <>
      <Navigation></Navigation>
      <VideoHeader></VideoHeader>
      <Container fluid>
        <About></About>
        <LogoGrid type="featured"></LogoGrid>
      </Container>
      <Container
        fluid
        className="carousel-section-topper services-topper"
      ></Container>
      <Container fluid className="services-section">
        <CardCarousel type="services"></CardCarousel>
      </Container>

      <MediaSection></MediaSection>

      <Container
        fluid
        className="carousel-section-topper reviews-topper"
      ></Container>
      <Container fluid className="reviews-companies-section">
        <CardCarousel type="reviews"></CardCarousel>
        <LogoGrid type="companies"></LogoGrid>
      </Container>
    </>
  );
};

export default App;
