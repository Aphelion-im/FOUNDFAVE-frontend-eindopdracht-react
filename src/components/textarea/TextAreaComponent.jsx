import { FaExclamationTriangle } from 'react-icons/fa';
import './TextAreaComponent.css';

export default function TextAreaComponent({
  inputName,
  inputLabel,
  inputId,
  placeholder,
  validationRules,
  register,
  errors,
  icon
}) {
  return (
    <>
      <div className="textarea-component-container">
        <label htmlFor={inputId}>{inputLabel}</label>
        <span className="input-icon">{icon}</span>
        <textarea
          className="textarea-component box-shadow"
          id={inputId}
          placeholder={placeholder}
          {...register(inputName, validationRules)}
          icon={icon}
        ></textarea>
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
