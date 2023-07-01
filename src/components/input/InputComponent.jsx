import { useState } from 'react';
import { FaExclamationTriangle, FaEye, FaEyeSlash } from 'react-icons/fa';
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
  const [isVisible, toggleIsVisible] = useState(false);

  function togglePassword() {
    if (inputType === 'password') toggleIsVisible((isVisible) => !isVisible);
  }

  return (
    <>
      <div className="input-component-container">
        <label htmlFor={inputId}>{inputLabel}</label>
        <span className="input-icon">{icon}</span>
        <span
          className={inputType === 'password' ? 'eye-icon' : 'no-eye-icon'}
          onClick={togglePassword}
          title="Toggle password"
        >
          {isVisible ? <FaEye /> : <FaEyeSlash />}
        </span>
        <input
          className="input-component box-shadow"
          type={inputType}
          // type={isVisible ? "text" : "password"}
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
