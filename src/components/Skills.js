import React from "react";

const Skills = () => {
  return (
    <div className="container-fluid p-4 my-4">
      <div className="row welcome text-center m-4" >
        <div className="col-12">
          <h1 className="display-4">Skills</h1>
        </div>
      </div>
      <div className="row text-center padding">
        <div className="col-xs-6 col-sm-3 col-md-2">
          <i className="fab fa-node-js"></i>
          <h4>NodeJS</h4>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2">
          <i className="fab fa-react"></i>
          <h4>React</h4>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2">
          <i className="fas fa-database"></i>
          <h4>Database</h4>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2">
          <i className="fab fa-python"></i>
          <h4>Python</h4>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2">
          <i className="fab fa-html5"></i>
          <h4>HTML</h4>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2">
          <i className="fab fa-css3-alt"></i>
          <h4>CSS</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;