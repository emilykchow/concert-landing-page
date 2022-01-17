import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="Footer-wrapper">
        <div className="footer-text">
          <h5>Contact Info:</h5>
          <p>Email: letschat@epicon.ca</p>
          <p>Phone: (416) 738-2475</p>
          <p>Address: 123 Toronto Street E. Toronto ON, Canada. L5D 8G5</p>
          <p>Copyright ⓒ {year} Epicon</p>

        </div>
    </div>
  );
}

export default Footer;
