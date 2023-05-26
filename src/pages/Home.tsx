import { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Home.module.css";

const HomePage = () => {
  const [slide, setSlide] = useState<number>(1);

  const slideHandler = () => {
    if (slide < 4) {
      setSlide((prevState) => prevState + 1);
    } else {
      setSlide(1);
    }
  };

  const slideButtonsHandler = (num: number) => {
    setSlide(num);
  };

  return (
    <>
      <section className={classes.one}>
        <picture hidden={slide === 1 ? false : true} className={classes.hero}>
          <source
            media="(min-width: 80rem)"
            srcSet="/assets/home/desktop/image-hero-paramour.jpg"
          />
          <source
            media="(min-width: 48rem)"
            srcSet="/assets/home/tablet/image-hero-paramour.jpg"
          />
          <img
            src="/assets/home/mobile/image-hero-paramour.jpg"
            alt="paramour image"
          />
        </picture>
        <picture hidden={slide === 2 ? false : true} className={classes.hero}>
          <source
            media="(min-width: 80rem)"
            srcSet="/assets/home/desktop/image-hero-seraph.jpg"
          />
          <source
            media="(min-width: 48rem)"
            srcSet="/assets/home/tablet/image-hero-seraph.jpg"
          />
          <img
            src="/assets/home/mobile/image-hero-seraph.jpg"
            alt="seraph image"
          />
        </picture>
        <picture hidden={slide === 3 ? false : true} className={classes.hero}>
          <source
            media="(min-width: 80rem)"
            srcSet="/assets/home/desktop/image-hero-federal.jpg"
          />
          <source
            media="(min-width: 48rem)"
            srcSet="/assets/home/tablet/image-hero-federal.jpg"
          />
          <img
            src="/assets/home/mobile/image-hero-federal.jpg"
            alt="federal image"
          />
        </picture>
        <picture hidden={slide === 4 ? false : true} className={classes.hero}>
          <source
            media="(min-width: 80rem)"
            srcSet="/assets/home/desktop/image-hero-trinity.jpg"
          />
          <source
            media="(min-width: 48rem)"
            srcSet="/assets/home/tablet/image-hero-trinity.jpg"
          />
          <img
            src="/assets/home/mobile/image-hero-trinity.jpg"
            alt="trinity image"
          />
        </picture>
        <div className={classes.heroGroup}>
          {slide === 1 && (
            <div>
              <h2>
                Project
                <br />
                Paramour
              </h2>
              <p>
                Project made for an art museum near Southwest London. Project
                Paramour is a statement of bold, modern architecture.
              </p>
            </div>
          )}
          {slide === 2 && (
            <div>
              <h2>
                Seraph
                <br />
                Station
              </h2>
              <p>
                The Seraph Station project challenged us to design a unique
                station that would transport people through time. The result is
                a fresh and futuristic model inspired by space stations.
              </p>
            </div>
          )}
          {slide === 3 && (
            <div>
              <h2>
                Federal II
                <br />
                Tower
              </h2>
              <p>
                A sequel theme project for a tower originally built in the
                1800s. We achieved this with a striking look of brutal
                minimalism with modern touches.
              </p>
            </div>
          )}
          {slide === 4 && (
            <div>
              <h2>
                Trinity Bank
                <br />
                Tower
              </h2>
              <p>
                Trinity Bank challenged us to make a concept for a 84 story
                building located in the middle of a city with a high earthquake
                frequency. For this project we used curves to blend design and
                stability to meet our objectives.
              </p>
            </div>
          )}
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
        <button className={classes.nextButton} onClick={slideHandler}>
          <img
            src="/assets/icons/icon-arrow.svg"
            alt="arrow icon"
            className={classes.arrow}
          />
        </button>
        <div className={classes.slides}>
          <button
            className={slide === 1 ? classes.active : ""}
            onClick={slideButtonsHandler.bind(null, 1)}
          >
            01
          </button>
          <button
            className={slide === 2 ? classes.active : ""}
            onClick={slideButtonsHandler.bind(null, 2)}
          >
            02
          </button>
          <button
            className={slide === 3 ? classes.active : ""}
            onClick={slideButtonsHandler.bind(null, 3)}
          >
            03
          </button>
          <button
            className={slide === 4 ? classes.active : ""}
            onClick={slideButtonsHandler.bind(null, 4)}
          >
            04
          </button>
        </div>
      </section>
      <section className={classes.two}>
        <span className={classes.welcome}>Welcome</span>
        <div className={classes.line}></div>
        <img
          src="/assets/home/desktop/image-welcome.jpg"
          alt="welcome image"
          className={classes.welcomeImage}
        />
        <h2>
          Welcome to
          <br />
          Arch Studio
        </h2>
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
        <picture className={classes.smallTeam}>
          <source
            media="(min-width: 80rem)"
            srcSet="/assets/home/desktop/image-small-team.jpg"
          />
          <source
            media="(min-width: 48rem)"
            srcSet="/assets/home/tablet/image-small-team.jpg"
          />
          <img
            src="/assets/home/mobile/image-small-team.jpg"
            alt="small team image"
          />
        </picture>
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
        <div className={classes.feat}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-del-sol.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-del-sol.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-del-sol.jpg"
              alt="project del sol image"
            />
          </picture>
          <div className={classes.featGroup}>
            <h3>Project Del Sol</h3>
            <NavLink to="/portfolio" className={classes.featGroupButton}>
              View All Projects
            </NavLink>
          </div>
          <span className={classes.num}>1</span>
        </div>
        <div className={classes.feat}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-228b.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-228b.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-228b.jpg"
              alt="228b tower image"
            />
          </picture>
          <div className={classes.featGroup}>
            <h3>228B Tower</h3>
            <NavLink to="/portfolio" className={classes.featGroupButton}>
              View All Projects
            </NavLink>
          </div>
          <span className={classes.num}>2</span>
        </div>
        <div className={classes.feat}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-prototype.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-prototype.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-prototype.jpg"
              alt="le prototype image"
            />
          </picture>
          <div className={classes.featGroup}>
            <h3>Le Prototype</h3>
            <NavLink to="/portfolio" className={classes.featGroupButton}>
              View All Projects
            </NavLink>
          </div>
          <span className={classes.num}>3</span>
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
      </section>
    </>
  );
};

export default HomePage;
