import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-dark">
        <img
          width="150px"
          className="ml-5"
          src="https://www.swingeducation.com/wp-content/uploads/2018/05/swing-logo_website@2x.png"
        />
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <span
          className="bg-transparent  border-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler shadow-none outline-none text-decoration-none">
            <i
              className="fa fa-navicon shadow-none outline-none text-decoration-none"
              style={{ color: "#fff", fontSize: "28px;" }}
            ></i>
          </span>
        </span>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <a
                className="nav-link ml-4"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                For Schools&nbsp;
                <span
                  className="fa fa-angle-down "
                  style={{ fontSize: "18px;", color: "#fff" }}
                />
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Become a Sub
                </a>
                <a className="dropdown-item" href="#">
                  FAQ
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link ml-4"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                For Teachers&nbsp;
                <i
                  class="fa fa-angle-down"
                  style={{ fontSize: "10px;", color: "#fff" }}
                ></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Become A Teacher
                </a>
                <a className="dropdown-item" href="#">
                  FAQ
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link ml-4" href="#">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link ml-4" href="#">
                Reading + Resource
              </a>
            </li>
            <button
              style={{
                fontFamily: "Helvetica",
                fontSize: "14px",
                lineHeight: "16.9px",
                verticalAlign: "middle",
                letterSpacing: "0.5px",
                wordSpacing: "0px",
                margin: "0px",
                padding: "10px 30px 8px",
                fontWeight: 700,
                fontStyle: "normal",
                fontVariant: "normal",
                textTransform: "none",
                textDecoration: "none solid rgb(21, 51, 54)",
                textAlign: "center",
                textIndent: "0px"
              }}
              className="btn btn-warning ml-4 my-2  my-lg-0"
              type="Apply Now"
            >
              Apply Now
            </button>

            <button
              style={{
                fontFamily: "Helvetica",
                fontSize: "14px",
                lineHeight: "16.9px",
                verticalAlign: "middle",
                letterSpacing: "0.5px",
                wordSpacing: "0px",
                margin: "0px",
                padding: "10px 30px 8px",
                fontWeight: 700,
                fontStyle: "normal",
                fontVariant: "normal",
                textTransform: "none",
                textDecoration: "none solid rgb(21, 51, 54)",
                textAlign: "center",
                textIndent: "0px"
              }}
              className="btn btn-warning ml-4  my-2 my-sm-0"
              type="  Login"
            >
              Login
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
