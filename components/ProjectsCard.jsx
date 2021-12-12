import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <Fade left duration={1000} distance="40px">
        <Card className="shadow-lg--hover shadow mt-4 postion-card">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{data.name}</h3>
                <div className="project-image-container">
                  <img src={data.img1} alt="desktop image" className="img-1" />
                  <img src={data.img2} alt="mobile image" className="img-2" />
                </div>
                <p className="description mt-3">{data.desc}</p>
                <a
                  href={data.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Visit project
                </a>
                {data.github ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={data.github}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                ) : null}
                {data.link ? (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={data.link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demo</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
