import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomTextField from "./components/CommonComponents/CustomTextField/CustomTextField";
import CustomCheckbox from "./components/CommonComponents/CustomeCheckbox/CustomCheckbox";
import Options from "./shared/contactusOptions";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ContactUs = () => {
  const [options, setOptions] = React.useState(Options);
  const methods = useForm();
  const {
    handleSubmit,
    // watch,
  } = methods;

  // Function to handle checkbox change
  const handleCheckboxChange = (updatedOptions) => {
    setOptions(updatedOptions);
  };

  const onSubmit = (data) => {
    const checkedInterests = options.filter((option) => option.checked);
    // Add the checked interests to the form data
    data.interests = checkedInterests;
    console.log(data);
  };

  return (
    <section id="contactus" className="w-100">
      <FormProvider {...methods}>
        <h3 className="text-center">Get in touch</h3>
        <form
          className="contactus-form w-100 w-md-75 mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row>
            <Col xs={12} md={6}>
              <CustomTextField
                id="name"
                name="name"
                type="text"
                label="YOUR NAME"
                customelementwidth="100%"
                customwidth="90%"
                required={"Name is required"}
              />
              <CustomTextField
                id="email"
                name="email"
                type="text"
                label="YOUR EMAIL"
                customelementwidth="100%"
                customwidth="90%"
                required={"Email is required"}
              />
              <CustomCheckbox
                name="interests"
                id="interests"
                label="I AM INTERESTED IN..."
                customelementwidth="100%"
                customwidth="90%"
                options={options}
                onChange={handleCheckboxChange}
              />
            </Col>
            <Col xs={12} md={6}>
              <CustomTextField
                id="message"
                name="message"
                type="textarea"
                label="MESSAGE"
                customelementwidth="100%"
                customwidth="90%"
              />
              <div className="d-flex justify-content-center justify-content-md-end mx-4 mb-5 mb-md-0">
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </form>
      </FormProvider>
    </section>
  );
};

export default ContactUs;
