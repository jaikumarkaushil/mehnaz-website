import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import ArrowRight from "./assets/arrow-right.png";
import ArrowLeft from "./assets/arrow-left.png";
import ServicesCard from "./ServicesCard";
import LogoLaheeb from "./assets/company-logos/laheeb.jpg";
import LogoMicrosoft from "./assets/company-logos/microsoft.jpg";
import LogoNleats from "./assets/company-logos/nleats.jpg";
import LogoPmi from "./assets/company-logos/pmi.jpg";
import LogoPony from "./assets/company-logos/pony.jpg";
import LogoVrzone from "./assets/company-logos/vrzone.jpg";
import LogoCottage from "./assets/company-logos/cottage.svg";
import LogoCabin from "./assets/company-logos/cabin.png";
import LogoCasino from "./assets/company-logos/casino.png";
import LogoCbc from "./assets/company-logos/cbc.png";
import LogoFairmont from "./assets/company-logos/fairmont.png";
import LogoFwd from "./assets/company-logos/fwd.png";
import LogoGoc from "./assets/company-logos/goc.png";
import LogoHilton from "./assets/company-logos/hilton.png";
import LogoMemorial from "./assets/company-logos/memorial.png";
import LogoNfld from "./assets/company-logos/nfld.png";
import LogoOciso from "./assets/company-logos/ociso.png";
import LogoPaddle from "./assets/company-logos/paddle.png";
import LogoRatatouille from "./assets/company-logos/ratatouille.png";
import LogoRogers from "./assets/company-logos/rogers.png";
import LogoSaunders from "./assets/company-logos/saunders.png";
import LogoTdbank from "./assets/company-logos/tdbank.png";
import LogoFour from "./assets/company-logos/four.webp";
import LogoJuice from "./assets/company-logos/juice.webp";

const LogoCarousel = () => {
  const title = "A few of the companies I've collaborated with...";
  const sections = [
    { name: "Government of Canada", logo: LogoGoc },
    { name: "Government of NL", logo: LogoNfld },
    { name: "CBC", logo: LogoCbc },
    { name: "Hilton", logo: LogoHilton },
    { name: "Fairmont Chateau Laurier", logo: LogoFairmont },
    { name: "Microsoft", logo: LogoMicrosoft },
    { name: "Project Management Institute", logo: LogoPmi },
    { name: "Memorial University", logo: LogoMemorial },
    { name: "Cabinscape", logo: LogoCabin },
    { name: "Laheeb Restaurant Ottawa", logo: LogoLaheeb },
    { name: "Grands Feux Du Casino Lac-leamy", logo: LogoCasino },
    { name: "NL Eats", logo: LogoNleats },
    { name: "Saunders Farm", logo: LogoSaunders },
    { name: "PaddleFit", logo: LogoPaddle },
    { name: "Cottage Springs", logo: LogoCottage },
    { name: "Four O’Clock", logo: LogoFour },
    { name: "Ponyback", logo: LogoPony },
    { name: "TD Bank", logo: LogoTdbank },
    { name: "Rogers", logo: LogoRogers },
    { name: "FWD50", logo: LogoFwd },
    { name: "OCISO", logo: LogoOciso },
    { name: "Juicedudez", logo: LogoJuice },
    { name: "VRZone", logo: LogoVrzone },
    { name: "Ratatouille Restaurant Ottawa", logo: LogoRatatouille },
  ];

  const responsive = {
    xl: {
      breakpoint: { max: 3000, min: 1400 },
      items: 8,
      slidesToSlide: 1,
    },
    lg: {
      breakpoint: { max: 1399, min: 1200 },
      items: 6,
      slidesToSlide: 1,
    },
    md: {
      breakpoint: { max: 1199, min: 993 },
      items: 5,
      slidesToSlide: 1,
    },
    sm: {
      breakpoint: { max: 992, min: 768 },
      items: 4,
      slidesToSlide: 1,
    },
    xs: {
      breakpoint: { max: 767, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
  };

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="carousel-button-group">
        <button className="arrow left" onClick={() => previous()}>
          <img src={ArrowRight} />
        </button>
        <button className="arrow right" onClick={() => next()}>
          <img src={ArrowLeft} />
        </button>
      </div>
    );
  };

  return (
    <>
      <Container className="featured py-5">
        <h3>{title}</h3>
      </Container>
      <Container className="carousel-outer-container">
        <Carousel
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          swipeable={true}
          containerClass="carousel-container"
          responsive={responsive}
          keyBoardControl={true}
          arrows={false}
          customTransition="all 1000ms ease-in-out"
          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside={true}
        >
          {sections.map((section, index) => (
            <div key={index} className="logo-container">
              <img src={section.logo} alt={section.name}></img>
            </div>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default LogoCarousel;
