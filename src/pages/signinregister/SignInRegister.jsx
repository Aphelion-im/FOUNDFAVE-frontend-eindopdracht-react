import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import InputComponent from '../../components/input/InputComponent';
import Content from '../../components/content/Content';
import ToolTip from '../../components/tooltip/ToolTip';
import {
  FaBan,
  FaEnvelope,
  FaLock,
  FaUser,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import './SignInRegister.css';

export default function Contact() {
  const [registerAccountSuccess, toggleRegisterAccountSuccess] =
  useState(false);
  const [errorSignIn, toggleErrorSignIn] = useState(false);
  const [errorMessageSignIn, setErrorMessageSignIn] = useState('');
  const [errorRegister, toggleErrorRegister] = useState(false);
  const [errorMessageRegister, setErrorMessageRegister] = useState('');
  const [isVisibleSignIn, toggleIsVisibleSignIn] = useState(false);
  const [isVisibleRegister, toggleIsVisibleRegister] = useState(false);
  const [isWaitingSignIn, toggleIsWaitingSignIn] = useState(false);
  const [isWaitingRegister, toggleIsWaitingRegister] = useState(false);
  const { login } = useContext(AuthContext);
  const NOVI_BACKEND = import.meta.env.VITE_APP_NOVI_BACKEND;
  const source = axios.CancelToken.source();

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

  async function handleSignIn(data) {
    toggleIsWaitingSignIn(true);
    toggleErrorSignIn(false);
    try {
      const result = await axios.post(
        `${NOVI_BACKEND}/api/auth/signin`,
        {
          username: data.usernamesignin,
          password: data.passwordsignin,
        },
        {
          cancelToken: source.token,
        }
      );
      login(result.data.accessToken);
    } catch (e) {
      toggleErrorSignIn(true);
      console.error(e);
      if (e.response.data.message)
        setErrorMessageSignIn(e.response.data.message);

      if (e.response.status === 401)
        setErrorMessageSignIn(
          'User does not exist! Please try something else.'
        );
    }
    reset();
    toggleIsWaitingSignIn(false);
  }

  async function handleRegisterAccount(data) {
    toggleIsWaitingRegister(true);
    toggleErrorRegister(false);
    try {
      const result = await axios.post(
        `${NOVI_BACKEND}/api/auth/signup`,
        {
          email: data.emailregister,
          password: data.passwordregister,
          username: data.usernameregister,
        },
        {
          cancelToken: source.token,
        }
      );
      if (result.status === 200) {
        toggleRegisterAccountSuccess(true);
      }
    } catch (e) {
      toggleErrorRegister(true);
      console.error(e);
      if (e.response.data.message)
        setErrorMessageRegister(e.response.data.message);
    }
    reset2();
    toggleIsWaitingRegister(false);
  }

  useEffect(() => {
    return function cleanup() {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    const timeoutRegisterAccount = setTimeout(() => {
      toggleRegisterAccountSuccess(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutRegisterAccount);
    };
  }, [registerAccountSuccess]);

  useEffect(() => {
    const timeouterrorMessageSignIn = setTimeout(() => {
      toggleErrorSignIn(false);
    }, 5000);

    return () => {
      clearTimeout(timeouterrorMessageSignIn);
    };
  }, [errorMessageSignIn]);

  useEffect(() => {
    const timeouterrorMessageRegister = setTimeout(() => {
      toggleErrorRegister(false);
    }, 5000);

    return () => {
      clearTimeout(timeouterrorMessageRegister);
    };
  }, [errorMessageRegister]);

  function togglePasswordSignIn() {
    toggleIsVisibleSignIn((isVisibleSignIn) => !isVisibleSignIn);
  }

  function togglePasswordRegister() {
    toggleIsVisibleRegister((isVisibleRegister) => !isVisibleRegister);
  }

  return (
    <>
      <Content title="Sign In & Register">
        <section className="signinregister-section">
          {/* Left column: Sign in */}
          <article>
            {errorSignIn ? (
              <p className="error">{errorMessageSignIn}</p>
            ) : isWaitingSignIn ? (
              <p className="pending">Waiting for server response ...</p>
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
              {/* Username field */}
              <InputComponent
                inputType="text"
                inputName="usernamesignin"
                inputId="usernamesignin"
                placeholder="Username"
                validationRules={{
                  required: 'You must specify a username',
                  minLength: {
                    value: 6,
                    message: 'Usernames must have at least 6 characters',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Usernames may not exceed 20 characters',
                  },
                  pattern: {
                    value: /[A-Za-z0-9]/,
                    message: 'Usernames may not contain special characters',
                  },
                }}
                register={register}
                errors={errors}
                icon={<FaUser />}
              />
              {/* Password field */}
              <InputComponent
                inputType={isVisibleSignIn ? 'text' : 'password'}
                inputName="passwordsignin"
                inputId="passwordsignin"
                placeholder="Password"
                validationRules={{
                  required: 'You must specify a password',
                  minLength: {
                    value: 6,
                    message: 'Passwords must have at least 6 characters',
                  },
                  maxLength: {
                    value: 20,
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
                eyeIcon={isVisibleSignIn ? <FaEye /> : <FaEyeSlash />}
                handlePassword={togglePasswordSignIn}
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
                <ToolTip info="This feature is not yet available" />
              </span>
            </form>
          </article>

          {/* Right column: register new account */}
          <article>
            {errorRegister ? (
              <p className="error">{errorMessageRegister}</p>
            ) : registerAccountSuccess ? (
              <p style={{ color: 'var(--marvel-complement-clr)' }}>
                Account registered succesfully. You may now sign in.
              </p>
            ) : isWaitingRegister ? (
              <p className="pending">Waiting for server response ...</p>
            ) : (
              <p>
                Register a new account
                <ToolTip info="Server response time may vary" />
              </p>
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
                  required: 'You must specify a username',
                  minLength: {
                    value: 6,
                    message: 'Usernames must have at least 6 characters',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Usernames may not exceed 20 characters',
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
                inputType={isVisibleRegister ? 'text' : 'password'}
                inputName="passwordregister"
                inputId="passwordregister"
                placeholder="Password"
                validationRules={{
                  required: 'You must specify a password',
                  minLength: {
                    value: 6,
                    message: 'Passwords must have at least 6 characters',
                  },
                  maxLength: {
                    value: 20,
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
                eyeIcon={isVisibleRegister ? <FaEye /> : <FaEyeSlash />}
                handlePassword={togglePasswordRegister}
              />
              {/* Verify password */}
              <InputComponent
                inputType={isVisibleRegister ? 'text' : 'password'}
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
                eyeIcon={isVisibleRegister ? <FaEye /> : <FaEyeSlash />}
                handlePassword={togglePasswordRegister}
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
