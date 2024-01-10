import React from "react";
import Header from "../Project/Header";
import { Container, FormControl, Row } from "react-bootstrap";
import Select from "react-select";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import { login } from "./Re_values";
import "../Project/css/Registation_vandor.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../BASE_URL";

function Registation_vandor(props) {
  const navigate = useNavigate();

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

  const [fullname, setFullname] = useState("");
  const [mobileerror, setMobileerror] = useState("");
  const [phoneerror, setPhoneerror] = useState("");
  const [pincodeerror, setPincodeerror] = useState("");
  const [residentarea, setResidentarea] = useState("");
  const [address, setAddress] = useState("");
  const [skype, setSkype] = useState("");
  const [email, setEmail] = useState("");

  const vRegistration = (e) => {
    const { name, value } = e.target;
    setVendorRegistration({ ...vendorRegistration, [name]: value });
  };
  console.log(vendorRegistration);

  const RegistrationNext = async (e) => {
    e.preventDefault();
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

    if (
      full_name.length <= 0 ||
      mobile_number.length < 10 ||
      alternate_phone.length < 10 ||
      pincode.length < 6 ||
      resident_address.length <= 0 ||
      alternate_address.length <= 0 ||
      skypeid.length <= 0 ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email_address)
    ) {
      setFullname("enter your fullname");
      setMobileerror("enter valid mobile  number");
      setPhoneerror("enter valid phone number");
      setPincodeerror("enter valid pincode");
      setResidentarea("enter resident area");
      setAddress("enter address");
      setSkype("enter skype id");
      setEmail("enter your email");
    } else {
      const res = await fetch(`${BASE_URL}user/agency`, {
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
      console.log(data);
      if (data.code == 200) {
        navigate("/vendor/registration2");
      }
    }
  };

  return (
    <>
      <Header />
      <section className="py-5">
        <Container>
          <div className="vendor_signup py-5">
            <div className="sign_up_form py-xl-4 py-lg-3 py-md-2 py-sm-1">
              <div className="sign_up_header">
                <h3 className="text-center mb-3">Sign Up to your account</h3>
                <p>Personal Details</p>
              </div>
              <form>
                <Row className="gy-2 gx-5">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">Full Name*</p>
                    <input
                      type="text"
                      name="full_name"
                      onChange={vRegistration}
                      id=""
                      className="w-100"
                    />
                    {vendorRegistration.full_name.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {fullname}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal text-20">
                      Mobile Number*
                    </p>
                    <input
                      type="tel"
                      name="mobile_number"
                      onChange={vRegistration}
                      id=""
                      maxLength={10}
                    />
                    {vendorRegistration.mobile_number.length < 10 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {mobileerror}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal text-20">Email*</p>
                    <input
                      type="email"
                      name="email_address"
                      onChange={vRegistration}
                      id=""
                    />
                    {vendorRegistration.email_address.length < 0 ||
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                      vendorRegistration.email_address
                    ) ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {email}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal text-20">Phone Number</p>
                    <input
                      type="tel"
                      name="alternate_phone"
                      onChange={vRegistration}
                      id=""
                      maxLength={10}
                    />
                    {vendorRegistration.alternate_phone.length < 10 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {phoneerror}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal text-20">
                      Residential Area*
                    </p>
                    <input
                      type="text"
                      name="resident_address"
                      onChange={vRegistration}
                      id=""
                    />
                    {vendorRegistration.resident_address.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {residentarea}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal text-20">Address 2</p>
                    <input
                      type="text"
                      name="alternate_address"
                      onChange={vRegistration}
                      id=""
                    />
                    {vendorRegistration.alternate_address.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {address}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal text-20">Pincode*</p>
                    <input
                      type="tel"
                      name="pincode"
                      onChange={vRegistration}
                      maxLength={6}
                    />
                    {vendorRegistration.pincode.length < 6 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {pincodeerror}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal text-20">Skype ID</p>
                    <input
                      type="email"
                      name="skypeid"
                      onChange={vRegistration}
                      id=""
                    />
                    {vendorRegistration.skypeid.length < 6 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {skype}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal text-20">
                      Choose Country*
                    </p>
                    <select name="country" onChange={vRegistration} id="">
                      <option value="india">india</option>
                      <option value="canada">canada</option>
                      <option value="america">america</option>
                      <option value="australia">australia</option>
                      <option value="japan">japan</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal text-20">Choose City*</p>
                    <select name="city" onChange={vRegistration} id="" required>
                      <option value="ahmedaba">ahmedaba</option>
                      <option value="surat">surat</option>
                      <option value="bhavnagar">bhavnagar</option>
                      <option value="amreli">amreli</option>
                      <option value="junagadh">junagadh</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal text-20">Choose State*</p>
                    <select name="state" onChange={vRegistration} id="">
                      <option value="gujrat">gujrat</option>
                      <option value="maharashtra">canada</option>
                      <option value="tamilnadu">tamilnadu</option>
                      <option value="delhi">delhi</option>
                      <option value="asam">asam</option>
                    </select>
                  </div>
                </Row>
                <div className="text-center sing_up_button">
                  <Button
                    type="submit"
                    className="w-50"
                    onClick={RegistrationNext}
                  >
                    Next
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Registation_vandor;
