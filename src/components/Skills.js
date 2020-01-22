import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="jumbotron offset">
      <div className="col-12 text-center">
        <h2 className="heading">Skills</h2>
        <div className="heading-underline"></div>
      </div>
      <div className="row text-center">
        <div className="col-xs-6 col-sm-3 col-md-2">
          <div className="skills">
            <i className="fab fa-node-js fa-4x" data-fa-transform="shrink-3 up-5"></i>
            <h4>NodeJS</h4>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2">
          <div className="skills">
            <i className="fab fa-react fa-4x" data-fa-transform="shrink-3 up-5"></i>
            <h4>React</h4>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2">
          <div className="skills">
            <i className="fas fa-database fa-4x" data-fa-transform="shrink-3 up-5"></i>
            <h4>Database</h4>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2">
          <div className="skills">
            <i className="fab fa-python fa-4x" data-fa-transform="shrink-3 up-5"></i>
            <h4>Python</h4>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2">
          <div className="skills">
            <i className="fab fa-html5 fa-4x" data-fa-transform="shrink-3 up-5"></i>
            <h4>HTML</h4>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2">
          <div className="skills">
            <i className="fab fa-css3-alt fa-4x" data-fa-transform="shrink-3 up-5"></i>
            <h4>CSS</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;