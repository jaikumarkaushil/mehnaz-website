import CustomTextField from "./CommonComponents/CustomTextField/CustomTextField";
import Options from "../shared/contactusOptions";
import { InlineWidget } from "react-calendly";
import CustomDropdown from "./CommonComponents/CustomDropdown/CustomDropdown";

const ContactUsServices = ({ interestType }) => {
  switch (interestType) {
    case Options[1].value: // Public Speaking
      return (
        <>
          <CustomTextField
            id="eventName"
            name={`${interestType}.eventName`}
            type="text"
            label="Event Name"
            customelementwidth="100%"
            customwidth="90%"
            required={"Event Name is required"}
          />
          <CustomTextField
            id="eventLocation"
            name={`${interestType}.eventLocation`}
            type="text"
            label="Event Location"
            customelementwidth="100%"
            customwidth="90%"
            required={"Event Location is required"}
          />
          <CustomDropdown
            id="eventType"
            name={`${interestType}.eventType`}
            shouldUseController={true}
            label="Event Type"
            customelementwidth="100%"
            customwidth="90%"
            required={true}
          >
            <option defaultValue="in-person">In-Person</option>
            <option value="virtual">Virtual</option>
          </CustomDropdown>
          <CustomTextField
            id="eventDate"
            name={`${interestType}.eventDate`}
            type="datetime-local"
            label="Event Location"
            customelementwidth="100%"
            customwidth="90%"
            required={"Event Location is required"}
          />
        </>
      );
    case Options[2].value: // Digital Content Creation
      return (
        <CustomTextField
          id="digitalMarketingProject"
          name={`${interestType}.digitalMarketingProject`}
          rows={3}
          type="textarea"
          label="Tell us about your project"
          customelementwidth="100%"
          customwidth="90%"
          required="Project details is required"
        />
      );
    case Options[3].value: // Project Management
      return null;
    case Options[4].value: // Decision Making & Problem Solving
      return (
        <CustomTextField
          id="decisionMakingProject"
          name={`${interestType}.decisionMakingProject`}
          rows={4}
          type="textarea"
          label="Tell us about your project"
          customelementwidth="100%"
          customwidth="90%"
          required="Project details is required"
        />
      );
    default:
      return null;
  }
};

export default ContactUsServices;
