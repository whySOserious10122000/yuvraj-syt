import React from "react";
import "./css/index1.css";
import Header from "./Header";
import { Button, Container, Form, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { login } from "../Vendor/Re_values";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { BASE_URL } from "../BASE_URL";
import data from ".././CountryStateCity.json";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";

function Profile(props) {

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setValidDetails(""); // Clear the error message
    setShow(true);
  };

  const countries = data.find((obj) => obj.name === "India");


  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")


  const [userProfile, setUserProfile] = useState({
    name: "",
    email_address: "",
    city: "",
    state: "",
  });

  const txt = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
    if (name === "state") {
      setSelectedState(value);
    } else if (name === "city") {
      setSelectedCity(value);
    }

  };

  const [userProfile2, setUserProfile2] = useState({
    phone: "",
    password: "",
  });
  
  const Profile = async () => {
    const token = localStorage.getItem("userToken");
    const res = await fetch(`${BASE_URL}user/userprofile`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setUserProfile2(data.data[0]);
    setUserProfile(data.data[0].user_details[0]);
    setSelectedState(data.data[0].user_details[0].state);
    setSelectedCity(data.data[0].user_details[0].city);
  };

  useEffect(() => {
    Profile();
  }, []);

  const btnn = async (e) => {
    e.preventDefault();

    const { name, email_address, city, state } = userProfile;
    const { phone, password } = userProfile2;

    if (!name || !email_address || !phone || !password || !city || !state) {
      // Handle validation error, for example, display an error message
      toast.error('please fill all fields!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    // Validate email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email_address)) {
      // Handle email format validation error
      toast.error('Invalid email address!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${BASE_URL}user/changeprofile`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email_address,
        phone: Number(phone),
        password,
        city,
        state,
      }),
    });
    const data = await res.json();

    if (data.code == 200) {
      navigate("/");
    }
  };

  const [password, setPassword] = useState({
    old_password: "",
    npass: "",
    new_password: "",
  });

  const [validDetails, setValidDetails] = useState("");

  const pass = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };



  const changePassword = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("userToken");

    const { old_password, npass, new_password } = password;

    if (npass !== new_password) {
      setValidDetails("New password and Confirm new password do not match.");
      return;
    }

    if (!old_password) {
      setValidDetails("Enter your current password");
      return;
    }
    if (!npass) {
      setValidDetails("Enter your New password");
      return;
    }
    if (!new_password) {
      setValidDetails("Enter your New password Again");
      return;
    }

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

    if (data.code === 200) {
      handleClose();
      toast.success('Password Change Successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
    } else {
      setValidDetails(data.message);
    }
  };


  const handleBooking = () => {
    navigate("/my_packega")
  }


  return (
    <>
      <Header />
      <section className="py-3">
        <Container>
          <div className="text-center">
            <img src="profile.png" className="img-fluid w-100" />
          </div>
          <div className="py-sm-4 py-2">
            <Row>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="cmn my-1 cmnpointer">
                  <NavLink
                    to="/my_packega"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p
                      className="cmnp p-2 text-center text_22"
                      style={{ fontWeight: "600" }}
                    >
                      <FontAwesomeIcon icon={faPlane} /> My Booking
                    </p>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6" onClick={handleShow}>
                <div className="cmn my-1 cmnpointer">
                  <p
                    className="cmnp p-2 text-center text_22"
                    style={{ fontWeight: "600" }}
                  >
                    <FontAwesomeIcon icon={faPaintBrush} /> Change Password
                  </p>
                </div>
              </div>
            </Row>
          </div>
          <div className="py-2">
            <div className="cmn py-sm-4 py-0 px-sm-4 px-3">
              <div className="pt-2 pb-sm-2 pb-0 ">
                <h1 className="media-edit-profile">Edit profile</h1>
              </div>
              <ToastContainer />
              <div className="">
                <Form>
                  <div className="pt-sm-2 pt-0 pb-sm-2 pb-2">
                    <div className="">
                      <div className="py-1">
                        <p className="cmnp text_20">First Name</p>
                        <Form.Control
                          type="text"
                          id="name"
                          name="name"
                          value={userProfile.name}
                          onChange={txt}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-sm-2 pt-0 pb-sm-2 pb-2">
                    <p className="cmnp text_20">Email</p>
                    <Form.Control
                      type="text"
                      id="email"
                      name="email_address"
                      value={userProfile.email_address}
                      onChange={txt}
                    />
                  </div>
                  <div className="pt-sm-2 pt-0 pb-sm-2 pb-2">
                    <p className="cmnp text_20">Contact Number</p>
                    <Form.Control
                      type="Number"
                      name="phone"
                      value={userProfile2.phone}
                    />
                  </div>
                  <div>
                    <Row className="pt-sm-2 pt-0">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="">
                          <div className="py-1">
                            <p className="cmnp text_20">State</p>
                            <select onChange={txt} value={selectedState} name="state" id="" className="cmnp w-100"
                              style={{
                                padding: ".375rem 0.75rem",
                                borderRadius: "5px"
                              }}
                            >
                              <option value="">Select State</option>
                              {countries.states && countries.states.map((e) => {
                                return (
                                  <option value={e.name}>{e.name}</option>
                                )
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="">
                          <div className="py-1">
                            <p className="cmnp text_20">City</p>
                            <select value={selectedCity} name="city" onChange={txt} id="" className="cmnp w-100"
                              style={{
                                padding: ".375rem 0.75rem",
                                borderRadius: "5px"
                              }}
                            >
                              <option value="">Select City</option>
                              {countries.states &&
                                countries.states
                                  .filter((state) => state.name === selectedState)
                                  .map((state) =>
                                    state.cities.map((city) => (
                                      <option key={city.id} value={city.name}>
                                        {city.name}
                                      </option>
                                    ))
                                  )}
                            </select>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </div>
                  <div className="mt-sm-4 mt-2">
                    <Row>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <NavLink
                          to="/"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <div className="cmn my-1">
                            <p className="cmnp p-2 text-center text_20 cmnpointer">
                              Cancel
                            </p>
                          </div>
                        </NavLink>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="cmn my-1">
                          <button
                            className="cmnp p-2 text-center w-100 text_20"
                            style={{
                              background: "#09646D",
                              color: "#FFF",
                              cursor: "pointer",
                              borderRadius: "10px",
                            }}
                            onClick={btnn}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </Row>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div>
        <div>
          {/* <button onClick={handleShow}>Change Password</button> */}

          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <div>
                <Container>
                  <div className="common p-sm-4 p-0">
                    <Form>
                      <div className="media-new-password">
                        <h2>Set New Password</h2>
                      </div>
                      <div className="py-2">
                        <p className="cmnp text_20">Old Password</p>
                        <input
                          type="password"
                          className="w-100 p-1 ps-2"
                          name="old_password"
                          style={{ borderRadius: "5px", border: "1px solid lightgrey" }}
                          onChange={pass}
                        />
                      </div>
                      <div className="py-2">
                        <p className="cmnp text_20">New Password</p>
                        <input
                          type="password"
                          className="w-100 p-1"
                          name="npass"
                          style={{ borderRadius: "5px", border: "1px solid lightgrey" }}
                          onChange={pass}
                        />
                      </div>
                      <div className="py-2">
                        <p className="cmnp text_20">Confirm New Password</p>
                        <input
                          type="password"
                          className="w-100 p-1"
                          name="new_password"
                          style={{ borderRadius: "5px", border: "1px solid lightgrey" }}
                          onChange={pass}
                        />
                      </div>
                      <div className="d-flex justify-content-center w-100">
                        {validDetails && (
                          <span className="mb-0" style={{ color: "red", fontSize: "12px" }}>
                            {validDetails}
                          </span>
                        )}
                      </div>
                      <div className="pt-sm-4 pt-2 text-center row gy-2">
                        <div className="px-1 col-sm-6 col-6">
                          <button
                            type="submit"
                            variant="primary" 
                            className="w-100 text-white py-1 media-change-pass-button"
                            onClick={changePassword}
                            style={{ backgroundColor: "#155E75", borderRadius: "5px", border: "none" }}
                          >
                            Submit
                          </button>
                        </div>
                        <div className="px-1 col-sm-6 col-6">
                          <button
                            type="button"
                            variant="secondary"
                            className="w-100 text-white py-1 media-change-pass-button"
                            onClick={handleClose}
                            style={{ backgroundColor: "#6c757d", borderRadius: "5px", border: "none" }}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </Form>
                  </div>
                </Container>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <hr />
      <Footer/>
    </>
  );
}

export default Profile;
