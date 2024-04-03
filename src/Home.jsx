import VideoHeader from "./VideoHeader";
import About from "./About";
import LogoGrid from "./LogoGrid";
import Container from "react-bootstrap/Container";
import CardCarousel from "./CardCarousel";
import MediaSection from "./MediaSection";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import LogoCarousel from "./LogoCarousel";
import PageBottom from "./PageBottom";

const Home = () => {
  return (
    <main>
      <VideoHeader />
      <Container fluid>
        <About></About>
        <LogoGrid type="featured"></LogoGrid>
      </Container>
      <Container
        fluid
        className="carousel-section-topper services-topper"
      ></Container>
      <Container fluid className="services-section">
        <CardCarousel type="services" />
      </Container>

      <MediaSection />

      <Container
        fluid
        className="carousel-section-topper reviews-topper"
      ></Container>
      <Container fluid className="reviews-companies-section">
        <CardCarousel type="reviews" />
        <LogoCarousel></LogoCarousel>
      </Container>

      <PageBottom />
    </main>
  );
};

export default Home;
