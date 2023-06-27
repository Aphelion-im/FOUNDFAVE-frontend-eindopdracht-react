import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import InputComponent from '../../components/input/InputComponent';
import Content from '../../components/content/Content';
import ToolTip from '../../components/tooltip/ToolTip';
import { FaBan } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import './SignInRegister.css';

export default function Contact() {
  const [signInSuccess, toggleSignInsetSuccess] = useState(false);
  const [registerAccountSuccess, toggleRegisterAccountSuccess] = useState(false);
  const [isSubmitted, toggleIsSubmitted] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    formState: { errors, isValid },
    register,
  } = useForm({
    mode: 'onChange',
  });

  const {
    getValues: getValues2,
    handleSubmit: handleSubmit2,
    reset: reset2,
    register: register2,
    formState: { errors: errors2, isValid: isValid2 },
  } = useForm({
    mode: 'onChange',
  });

  function handleSignIn(data) {
    console.table(data);
    console.table('Email: ', data.emailsignin);
    console.table('Password: ', data.passwordsignin);
    toggleSignInsetSuccess(true);
    reset();
    toggleIsSubmitted(true);
    login();
  }

  function handleRegisterAccount(data) {
    console.table(data);
    console.table('Username: ', data.usernameregister);
    console.table('Email: ', data.emailregister);
    console.table('Password: ', data.passwordregister);
    toggleRegisterAccountSuccess(true);
    reset2();
    toggleIsSubmitted(true);
    login();
  }

  useEffect(() => {
    const timeoutSignIn = setTimeout(() => {
      toggleSignInsetSuccess(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutSignIn);
    };
  }, [signInSuccess]);

  useEffect(() => {
    const timeoutRegisterAccount = setTimeout(() => {
      toggleRegisterAccountSuccess(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutRegisterAccount);
    };
  }, [registerAccountSuccess]);

  useEffect(() => {
    const timeoutRegisterAccount = setTimeout(() => {
      if (isSubmitted) {
        navigate('/favorites');
      }
    }, 3000);

    return () => {
      clearTimeout(timeoutRegisterAccount);
    };
  }, [isSubmitted]);

  return (
    <>
      <Content title="Sign In & Register">
        <section className="signinregister-section">
          {/* Left column: Sign in */}
          <article>
            {signInSuccess ? (
              <p style={{ color: 'var(--marvel-complement-clr)' }}>
                Logged in successfully. Redirecting, please wait ...
              </p>
            ) : (
              <p>Sign in for registered users</p>
            )}

            <form
              key={1}
              className="signin-form"
              name="signin-form"
              id="signin-form"
              method="POST"
              onSubmit={handleSubmit(handleSignIn)}
            >
              {/* E-mail field */}
              <InputComponent
                inputType="email"
                inputName="emailsignin"
                inputId="emailsignin"
                placeholder="E-mail"
                validationRules={{
                  required: 'This field is required',
                  pattern: {
                    value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
                    message: 'Please fill in a valid e-mail address',
                  },
                }}
                register={register}
                errors={errors}
                icon={<FaEnvelope />}
              />
              {/* Password field */}
              <InputComponent
                inputType="password"
                inputName="passwordsignin"
                inputId="passwordsignin"
                placeholder="Password"
                validationRules={{
                  required: 'You must specify a password',
                  minLength: {
                    value: 3,
                    message: 'Passwords must have at least 6 characters',
                  },
                  maxLength: {
                    value: 10,
                    message: 'Passwords may not exceed 20 characters',
                  },
                  pattern: {
                    value: /[A-Za-z0-9]/,
                    message: 'Passwords may not contain special characters',
                  },
                }}
                register={register}
                errors={errors}
                icon={<FaLock />}
              />

              <button
                type="submit"
                title="Send Form"
                className={isValid ? 'valid box-shadow' : 'notvalid box-shadow'}
                disabled={!isValid}
              >
                {isValid ? 'Sign In' : <FaBan />}
              </button>
              <span className="forgotpassword">
                <Link to="#" className="hyperlink">
                  Forgot password?
                </Link>
                <ToolTip info="Does not work in this version of the app" />
              </span>
            </form>
          </article>

          {/* Right column: register new account */}
          <article>
            {registerAccountSuccess ? (
              <p style={{ color: 'var(--marvel-complement-clr)' }}>
                Registered account succesfully. Logging in, redirecting, please
                wait ...
              </p>
            ) : (
              <p>Register a new account</p>
            )}

            <form
              key={2}
              className="register-form"
              name="register-form"
              id="register-form"
              method="POST"
              onSubmit={handleSubmit2(handleRegisterAccount)}
            >
              {/* Username field */}
              <InputComponent
                inputType="text"
                inputName="usernameregister"
                inputId="usernameregister"
                placeholder="Username"
                validationRules={{
                  required: 'You must specify a password',
                  minLength: {
                    value: 3,
                    message: 'Usernames must have at least 3 characters',
                  },
                  maxLength: {
                    value: 10,
                    message: 'Usernames may not exceed 10 characters',
                  },
                  pattern: {
                    value: /[A-Za-z0-9]/,
                    message: 'Usernames may not contain special characters',
                  },
                }}
                register={register2}
                errors={errors2}
                icon={<FaUser />}
              />
              {/* E-mail field */}
              <InputComponent
                inputType="email"
                inputName="emailregister"
                inputId="emailregister"
                placeholder="E-mail"
                validationRules={{
                  required: 'This field is required',
                  pattern: {
                    value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
                    message: 'Please fill in a valid e-mail address',
                  },
                }}
                register={register2}
                errors={errors2}
                icon={<FaEnvelope />}
              />
              {/* Password field */}
              <InputComponent
                inputType="password"
                inputName="passwordregister"
                inputId="passwordregister"
                placeholder="Password"
                validationRules={{
                  required: 'You must specify a password',
                  minLength: {
                    value: 3,
                    message: 'Passwords must have at least 6 characters',
                  },
                  maxLength: {
                    value: 10,
                    message: 'Passwords may not exceed 20 characters',
                  },
                  pattern: {
                    value: /[A-Za-z0-9]/,
                    message: 'Passwords may not contain special characters',
                  },
                }}
                register={register2}
                errors={errors2}
                icon={<FaLock />}
              />
              {/* Verify password */}
              <InputComponent
                inputType="password"
                inputName="passwordregisterverify"
                inputId="passwordregisterverify"
                placeholder="Repeat password"
                validationRules={{
                  required: 'You must specify a password',
                  validate: (value) => {
                    const { passwordregister } = getValues2();
                    return (
                      passwordregister === value || 'Passwords do not match'
                    );
                  },
                }}
                register={register2}
                errors={errors2}
                icon={<FaLock />}
              />

              <button
                type="submit"
                title="Send Form"
                className={
                  isValid2 ? 'valid box-shadow' : 'notvalid box-shadow'
                }
                disabled={!isValid2}
              >
                {isValid2 ? 'Create Account' : <FaBan />}
              </button>
            </form>
          </article>
        </section>
      </Content>
    </>
  );
}
