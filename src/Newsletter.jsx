import { Row, Col, Button } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import CustomTextField from "./components/CommonComponents/CustomTextField/CustomTextField";
import colors from "./theme.module.scss";

import FlowerImage from "./components/FlowerImage";

const Newsletter = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section id="newsletter" className="bg-green position-relative">
      <FlowerImage />
      <FormProvider {...methods}>
        <form
          className="d-flex flex-column mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row>
            <Col
              xs={12}
              md={8}
              className="newsletter-text d-flex flex-column align-items-center justify-content-center"
            >
              <h1 style={{ color: colors.lightGreen }}>Want Weekly Updates?</h1>
              <h5 className="text-white w-100 w-md-50 text-center">
                Sign up for my newsletter to receive the latest news on what
                I’ve been up to.{" "}
              </h5>
            </Col>
          </Row>
          <Row className="mt-4 z-2">
            <Col xs={12} md={4}>
              <CustomTextField
                id="name"
                name="name"
                type="text"
                label="YOUR NAME"
                customelementwidth="100%"
                customwidth="100%"
                required={"Name is required"}
                labelStyles="text-white"
              />
            </Col>
            <Col xs={12} md={4}>
              <CustomTextField
                id="email"
                name="email"
                type="text"
                label="YOUR EMAIL"
                customelementwidth="100%"
                customwidth="100%"
                required={"Email is required"}
                labelStyles="text-white"
              />
            </Col>
            <Col xs={12} md={4}>
              <div className="d-flex justify-content-center justify-content-md-start mb-3">
                <Button type="submit" variant="tertiary">
                  Sign me up!
                </Button>
              </div>
            </Col>
          </Row>
        </form>
      </FormProvider>
    </section>
  );
};

export default Newsletter;
