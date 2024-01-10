import React from "react";
import Header from "../Project/Header";
import { Container, Row } from "react-bootstrap";
import "../Project/css/index1.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../BASE_URL";

function Logi_page(props) {
  const Navigate = useNavigate();

  const [vendorLogin, setVendorLogin] = useState({
    phone: "",
  });

  const [mobile_num, setMobile_num] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validDetails, setValidDetails] = useState("");

  const vLogin = (e) => {
    const { name, value } = e.target;
    setVendorLogin({ ...vendorLogin, [name]: value });
  };

  const LoginSubmit = async () => {
    const { phone } = vendorLogin;

    if (phone.length < 10 || password.length == 0) {
      if (phone.length == 0) {
        setMobile_num("Enter Phone Number");
        toast.error('Enter Phone Number!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
      } else {
        setMobile_num("Enter Valid Phone Number");
        toast.error('Enter Valid Phone Number!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
      }
      setPasswordError("Enter Your Password");
      toast.error('Enter Your Password!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
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
          role: "agency",
        }),
      });
      const data = await res.json();

      if (data.code == 200) {
        localStorage.setItem("vendorToken", data.data.token);
        Navigate("/vendor/home-page");
      } else {
        setValidDetails("Enter Correct Mobile Number And Password");
        toast.error('Enter Correct Mobile Number And Password!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return;
      }
    }
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

  const handleForgotPasswordClick = () => {
    // Navigate to the Forgot Password page
    Navigate("/vendor/forgotpassword");  // Replace with the actual route
};

  return (
    <>
      <Header />
      <section className="py-2">
        <Container>
          <div>
            <div className="cmndes">
              <img src="/login1.png" className="img-fluid login_image" />
              <div className="img_change_for"></div>
            </div>
            <div className="des login_container">
              <div className="">
                <div>
                  <h6 className="mb-3" style={{ fontSize: "24px" }}>
                    LOG IN
                  </h6>
                  <div className="mb-3">
                    <p className="cmnp mb-1" style={{ fontSize: "13px" }}>
                      Enter Your Mobile No.
                    </p>
                    <input
                      type="text"
                      className="px-2"
                      name="phone"
                      maxLength={10}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10); // Remove non-numeric characters and limit to 10 digits
                        vLogin(e); // Call your change handler function
                      }}
                    />
                    {vendorLogin.phone.length <= 0 ? (
                      <span style={{ color: "black", fontSize: "12px" }}>
                        {mobile_num}
                      </span>
                    ) : (
                      ""
                    )}
                    <p
                      className="cmnp text-end mt-1"
                      style={{ fontSize: "10px" }}
                    >
                      0/10
                    </p>
                  </div>
                  <div className="mb-5">
                    <p className="cmnp mb-1" style={{ fontSize: "13px" }}>
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
                        className="px-2"
                        value={password}
                        onChange={(vLogin, handlePasswordChange)}
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
                      <span style={{ color: "black", fontSize: "12px" }}>
                        {passwordError}
                      </span>
                    ) : (
                      ""
                    )}
                    <p
                      className="cmnp text-end mt-1"
                      style={{ fontSize: "12px" , cursor: "pointer"}}
                      onClick={handleForgotPasswordClick}
                    >
                      Forgot Password?
                    </p>
                  </div>
                  <div className="d-flex justify-content-center w-100">
                    {validDetails.length ? (
                      <span
                        className="mb-0"
                        style={{ color: "black", fontSize: "12px" }}
                      >
                        {validDetails}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="des-btn mb-4" onClick={LoginSubmit}>
                    <a className="text-light" style={{ cursor: "pointer" }}>
                      Log in
                    </a>
                  </div>
                  <div className="des-que">
                    <span>Don’t Have an Account?</span>{" "}
                    <p
                      style={{
                        color: "white",
                        fontSize: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => Navigate("/vandor/registration")}
                    >
                      Create Account?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </Container>
      </section>
    </>
  );
}

export default Logi_page;
