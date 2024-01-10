import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faB,
  faFaceFrown,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Facebook, FacebookRounded } from '@mui/icons-material';
import React from "react";
import { Link, Navigate } from "react-router-dom";
import Blog1 from "./Blog1";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { login } from "../Vendor/Re_values";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../BASE_URL";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer(props) {
  const [show1, setShow1] = useState(false);
  const [pass, setPass] = useState({
    old_password: "",
    npassword: "",
    new_password: "",
  });

  const [email, setEmail] = useState({
    email_id: "",
  });

  const txtEmail = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const sendMail = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("userToken");

    const { email_id } = email;

    if (!email.email_id) {
      toast.error('Please enter email address!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.email_id)) {
      toast.error('Invalid email address!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }



    const res = await fetch(`${BASE_URL}subscribe`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_id,
      }),
    });
    const data = await res.json();
    if (data.code == 200) {
      toast.success('Your Subscription is successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      setEmail({ email_id: "" });
    }

    if (data.code == 403) {
      toast.error('You are already Subscriber!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      setEmail({ email_id: "" });
    }
  };

  const Close = () => setShow1(false);
  const token = localStorage.getItem("userToken");
  const Show = () => {
    token ? setShow1(true) : alert("Login First");
  };

  const txt = (e) => {
    const { name, value } = e.target;
    setPass({ ...pass, [name]: value });
  };

  const changePassword = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("userToken");

    const { old_password, new_password } = pass;

    const res = await fetch(`${BASE_URL}user/updatepassword`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        old_password,
        new_password,
      }),
    });
    const data = await res.json();


    if (data.code == 200) {
      Close();
    }
  };

  return (
    <>
      <footer>
        <div className="submission py-5">
          <div className="container">
            <div className="row submission-text">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <ul>
                  <li>
                    <ToastContainer />
                    <h6>Startyourtour</h6>
                  </li>
                  <li>
                    <a href="/aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <NavLink to="/blog" style={{ textDecoration: "none" }}>
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <a href="">Testimonials</a>
                  </li>
                  {/* <li>
                    <a href="">Guides</a>
                  </li>
                  <li>
                    <a href="">Visa</a>
                  </li>
                  <li>
                    <a href="">Press</a>
                  </li> */}
                  <li>
                    <a href="">Sitemap</a>
                  </li>
                  {/* <li>
                    <a href="/profile">My profile</a>
                  </li> */}
                  <li>
                    <a href="/contactus">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <ul className="ay-2">
                  <li>
                    <h6>Policy</h6>
                  </li>
                  <li>
                    <a href="/faqs">Frequently Asked Questions</a>
                  </li>
                  <li>
                    <a href="/cancellation-policy">Cancellation Policy</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/payment-policy">Payment Policy</a>
                  </li>

                  {/* <li>
                    <p href="" onClick={Show} style={{ cursor: "pointer" }}>
                      Change Password
                    </p>
                  </li> */}
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 order-sm-1  order-2">
                <ul className="py-2">
                  <li>
                    <h6>Talk to us</h6>
                  </li>
                  <li>
                    <a href="mailto: info@startourtour.com">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="me-2 fs-5"
                      />
                      info@startourtour.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+91 90332 5190">
                      <FontAwesomeIcon
                        icon={faPhoneVolume}
                        className="me-2 fs-5"
                      />
                      +91 90332 51903
                    </a>
                  </li>
                  <li>
                    <a href="tel:+91 96623 99609">
                      <FontAwesomeIcon
                        icon={faPhoneVolume}
                        className="me-2 fs-5"
                      />
                      +91 96623 99609
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <ul className="mt-5 ps-0">
                    <li>
                      <h6>Subscribe For Travel Ideas!</h6>
                    </li>
                    <li>
                      <div className="travel_ideas">
                        <input
                          type="email"
                          name="email_id"
                          value={email.email_id}
                          id=""
                          placeholder="Your email"
                          className="px-3 py-1 rounded"
                          onChange={txtEmail}
                        />
                        <img src="/sendimage1.jpg" alt="" style={{ height: "34px", backgroundColor: "transparent" }} onClick={sendMail} />
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 order-sm-2  order-1">
                <ul className="py-2">
                  <li>
                    <h6>Social Media</h6>
                  </li>
                  <li>
                    <img
                      src="/facebook-icon.png"
                      alt=""
                      className="img-fluid"
                    />
                    <a href="https://www.facebook.com/StartY0urT0ur/" target="_blank" className="ms-2">facebook</a>
                  </li>

                  <li className="mt-2">
                    <img src="/insta-icon.png" alt="" className="img-fluid" />
                    <a href="https://www.instagram.com/startyourtour_/" target="_blank" className="ms-2">instagram</a>
                  </li>
                  <li className="mt-2">
                    <img src="/twitter-icon.png" alt="" className="img-fluid" />
                    <a href="https://twitter.com/startyourtour" target="_blank" className="ms-2">twitter</a>
                  </li>
                  <li className="mt-2">
                    <img src="/link-icon.png" alt="" className="img-fluid" />
                    <a href="https://www.linkedin.com/company/start-your-tour/" target="_blank" className="ms-2">linkedin</a>
                  </li>
                  <li className="mt-3">
                    <p style={{
                      color: "#09646d",
                      fontWeight: "600",
                      fontSize: "18px"
                    }}>SYT TravelTech pvt Ltd</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
