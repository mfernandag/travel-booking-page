import React from "react";

const FooterNav = ({ footerLinks }) => {
  return (
    <React.Fragment>
      <nav className="">
        {footerLinks.map((link) => {
          return (
            <a className="" href={link.url}>
              {link.label}
            </a>
          );
        })}
      </nav>
    </React.Fragment>
  );
};

export default FooterNav;
