import React from "react";
import {useSpring, animated, config} from 'react-spring';

import profilePhoto from '../image/profile-photo.jpg';

const About = () => {
  const props = useSpring({ 
    from: {opacity: 0}, 
    to: {opacity: 1 },
    delay: 1000,
    config: {duration: 1000}
  })

  return (
    <animated.div style={props} id="about" className="container-fluid padding offset">
      <div className="narrow">
        <div className="row padding">
          <div className="col-md-12 col-lg-6">
            <img className="rounded-circle" src={profilePhoto} alt="me"></img>
          </div>
          <div className="col-md-12 col-lg-6">
            <h2 className="heading">About Me</h2>
            
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
    </animated.div>
  );
};

export default About;