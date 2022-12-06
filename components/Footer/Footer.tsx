import React from "react";

function Footer() {
  return (
    <div className="footer">
      <p  >
         {(new Date().getFullYear())}  Dragoslav Ivkovic All
        Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
