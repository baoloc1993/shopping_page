import React from "react";
import  "./Footer.css";

function Footer() {
  return (
    <footer className="py-5 footer">
  <div className="footer-container">
    <div className="row">
      <div className="col-md-2 footer__column" ></div>
      <div className="col-md-3 footer__column" >
        <h5 className="footer__column-title">CUSTOMER SERVICE</h5>
        <ul className="list-unstyled text-small  footer__column-links">
          <li><a className="link-secondary" href="#">Help & Contact Us</a></li>
          <li><a className="link-secondary" href="#">Return & Refund</a></li>
          <li><a className="link-secondary" href="#">Online Stores</a></li>
          <li><a className="link-secondary" href="#">Term & Conditions</a></li>
        </ul>
      </div>
      <div className="col-md-3 footer__column" >
        <h5 className="footer__column-title">COMPANY</h5>
        <ul className="list-unstyled text-small footer__column-links">
          <li><a className="link-secondary" href="#">What we do</a></li>
          <li><a className="link-secondary" href="#">Available Services</a></li>
          <li><a className="link-secondary" href="#">Latest Post</a></li>
          <li><a className="link-secondary" href="#">FAQs</a></li>
        </ul>
      </div>
      <div className="col-md-3 footer__column" >
        <h5 className="footer__column-title">SOCIAL MEDIA</h5>
        <ul className="list-unstyled text-small  footer__column-links" >
          <li><a className="link-secondary" href="#">Twitter</a></li>
          <li><a className="link-secondary" href="#">Intagram</a></li>
          <li><a className="link-secondary" href="#">Facebook</a></li>
          <li><a className="link-secondary" href="#">Pinterest</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
