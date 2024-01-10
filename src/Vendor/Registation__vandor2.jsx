import React from "react";
import Header from "../Project/Header";
import { Container, Form, FormCheck, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import { login } from "./Re_values";
import "../Project/css/Registation_vandor.css";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { Input } from "rsuite";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../BASE_URL";

function Registation__vandor2(props) {
  const navigate = useNavigate();

  const [vendorRegistration1, setVendorRegistration1] = useState({
    agency_name: "",
    pancard_no: "",
    agency_fax: "",
    agency_state: "",
    agency_city: "",
    pancard_image: "",
    agency_logo: "",
    agency_country: "",
    agency_state: "",
    business_type: "",
    agency_securitization_mode: "",
    year_in_business: "",
    agency_monthlybookingvolume: "",
    TDS_exemption: "",
    agency_tdsexemption_percent: "",
    website: "",
    agency_consolidators: "",
    reference: "",
    agency_remarks: "",
    agency_officespace: "",
    IATA: "",
  });

  const [agency_name, setAgency_name] = useState("");
  const [pancard, setPancard] = useState("");
  const [Fax, setFax] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const vRegistration1 = (e) => {
    const { name, value } = e.target;
    setVendorRegistration1({ ...vendorRegistration1, [name]: value });
  };

  const RegistrationNext1 = async (e) => {
    e.preventDefault();
    const {
      agency_name,
      pancard_no,
      agency_fax,
      agency_state,
      agency_logo,
      pancard_image,
      agency_city,
      agency_country,
      business_type,
      agency_securitization_mode,
      year_in_business,
      agency_monthlybookingvolume,
      TDS_exemption,
      agency_tdsexemption_percent,
      website,
      agency_consolidators,
      reference,
      agency_remarks,
      agency_officespace,
      IATA,
    } = vendorRegistration1;

    if (
      agency_name.length <= 0 ||
      pancard_no.length <= 0 ||
      agency_fax.length <= 0 ||
      agency_state.length <= 0 ||
      agency_city.length <= 0 ||
      agency_country.length <= 0
    ) {
      setAgency_name("enter agency name");
      setPancard("enter pancard detail");
      setFax("enter fax");
      setState("enter your state");
      setCity("enter your city");
      setCountry("enter your country");
    } else {
      const res = await fetch(`${BASE_URL}user/agency`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agency_name,
          pancard_no,
          agency_fax,
          agency_state,
          agency_city,
          agency_logo,
          pancard_image,
          agency_country,
          agency_state,
          business_type,
          agency_securitization_mode,
          year_in_business,
          agency_monthlybookingvolume,
          TDS_exemption,
          agency_tdsexemption_percent,
          website,
          agency_consolidators,
          agency_remarks,
          agency_officespace,
          IATA,
          role: "agency",
        }),
      });
      const data = await res.json();
    }
  };

  return (
    <div>
      <Header />
      <section className="py-5">
        <Container>
          <div className="vendor_signup py-5">
            <div className="sign_up_form py-xl-4 py-lg-3 py-md-2 py-sm-1">
              <div className="sign_up_header">
                <h3 className="text-center mb-3">Sign Up to your account</h3>
                <p>Agency Details</p>
              </div>
              <form>
                <Row className="gy-2 gx-5">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">Agency Name*</p>
                    <input
                      type="text"
                      name="agency_name"
                      onChange={vRegistration1}
                      id=""
                    />
                    {vendorRegistration1.agency_name.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {agency_name}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">Pan card*</p>
                    <input
                      type="text"
                      name="pancard_no"
                      onChange={vRegistration1}
                      id=""
                    />
                    {vendorRegistration1.pancard_no.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {pancard}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">Fax</p>
                    <input
                      type="text"
                      name="agency_fax"
                      onChange={vRegistration1}
                      id=""
                    />
                    {vendorRegistration1.agency_fax.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {Fax}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">State*</p>
                    <input
                      type="text"
                      name="agency_state"
                      onChange={vRegistration1}
                      id=""
                    />
                    {vendorRegistration1.agency_state.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {state}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">City*</p>
                    <input
                      type="text"
                      name="agency_city"
                      onChange={vRegistration1}
                      id=""
                    />
                    {vendorRegistration1.agency_city.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {city}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">Agency Logo*</p>
                    <input type="file" name="agency_logo" id="" />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Attach Pan Card Image*
                    </p>
                    <input type="file" name="pancard_image" id="" />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Choose Country*
                    </p>
                    <input
                      type="text"
                      name="agency_country"
                      onChange={vRegistration1}
                      id=""
                    />
                    {vendorRegistration1.agency_country.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {country}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Choose State*
                    </p>
                    <select name="agency_state" id="">
                      <option value="gujrat">gujrat</option>
                      <option value="maharashtra">canada</option>
                      <option value="tamilnadu">tamilnadu</option>
                      <option value="delhi">delhi</option>
                      <option value="asam">asam</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Business Type*
                    </p>
                    <select
                      name="business_type"
                      onChange={vRegistration1}
                      id=""
                    >
                      <option value="gujrat">gujrat</option>
                      <option value="maharashtra">canada</option>
                      <option value="tamilnadu">tamilnadu</option>
                      <option value="delhi">delhi</option>
                      <option value="asam">asam</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">Choose City*</p>
                    <select name="agency_city" onChange={vRegistration1} id="">
                      <option value="ahmedaba">ahmedaba</option>
                      <option value="surat">surat</option>
                      <option value="bhavnagar">bhavnagar</option>
                      <option value="amreli">amreli</option>
                      <option value="junagadh">junagadh</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Securitization Mode*
                    </p>
                    <select
                      name="agency_securitization_mode"
                      onChange={vRegistration1}
                      id=""
                    >
                      <option value="ahmedaba">ahmedaba</option>
                      <option value="surat">surat</option>
                      <option value="bhavnagar">bhavnagar</option>
                      <option value="amreli">amreli</option>
                      <option value="junagadh">junagadh</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Years in Business*
                    </p>
                    <select
                      name="year_in_business"
                      onChange={vRegistration1}
                      id=""
                    >
                      <option value="ahmedaba">ahmedaba</option>
                      <option value="surat">surat</option>
                      <option value="bhavnagar">bhavnagar</option>
                      <option value="amreli">amreli</option>
                      <option value="junagadh">junagadh</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Monthly Booking Volume*
                    </p>
                    <select
                      name="agency_monthlybookingvolume"
                      onChange={vRegistration1}
                      id=""
                    >
                      <option value="ahmedaba">ahmedaba</option>
                      <option value="surat">surat</option>
                      <option value="bhavnagar">bhavnagar</option>
                      <option value="amreli">amreli</option>
                      <option value="junagadh">junagadh</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      TDS Exemption
                    </p>
                    <select
                      name="TDS_exemption"
                      onChange={vRegistration1}
                      id=""
                    >
                      <option value="ahmedaba">ahmedaba</option>
                      <option value="surat">surat</option>
                      <option value="bhavnagar">bhavnagar</option>
                      <option value="amreli">amreli</option>
                      <option value="junagadh">junagadh</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      TDS( % Exemption )
                    </p>
                    <select
                      name="agency_tdsexemption_percent"
                      onChange={vRegistration1}
                      id=""
                    >
                      <option value="ahmedaba">ahmedaba</option>
                      <option value="surat">surat</option>
                      <option value="bhavnagar">bhavnagar</option>
                      <option value="amreli">amreli</option>
                      <option value="junagadh">junagadh</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">Website url</p>
                    <select name="website" onChange={vRegistration1} id="">
                      <option value="ahmedaba">ahmedaba</option>
                      <option value="surat">surat</option>
                      <option value="bhavnagar">bhavnagar</option>
                      <option value="amreli">amreli</option>
                      <option value="junagadh">junagadh</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Consolidators: (optional)
                    </p>
                    <input
                      type="text"
                      name="agency_consolidators"
                      onChange={vRegistration1}
                      id=""
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      References: (optional)
                    </p>
                    <input
                      type="text"
                      name="reference"
                      onChange={vRegistration1}
                      id=""
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Remarks: (optional)
                    </p>
                    <input
                      type="text"
                      name="agency_remarks"
                      onChange={vRegistration1}
                      id=""
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-1">
                    <div className="radio_input d-flex align-items-center">
                      <p className="mb-0">Office Space :</p>
                      <div className="d-flex align-items-center">
                        <input
                          type="radio"
                          name="agency_officespace"
                          onChange={vRegistration1}
                          id=""
                          className="ms-2"
                        />
                        <label htmlFor="radio" className="ms-1">
                          Owned
                        </label>
                        <input
                          type="radio"
                          name="agency_officespace"
                          onChange={vRegistration1}
                          id=""
                          className="ms-2"
                        />
                        <label htmlFor="radio" className="ms-1">
                          Rented
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-1">
                    <div className="radio_input d-flex align-items-center">
                      <p className="mb-0">IATA Registered : :</p>
                      <div className="d-flex align-items-center">
                        <input
                          type="radio"
                          name="IATA"
                          onChange={vRegistration1}
                          id=""
                          className="ms-2"
                        />
                        <label htmlFor="radio" className="ms-1">
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="IATA"
                          onChange={vRegistration1}
                          id=""
                          className="ms-2"
                        />
                        <label htmlFor="radio" className="ms-1">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center sing_up_button">
                  <Button
                    type="submit"
                    className="w-50"
                    onClick={RegistrationNext1}
                  >
                    Next
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Registation__vandor2;
