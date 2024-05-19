import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomTextField from "./components/CommonComponents/CustomTextField/CustomTextField";
// import CustomCheckbox from "./components/CommonComponents/CustomeCheckbox/CustomCheckbox";
import Options from "./shared/contactusOptions";
import { Row, Col, Button } from "react-bootstrap";
import CustomDropdown from "./components/CommonComponents/CustomDropdown/CustomDropdown";
import ContactUsServices from "./components/contactusServices";
import CareerCounsellingCalendly from "./components/CareerCounsellingCalendly";

const ContactUs = () => {
  const [options, setOptions] = React.useState(Options);
  // const [interestType, setInterestType] = React.useState("");
  const methods = useForm();
  const { handleSubmit, watch, resetField } = methods;
  const interestType = watch("interests");

  // Function to handle checkbox change
  // const handleCheckboxChange = (updatedOptions) => {
  //   setOptions(updatedOptions);
  // };
  useEffect(() => {
    Options.filter((option) => option.value !== interestType).map((option) => {
      resetField(option.value);
    });
  }, [interestType, resetField]);

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  return (
    <section id="contactus" className="w-100">
      <FormProvider {...methods}>
        <h3 className="text-center">Get in touch</h3>
        <form
          className="contactus-form w-100 w-md-75 mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {console.log(watch())}
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
              {/* <CustomCheckbox
                name="interests"
                id="interests"
                label="I AM INTERESTED IN..."
                customelementwidth="100%"
                customwidth="90%"
                options={options}
                onChange={handleCheckboxChange}
              /> */}
              <CustomDropdown
                id="interests"
                name="interests"
                // value={interestType}
                // onChange={(e) => setInterestType(e.target.value)}
                shouldUseController={true}
                label="I AM INTERESTED IN..."
                customelementwidth="100%"
                customwidth="90%"
                required={true}
              >
                <option defaultValue="">Select your interest</option>
                {options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </CustomDropdown>
              <CareerCounsellingCalendly
                careercounselling={interestType === options[0].value}
              />
            </Col>
            <Col xs={12} md={6}>
              <ContactUsServices interestType={interestType} />
              <CustomTextField
                id="message"
                name="message"
                type="textarea"
                label="MESSAGE"
                customelementwidth="100%"
                customwidth="90%"
              />
              <div className="d-flex justify-content-center justify-content-md-end mx-5 mb-5 mb-md-0">
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
          <CareerCounsellingCalendly
            careercounselling={interestType === options[0].value}
            type="inline"
          />
        </form>
      </FormProvider>
    </section>
  );
};

export default ContactUs;
