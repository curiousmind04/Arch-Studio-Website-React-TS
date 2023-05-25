import { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const MainNav = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const menuHandler = () => {
    setMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink to="/" onClick={closeMenu}>
          <img src="/assets/logo.svg" alt="logo" className={classes.logo} />
        </NavLink>
        <button className={classes.hamburger} onClick={menuHandler}>
          <img src="/assets/icons/icon-hamburger.svg" alt="hamburger icon" />
        </button>
        {menu && <div className={classes.backdrop} onClick={closeMenu}></div>}
        {menu && (
          <div className={classes.group}>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
              onClick={closeMenu}
            >
              <div>
                <div>Portfolio</div>
              </div>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
              onClick={closeMenu}
            >
              <div>
                <div>About Us</div>
              </div>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
              onClick={closeMenu}
            >
              <div>
                <div>Contact</div>
              </div>
            </NavLink>
          </div>
        )}
        <div className={classes.navigation}>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
            onClick={closeMenu}
          >
            <div>
              <div>Portfolio</div>
              <div className={classes.line}></div>
            </div>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
            onClick={closeMenu}
          >
            <div>
              <div>About Us</div>
              <div className={classes.line}></div>
            </div>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
            onClick={closeMenu}
          >
            <div>
              <div>Contact</div>
              <div className={classes.line}></div>
            </div>
          </NavLink>
        </div>
        <h1 className="sr-only">Arch Studio Website</h1>
      </div>
    </header>
  );
};

export default MainNav;
