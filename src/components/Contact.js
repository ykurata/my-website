import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="row justify-content-center offset">
      <div className="col-md-5 text-center">
        <h2 className="heading">Contact</h2>
        <div className="heading-underline-white"></div>
        <p>
        <a className="email" href="mailto:yasukokurata@gmail.com" target="_blank" rel="noopener noreferrer">yasukokurata@gmail.com</a>
        </p>
        <a href="https://www.linkedin.com/in/yasuko-kurata/" target="_blank" rel="noopener noreferrer" >
          <i className="fab fa-linkedin fa-3x mr-3"></i>
        </a>
        <a href="https://github.com/ykurata" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x"></i>
        </a>
        <p className="created mt-5">&copy;&nbsp;2020 Created by Yasuko Kurata</p>
      </div>
    </section>
  );
};

export default Contact;