import React from "react";
import lovingSitter from '../image/loving-sitter.png';


const Projects = () => {
  return (
    <div id="projects" className="container-fluid padding">  
      <div className="row padding">
        <div className="col-12 text-center">
          <h2 className="heading">Projects</h2>
          <div className="heading-underline"></div>
        </div>
        
        <div className="col-lg-6">
          <h2>Loving Sitter</h2>
          <p>
            <b>Hatchways Project-Based Development Course's project<br></br></b>
            This application is for dog owners who need to find a dog sitter, <br></br>
            and dog sitters. <br></br>
            The app allows dog owners to find dog sitters 
            by viewing profiles and sending messages to potential sitters.
          </p>
          <br></br>
          <a href="https://github.com/ykurata/Loving-Sitter" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">GitHub</button></a>
          <a href="https://hatchways-loving-sitter.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">Live Demo</button></a>
        </div>
        <div className="col-lg-6">
          <img src={lovingSitter} className="img-fluid"></img>
        </div>

      </div>
    </div>
  );
};

export default Projects;