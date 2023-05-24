import { NavLink } from "react-router-dom";

import classes from "./Home.module.css";

const HomePage = () => {
  return (
    <>
      <section className={classes.one}>
        <img
          src="/assets/home/mobile/image-hero-paramour.jpg"
          alt="paramour image"
          className={classes.paramour}
        />
        <div className={classes.paramourGroup}>
          <h2>
            Project
            <br />
            Paramour
          </h2>
          <p>
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
          <NavLink to="/portfolio" className={classes.button}>
            <div>
              <span>See Our Portfolio</span>
              <img
                src="/assets/icons/icon-arrow.svg"
                alt="arrow icon"
                className={classes.arrow}
              />
            </div>
          </NavLink>
        </div>
      </section>

      <section className={classes.two}>
        <div className={classes.line}></div>
        <h2>Welcome to Arch Studio</h2>
        <p>
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
        </p>
        <p>
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </p>
        <p>
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p>
      </section>
      <section className={classes.three}>
        <img
          src="/assets/home/mobile/image-small-team.jpg"
          alt="small team image"
          className={classes.smallTeam}
        />
        <div className={classes.smallTeamGroup}>
          <h2>
            Small team,
            <br />
            big ideas
          </h2>
          <NavLink to="/about" className={classes.button}>
            <div>
              <span>About Us</span>
              <img
                src="/assets/icons/icon-arrow.svg"
                alt="arrow icon"
                className={classes.arrow}
              />
            </div>
          </NavLink>
        </div>
      </section>
      <section className={classes.four}>
        <h2>Featured</h2>
        <div className={classes.grid}>
          <div className={classes.feat}>
            <img
              src="/assets/portfolio/mobile/image-del-sol.jpg"
              alt="project del sol image"
            />
            <div className={classes.featGroup}>
              <h3>Project Del Sol</h3>
              <NavLink to="/portfolio" className={classes.featGroupButton}>
                View All Projects
              </NavLink>
            </div>
          </div>
          <div className={classes.feat}>
            <img
              src="/assets/portfolio/mobile/image-228b.jpg"
              alt="228b tower image"
            />
            <div className={classes.featGroup}>
              <h3>228b Tower</h3>
              <NavLink to="/portfolio" className={classes.featGroupButton}>
                View All Projects
              </NavLink>
            </div>
          </div>
          <div className={classes.feat}>
            <img
              src="/assets/portfolio/mobile/image-prototype.jpg"
              alt="le prototype image"
            />
            <div className={classes.featGroup}>
              <h3>Le Prototype</h3>
              <NavLink to="/portfolio" className={classes.featGroupButton}>
                View All Projects
              </NavLink>
            </div>
          </div>
          <NavLink to="/portfolio" className={classes.button}>
            <div>
              <span>See All</span>
              <img
                src="/assets/icons/icon-arrow.svg"
                alt="arrow icon"
                className={classes.arrow}
              />
            </div>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default HomePage;
