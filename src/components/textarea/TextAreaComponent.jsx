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
}) {
  return (
    <>
      <label htmlFor={inputId}>{inputLabel}</label>
      <textarea
      className="textarea-component box-shadow"
        id={inputId}
        placeholder={placeholder}
        {...register(inputName, validationRules)}
      ></textarea>
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
