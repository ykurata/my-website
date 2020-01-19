import React from "react";
import profilePhoto from '../image/profile-photo.jpg';

const About = () => {
  return (
    <div id="about" className="container-fluid offset">
      <div className="narrow">
        <div className="row padding">
          <div className="col-lg-6">
            <img className="rounded-circle" src={profilePhoto}></img>
          </div>
          <div className="col-lg-6">
            <h2 className="heading">About Me</h2>
            {/* <div className="heading-underline"></div> */}
            <p>Hi I'm Yasuko Kurata, web developer who's looking for an opportunity to join a great team!</p>
            <p>
              I learned my coding skills from the online tech school <a href="https://teamtreehouse.com">Team Treehouse</a> where I completed both the &nbsp;
              <strong>Full Stack Javascript Techdegree</strong> and the <strong>Python Web Development Techdegree</strong>.
            </p>
            <p>
              Recently, I completed <strong>Hatchways Project-Based Development Course</strong>, where I worked within a team, and learned utilized git flow
              and issue tracking.
            </p>
            <p>
              I'm experienced in using various languages and frameworks such as NodeJS, Express, Python and Django,
              along with understanding of relational and non-relational databases.
            </p>
            <p>
              I continue to learn new skills on my own but I'm also eager to learn from other as a member of a team!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;