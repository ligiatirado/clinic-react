import React from "react";
import "./footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="content">
        <h5>Belvedere GynoCare</h5>
        <div className="icon">
          <i class="bi bi-geo-alt-fill"></i>
          <h6 className="adress">Avenue Antenor Borba, 516</h6>
        </div>
        <h6 className="city">Lisbon</h6>
        <h6 className="cep">1800-310</h6>
        <div className="icon">
          <i class="bi bi-telephone-fill"></i>
          <h6 className="contact">Contact: +351 210 417 880</h6>
        </div>
      </div>
      <div className="col"></div>
      <div className="col"></div>
    </div>
  );
}

export default Footer;
