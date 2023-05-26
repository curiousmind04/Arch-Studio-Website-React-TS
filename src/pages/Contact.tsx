import { useState } from "react";

import Map from "../components/Map";
import classes from "./Contact.module.css";
import Form from "../components/Form";

const ContactPage = () => {
  const [office, setOffice] = useState<string | undefined>();

  const officeHandler = (office: string) => {
    if (office === "first") {
      setOffice("first");
    }
    if (office === "second") {
      setOffice("second");
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.hero}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/contact/desktop/image-hero.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/contact/tablet/image-hero.jpg"
            />
            <img src="/assets/contact/mobile/image-hero.jpg" alt="hero image" />
          </picture>
          <div className={classes.white}></div>
        </div>
        <span className={classes.contact}>Contact</span>
        <section className={classes.one}>
          <div className={classes.lineTwo}></div>
          <h2>Tell us about your project</h2>
          <p>
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </section>
        <section className={classes.two}>
          <div className={classes.line}></div>
          <div className={classes.flex}>
            <h2>
              Contact
              <br />
              Details
            </h2>
            <div className={classes.group}>
              <div className={classes.office}>
                <h3>Main Office</h3>
                <span>Mail : archone@mail.com</span>
                <span>Address : 220 Yonge Street ON</span>
                <span>Phone : 123-456-3451</span>
              </div>
              <a
                className={classes.button}
                href="#map"
                onClick={officeHandler.bind(null, "first")}
              >
                <div>
                  <span>View on Map</span>
                  <img
                    src="/assets/icons/icon-arrow.svg"
                    alt="arrow icon"
                    className={classes.arrow}
                  />
                </div>
              </a>
            </div>
            <div className={classes.group}>
              <div className={classes.office}>
                <h3>Office II</h3>
                <span>Mail : archtwo@mail.com</span>
                <span>Address : 20 W 34th Street NY</span>
                <span>Phone : 832-123-4321</span>
              </div>
              <a
                className={classes.button}
                href="#map"
                onClick={officeHandler.bind(null, "second")}
              >
                <div>
                  <span>View on Map</span>
                  <img
                    src="/assets/icons/icon-arrow.svg"
                    alt="arrow icon"
                    className={classes.arrow}
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
        <Map office={office} />
      </div>
      <Form />
    </>
  );
};

export default ContactPage;
