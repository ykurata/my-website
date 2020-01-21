import React from "react";
import lovingSitter from '../image/loving-sitter.png';
import records from '../image/records-database.png';
import project10 from '../image/project10.png';
import python12 from '../image/python-project12.png';
import birthday from '../image/birthday-reminder.png';



const Projects = () => {
  return (
    <div id="projects" className="container-fluid padding">  
      <div className="inner-div">
        <div className="row padding">
          <div className="col-12 text-center">
            <h2 className="heading">Projects</h2>
            <div className="heading-underline"></div>
          </div>

          {/* Loving Sitter */}
          <div className="col-lg-6">
            <h2>Loving Sitter</h2>
            <h5>MongoDB / NodeJS / Express / React</h5>
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
          
          {/* Records database */}
          <div className="col-lg-6">
            <img src={records} className="img-fluid"></img>
          </div>
          <div className="col-lg-6">
            <h2>Records Database</h2>
            <h5>NodeJS / Sqlite / HTML / CSS</h5>
            <p>This application is for the music and record lovers. Great for storing and searching your record collection! <br></br>
              SQL based app that helps you to save your record data.
              Session based authentication, and CRUD operations.
            </p>
            <br></br>
            <a href="https://github.com/ykurata/SQL-records-database" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">GitHub</button></a>
            <a href="https://sql-records-database.herokuapp.com" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">Live Demo</button></a>
          </div>
          
          {/* Rest api with React */}
          <div className="col-lg-6">
            <h2>REST API with React</h2>
            <h5>MongoDB / NodeJS / Express / React</h5>
            <p>A React app with and a REST API and Express. <br></br>
              Team Treehouse Full Stack JavaScript Techdegree's 10th projecct.
              An app that users can find courses.
              User can create an account and find, create, update, delete courses.
            </p>
            <br></br>
            <a href="https://github.com/ykurata/FSJS-techdegree-project-10" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">GitHub</button></a>
            <a href="https://fsjs-techdegree-10.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">Live Demo</button></a>
          </div>
          <div className="col-lg-6">
            <img src={project10} className="img-fluid"></img>
          </div>
          
          {/* Social Network with Django */}
          <div className="col-lg-6">
            <img src={python12} className="img-fluid"></img>
          </div>
          <div className="col-lg-6">
            <h2>Social Network with Django</h2>
            <h5>Python / Django / Sqlite</h5>
            <p>Team Treehouse Python Web Development Techdegree 12th project.<br></br>
              A site where people can sign up to find projects that
              need help or post their own projects for other people to join.<br></br>
              You can accept or refuse applications applied for projects you posted.
            </p>
            <br></br>
            <a href="https://github.com/ykurata/techdegree-project-12" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">GitHub</button></a>
            <a href="https://python-techdegree-12.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">Live Demo</button></a>
          </div>

          <div className="col-lg-6">
            <h2>Birthday Reminder</h2>
            <h5>Python / Django / Sqlite</h5>
            <p>An app that helps you remember your friends birthdays by showing a reminder on the page. <br></br>
              User can login and save, edit or delete birthdays you don't want to forget.
              Display a notification on the day of your friends or families birthday so you no longer have to check facebook.
            </p>
            <br></br>
            <a href="https://github.com/ykurata/Birthday-reminder" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">GitHub</button></a>
            <a href="https://python-birthday-reminder.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">Live Demo</button></a>
          </div>
          <div className="col-lg-6">
            <img src={birthday} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;