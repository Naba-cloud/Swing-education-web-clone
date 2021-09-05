import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="f-sec container-fluid p-3 mt-5">
        <div className="row ">
          <div className="col-lg-2 prt-1 mt-3">
            <h4 id="heads">Teachers</h4>
            <p id="paras">How It Works</p>
            <p id="paras">Jobs</p>
            <p id="paras">FAQ</p>

            <p id="paras">Support Center</p>
          </div>
          <div className="col-lg-2 prt-2  mt-3">
            <h4 id="heads">Find A Sub</h4>
            <p id="paras">For Districts</p>
            <p id="paras">For Charters</p>
            <p id="paras">For Private Schools</p>
            <p id="paras">FAQ</p>

            <p id="paras">Success Stories</p>
            <p id="paras">Support Center</p>
          </div>
          <div className="col-lg-2  mt-3">
            <h4 id="heads">About Swing</h4>
            <p id="paras">About Us</p>
            <p id="paras">Careers at Corporate</p>
            <p id="paras">Hall of Fame</p>
            <p id="paras">Resources</p>
          </div>
          <div className="col-lg-6 mt-5 ml-auto mr-auto mb-auto justify-content-center ">
            <form>
              <div
                style={{ background: "white" }}
                className="rounded pt-5  form-group  "
              >
                <h1 className=" text-dark mt-3 ">Sign Up</h1>
                <button
                  style={{
                    backgroundColor: "#fbb200",
                    color: "#283c5d",
                    fontSize: "15px",
                    lineHeight: "40px"
                  }}
                  type="button"
                  className=" font-weight-bold shadow-none btn border-0 p-0 mt-3 w-50 h-25"
                >
                  I'M A SUB
                </button>
                <br />

                <button
                  type="button"
                  style={{
                    backgroundColor: "#fbb200",
                    color: "#283c5d",
                    fontSize: "15px",
                    lineHeight: "40px"
                  }}
                  className="font-weight-bold border-0 shadow-none w-50 h-25 btn btn-lg  mt-4 p-0"
                >
                  I'M A SCHOOL
                </button>
                <br />
                <p className="text-primary mt-3 pt-3 h-75">Contact Support</p>
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div style={{ background: "#283c5d" }} className="container-fluid ">
        <div className="row f-sec-2 ">
          <div className="  justify-content-center col-lg-1 ">
            <img
              className="rounded icon-sec-1 imc1 "
              src="https://app.trustlock.co/images/TrustLockOriginal/trust-seal-badge-ssl.png"
            />
          </div>

          <div className=" justify-content-center  col-lg-1">
            <img
              className="rounded icon-sec-1 imc1"
              src="https://app.trustlock.co/images/TrustLockOriginal/trust-seal-badge-ssl.png"
            />
          </div>

          <div className=" justify-content-center  col-lg-1">
            <img
              className=" imc1 rounded icon-sec-1 "
              src="https://app.trustlock.co/images/TrustLockOriginal/trust-seal-badge-privacy.png"
            />
          </div>

          <div className="col-lg-6 mt-5 ml-5">
            <ul className="social">
              <li>
                <a href="https://twitter.com/" title="">
                  <span
                    id="t-icon"
                    style={{ marginTop: "20px" }}
                    class="icon fa fa-twitter "
                  ></span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" title="">
                  <span
                    id="f-icon"
                    style={{ marginTop: "20px" }}
                    className="icon fa fa-facebook"
                  ></span>
                </a>
              </li>
              <li>
                <a href="https://plus.google.com/" title="">
                  <span
                    id="i-icon"
                    style={{ marginTop: "20px" }}
                    class="icon fa fa-instagram"
                  ></span>
                </a>
              </li>
              <li>
                <a href="https://plus.google.com/" title="">
                  <span
                    id="l-icon"
                    style={{ marginTop: "20px" }}
                    class="icon fa fa-linkedin"
                  ></span>
                </a>
              </li>
            </ul>
            <br />
            <small style={{ color: "white" }} className="mt-3 l-s text-center ">
              © SWING EDUCATION, SAN MATEO, CA 94402 <br />
              Swing, Swing Education, and the logo at the top of this page{" "}
              <br />
              are trademarks of Swing Education, Inc.
              <br /> Terms of Service
            </small>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
