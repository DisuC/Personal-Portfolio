import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Disadi Chanmini </span>
            from <span className="purple"> Mathara, Srilanka.</span>
            <br />
            <br/>
            I'm currently studied at Informatics Institute of Technology affiliated by University of Westminster
            <br/>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight/> Collecting Stamp
            </li>
            <li className="about-activity">
              <ImPointRight/> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight/> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight/> Playing Musical Instruments

            </li>
          </ul>

          <p style={{color: "rgb(155 126 172)"}}>
            "Coding Dreams Into Reality,Byte by Byte.""{" "}
          </p>
          <footer className="blockquote-footer">Disadi Chanmini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
