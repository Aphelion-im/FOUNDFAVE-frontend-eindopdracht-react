import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import InputComponent from '../../components/input/InputComponent';
import Content from '../../components/content/Content';
import ToolTip from '../../components/tooltip/ToolTip';
import { FaBan } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import './SignInRegister.css';

export default function Contact() {
  const [registerAccountSuccess, toggleRegisterAccountSuccess] = useState(false);
  const [error, toggleError] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
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

  // const username = 'amdegroot2';
  // const password = '123456';

  async function handleSignIn(data) {
    toggleError(false);
    try {
      const result = await axios.post(
        'https://frontend-educational-backend.herokuapp.com/api/auth/signin',
        {
          username: data.usernamesignin,
          password: data.passwordsignin,
        },
        {
          cancelToken: source.token,
        }
      );

      console.log(result.data);
      login(result.data.accessToken);
    } catch (e) {
      console.error(e);
      toggleError(true);
    }
    reset();
  }

  function handleRegisterAccount(data) {
    console.table(data);
    console.table('Username: ', data.usernameregister);
    console.table('Email: ', data.emailregister);
    console.table('Password: ', data.passwordregister);
    reset2();
    login();
  }

  useEffect(() => {
    return function cleanup() {
      source.cancel();
    };
  }, []);

  return (
    <>
      <Content title="Sign In & Register">
        <section className="signinregister-section">
          {/* Left column: Sign in */}
          <article>
            {error ? (
              <p className="error">
                Invalid username and password combination. Please try again!
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
                inputType="password"
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
