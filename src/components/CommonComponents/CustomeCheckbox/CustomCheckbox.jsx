import classNames from "classnames";
import { Form } from "react-bootstrap";
import CustomController from "../CustomController/CustomController";
import { ErrorMessage } from "@hookform/error-message";
import colors from "../../../theme.module.scss";
import { useFormContext, get } from "react-hook-form";
import "./customCheckbox.scss";

const CheckBoxComponent = (props) => {
  const { onChange, option, checked, inputId, inputClassname } = props;

  return (
    <Form.Check
      id={inputId}
      type="checkbox"
      label={option.label}
      checked={checked}
      className={classNames(inputClassname, "customCheckboxClass")}
      onChange={(e) => onChange(option, e.target.checked)}
    />
  );
};

function CustomCheckbox(props) {
  const {
    customelementwidth = "100%",
    customwidth = "100%",
    wrapperClassname = "",
    inputClassname = "",
    required = false,
    name,
    label,
    labelStyles = "",
    id,
    options,
    onChange,
    onBlur,
  } = props;

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, `${name}`) ? true : false;

  return (
    <Form.Group
      style={{
        width: `${customelementwidth ? customelementwidth : "max-content"}`,
      }}
      className={classNames(wrapperClassname, "wrapperCheckboxClass")}
    >
      <div style={{ width: `${customwidth}` }}>
        <Form.Label
          id={label}
          style={{ marginLeft: 0, marginBottom: "10px" }}
          className={classNames(labelStyles, "helper-label-class")}
        >
          {label} &nbsp;
        </Form.Label>
        <CustomController
          control={control}
          register={register}
          name={name}
          rules={{ required: required }}
          onChange={onChange}
          onBlur={onBlur}
          render={({ onChange }) => (
            <>
              {options.map((option, index) => (
                <CheckBoxComponent
                  key={index}
                  option={option}
                  inputId={`${id}-${index}`}
                  checked={option.checked}
                  inputClassname={inputClassname}
                  customwidth={customwidth}
                  onChange={(option, checked) => {
                    onChange(
                      options.map((item) =>
                        item.value === option.value
                          ? { ...item, checked }
                          : item
                      )
                    );
                  }}
                />
              ))}
            </>
          )}
        />
        {error ? (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <Form.Text
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
      </div>
    </Form.Group>
  );
}

export default CustomCheckbox;
