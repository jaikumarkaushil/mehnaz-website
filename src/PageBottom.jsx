import Container from "react-bootstrap/Container";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

const PageBottom = () => {
  return (
    <>
      <Container
        fluid
        className="carousel-section-topper contactus-topper"
      ></Container>
      <Container fluid className="contactus-section">
        <ContactUs />
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default PageBottom;
