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
  autoFocus
}) {
  return (
    <>
      <label htmlFor={inputId}>{inputLabel}</label>
      <input
        className="input-component box-shadow"
        type={inputType}
        id={inputId}
        placeholder={placeholder}
        {...register(inputName, validationRules)}
        autoFocus={autoFocus}
      />
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
