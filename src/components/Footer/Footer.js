import React from "react";
import "./Footer.scss";

import { currentYear } from "../../utils/times";

const Footer = () => {
  return (
    <footer className="footer py-4 bg-purple">
      <div className="container">
        <div className="footer-content text-white text-center">
          <p className="copyright-text font-rubik fw-4 ls-1">
            &copy; {currentYear} CopyRight Example. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
