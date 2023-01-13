import React from "react";
import "./footer.css"
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
    return (
        <div className="footer-container">
            <div className="col"></div>
            <div className="content">
                <h5>Belvedere GynoCare</h5>
                <h6 className="adress">Avenue Antenor Borba, 516</h6>
                <h6 className="city">Lisbon</h6>
                <h6 className="cep">1800-310</h6>
                <h6 className="contact">Contact: +351 210 417 880</h6>
            </div>
            <div className="col"></div>
        </div>
    );
}

export default Footer;