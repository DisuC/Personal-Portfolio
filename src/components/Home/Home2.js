import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { SiGmail } from "react-icons/si";
import {AiFillGithub,} from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import {FaFacebook, FaLinkedinIn} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";
import Button from "react-bootstrap/Button";

const pdfUrl = "https://drive.google.com/uc?export=download&id=1Uw8vpa_n7R2g_zZwil6SXwxJLy2E5e2u";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python,Java, Javascript and PHP </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Frontend
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
            <br/>
            <div style={{
              alignItems: "center",
            }}>
              <Button
                  href={pdfUrl}
                  target="_blank"
                  style={{
                    marginTop: "20px",
                    borderRadius: "10px",
                    width:"30%",
                    border: "none",
                    background: "#007bff",
                    color: "white",
                    padding: "10px 20px",
                    display: "flex",
                    alignItems: "center",
                  }}
              >
                <CgFileDocument style={{ marginRight: "8px" }} /> Get My Resume
              </Button>
            </div>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                    href="https://github.com/DisuC"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillGithub/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://Wa.me/+94705646136" // Replace with your actual WhatsApp number
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                  <IoLogoWhatsapp/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.facebook.com/disadi.chanmini?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <FaFacebook/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/disadi-chanmini-022165251 "
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="mailto:disadichanmini@gmail.com"
                    className="icon-colour home-social-icons"
                >
                  <SiGmail/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
