import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconBriefcase } from "bootstrap-icons/icons/briefcase.svg";
import { ReactComponent as IconBadgeAd } from "bootstrap-icons/icons/badge-ad.svg";
import { ReactComponent as IconGift } from "bootstrap-icons/icons/gift.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faApple,
  faWindows,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container-fluid bg-primary">
          <div className="row ">
            <div className="col-md-9 py-3 text-white">
              Get connected with us on social networks!
            </div>
            <div className="col-md-3 py-3 text-center text-white">
              {/* <Link to="/" title="Apple">
                <FontAwesomeIcon icon={faApple} className="text-light mr-3" />
              </Link> */}
              {/* <Link to="/" title="Windows">
                <FontAwesomeIcon icon={faWindows} className="text-light mr-3" />
              </Link> */}
              {/* <Link to="/" title="Android">
                <FontAwesomeIcon icon={faAndroid} className="text-light mr-3" />
              </Link> */}
              |
              <a href="https://twitter.com/kiidadofficial/" title="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-light ml-3 mr-3"
                />
              </a>
              <a href="https://www.facebook.com/kiidadofficial" title="Facebook">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-light mr-3"
                />
              </a>
              <a href="https://www.instagram.com/kiidadofficial/" title="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-light mr-3"
                />
              </a>
              <a href="https://www.tiktok.com/@kiidadofficial" title="Youtube">
                <FontAwesomeIcon icon={faYoutube} className="text-light mr-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-white">
          <div className="row ">
            <div className="col-md-3 py-3">
              <div className="h6">KIIDAD</div>
              <hr />
              <p>
              Our aim is to inspire the proud people who are chasing success by stimulating them with pride and colorfulness. It is our desire to see you awaken new hopes and proudly pursue success. You all are kings and queens to us.
              </p>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Products</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Men's Clothing
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                   Men's Clothing
                  </Link>
                </li>
                {/* <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Smartwatch
                  </Link>
                </li> */}
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                   Footwear
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Policy</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/return_policy"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Return Policy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/documentation"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Terms Of Use
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/policy"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/contact-us"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/about_us"
                    className="text-decoration-none text-white stretched-link"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Address</div>
              <hr />
              <address>
                <strong>KIIDAD Warehouse</strong>
                <br />
                Jayasewana 
                <br />
                Arandara
                <br />
                Atala
                <br />
              </address>
              <div className="h6">Customer Care</div>
              <hr />
              <IconTelephone /> +94 71 733 2383
              <br />
              <IconEnvelope /> hello@kiidad.com
            </div>
          </div>
        </div>
        <div className="container-fluid bg-secondary text-white text-center">
          <div className="row">
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconBriefcase className="text-warning" /> Partner with us
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconBadgeAd className="text-info" /> Advertise
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconGift className="text-dark" /> Gift
              </Link>
            </div>
            <div className="col-md-3 py-2">
              © 2009-{new Date().getFullYear()} React-E-Commerce.com
            </div>
            <div className="col-md-3 py-2 bg-white">
              <img
                src="../../images/payment/american_express.webp"
                width="32"
                alt="American Express"
                className="mr-2"
              />
              <img
                src="../../images/payment/maestro.webp"
                width="32"
                alt="Maestro"
                className="mr-2"
              />
              <img
                src="../../images/payment/netbanking.webp"
                width="32"
                alt="Net Banking"
                className="mr-2"
              />
              <img
                src="../../images/payment/paypal.webp"
                width="32"
                alt="Paypal"
                className="mr-2"
              />
              <img
                src="../../images/payment/rupay.webp"
                width="32"
                alt="Rupay"
                className="mr-2"
              />
              <img
                src="../../images/payment/upi.webp"
                width="32"
                alt="UPI"
                className="mr-2"
              />
              <img
                src="../../images/payment/visa.webp"
                width="32"
                alt="Visa"
                className="mr-2"
              />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
