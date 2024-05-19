/* eslint-disable no-useless-escape */
import { Form } from "react-bootstrap";
import classNames from "classnames";
import { ErrorMessage } from "@hookform/error-message";
import CustomController from "./../CustomController/CustomController";
import { useFormContext, get } from "react-hook-form";
import "./customTextField.scss";
import colors from "../../../theme.module.scss";

const OutlinedInputComponent = (props) => {
  const {
    value,
    onChange,
    id,
    label,
    inputClassname,
    type,
    name,
    inlineStyle,
    errors,
    placeholder,
    rows,
  } = props;
  if (type === "textarea") {
    return (
      <Form.Control
        as="textarea"
        rows={rows}
        name={name}
        onChange={(e) => onChange(e)}
        id={id}
        value={value || ""}
        isInvalid={errors}
        className={inputClassname}
        aria-describedby={label}
        style={inlineStyle}
        placeholder={placeholder}
      />
    );
  }

  return (
    <Form.Control
      name={name}
      onChange={(e) => onChange(e)}
      id={id}
      value={value || ""}
      isInvalid={errors}
      type={type}
      className={inputClassname}
      aria-describedby={label}
      style={inlineStyle}
      placeholder={placeholder}
    />
  );
};

function CustomTextField(props) {
  const {
    customelementwidth = "100%",
    customwidth = "100%",
    wrapperClassname = "",
    inputClassname = "",
    label = "",
    type = "text",
    required = false,
    name,
    id,
    onChange,
    onBlur,
    placeholder = "",
    labelStyles,
    rows = 5,
  } = props;
  let patternValue = "";
  let message = "";

  switch (type) {
    case "url":
      patternValue = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g;
      message = "Invalid Url";
      break;
    case "email":
      patternValue = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
      message = "Invalid Email Address";
      break;
    case "number":
      patternValue = /[1-4]/g;
      message = "Invalid Number";
      break;
    case "password":
      patternValue = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      message = "Invalid Password";
      break;
    case "tel":
      patternValue = /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/;
      message = "Invalid Mobile Number";
      break;
    default:
      patternValue = "";
      message = "";
      break;
  }

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, `${name}`) ? true : false;
  return (
    <div
      style={{
        width: `${customelementwidth}`,
      }}
      className={classNames(wrapperClassname, "wrapperTextFieldClass")}
    >
      <Form.Group style={{ width: `${customwidth}` }}>
        <Form.Label
          id={label}
          style={{ marginLeft: 0, marginBottom: "10px" }}
          className={labelStyles ? labelStyles : "helper-label-class"}
        >
          {label} &nbsp;
        </Form.Label>
        <CustomController
          {...{
            control: control,
            register: register,
            rules: {
              required: required,
              pattern: {
                value: patternValue,
                message: message,
              },
            },
            name: name,
            onChange: onChange,
            onBlur: onBlur,
            render: (renderProps) => {
              return (
                <OutlinedInputComponent
                  {...renderProps}
                  id={id}
                  type={type}
                  errors={error}
                  inputClassname={inputClassname}
                  label={label}
                  placeholder={placeholder}
                  rows={rows}
                />
              );
            },
          }}
        />
        {error ? (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <Form.Text
                id={props.label}
                style={{
                  marginLeft: "6px",
                  marginTop: "6px",
                  color: colors.error,
                }}
              >
                {message}
              </Form.Text>
            )}
          />
        ) : (
          <Form.Text
            style={{
              marginLeft: "6px",
              marginTop: "6px",
              color: colors.transparent,
            }}
          >
            Error Space
          </Form.Text>
        )}
      </Form.Group>
    </div>
  );
}

export default CustomTextField;
