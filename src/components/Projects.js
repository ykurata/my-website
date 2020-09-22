import React, { Fragment } from "react";
import Media from "react-media";
import expense from "../image/expense-manager-add-expense.gif";
import yajiji from "../image/yajiji2.gif";
import myRecipes from "../image/my-recipes2.gif";
import lovingSitter from "../image/loving-sitter.gif";
import python12 from "../image/python-project12.png";

import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <section id="projects" className="container padding offset">
      <div className="inner-div">
        <div className="row padding">
          <div className="col-12 text-center">
            <h2 className="heading">Projects</h2>
            <div className="heading-underline"></div>
          </div>

          <Media
            queries={{ medium: "(min-width: 300px) and (max-width: 1199px)" }}
          >
            {(matches) =>
              matches.medium ? (
                <Fragment>
                  {/* Expense Manager */}
                  <Fade>
                    <div id="image" className="col-lg-6 image">
                      <a
                        href="https://yasuko-expense-manager.herokuapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={expense}
                          className="img-fluid"
                          alt="project"
                        />
                      </a>
                    </div>
                    <div className="col-lg-6 description">
                      <h2>
                        Expense Manager&nbsp;&nbsp;
                        <span className="badge badge-pill badge-danger">
                          New
                        </span>
                      </h2>
                      <h5>NodeJS / Express / React (Redux) / Postgres</h5>
                      <p>
                        This is an application for tracking your income and
                        expenses.
                      </p>
                      <ul>
                        <li className="list">
                          Authentication with JSON Web Token.
                        </li>
                        <li className="list">Save income and expense data.</li>
                        <li className="list">Display data with graphs.</li>
                        <li className="list">Filter data by month.</li>
                      </ul>
                      <a
                        href="https://github.com/ykurata/expense-tracker"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">GitHub</button>
                      </a>
                      <a
                        href="https://yasuko-expense-manager.herokuapp.com"
                        id="button-right"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </Fade>

                  {/* Yajiji shop-app */}
                  <Fade>
                    <div id="image" className="col-lg-6 image">
                      <a
                        href="https://yasuko-shop-app.herokuapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={yajiji} className="img-fluid" alt="project" />
                      </a>
                    </div>
                    <div className="col-lg-6 description">
                      <h2>
                        Yajiji (Buy and Sell)&nbsp;&nbsp;
                        <span className="badge badge-pill badge-danger">
                          New
                        </span>
                      </h2>
                      <h5>NodeJS / Express / React (Context) / Postgres</h5>
                      <p>This is an application for buying and selling items</p>
                      <ul>
                        <li className="list">
                          Authentication with JSON Web Token.
                        </li>
                        <li className="list">
                          Create new ads with multiple images.
                        </li>
                        <li className="list">
                          Search items either by the item's name or category.
                        </li>
                        <li className="list">Create own profile.</li>
                        <li className="list">
                          Real time messaging between the seller and the buyer.
                        </li>
                      </ul>
                      <a
                        href="https://github.com/ykurata/shop-app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info ">
                          GitHub
                        </button>
                      </a>
                      <a
                        href="https://yasuko-shop-app.herokuapp.com"
                        id="button-right"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </Fade>

                  {/* My Recipes */}
                  <Fade>
                    <div id="image" className="col-lg-6 image">
                      <a
                        href="https://yasuko-my-recipes.herokuapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={myRecipes}
                          className="img-fluid"
                          alt="project"
                        />
                      </a>
                    </div>
                    <div className="col-lg-6 description">
                      <h2>My Recipes</h2>
                      <h5>NodeJS / Express / React (Redux) / MongoDB</h5>
                      <p>
                        This is an application for saving and searching your
                        favourite recipes.
                      </p>
                      <ul className="mt-2">
                        <li className="list">
                          Authentication with JSON Web Token.
                        </li>
                        <li className="list">
                          Create new recipes with images.
                        </li>
                        <li className="list">
                          Search recipes either by the dish names or
                          ingredients.
                        </li>
                        <li className="list">
                          View recipes from user profiles.
                        </li>
                        <li className="list">
                          Send like and write reviews to other user's recipes.
                        </li>
                      </ul>
                      <a
                        href="https://github.com/ykurata/recipe-app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">GitHub</button>
                      </a>
                      <a
                        href="https://yasuko-my-recipes.herokuapp.com"
                        id="button-right"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </Fade>

                  {/* loving sitter */}
                  <Fade>
                    <div id="image" className="col-lg-6 image">
                      <a
                        href="https://hatchways-loving-sitter.herokuapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={lovingSitter}
                          className="img-fluid"
                          alt="project"
                        />
                      </a>
                    </div>
                    <div className="col-lg-6 description">
                      <h2>Loving Sitter</h2>
                      <h5>NodeJs / Express / React (Redux) / MongoDB</h5>
                      <p>
                        <b>Hatchways Co-op Program's project</b>
                      </p>
                      <p>
                        This application is for dog owners who need to find a
                        dog sitter, and dog sitters.{" "}
                      </p>
                      <ul>
                        <li className="list">
                          Authentication with JSON Web Token.
                        </li>
                        <li className="list">Create a profile.</li>
                        <li className="list">
                          Search dog sitters by location.
                        </li>
                        <li className="list">
                          Make online payment through Stripe.
                        </li>
                        <li className="list">
                          Send messages to potential sitters.
                        </li>
                      </ul>
                      <a
                        href="https://github.com/ykurata/Loving-Sitter"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">GitHub</button>
                      </a>
                      <a
                        href="https://hatchways-loving-sitter.herokuapp.com"
                        id="button-right"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </Fade>

                  {/* Social Network with Django  */}
                  <Fade>
                    <div id="image" className="col-lg-6 image">
                      <a
                        href="https://python-techdegree-12.herokuapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={python12}
                          className="img-fluid"
                          alt="project"
                        />
                      </a>
                    </div>
                    <div className="col-lg-6 description">
                      <h2>Social Network with Django</h2>
                      <h5>Python / Django / Sqlite</h5>
                      <p>
                        <b>Python Web Development Techdegree 12th project.</b>
                      </p>
                      <p>
                        A site where people can sign up to find projects that
                        need help or post their own projects for other people to
                        join.
                      </p>
                      <ul className="mt-2">
                        <li className="list">Session based authentication</li>
                        <li className="list">
                          Create a profile and new projects with positions.
                        </li>
                        <li className="list">Search projects by skills.</li>
                        <li className="list">Apply for positions.</li>
                        <li className="list">
                          Accept or refuse applications for projects you posted.
                        </li>
                      </ul>
                      <a
                        href="https://github.com/ykurata/techdegree-project-12"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">GitHub</button>
                      </a>
                      <a
                        href="https://python-techdegree-12.herokuapp.com"
                        id="button-right"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </Fade>
                </Fragment>
              ) : (
                <Fragment>
                  {/* Expense Manager  */}
                  <Fade>
                    <div className="col-lg-6">
                      <h2>
                        Expense Manager&nbsp;&nbsp;
                        <span className="badge badge-pill badge-danger">
                          New
                        </span>
                      </h2>
                      <h5>NodeJS / Express / React (Redux) / Postgres</h5>
                      <p>
                        This is an application for tracking your income and
                        expenses.
                      </p>
                      <ul>
                        <li>Authentication with JSON Web Token.</li>
                        <li>Save income and expense data.</li>
                        <li>Display data with graphs.</li>
                        <li>Filter data by month.</li>
                      </ul>
                      <a
                        href="https://github.com/ykurata/expense-tracker"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">GitHub</button>
                      </a>
                      <a
                        href="https://yasuko-expense-manager.herokuapp.com"
                        id="button-right"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">
                          Live Demo
                        </button>
                      </a>
                    </div>
                    <div id="image" className="col-lg-6">
                      <a
                        href="https://yasuko-expense-manager.herokuapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={expense}
                          className="img-fluid"
                          alt="project"
                        />
                      </a>
                    </div>
                  </Fade>

                  {/* Yajiji shop-app */}
                  <Fade>
                    <div id="image" className="col-lg-6">
                      <a
                        href="https://yasuko-shop-app.herokuapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={yajiji} className="img-fluid" alt="project" />
                      </a>
                    </div>
                    <div className="col-lg-6">
                      <h2>
                        Yajiji (Buy and Sell)&nbsp;&nbsp;
                        <span className="badge badge-pill badge-danger">
                          New
                        </span>
                      </h2>
                      <h5>NodeJS / Express / React (Context) / Postgres</h5>
                      <p>
                        This is an application for buying and selling items.
                      </p>
                      <ul>
                        <li>Authentication with JSON Web Token.</li>
                        <li>Create new ads with multiple images.</li>
                        <li>
                          Search items either by the item's name or category.
                        </li>
                        <li>Create own profile.</li>
                        <li>
                          Real time messaging between the seller and the buyer.
                        </li>
                      </ul>
                      <a
                        href="https://github.com/ykurata/shop-app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">GitHub</button>
                      </a>
                      <a
                        href="https://yasuko-shop-app.herokuapp.com"
                        id="button-right"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </Fade>

                  {/* My Recipes */}
                  <Fade>
                    <div className="col-lg-6">
                      <h2>My Recipes</h2>
                      <h5>NodeJS / Express / React (Redux) / MongoDB</h5>
                      <p>
                        This is an application for saving and searching your
                        favourite recipes.
                      </p>
                      <ul className="mt-2">
                        <li>Authentication with JSON Web Token.</li>
                        <li>Create new recipes with images.</li>
                        <li>
                          Search recipes either by the dish names or
                          ingredients.
                        </li>
                        <li>View recipes from user profiles.</li>
                        <li>
                          Send like and write reviews to other user's recipes.
                        </li>
                      </ul>
                      <a
                        href="https://github.com/ykurata/recipe-app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">GitHub</button>
                      </a>
                      <a
                        href="https://yasuko-my-recipes.herokuapp.com"
                        id="button-right"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">
                          Live Demo
                        </button>
                      </a>
                    </div>
                    <div id="image" className="col-lg-6">
                      <a
                        href="https://yasuko-my-recipes.herokuapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={myRecipes}
                          className="img-fluid"
                          alt="project"
                        />
                      </a>
                    </div>
                  </Fade>

                  {/* Loving sitter */}
                  <Fade>
                    <div id="image" className="col-lg-6">
                      <a
                        href="https://hatchways-loving-sitter.herokuapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={lovingSitter}
                          className="img-fluid"
                          alt="project"
                        />
                      </a>
                    </div>
                    <div className="col-lg-6">
                      <h2>Loving Sitter</h2>
                      <h5>NodeJS / Express / React (Redux) / MongoDB</h5>
                      <p>
                        <b>Hatchways Co-op Program's project</b>
                      </p>
                      <p>
                        This application is for dog owners who need to find a
                        dog sitter, and dog sitters.{" "}
                      </p>
                      <ul>
                        <li>Authentication with JSON Web Token.</li>
                        <li>Create a profile.</li>
                        <li>Search dog sitters by location.</li>
                        <li>Make online payments through Stripe.</li>
                        <li>Send messages to potential sitters.</li>
                      </ul>
                      <a
                        href="https://github.com/ykurata/Loving-Sitter"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">GitHub</button>
                      </a>
                      <a
                        href="https://hatchways-loving-sitter.herokuapp.com"
                        id="button-right"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </Fade>

                  {/* Social Network with Django  */}
                  <Fade>
                    <div className="col-lg-6">
                      <h2>Social Network with Django</h2>
                      <h5>Python / Django / Sqlite</h5>
                      <p>
                        <b>
                          Team Treehouse Python Web Development Techdegree 12th
                          project.
                        </b>
                      </p>
                      <p>
                        A site where people can sign up to find projects that
                        need help or post their own projects for other people to
                        join.
                      </p>
                      <ul className="mt-2">
                        <li>Session based authentication</li>
                        <li>
                          Create a profile and new projects with positions.
                        </li>
                        <li>Search projects by skills.</li>
                        <li>Apply for positions.</li>
                        <li>
                          Accept or refuse applications for projects you posted.
                        </li>
                      </ul>
                      <a
                        href="https://github.com/ykurata/techdegree-project-12"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">GitHub</button>
                      </a>
                      <a
                        href="https://python-techdegree-12.herokuapp.com"
                        id="button-right"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-info">
                          Live Demo
                        </button>
                      </a>
                    </div>
                    <div id="image" className="col-lg-6">
                      <a
                        href="https://python-techdegree-12.herokuapp.com"
                        id="button-right"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={python12}
                          className="img-fluid"
                          alt="project"
                        />
                      </a>
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
