import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="row justify-content-center offset">
      <div className="col-md-5 text-center">
        <h2 className="heading">Contact</h2>
        <div className="heading-underline"></div>
        <p>yasukokurata@gmail.com</p>
        <a href="https://www.linkedin.com/in/yasuko-kurata/" target="_blank" rel="noopener noreferrer" >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/ykurata" target="_blank" rel="noopener noreferrer" >
          <i className="fab fa-github"></i>
        </a>
      </div>

    </div>
  );
};

export default Contact;