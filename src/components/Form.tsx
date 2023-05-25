import { useState, useRef } from "react";

import classes from "./Form.module.css";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [nameValid, setNameValid] = useState<boolean>(true);
  const [emailValid, setEmailValid] = useState<boolean>(true);
  const [messageValid, setMessageValid] = useState<boolean>(true);
  const [sent, setSent] = useState<boolean>(false);

  const validateName = (name: string) => {
    if (name.trim().length < 1) {
      setNameValid(false);
      return false;
    } else {
      return true;
    }
  };

  const validateEmail = (email: string) => {
    const isValid = /^\S+@\S+\.\S+$/.test(email);
    if (!isValid) {
      setEmailValid(false);
      return false;
    } else {
      return true;
    }
  };

  const validateMessage = (message: string) => {
    if (message.trim().length < 10) {
      setMessageValid(false);
      return false;
    } else {
      return true;
    }
  };

  const changeHandler = (input: string) => {
    if (input === "name") {
      setNameValid(true);
    }
    if (input === "email") {
      setEmailValid(true);
    }
    if (input === "message") {
      setMessageValid(true);
    }
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    let nameCheck = false;
    let emailCheck = false;
    let messageCheck = false;

    if (name) {
      nameCheck = validateName(name);
    } else {
      setNameValid(false);
    }

    if (email) {
      emailCheck = validateEmail(email);
    } else {
      setEmailValid(false);
    }

    if (message) {
      messageCheck = validateMessage(message);
    } else {
      setMessageValid(false);
    }

    if (!name || !email || !message) {
      return;
    }

    if (nameCheck && emailCheck && messageCheck) {
      setSent(true);
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  return (
    <>
      <section className={classes.connect}>
        <h2>
          Connect
          <br />
          with us
        </h2>
        <form noValidate onSubmit={submitHandler}>
          <div className={classes.name}>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              ref={nameRef}
              className={!nameValid ? classes.error : ""}
              onChange={changeHandler.bind(null, "name")}
            />
            {!nameValid && <p>Can't be empty</p>}
          </div>
          <div className={classes.email}>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              ref={emailRef}
              className={!emailValid ? classes.error : ""}
              onChange={changeHandler.bind(null, "email")}
            />
            {!emailValid && <p>Invalid email</p>}
          </div>
          <div className={classes.message}>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              rows={5}
              ref={messageRef}
              className={!messageValid ? classes.error : ""}
              onChange={changeHandler.bind(null, "message")}
            ></textarea>
            {!messageValid && <p>Minimum 10 characters</p>}
          </div>
          <button type="submit" className={classes.submit}>
            <img
              src="/assets/icons/icon-arrow.svg"
              alt="arrow icon"
              className={classes.arrow}
            />
          </button>
        </form>
      </section>
      {sent && (
        <div
          className={classes.backdrop}
          onClick={() => {
            setSent(false);
          }}
        ></div>
      )}
      {sent && (
        <div className={classes.modal}>
          <h2>Message Sent!</h2>
          <p>Thank you for contacting us.</p>
          <button
            onClick={() => {
              setSent(false);
            }}
          >
            OK
          </button>
        </div>
      )}
    </>
  );
};

export default Form;
