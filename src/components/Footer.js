import React from "react";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({ data, socialMediaIcons }) => {
  return (
    <React.Fragment>
      <div className="header">
        <NavBar data={data} />
        <p>Copyright © 2019 Adantrip. All rights reserved.</p>
        <div className="sm-wrapper">
          {socialMediaIcons.map((icon, id) => {
            return (
              <a key={id} href={icon.url}>
                <FontAwesomeIcon icon={icon.iconName} />
              </a>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
