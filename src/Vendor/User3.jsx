import React, { useState, useEffect } from "react";
import { Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { login } from "./Re_values";
import "../Project/css/user.css";

function User3(props) {
  const [User3, setUser3] = useState("");

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
    setUser3(data.data[0]);
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
                  <p className="mb-2">Agency Name</p>
                  <h6>{User3.gst_agency_name}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Choose Agency Classification</p>
                  <h6>{User3.gst_agency_classification}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Agency GSTIN</p>
                  <h6>{User3.gst_agency_GST}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Choose State</p>
                  <h6>{User3.gst_agency_state}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Choose City</p>
                  <h6>{User3.agency_name}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Provisional GST No</p>
                  <h6>{User3.gst_provisional_GST}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Contact Person</p>
                  <h6>{User3.gst_contact_person}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Phone Number</p>
                  <h6>{User3.gst_phone}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Mobile Number</p>
                  <h6>{User3.gst_alternate_phone}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Email ID</p>
                  <h6>{User3.gst_email}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Correspondence Mail ID</p>
                  <h6>{User3.gst_alternate_email}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">GST Registration Status</p>
                  <h6>{User3.gst_registration_status}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Address Line 1</p>
                  <h6>{User3.gst_address_line_1}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Choose Compliance Status</p>
                  <h6>{User3.gst_comp_levy_sec10_GST}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">HSN/SAC Code</p>
                  <h6>{User3.gst_hsn_sac_code}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Address Line 2</p>
                  <h6>{User3.gst_address_line_2}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Pincode</p>
                  <h6>{User3.gst_pincode}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Choose Agency City</p>
                  <h6>{User3.gst_agency_city}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Choose Supply Type</p>
                  <h6>{User3.gst_supply_type}</h6>
                </div>
              </div>
            </div>
            <div className="col-12  text-end sing_up_button usr_btn">
              <Button type="submit" className="usr_button usr_button_grey me-2">
                Back
              </Button>
              <Button type="submit" className="usr_button">
                Save
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default User3;
