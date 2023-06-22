import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputComponent from '../../components/input/InputComponent';
import TextAreaComponent from '../../components/textarea/TextAreaComponent';
import Content from '../../components/content/Content';
import { FaBan } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSuccess(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [success]);

  const {
    handleSubmit,
    reset,
    formState: { errors, isValid },
    register,
  } = useForm({
    mode: 'onChange',
  });

  // console.log('Errors: ', errors);

  function handleFormSubmit(data) {
    console.table(data);
    console.table('Name: ', data.name);
    console.table('Email: ', data.email);
    console.table('Comments: ', data['message-content']);
    setSuccess(true);
    reset();
  }

  return (
    <>
      <Content title="Contact Form">
        {success ? (
          <p style={{ color: 'var(--marvel-complement-clr)' }}>
            Thank you! Form sent successfully
          </p>
        ) : (
          <p>
            Please fill in the form below and we'll contact you as soon as
            possible
          </p>
        )}

        <form
          className="contact-form"
          name="contact-form"
          id="contact-form"
          method="POST"
          onSubmit={handleSubmit(handleFormSubmit)}
          action="/contact"
        >
          <input type="hidden" name="form-name" value="contactForm" />
          {/* Name component */}
          <InputComponent
            inputType="text"
            inputName="name"
            inputId="name-field"
            placeholder="Fill in your name"
            validationRules={{
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name has to contain eat least 2 characters',
              },
            }}
            register={register}
            errors={errors}
          />

          {/* E-mail component*/}
          <InputComponent
            inputType="text"
            inputName="email"
            inputId="email-field"
            placeholder="Fill in your e-mail address"
            validationRules={{
              required: 'This field is required',
              pattern: {
                value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
                message: 'Please, fill in a valid e-mail address',
              },
            }}
            register={register}
            errors={errors}
          />

          {/* Bericht component*/}
          <TextAreaComponent
            inputName="message-content"
            inputId="message-field"
            placeholder="Leave a comment"
            validationRules={{
              required: 'This field is required',
              minLength: {
                value: 5,
                message: 'The message must contain at least 5 characters',
              },
              maxLength: {
                value: 300,
                message: 'The message may contain a maximum of 300 characters',
              },
            }}
            register={register}
            errors={errors}
          />

          <button
            type="submit"
            title="Send Form"
            className={isValid ? 'valid box-shadow' : 'notvalid box-shadow'}
            disabled={!isValid}
          >
            {isValid ? 'Send Form' : <FaBan />}
          </button>
        </form>
      </Content>
    </>
  );
}
