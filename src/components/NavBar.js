import React from "react";

const NavBar = ({ menuLinks }) => {
  return (
    <React.Fragment>
      <nav className="navBar">
        {menuLinks.map((menuLink) => {
          return (
            <a className="navLink" href={menuLink.url}>
              {menuLink.label}
            </a>
          );
        })}
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
