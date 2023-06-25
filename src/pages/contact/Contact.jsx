import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputComponent from '../../components/input/InputComponent';
import TextAreaComponent from '../../components/textarea/TextAreaComponent';
import Content from '../../components/content/Content';
import { FaBan } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import Map from '../../components/map/Map';
import map from '../../assets/maps/map-novi.jpg';
import './Contact.css';

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const {
    setFocus,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    register,
  } = useForm({
    mode: 'onChange',
  });

  function handleFormSubmit(data) {
    console.table(data);
    console.table('Name: ', data.name);
    console.table('Email: ', data.email);
    console.table('Comments: ', data['message-content']);
    setSuccess(true);
    reset();
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSuccess(false);
    }, 3000);

    setFocus('name');

    return () => {
      clearTimeout(timeout);
    };
  }, [success]);

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <>
      <Content title="Contact Form">
        <section className="contact-section">
          {/* Left column */}
          <article>
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
                placeholder="Name"
                validationRules={{
                  required: 'Name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must contain at least 2 characters',
                  },
                  maxLength: {
                    value: 30,
                    message: 'Name may contain a maximum of 30 characters',
                  },
                }}
                register={register}
                errors={errors}
                icon={<FaUser />}
              />

              {/* E-mail component*/}
              <InputComponent
                inputType="email"
                inputName="email"
                inputId="email-field"
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

              {/* Bericht component*/}
              <TextAreaComponent
                inputName="message-content"
                inputId="message-field"
                placeholder="Comment"
                validationRules={{
                  required: 'This field is required',
                  minLength: {
                    value: 5,
                    message: 'The message must contain at least 5 characters',
                  },
                  maxLength: {
                    value: 100,
                    message:
                      'The message may contain a maximum of 100 characters',
                  },
                }}
                register={register}
                errors={errors}
                icon={<FaComment />}
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
          </article>
          {/* Right column */}
          <article>
            <Map
              image={map}
              title="NOVI Hogeschool"
              address="Newtonlaan 247"
              zipcode="3584 BH"
              city="Utrecht"
              telephone="030-3073200"
              email="contact@novi.nl"
              className="box-shadow"
            />
          </article>
        </section>
      </Content>
    </>
  );
}
