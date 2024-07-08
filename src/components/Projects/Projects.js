import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/FastApi.jpg";
import editor from "../../Assets/Projects/Synotec.jpg";
import chatify from "../../Assets/Projects/toursl.jpg";
import suicide from "../../Assets/Projects/ShoppingManager.jpg";
import bitsOfCode from "../../Assets/Projects/SaffeX.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Synotech"
              description="Organizing an ideathon quizthon and more in a zonal level for ICT day of Walasmulla national
              college."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SafeX Smart Construction Helmet"
              description="I served as the Front-End Developer for a pioneering university project focused on developing a Smart
                            Helmet for the construction industry. In collaboration with a dynamic team, our goal was to
                            revolutionize safety and efficiency by translating innovative concepts into a user-friendly interface for
                            this cutting-edge construction technology"
              ghLink="https://github.com/HeSithGX2005/SDGP"
              demoLink="https://poetic-twilight-283bae.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Tour SL"
                description="In the Web Design and Development module, I led the creation of a dynamic tourism website using
                          JavaScript, HTML, and CSS. Our project seamlessly integrates engaging design elements with
                          interactive features, providing users with a visually appealing and user-friendly platform to explore and
                          plan their travel experiences"
                ghLink="https://github.com/vish-mv/toursl.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Fast Api Project"
              description="Develop Backend For Company Website  Using Fast ApI"
              ghLink="https://github.com/DisuC/Metana_Bootcamp_Form_Backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Online Shopping Manager System"
              description="Developed an Online Shopping Management System in Java, utilizing OOP principles to create
                          distinct interfaces for customers and administrators, with features like dynamic pricing and efficient
                          inventory management"
              ghLink="https://github.com/DisuC/Online-Shopping-Management-System-1"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
