import React from "react";
import FooterNav from "./FooterNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({ footerLinks, socialMediaIcons }) => {
  return (
    <React.Fragment>
      <FooterNav footerLinks={footerLinks} />
      <p>Copyright © 2019 Adantrip. All rights reserved.</p>
      <div className="sm-wrapper">
        {socialMediaIcons.map((icon) => {
          return (
            <a key={icon.id} href={icon.url}>
              <FontAwesomeIcon icon={icon.iconName} />
            </a>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Footer;
