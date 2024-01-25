import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import ArrowRight from "./assets/arrow-right.png";
import ArrowLeft from "./assets/arrow-left.png";
import ServicesCard from "./ServicesCard";

const CardCarousel = ({ type }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1399, min: 993 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 992, min: 0 },
      items: 1,
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
      <Container className={type + " carousel-outer-container"}>
        <Carousel
          infinite={true}
          swipeable={true}
          containerClass="carousel-container"
          responsive={responsive}
          keyBoardControl={true}
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside={true}
        >
          <ServicesCard></ServicesCard>
          <ServicesCard></ServicesCard>
          <ServicesCard></ServicesCard>
          <ServicesCard></ServicesCard>
          <ServicesCard></ServicesCard>
        </Carousel>
      </Container>
    </>
  );
};

export default CardCarousel;
