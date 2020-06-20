import React from "react";

const NavBar = ({ data }) => {
  return (
    <React.Fragment>
      <nav className="navBar">
        {data.map((menuLink, id) => {
          return (
            <a key={id} className="navLink" href={menuLink.url}>
              {menuLink.label}
            </a>
          );
        })}
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
