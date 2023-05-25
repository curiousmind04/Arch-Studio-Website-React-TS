import classes from "./About.module.css";

const AboutPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <img src="/assets/about/mobile/image-hero.jpg" alt="hero image" />
        <div className={classes.white}></div>
      </div>
      <section className={classes.one}>
        <h2>Your team of professionals</h2>
        <p>
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </section>
      <section className={classes.two}>
        <div className={classes.line}></div>
        <h2>
          Our
          <br />
          Heritage
        </h2>
        <p>
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p>
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>
        <p>
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </section>
      <section className={classes.three}>
        <h2>
          The
          <br />
          Leaders
        </h2>
        <div className={classes.leader}>
          <div className={classes.avatar}>
            <img src="/assets/about/desktop/avatar-jake.jpg" alt="jake image" />
            <div className={classes.socials}>
              <a href="#" className={classes.linkedin}>
                <img
                  src="/assets/icons/icon-linkedin.svg"
                  alt="linkedin icon"
                />
              </a>
              <a href="#" className={classes.twitter}>
                <img src="/assets/icons/icon-twitter.svg" alt="twitter icon" />
              </a>
            </div>
          </div>
          <h3>Jake Richards</h3>
          <span>Chief Architect</span>
        </div>
        <div className={classes.leader}>
          <div className={classes.avatar}>
            <img
              src="/assets/about/desktop/avatar-thompson.jpg"
              alt="thompson image"
            />
            <div className={classes.socials}>
              <a href="#" className={classes.linkedin}>
                <img
                  src="/assets/icons/icon-linkedin.svg"
                  alt="linkedin icon"
                />
              </a>
              <a href="#" className={classes.twitter}>
                <img src="/assets/icons/icon-twitter.svg" alt="twitter icon" />
              </a>
            </div>
          </div>
          <h3>Thompson Smith</h3>
          <span>Head of Finance</span>
        </div>
        <div className={classes.leader}>
          <div className={classes.avatar}>
            <img
              src="/assets/about/desktop/avatar-jackson.jpg"
              alt="jackson image"
            />
            <div className={classes.socials}>
              <a href="#" className={classes.linkedin}>
                <img
                  src="/assets/icons/icon-linkedin.svg"
                  alt="linkedin icon"
                />
              </a>
              <a href="#" className={classes.twitter}>
                <img src="/assets/icons/icon-twitter.svg" alt="twitter icon" />
              </a>
            </div>
          </div>
          <h3>Jackson Rourke</h3>
          <span>Lead Designer</span>
        </div>
        <div className={classes.leader}>
          <div className={classes.avatar}>
            <img
              src="/assets/about/desktop/avatar-maria.jpg"
              alt="maria image"
            />
            <div className={classes.socials}>
              <a href="#" className={classes.linkedin}>
                <img
                  src="/assets/icons/icon-linkedin.svg"
                  alt="linkedin icon"
                />
              </a>
              <a href="#" className={classes.twitter}>
                <img src="/assets/icons/icon-twitter.svg" alt="twitter icon" />
              </a>
            </div>
          </div>
          <h3>Maria Simpson</h3>
          <span>Senior Architect</span>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
