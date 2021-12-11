import {useState} from "react";
import "./style.scss";
import InputErrorMsg from "./InputErrorMsg";
import {useFormContext} from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const trapSpacesForRequiredFields = (value, notRequired) => {
  if (notRequired !== true) {
    return !!value.trim();
  }
};

const InputField = ({
  type,
  id,
  name,
  placeholder,
  isDisabled,
  errMsg,
  iconPlaceholder,
  className,
  notRequired,
  label,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const {
    register,
    formState: {errors},
  } = useFormContext();

  return (
    <div className={`form-group ${className}`}>
      {label && <label htmlFor={id || name}>{label}</label>}
      <div
        className={`input-icon-wrap ${
          iconPlaceholder ? "icon-placeholder" : ""
        } ${errors[name] ? "is-invalid" : ""}`}
      >
        {iconPlaceholder && (
          <button disabled className="icon icon-left">
            {iconPlaceholder}
          </button>
        )}
        {type === "password" ? (
          <>
            <input
              autoComplete="off"
              name={name}
              disabled={isDisabled}
              type={showPassword ? "password" : "text"}
              id={id}
              {...register(name, {
                required: notRequired ? false : true,
              })}
              placeholder={placeholder}
            />
            <button
              disabled={isDisabled}
              onClick={() => setShowPassword(prev => !prev)}
              type="button"
              className="icon icon-right"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </>
        ) : (
          <>
            <input
              autoComplete="off"
              disabled={isDisabled}
              {...props}
              type={type}
              id={id || name}
              {...register(name, {
                required: notRequired ? false : true,
                validate: value =>
                  trapSpacesForRequiredFields(value, notRequired),
              })}
              name={name}
              placeholder={placeholder}
            />
          </>
        )}
      </div>

      {errMsg && errors[name] && <InputErrorMsg errMsg={errMsg} />}
    </div>
  );
};

export default InputField;
