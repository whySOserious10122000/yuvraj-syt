import React, { useState, useEffect } from "react";
import { Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { login } from "./Re_values";
import "../Project/css/user.css";

function User2(props) {
  const [User2, setUser2] = useState("");

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
    setUser2(data.data[0]);
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
                <h5 className="h5_width mb-0">AGENCY DETAIL</h5>
                <span></span>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Agency Name</p>
                  <h6 className="mb-0">{User2.agency_name}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Pan Card</p>
                  <h6>{User2.pancard_no}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Fax</p>
                  <h6>{User2.agency_fax}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">State</p>
                  <h6>{User2.agency_state}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">City</p>
                  <h6>{User2.agency_city}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Agency Logo</p>
                  <img src={User2.agency_logo} alt="img not found" />
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Pan card Image</p>
                  <img src={User2.pancard_image} alt="img not found" />
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Choose Country</p>
                  <h6>{User2.agency_country}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Choose State</p>
                  <h6>{User2.agency_state}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Business Type</p>
                  <h6>{User2.business_type}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Securitization Mode</p>
                  <h6>{User2.agency_securitization_mode}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Years in Business</p>
                  <h6>{User2.year_in_business}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Monthly Booking Details</p>
                  <h6>{User2.agency_monthlybookingvolume}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">TDS Exemption</p>
                  <h6>{User2.TDS_exemption}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">TDS( % Exemption )</p>
                  <h6>{User2.TDS_for_exemption}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Website Url</p>
                  <h6>{User2.full_name}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Consolidators</p>
                  <h6>{User2.website}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">References</p>
                  <h6>{User2.reference}</h6>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mb-3">
                  <p className="mb-2">Remarks</p>
                  <h6>{User2.agency_remarks}</h6>
                </div>
              </div>
            </div>
            <div className="col-12  text-end sing_up_button usr_btn">
              <Button type="submit" className="usr_button usr_button_grey me-2">
                Back
              </Button>
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

export default User2;
