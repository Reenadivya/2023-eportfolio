import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSpinner } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_7wasi0o",
        "template_9r434nc",
        e.target,
        "-73NRh9fS8_Qo6i66"
      )
      .then(() => {
        setIsLoading(false);
        setIsSuccess(true);
        e.target.reset();
      })
      .catch(() => {
        setIsLoading(false);
        alert(
          "The email service is currently unavailable. Please contact me directly at reenad286@gmail.com"
        );
      });
  };

  function newForm() {
    setIsSuccess(false);
    setIsLoading(false);
  }

  return (
    <section id="contact">
      <div className="modal__half modal__contact">
        <FontAwesomeIcon icon={faEnvelope} className="envelope" />
        <h3 className="modal__title modal__title--contact">
          Let's Have A Chat!
        </h3>
        <h3 className="modal__sub-title modal__sub-title--contact">
          I'm currently open to new opportunities.
        </h3>
        {!isLoading && !isSuccess && (
          <form id="contact__form" onSubmit={handleSubmit}>
            <div className="form__item">
              <label className="form__item--label">Name</label>
              <input className="input" name="user_name" type="text" required />
            </div>

            <div className="form__item">
              <label className="form__item--label">Email</label>
              <input className="input" name="user_email" type="text" required />
            </div>

            <div className="form__item">
              <label className="form__item--label">Message</label>
              <textarea className="input" name="message" type="text" required />
            </div>
            <button id="contact__submit" className="btn">
              Send It My Way
            </button>
          </form>
        )}

        {isLoading && !isSuccess && (
          <div className="spinner-div">
            <FontAwesomeIcon icon={faSpinner} className="fa-spinner" />
          </div>
        )}
        {!isLoading && isSuccess && (
          <div className="success-div">
            Thanks for the message. Looking forward to connecting with you soon!
            <button className="btn new-message" onClick={() => newForm()}>
              Click Here To Send Me A New Message
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
