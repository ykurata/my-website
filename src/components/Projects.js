import React, { Fragment } from "react";
import Media from 'react-media';
import yajiji from '../image/yajiji2.gif';
import myRecipes from '../image/my-recipes2.gif';
import lovingSitter from '../image/loving-sitter.png';
import records from '../image/records-database.png';
import python12 from '../image/python-project12.png';

import Fade from 'react-reveal/Fade';

const Projects = () => {
  return (
    <section id="projects" className="container padding offset">  
      <div className="inner-div">
        <div className="row padding">
          <div className="col-12 text-center">
            <h2 className="heading">Projects</h2>
            <div className="heading-underline"></div>
          </div>

          <Media queries={{ medium: "(min-width: 300px) and (max-width: 1199px)" }}>
            {matches =>
              matches.medium ? (
                <Fragment>

                  {/* Yajiji shop-app */}
                  <Fade>
                    <div id="image" className="col-lg-6">
                      <a href="https://yasuko-shop-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img src={yajiji} className="img-fluid" alt="project" />
                      </a>
                    </div>
                    <div className="col-lg-6">
                      <h2>Yajiji (Buy and Sell)&nbsp;&nbsp;<span className="badge badge-pill badge-danger">New</span></h2>
                      <h5>NodeJS / Express / React / Postgres</h5>
                      <p><b>Responsive for both web and mobile.</b></p>
                      <p>This is an application for buying and selling items</p>
                      <ul>
                        <li>Authentication with JWT token.</li>
                        <li>Create new adds with images.</li>
                        <li>Search items either by the item's name or category.</li>
                        <li>Create own profile.</li>
                        <li>Send messages to the person who posted the add.</li>
                      </ul>
                      <a href="https://github.com/ykurata/shop-app" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info ">GitHub</button></a>
                      <a href="https://yasuko-shop-app.herokuapp.com/" id="button-right" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">Live Demo</button></a>
                    </div>
                  </Fade>

                  {/* My Recipes */}
                  <Fade>
                    <div id="image" className="col-lg-6">
                      <a href="https://yasuko-my-recipes.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={myRecipes} className="img-fluid" alt="project"/></a>
                    </div>
                    <div className="col-lg-6">
                      <h2>My Recipes&nbsp;&nbsp;<span className="badge badge-pill badge-danger">New</span></h2>
                      <h5>NodeJS / Express / React / MongoDB</h5>
                      <p><b>Responsive for both web and mobile.</b></p>
                      <p>This is an application for saving and searching your favourite recipes.</p>  
                      <ul className="mt-2">
                        <li>Authentication with JWT token.</li>
                        <li>Create new recipes with images.</li>
                        <li>Search recipes either by the dish names or ingredients.</li>
                        <li>View recipes from user profiles.</li>
                        <li>Send like and write reviews to other user's recipes.</li>
                      </ul>
                      <a href="https://github.com/ykurata/recipe-app" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">GitHub</button></a>
                      <a href="https://yasuko-my-recipes.herokuapp.com/" id="button-right" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">Live Demo</button></a>
                    </div>
                  </Fade>

                  {/* loving sitter */}
                  <Fade>
                    <div id="image" className="col-lg-6">
                      <a href="https://hatchways-loving-sitter.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={lovingSitter} className="img-fluid" alt="project"/></a>
                    </div>
                    <div className="col-lg-6">
                      <h2>Loving Sitter</h2>
                      <h5>NodeJs / Express / React / MongoDB</h5>
                      <p><b>Hatchways Project-Based Development Course's project</b></p>
                      <p>This application is for dog owners who need to find a dog sitter, and dog sitters. </p>
                      <ul>
                        <li>Authentication with JWT token.</li>
                        <li>Create a profile.</li>
                        <li>Search dog sitters by location.</li>
                        <li>View dog sitters profiles.</li>
                        <li>Send messages to potential sitters.</li>
                      </ul>        
                      <a href="https://github.com/ykurata/Loving-Sitter" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">GitHub</button></a>
                      <a href="https://hatchways-loving-sitter.herokuapp.com/" id="button-right" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">Live Demo</button></a>
                    </div>
                  </Fade>
                  
                  {/* records database */}
                  <Fade>
                    <div id="image" className="col-lg-6">
                      <a href="https://sql-records-database.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src={records} className="img-fluid" alt="project"/></a>
                    </div>
                    <div className="col-lg-6">
                      <h2>Records Database</h2>
                      <h5>NodeJS / HTML / CSS / Sqlite</h5>
                      <p>This application is for the music and record lovers. Great for storing and searching your record collection!</p>
                      <ul>
                        <li>Session based authentication.</li>
                        <li>Create new record data.</li>
                        <li>Search records by artist name, album name and genre.</li>
                        <li>Edit and delete records data.</li>
                      </ul>
                      <a href="https://github.com/ykurata/SQL-records-database" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">GitHub</button></a>
                      <a href="https://sql-records-database.herokuapp.com" id="button-right" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">Live Demo</button></a>
                    </div>
                  </Fade>  
                  
                  {/* Social Network with Django  */}
                  <Fade>
                    <div id="image" className="col-lg-6">
                      <a href="https://python-techdegree-12.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={python12} className="img-fluid" alt="project"/></a>
                    </div>
                    <div className="col-lg-6">
                      <h2>Social Network with Django</h2>
                      <h5>Python / Django / Sqlite</h5>
                      <p><b>Python Web Development Techdegree 12th project.</b></p>
                      <p>A site where people can sign up to find projects that
                      need help or post their own projects for other people to join.</p>
                      <ul className="mt-2">
                        <li>Session based authentication</li>
                        <li>Create a profile and new projects with positions.</li>
                        <li>Search projects by skills.</li>
                        <li>Apply for positions.</li>
                        <li>Accept or refuse applications for projects you posted.</li>
                      </ul>
                      <a href="https://github.com/ykurata/techdegree-project-12" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">GitHub</button></a>
                      <a href="https://python-techdegree-12.herokuapp.com/" id="button-right" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">Live Demo</button></a>
                    </div>
                  </Fade>
            
                </Fragment>
              ) : (
                 
                <Fragment>
                  {/* Yajiji shop-app */}
                  <Fade>
                    <div className="col-lg-6">
                      <h2>Yajiji (Buy and Sell)&nbsp;&nbsp;<span className="badge badge-pill badge-danger">New</span></h2>
                      <h5>NodeJS / Express / React / Postgres</h5>
                      <p><b>Responsive for both web and mobile.</b></p>
                      <p>This is an application for buying and selling items.</p>
                      <ul>
                        <li>Authentication with JWT token.</li>
                        <li>Create new adds with images.</li>
                        <li>Search items either by the item's name or category.</li>
                        <li>Create own profile.</li>
                        <li>Send messages to the person who posted the add.</li>
                      </ul>
                      <a href="https://github.com/ykurata/shop-app" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">GitHub</button></a>
                      <a href="https://yasuko-shop-app.herokuapp.com/" id="button-right" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">Live Demo</button></a>
                    </div>
                    <div id="image" className="col-lg-6">
                      <a href="https://yasuko-shop-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={yajiji} className="img-fluid" alt="project" /></a>
                    </div>
                  </Fade>


                  {/* My Recipes */}
                  <Fade>
                    <div id="image" className="col-lg-6">
                      <a href="https://yasuko-my-recipes.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={myRecipes} className="img-fluid" alt="project"/></a>
                    </div>
                    <div className="col-lg-6">
                      <h2>My Recipes&nbsp;&nbsp;<span className="badge badge-pill badge-danger">New</span></h2>
                      <h5>NodeJS / Express / React / MongoDB</h5>                    
                      <p><b>Responsive for both web and mobile.</b></p>
                      <p>This is an application for saving and searching your favourite recipes.</p>  
                      <ul className="mt-2">
                        <li>Authentication with JWT token.</li>
                        <li>Create new recipes with images.</li>
                        <li>Search recipes either by the dish names or ingredients.</li>
                        <li>View recipes from user profiles.</li>
                        <li>Send like and write reviews to other user's recipes.</li>
                      </ul>
                      <a href="https://github.com/ykurata/recipe-app" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">GitHub</button></a>
                      <a href="https://yasuko-my-recipes.herokuapp.com/" id="button-right" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">Live Demo</button></a>
                    </div>
                  </Fade>
                  

                  {/* Loving sitter */}
                  <Fade>
                    <div className="col-lg-6">
                      <h2>Loving Sitter</h2>
                      <h5>NodeJS / Express / React / MongoDB</h5>
                      <p><b>Hatchways Project-Based Development Course's project</b></p>
                      <p>This application is for dog owners who need to find a dog sitter, and dog sitters. </p>
                      <ul>
                        <li>Authentication with JWT token.</li>
                        <li>Create a profile.</li>
                        <li>Search dog sitters by location.</li>
                        <li>View dog sitters profiles.</li>
                        <li>Send messages to potential sitters.</li>
                      </ul>   
                      <a href="https://github.com/ykurata/Loving-Sitter" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">GitHub</button></a>
                      <a href="https://hatchways-loving-sitter.herokuapp.com/" id="button-right" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">Live Demo</button></a>
                    </div>
                    <div id="image" className="col-lg-6">
                      <a href="https://hatchways-loving-sitter.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={lovingSitter} className="img-fluid" alt="project"/></a>
                    </div>
                  </Fade>
                  
              
                  {/* Records database  */}
                  <Fade>
                    <div id="image" className="col-lg-6">
                      <a href="https://sql-records-database.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src={records} className="img-fluid" alt="project"/></a>
                    </div>
                    <div className="col-lg-6">
                      <h2>Records Database</h2>
                      <h5>NodeJS / HTML / CSS / Sqlite</h5>
                      <p>This application is for the music and record lovers. Great for storing and searching your record collection!</p>
                      <ul>
                        <li>Session based authentication.</li>
                        <li>Create new record data.</li>
                        <li>Search records by artist name, album name and genre.</li>
                        <li>Edit and delete records data.</li>
                      </ul>
                      <a href="https://github.com/ykurata/SQL-records-database" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">GitHub</button></a>
                      <a href="https:// loving sitter//sql-records-database.herokuapp.com" id="button-right" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">Live Demo</button></a>
                    </div>
                  </Fade>
              
                  {/* Social Network with Django  */}
                  <Fade>
                    <div className="col-lg-6">
                      <h2>Social Network with Django</h2>
                      <h5>Python / Django / Sqlite</h5>
                      <p><b>Team Treehouse Python Web Development Techdegree 12th project.</b></p>
                      <p>A site where people can sign up to find projects that
                      need help or post their own projects for other people to join.</p>
                      <ul className="mt-2">
                        <li>Session based authentication</li>
                        <li>Create a profile and new projects with positions.</li>
                        <li>Search projects by skills.</li>
                        <li>Apply for positions.</li>
                        <li>Accept or refuse applications for projects you posted.</li>
                      </ul>
                      <a href="https://github.com/ykurata/techdegree-project-12" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">GitHub</button></a>
                      <a href="https://python-techdegree-12.herokuapp.com/" id="button-right" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">Live Demo</button></a>
                    </div>
                    <div id="image" className="col-lg-6">
                      <a href="https://python-techdegree-12.herokuapp.com/" id="button-right" rel="noopener noreferrer"><img src={python12} className="img-fluid" alt="project"/></a>
                    </div>
                  </Fade>
              
                </Fragment>
              )
            }
          </Media>
        </div>
      </div>
    </section>
  );
};

export default Projects;