import React from "react";

const About = () => {
  return (
    <section id="about" className="container padding offset">
      <div className="narrow">
        <div className="col-lg-12 text-center">
          <h2 className="heading">About Me</h2>
          <div className="heading-underline"></div>
          <div className="text-left">
            <p>Hi I'm Yasuko Kurata, web developer who's looking for an opportunity to join a great team!</p>
            <p>
              I started my coding journey through the online tech school <a href="https://teamtreehouse.com" target="_blank" rel="noopener noreferrer">Team Treehouse</a> where I completed both the
              Full Stack Javascript Techdegree and the Python Web Development Techdegree.
              Recently, I completed Hatchways Project-Based Development Course, where I worked within a team, and learned utilized git flow
              and issue tracking.
            </p>
            <p>
              I'm experienced in using various languages and frameworks such as NodeJS, Express, React, Python and Django,
              along with understanding of relational and non-relational databases.
              I continue to learn new skills by building my own projects and doing daily code challenges. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;