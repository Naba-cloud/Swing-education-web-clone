import React from "react";
import "./Header.css";
import "../public/Lucky Fellas.ttf";

const Header = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className=" col-lg-12 m-0 p-0 w-100 co-1">
            <img
              className=" figure-img img-fluid p-0 m-0 w-100"
              src="https://swingeducation.com/wp-content/uploads/2018/08/hero_homepage-1.jpg"
            />

            <h1 id="h-text" className="carousel-caption">
              We're Hiring
            </h1>

            <p className="carousel-caption" id="p-text">
              Prevent further interruptions in the classroom this school year as
              a qualified, reliable SwingSub.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid con-2 ">
        <div className="row r-2">
          <div className=" col-lg-12 m-0 p-0 w-100 co-2">
            <img
              className="  img-fluid p-0 m-0 "
              src="https://swingeducation.com/wp-content/themes/x-child/mobile-hero-homepage.png"
            />
            <h1 className="carousel-caption " id="h-2-text">
              We're Hiring Subs this fall
            </h1>
            <p id="p-1-text" className="carousel-caption">
              Prevent further interruptions in the classroom this school year as
              a qualified, reliable SwingSub.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
