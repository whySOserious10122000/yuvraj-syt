import React, { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../BASE_URL";
import { useEffect } from "react";
import axios from "axios";
import data from ".././CountryStateCity.json";


function Signup(props) {
  const countries = data.find((obj) => obj.name === "India");

  // Log State Array
  if (countries && countries.states) {
    countries.states.forEach((state) => {


      if (state.cities) {
        state.cities.forEach((city) => {
        });
      }
    });
  }




  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clickon = () => {
    handleClose(false);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [stateError, setStateError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cityError, setCityError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [checkError, setCheckError] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [selectedGender, setSelectedGender] = useState("");

  const [registerData, setRegisterData] = useState({
    name: "",
    phone: "",
    state: "",
    email_address: "",
    city: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "state") {
      setSelectedState(value);
    }
    if (name === "city") {
      setSelectedCity(value);
    }

    if (name === "gender") {
      setSelectedGender(e.target.value);
    }

    setRegisterData({ ...registerData, [name]: value });




  };

  const crtAccout = async (e) => {
    e.preventDefault();

    const { name, phone, state, email_address, city, gender } = registerData;

    if (
      name.length == 0 ||
      phone.length < 10 ||
      state.length == 0 ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email_address) ||
      password.length == 0 ||
      city.length == 0 ||
      selectedGender.length == 0 ||
      isChecked == false
    ) {
      toast.error('please fill required fields!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      setNameError("Enter Your Name");
      if (phone.length == 0) {
        setPhoneError("Enter Phone Number");
      } else {
        setPhoneError("Enter Valid Phone Number");
      }
      setStateError("Enter Your State");
      setEmailError("Enter Valid Email");
      setPasswordError("Enter Your Password");
      setCityError("Enter Your City");
      setGenderError("Select Your Gender");
      setCheckError("Please Agree Our Privacy Policy and Terms of services");
      return;
    }

    const res = await fetch(`${BASE_URL}user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        state,
        email_address,
        password,
        city,
        gender,
      }),
    });
    const data = await res.json();

    if (data.code == 200) {
      navigate("/");
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // login

  const [user, setUser] = useState({
    phone: "",
  });

  const [phoneerror, setPhoneerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [validDetails, setValidDetails] = useState("");

  const txt = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // validation
  const loginHandle = async (e) => {
    e.preventDefault();

    const { phone } = user;

    if (phone.length < 10 || password.length == 0) {
      if (phone.length == 0) {
        setPhoneerror("Enter Phone Number");
      } else {
        setPhoneerror("Enter Valid Phone Number");
      }
      setPassworderror("Enter Your Password");
      return;
    } else {
      const res = await fetch(`${BASE_URL}user/loginAll`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: Number(phone),
          password,
          role: "customer",
        }),
      });
      const data = await res.json();

      if (data.code == 200) {
        localStorage.setItem("userToken", data.data.token);
        handleClose(true);
        navigate("/");
      } else {
        setValidDetails("Enter Valid Details");
        return;
      }
    }
  };


  useEffect(() => {
    loadCountries();
  }, []);
  useEffect(() => {
    loadStates();
    loadCities();
  }, []);

  const loadCountries = async () => {
    try {
      await axios
        .get("https://www.universal-tutorial.com/api/getaccesstoken", {
          headers: {
            Accept: "application/json",
            "api-token":
              "ftkic-0z5KhVZqsBsoI-tH_7A-1NGcKkOEpGojs1DIKRhL2mHTF1Pdba-oSZMQjDr7E",
            "user-email": "webearlitsolution@gmail.com",
          },
        })
        .then((res) => {
          
        })
        .catch((err) => console.log(err));

    } catch (error) { }
  };

  const loadStates = async (country) => {
    await axios
      .get(`https://www.universal-tutorial.com/api/states/${country}`, {
        headers: {
          Accept: "application/json",

          "user-email": "sarjilp2903@gmail.com",
        },
      })
      .then((res) => {
        
      })
      .catch((err) => console.log(err));
  };

  const loadCities = async (state) => {
    await axios
      .get(`https://www.universal-tutorial.com/api/cities/${state}`, {
        headers: {
          Accept: "application/json",
          "user-email": "sarjilp2903@gmail.com",
        },
      })
      .then((res) => {
        
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* <Header /> */}
      <section className="py-5">
        <Container>
          <div className="px-sm-5 px-3">
            <div className="cmn py-5 px-sm-5 px-4">
              <div className="text-center">
                <p className="cmnp text_20">Sign Up to your account</p>
              </div>
              <div className="py-2">
                <Form>
                  <Row>
                    <div className="col-6">
                      <div>

                        {/*------------------------ full name  -----------------------*/}

                        <div className="py-1 pt-2">
                          <p className="cmnp text-20">Enter Your Name</p>
                          <Form.Control
                            type="text"
                            name="name"
                            onChange={handleChange}
                          />
                          {registerData.name.length == 0 ? (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {nameError}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>

                        {/*------------------------ mobile_number  -----------------------*/}

                        <div className="py-1 pt-2">
                          <p className="cmnp text-20">Mobile</p>
                          <Form.Control
                            type="number"
                            name="phone"
                            onChange={handleChange}
                            onInput={(e) => {
                              if (e.target.value.length > 10) {
                                e.target.value = e.target.value.slice(0, 10);
                              }
                            }}
                          />
                          {registerData.phone.length < 10 ? (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {phoneError}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>

                        {/*------------------------ state  -----------------------*/}

                        <div className="py-1 pt-3">
                          <p className="cmnp text-20">State</p>
                          <select onChange={handleChange} value={selectedState} name="state" id="" className="cmnp w-100"
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
                          {registerData.state.length == 0 ? (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {stateError}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>



                        <div className="py-1 pt-2">
                          <div>
                            <p className="cmnp">Gender</p>
                          </div>
                          <ToastContainer />
                          <Row>

                            {/*------------------------ gender  -----------------------*/}

                            <div className="col-6">
                              <div>
                                <div class="check-box check-box-0 text-center p-0 m-0">
                                  <label /*for="whyNeed"*/ class="w-75">
                                    <input
                                      type="checkbox"
                                      name="gender"
                                      // id="whyNeed"
                                      value="male"
                                      checked={selectedGender === "male"}
                                      onChange={handleChange}
                                    />
                                    <span class="py-2 klass w-100">Male</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-6">
                              <div>
                                <div>
                                  <div class="check-box check-box-1  m-0 p-0">
                                    <label
                                      // for="whyWas"
                                      class="w-75 text-center"
                                    >
                                      <input
                                        type="checkbox"
                                        name="gender"
                                        // id="whyWas"
                                        value="female"
                                        checked={selectedGender === "female"}
                                        onChange={handleChange}
                                      />
                                      <span class="py-2 klass1 w-100">
                                        Female
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {registerData.gender.length === 0 ? (
                              <span style={{ color: "red", fontSize: "12px" }}>
                                {genderError}
                              </span>
                            ) : (
                              ""
                            )}
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div>
                        <div className="py-1 pt-2">
                          <p className="cmnp text-20">Email</p>
                          <Form.Control
                            type="Email"
                            name="email_address"
                            onChange={handleChange}
                          />
                          {registerData.email_address.length == 0 ||
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                              registerData.email_address
                            ) ? (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {emailError}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div
                          className="py-1 pt-2"
                          style={{
                            position: "relative",
                          }}
                        >
                          <p className="cmnp text-20">Password</p>
                          <Form.Control
                            type={passwordVisible ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={(handleChange, handlePasswordChange)}
                          />
                          <img
                            src="/eye2.png"
                            className="eye-image"
                            alt=""
                            style={{
                              height: "10px",
                              width: "15px",
                              position: "absolute",
                              top: "30px",
                              bottom: "0",
                              right: "5%",
                              margin: "auto",
                              cursor: "pointer",
                            }}
                            onClick={togglePasswordVisibility}
                          />
                        </div>
                        {password.length == 0 ? (
                          <span style={{ color: "red", fontSize: "12px" }}>
                            {passwordError}
                          </span>
                        ) : (
                          ""
                        )}
                        <div className="py-1 pt-3">
                          <p className="cmnp text-20">City</p>
                          {/* <Form.Control
                            type="text"
                            name="city"
                            onChange={handleChange}
                          /> */}
                          <select name="city" onChange={handleChange} id="" className="cmnp w-100"
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
                          {registerData.city.length == 0 ? (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {cityError}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="pt-3 text-center row">
                    <div className="col-sm-6 col-12 text-sm-end text-center">
                      <div className="d-flex justify-content-sm-end justify-content-center">
                        <p className="me-2 cmnpointer cmn cmnnone" style={{
                          width: "140px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}>
                          <img src="/google.png" className="pe-1" style={{ height: "25px" }} />
                          Google
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-12 text-sm-start text-center mt-sm-0 mt-4 mb-3">
                      <div className="d-flex justify-content-sm-start justify-content-center">
                        <p className="cmnpointer cmn cmnnone" style={{
                          width: "140px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}>
                          <img src="/facebook.png" className="pe-1" style={{ height: "25px" }} />
                          Facebook
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 text-center d-flex justify-content-center">
                    <div>
                      <div className="d-flex">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <p className="cmnp rgba ps-1">
                          I agree to <a href="/privacy" style={{ color: "#09646d" }}>Privacy Policy</a> and <a href="/cancellation" style={{ color: "#09646d" }}>Terms of services</a>
                        </p>
                      </div>

                      {isChecked == false ? (
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {checkError}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="log_btn"
                      onClick={crtAccout}
                      type="submit"
                    >
                      Create an account
                    </button>
                  </div>
                  <div className="text-center pt-3">
                    <p className="cmnp rgba">
                      Already have an account?{" "}
                      <span
                        className="text-dark cmnpointer"
                        onClick={handleShow}
                      >
                        Sign In
                      </span>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* LOgin-page */}

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
                              Enter Your Mobile No.
                            </p>
                            <input
                              type="number"
                              id="phone"
                              className="w-100"
                              name="phone"
                              pattern="[0-9]"
                              onChange={txt}
                              maxLength={10}
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
                              className="w-100"
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
        <ToastContainer />
      </div>
    </>
  );
}

export default Signup;
