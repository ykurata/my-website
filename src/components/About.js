import React from "react";
import Slide from 'react-reveal/Slide';

const About = () => {
  return (
    <div id="about" className="container padding offset">
      <div className="narrow">
        <Slide bottom>
          <div className="col-lg-12 text-center">
            <h2 className="heading">About Me</h2>
            <div className="heading-underline"></div>
            <div className="text-left">
              <p>Hi I'm Yasuko Kurata, web developer who's looking for an opportunity to join a great team!</p>
              <p>
                I started my coding journey through the online tech school <a href="https://teamtreehouse.com">Team Treehouse</a> where I completed both the &nbsp;
                <strong>Full Stack Javascript Techdegree</strong> and the <strong>Python Web Development Techdegree</strong>.
                Recently, I completed <strong>Hatchways Project-Based Development Course</strong>, where I worked within a team, and learned utilized git flow
                and issue tracking.
              </p>
              <p>
                I'm experienced in using various languages and frameworks such as NodeJS, Express, React, Python and Django,
                along with understanding of relational and non-relational databases.
                I continue to learn new skills on my own by building my own projects and doing daily code challenges. 
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;