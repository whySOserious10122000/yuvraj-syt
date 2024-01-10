import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faMobileScreenButton,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./css/index1.css";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FormCheck, FormControl, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../BASE_URL";

function Header() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [inputValues, setInputValues] = useState("");

  const inputRefs = useRef([]);

  const handleInputChange = (index, e) => {
    const input = e.target;
    const value = input.value;

    if (index < 3) {
      if (value && input.nextSibling) {
        input.nextSibling.focus();
      } else if (!value && input.previousSibling) {
        input.previousSibling.focus();
      }
    } else {
      const inputValue = value.slice(0, 1);
      input.value = inputValue;
    }

    // Update the inputValues state by joining the values of all inputs
    setInputValues(() => {
      const updatedValues = inputRefs.current.map((ref) => ref.value).join("");
      return updatedValues;
    });
  };

  const handleInputKeyDown = (index, e) => {
    const input = e.target;

    if (e.keyCode === 8 && !input.value && input.previousSibling) {
      input.previousSibling.focus();
    }
  };

  const createRef = (index) => (ref) => {
    inputRefs.current[index] = ref;
  };

  const renderInputs = () => {
    const inputs = [];

    for (let i = 0; i < 4; i++) {
      inputs.push(
        <input
          key={i}
          type="number"
          maxLength={1}
          onChange={(e) => handleInputChange(i, e)}
          onKeyDown={(e) => handleInputKeyDown(i, e)}
          ref={createRef(i)}
          style={{
            width: "40px",
            height: "40px",
            margin: "0 5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
            padding: "8px",
            textAlign: "center",
          }}
        />
      );
    }

    return inputs;
  };

  const [name, setName] = useState("");

  const token = localStorage.getItem("userToken");

  // validation state
  const [user, setUser] = useState({
    phone: "",
  });

  const [phoneerror, setPhoneerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [validDetails, setValidDetails] = useState("");

  // modal-1
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // modal-2
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // modal-3
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // moda;-4
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const clickon = () => {
    handleShow1(true);
    handleClose(false);
  };

  const clickon2 = () => {
    if (!numbersave) {
      // alert("please enter your mobile number");
      toast.error('please enter your mobile number!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }
    handleClose1(false);
    handleShow2(true);
  };

  const clickon3 = () => {
    if (inputValues.length == 0) {
      // alert("Enter Otp");
      toast.error('Enter Otp!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
    } else if (inputValues.length < 4) {
      // alert("Enter 4 Digit Otp");
      toast.error('Enter 4 Digit Otp!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
    } else if (inputValues === "1234") {
      handleClose2(false);
      handleShow3(true);
    } else {
      // alert("Enter valid Otp");
      toast.error('Enter valid Otp!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
    }
  };

  const vendorToken = localStorage.getItem("vendorToken");

  const goingTravel = () => {
    vendorToken ? navigate("/vendor/home-page") : navigate("/vendor/login");
  };

  const txt = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // validation
  const loginHandle = async (e) => {
    e.preventDefault();

    const { phone } = user;

      if (phone.length === 0) {
        setPhoneerror("please enter your mobile number")
        return;
      } 
      if (phone.length  < 10) {
        setPhoneerror("please enter valid mobile number")
        return;
      } 
      if (!password) {
        setPassworderror("please enter your password")
        return;
      } 

      
    
      const res = await fetch(`${BASE_URL}user/loginAll`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          phone: Number(phone),
          password,
          role: "customer",
        }),
      });
      const data = await res.json();

      if (data.code == 200) {
        setPassword("");
        localStorage.setItem("userToken", data.data.token);
        handleClose(true);

      } else {
        // setValidDetails("Enter Valid Details");
        setValidDetails(data.message);
        return;
      }
    
  };

  const profile = async () => {
    const res = await fetch(`${BASE_URL}user/userprofile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    setName(data.data[0].user_details[0].name);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    profile();
  },[]);

  const [numbersave, setNumbersave] = useState();

  const handleNumberSave = (ev) => {
    const value = ev.target.value;
    setNumbersave(value);
  };

  const [newpassword, setNewpassword] = useState();

  const handleNewpassword = (e) => {
    const value = e.target.value;
    setNewpassword(value);
  };

  const [confirmpassword, setConfirmpassword] = useState();

  const handleConfirmpassword = (e) => {
    const value = e.target.value;
    setConfirmpassword(value);
  };

  // const handleSubmit = () => {
  //   if (newpassword === confirmpassword) {
  //     const handleClose3 = () => setShow3(false);
  //     const handleShow3 = () => setShow3(true);
  //   }
  //   else {
  //     alert("please enter same number");
  //   }
  // }

  // const [formData, setFormData] = useState({
  //   phone: "",
  //   newpassword: "",
  // })

  const handleSubmit = async () => {
    if (newpassword !== confirmpassword) {
      alert("password and confirm password is not same");
      return;
    }
    const res = await fetch(`${BASE_URL}user/chengepassword`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        phone: Number(numbersave),
        newpassword: newpassword,
      }),
    });
    const data = await res.json();

    if (data.code == 200) {
      alert("password changed successfully");
      setShow3(false);
    } else {
      // setValidDetails("Enter Valid Details");
      setValidDetails(data.message);
      return;
    }
  };

  const vendtoken = localStorage.getItem("vendorToken");

  return (
    <>
      <div className="" style={{ borderBottom: "1px solid #000" }} bg="light">
        <Navbar expand="lg" className="px-lg-4 px-md-4 px-sm-2 px-2 nav_width">
          <NavLink to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Navbar.Brand className="logo"><img src="/syt_logo.png" alt="" className="me-2" style={{ height: "40px" }} />START YOUR TOUR</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-right my-2 my-lg-0"
              style={{ maxHeight: "200px", marginLeft: "auto" }}
              navbarScroll
            >
              <Nav.Link href="tel:+91 96623 99609" className="text-dark">
                <FontAwesomeIcon icon={faPhoneVolume} className="me-1" />
                +91 96623 99609
              </Nav.Link>
              <Nav.Link href="" className="text-dark" onClick={goingTravel}>
                <FontAwesomeIcon icon={faPhoneVolume} className="me-1" />
                Travel Agent? Join Us
              </Nav.Link>
              {/* <Nav.Link href="/custom_requirement" className="text-dark">
                <FontAwesomeIcon icon={faUser} className="me-1" />
                Custom Requirement
              </Nav.Link> */}
              <Nav.Link href="" className="text-dark">
                <FontAwesomeIcon icon={faGift} className="me-1" />
                Offers
              </Nav.Link>
              <Nav.Link href="" className="text-dark">
                <FontAwesomeIcon icon={faMobileScreenButton} className="me-1" />
                Download App
              </Nav.Link>
            </Nav>
            {token ? (
              <div
                className="cmn p-2"
                style={{
                  backgroundColor: "#09646d",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={handleClickMenu}
              >
                <FontAwesomeIcon icon={faUser} /> {name}
              </div>
            ) : (
              <a
                href="#"
                className="log_btn w-0"
                onClick={handleShow}
                variant="primary"
              >
                Login
              </a>
            )}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <NavLink
                to="/profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleCloseMenu}>My Profile</MenuItem>
              </NavLink>
              <NavLink
                to="/custom_requirement"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleCloseMenu}>My Requirements</MenuItem>
              </NavLink>
              <NavLink to="/my_packega" style={{ textDecoration: "none", color: "black" }}>
                <MenuItem onClick={handleCloseMenu}>My Booking</MenuItem>
              </NavLink>
              <MenuItem
                onClick={() => {
                  handleCloseMenu();
                  localStorage.clear("userToken");
                  navigate("/");
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Navbar.Collapse>
        </Navbar>
      </div>

      {/* {/ LOgin-page /} */}

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <div>
              <Container>
                <div className="common_p ">
                  <div className="inerp p-4 border-1 pb-0">
                    <Row>
                      <div className="col-sm-6 col-12">
                        <form>
                          <div>
                            <h6 style={{ fontWeight: "600", fontSize: "15px" }}>
                              LOG IN
                            </h6>
                            <p
                              style={{
                                margin: "0",
                                padding: "0",
                                fontSize: "12px",
                              }}
                            >

                              <ToastContainer />
                              Enter Your Mobile No.
                            </p>
                            <input
                              type="text"
                              id="phone"
                              className="w-100 px-2 py-1"
                              style={{ borderRadius: "5px" }}
                              name="phone"
                              pattern="[0-9]*"
                              onChange={(e) => {
                                const input = e.target.value;
                                const numericInput = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters
                                const truncatedInput = numericInput.slice(0, 10); // Limit to 10 digits
                                e.target.value = truncatedInput;
                                txt(e); // Assuming txt is your onChange handler
                              }}
                            />
                            {user.phone.length < 10 ? (
                              <span style={{ color: "red", fontSize: "12px" }}>
                                {phoneerror}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                          <p
                            className="pt-3"
                            style={{
                              margin: "0",
                              padding: "0",
                              fontSize: "12px",
                            }}
                          >
                            Enter Your Password
                          </p>
                          <div
                            style={{
                              position: "relative",
                            }}
                          >
                            <input
                              type={passwordVisible ? "text" : "password"}
                              id="password"
                              name="password"
                              className="w-100 px-2 py-1"
                              style={{ borderRadius: "5px" }}
                              value={password}
                              onChange={(txt, handlePasswordChange)}
                            />
                            <img
                              src={passwordVisible ? "/eye.png" : "/eye2.png"}
                              className="eye-image"
                              alt=""
                              style={{
                                height: "10px",
                                width: "15px",
                                position: "absolute",
                                top: "0",
                                bottom: "0",
                                right: "5%",
                                margin: "auto",
                                cursor: "pointer",
                              }}
                              onClick={togglePasswordVisibility}
                            />
                          </div>
                          {password.length <= 0 ? (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {passworderror}
                            </span>
                          ) : (
                            ""
                          )}
                          <p
                            href=""
                            className="text-danger pt-2 "
                            style={{
                              textDecoration: "none",
                              float: "right",
                              fontSize: "12px",
                              cursor: "pointer",
                            }}
                            onClick={clickon}
                          >
                            Forgot Your Password
                          </p>
                          <div className="d-flex justify-content-center w-100">
                            {validDetails.length ? (
                              <span
                                className="mb-0"
                                style={{ color: "red", fontSize: "12px" }}
                              >
                                {validDetails}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="pb-2 text-center my-3">
                            <button
                              type="submit"
                              style={{
                                color: "white",
                                background: "#09646D",
                                fontSize: "14px",
                                padding: "8px 10px",
                                border: "none",
                                borderRadius: "8px",
                              }}
                              onClick={loginHandle}
                            >
                              Log in
                            </button>
                            <p style={{ fontSize: "12px" }} className="pt-3">
                              Don’t Have an Account?
                              <a
                                onClick={() => navigate("/user/registration")}
                                style={{
                                  textDecoration: "none",
                                  cursor: "pointer",
                                }}
                              >
                                Create Account
                              </a>
                              ?
                            </p>
                          </div>
                        </form>
                      </div>

                      <div className="col-sm-6 d-sm-block d-none">
                        <img src="/login.png" className="img-fluid" />
                      </div>
                    </Row>
                  </div>
                </div>
              </Container>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      {/* {/ Forgot-page /} */}

      <div>
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Body>
            <div>
              <Container>
                <div className="text-center">
                  <div className="text-center py-2 pt-3">
                    <h6
                      className="text-center"
                      style={{ fontWeight: "600", fontSize: "20px" }}
                    >
                      Please Enter Your register Mobile No:-
                    </h6>
                  </div>
                  <div className="text-center px-5 py-2">
                    <input
                      type="number"
                      className="px-2"
                      value={numbersave}
                      onChange={handleNumberSave}
                    />
                  </div>
                  <div className="pt-5">
                    <button
                      type="submit"
                      style={{
                        color: "white",
                        background: "#09646D",
                        fontSize: "14px",
                        padding: "8px 30px",
                        border: "none",
                        borderRadius: "8px",
                      }}
                      onClick={clickon2}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </Container>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <div>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Body>
            <Container>
              <div>
                <div className="common p-4 text-center">
                  <div>
                    <h6
                      className="text-center"
                      style={{ fontWeight: "600", fontSize: "20px" }}
                    >
                      Enter O.T.P
                    </h6>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {renderInputs()}
                  </div>
                  <div className="pt-3">
                    <button
                      type="submit"
                      style={{
                        color: "white",
                        background: "#09646D",
                        fontSize: "14px",
                        padding: "8px 30px",
                        border: "none",
                        borderRadius: "8px",
                      }}
                      onClick={clickon3}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </Container>
          </Modal.Body>
        </Modal>
      </div>

      <div>
        <Modal show={show3} onHide={handleClose3}>
          <Modal.Body>
            <div>
              <div>
                <div className="py-2 pt-3">
                  <h6
                    className="text-center"
                    style={{ fontWeight: "600", fontSize: "20px" }}
                  >
                    Set New Password
                  </h6>
                </div>
                <div className="text-center py-2">
                  <p className="cmnp">New Password</p>
                  <input
                    type="tell"
                    onChange={handleNewpassword}
                    value={newpassword}
                  />
                </div>
                <div className="text-center py-2">
                  <p className="cmnp">Conform New Password</p>
                  <input
                    type="tell"
                    onChange={handleConfirmpassword}
                    value={confirmpassword}
                  />
                </div>
                <div className="pt-5 text-center">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    style={{
                      color: "white",
                      background: "#09646D",
                      fontSize: "14px",
                      padding: "8px 30px",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <ToastContainer />
    </>
  );
}
// className='order order-2 order-xl-1 order-lg-1 order-md-2 order-sm-2'
// className='log_btn order order-1 order-xl-2 order-lg-2 order-md-1 order-sm-1'
export default Header;