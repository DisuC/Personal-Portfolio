import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub,} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import {FaFacebook, FaLinkedinIn} from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Disadi Chanmini</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DC</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                  href="https://github.com/DisuC"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <AiFillGithub/>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://Wa.me/+94705646136"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <IoLogoWhatsapp/>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.linkedin.com/in/disadi-chanmini-022165251 "
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <FaLinkedinIn/>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.facebook.com/disadi.chanmini?mibextid=LQQJ4d"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <FaFacebook/>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="mailto:disadichanmini@gmail.com"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <SiGmail/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
