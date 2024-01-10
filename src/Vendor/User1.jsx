import React, { useState, useEffect } from "react";
import { Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { login } from "./Re_values";
import "../Project/css/user.css";

function User1(props) {
  const [User1, setUser1] = useState("");

  const User = async () => {
    const token = localStorage.getItem("vendorToken");
    const res = await fetch("${BASE_URL}agency/profile", {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setUser1(data.data[0]);
    console.log(data.data[0]);
  };

  useEffect(() => {
    User();
  }, []);

  return (
    <>
      <section>
        <div className="costum_container">
          <div className="green_box">
            <div className="inner_green_box">
              <div className="d-flex align-items-center mb-3">
                <h5 className="h5_width mb-0">Personal Details</h5>
                <span></span>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Name</p>
                  <h6 className="mb-0">{User1.full_name}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Mobile Number</p>
                  <h6>{User1.mobile_number}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Email</p>
                  <h6>{User1.email_address}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Phone Number</p>
                  <h6>{User1.agency_phone_no}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Residential Area</p>
                  <h6>{User1.resident_address}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Pincode</p>
                  <h6>{User1.pincode}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Skype ID</p>
                  <h6>{User1.skypeid}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Choose City</p>
                  <h6>{User1.city}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Choose state</p>
                  <h6>{User1.state}</h6>
                </div>
              </div>
            </div>
            <div className="col-12  text-end sing_up_button usr_btn">
              <Button type="submit" className="usr_button">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default User1;
