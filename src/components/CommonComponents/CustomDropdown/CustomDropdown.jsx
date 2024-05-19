import classNames from "classnames";
import { Form } from "react-bootstrap";
import CustomController from "../CustomController/CustomController";
import { useFormContext, get } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import colors from "../../../theme.module.scss";
import "./customDropdown.scss";

const SelectComponent = (props) => {
  const {
    id,
    onChange,
    name,
    value,
    label,
    customStyles,
    children,
    errors,
  } = props;
  return (
    <Form.Select
      id={id}
      name={name}
      value={value}
      error={errors}
      label={label}
      onChange={(e) => onChange(e)}
      className={classNames(customStyles, "inputSelectClass")}
    >
      {children}
    </Form.Select>
  );
};

function CustomDropdown(props) {
  const {
    customelementwidth = "100%",
    customwidth = "100%",
    wrapperClassname = "",
    shouldUseController = false,
    inputClassname = "",
    label = "",
    value = "",
    required = false,
    name,
    id,
    onChange,
    onBlur,
    children,
    labelStyles,
  } = props;
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  let error = get(errors, `${name}`) ? true : false;

  return (
    <div
      style={{
        width: `${customelementwidth}`,
      }}
      className={classNames(wrapperClassname, "wrapperSelectClass")}
    >
      <Form.Group style={{ width: `${customwidth}` }}>
        <Form.Label
          id={id}
          className={classNames("helper-label-class", labelStyles)}
          style={{ marginLeft: 0, marginBottom: "10px" }}
        >
          {label}
        </Form.Label>
        {shouldUseController ? (
          <CustomController
            control={control}
            register={register}
            rules={{
              required: required,
            }}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            render={(renderProps) => (
              <SelectComponent
                {...renderProps}
                id={id}
                errors={error}
                inputClassname={inputClassname}
                label={label}
              >
                {children}
              </SelectComponent>
            )}
          />
        ) : (
          <Form.Select
            id={id}
            name={name}
            value={value}
            error={error}
            onChange={onChange}
            className={classNames(inputClassname, "inputSelectClass")}
          >
            {children}
          </Form.Select>
        )}
        {error ? (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <Form.Text
                id={label}
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

export default CustomDropdown;
