import { FaExclamationTriangle } from 'react-icons/fa';
import './InputComponent.css';

export default function InputComponent({
  inputType,
  inputName,
  inputLabel,
  inputId,
  placeholder,
  validationRules,
  register,
  errors,
  autoFocus,
  icon,
}) {
  return (
    <>
      <div className="input-component-container">
        <label htmlFor={inputId}>{inputLabel}</label>
        <span className="input-icon">{icon}</span>
        <input
          className="input-component box-shadow"
          type={inputType}
          id={inputId}
          placeholder={placeholder}
          {...register(inputName, validationRules)}
          autoFocus={autoFocus}
          icon={icon}
        />
      </div>
      <div className="error-message">
        {errors[inputName] && (
          <p>
            <span className="warning-icon">
              <FaExclamationTriangle />
            </span>
            {errors[inputName].message}
          </p>
        )}
      </div>
    </>
  );
}
