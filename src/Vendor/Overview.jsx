import React, { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { login } from "./Re_values";

function Overview(props) {
  const [vendorRegistration, setVendorRegistration] = useState({
    full_name: "",
    mobile_number: "",
    email_address: "",
    alternate_phone: "",
    resident_address: "",
    alternate_address: "",
    pincode: "",
    skypeid: "",
    country: "",
    city: "",
    state: "",
  });

  const vRegistration = (e) => {
    const { name, value } = e.target;
    setVendorRegistration({ ...vendorRegistration, [name]: value });
  };

  const RegistrationNext = async () => {
    const {
      full_name,
      mobile_number,
      email_address,
      alternate_phone,
      resident_address,
      alternate_address,
      pincode,
      skypeid,
      country,
      city,
      state,
    } = vendorRegistration;

    const res = await fetch("${BASE_URL}user/agency", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        mobile_number,
        email_address,
        alternate_phone,
        resident_address,
        alternate_address,
        pincode,
        skypeid,
        country,
        city,
        state,
        role: "agency",
      }),
    });
    const data = await res.json();
  };

  return (
    <>
      <section>
        <div className="costum_container">
          <div className="p-3">
            <Form>
              <Row
                className="green_border gy-2 gx-5 margin_left_right"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                  <p className="mb-2">Name</p>
                  <input type="text" name="" id="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                  <p className="mb-2">Mobile Number</p>
                  <input type="number" name="" id="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                  <p className="mb-2">Email</p>
                  <input type="email" name="" id="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                  <p className="mb-2">Gender</p>
                  <select name="" id="">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                  <p className="mb-2">City</p>
                  <input type="text" name="" id="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                  <p className="mb-2">Package Name</p>
                  <input type="text" name="" id="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                  <p className="mb-2">Package ID</p>
                  <input type="text" name="" id="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                  <p className="mb-2">Category</p>
                  <input type="text" name="" id="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                  <p className="mb-2">Add ckeditor</p>
                  <input type="text" name="" id="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                  <p className="mb-2">Departure Between</p>
                  <input type="date" name="" id="" />
                </div>
                <div className="col-12  text-end sing_up_button">
                  <Button
                    type="submit"
                    className="w-xl-25 w-lg-25 w-md-25 w-sm-25 w-25"
                  >
                    Next
                  </Button>
                </div>
              </Row>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
