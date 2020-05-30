import React from "react";

const NavBar = ({ menuLinks }) => {
  return (
    <React.Fragment>
      <nav>
        {menuLinks.map((menuLink) => {
          return <a href={menuLink.url}>{menuLink.label}</a>;
        })}
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
