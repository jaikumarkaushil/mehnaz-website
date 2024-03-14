import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoCBC from "./assets/logo-cbc.png";
import LogoCR from "./assets/logo-cr.png";
import LogoGGF from "./assets/logo-ggf.png";
import LogoHBS from "./assets/logo-hbs.png";
import LogoUBC from "./assets/logo-ubc.png";

const LogoGrid = ({ type }) => {
  const sections = {
    featured: {
      title: "Featured in...",
      logos: [
        { name: "CBC", logo: LogoCBC },
        { name: "Canvas Rebel", logo: LogoCR },
        { name: "Global Government Forum", logo: LogoGGF },
        { name: "Humble Beginnings Stories", logo: LogoHBS },
        { name: "University of British Columbia", logo: LogoUBC },
      ],
    },

    companies: {
      title: "Companies I've collaborated with",
      logos: [
        { name: "CBC", logo: LogoCBC },
        { name: "Canvas Rebel", logo: LogoCR },
        { name: "Global Government Forum", logo: LogoGGF },
        { name: "Humble Beginnings Stories", logo: LogoHBS },
        { name: "University of British Columbia", logo: LogoUBC },
      ],
    },
  };

  const selectedData = sections[type] || {};
  // if type = companies, use data object for companies,
  // if type = clients, use data from clients object etc.

  return (
    <Container className={type}>
      <h3>{selectedData.title}</h3>

      <Row>
        {selectedData.logos.map((item, index) => (
          <Col sm={6} lg={4} key={index}>
            <div className="grid-item">
              <img src={item.logo} alt={item.name} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LogoGrid;
