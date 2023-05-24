import { NavLink } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <NavLink to="/" className={classes.home}>
          <img src="/assets/logo.svg" alt="logo" />
        </NavLink>
        <div className={classes.group}>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
          >
            <div>
              <span>Portfolio</span>
            </div>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
          >
            <div>
              <span>About Us</span>
            </div>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
          >
            <div>
              <span>Contact</span>
            </div>
          </NavLink>
        </div>
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
    </footer>
  );
};

export default Footer;
