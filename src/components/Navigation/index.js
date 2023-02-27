import React from "react";

import { useComponentLogic } from "./hooks";

const Navigation = () => {
  const { closeMenu, handleClick, click, color } = useComponentLogic();

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <a href="/" className="logo">
          {/* <img src="logo/white-logo.svg" alt="logo" /> */}
          <img src="logo/newnewlogo.svg" alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <i
              class="fa fa-times"
              aria-hidden="true"
              size={30}
              style={{ color: "#ffffff" }}
            />
          ) : (
            <i class="fa fa-bars" size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/weddings" onClick={closeMenu}>
              Weddings
            </a>
          </li>
          <li className="nav-item">
            <a href="/promo" onClick={closeMenu}>
              Promo
            </a>
          </li>

          <li className="nav-item">
            <a href="/fashion" onClick={closeMenu}>
              Fashion
            </a>
          </li>
          <li className="nav-item">
            <a href="/music" onClick={closeMenu}>
              Music
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" onClick={closeMenu}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
