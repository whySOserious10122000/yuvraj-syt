import React from "react";
import { Container, Form, FormCheck, Row } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Header from "../Project/Header";
import { login } from "./Re_values";
import "../Project/css/Registation_vandor.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../BASE_URL";

function Registation__vandor3(props) {
  const navigate = useNavigate();

  const [vendorRegistration3, setVendorRegistration3] = useState({
    gst_agency_name: "",
    gst_agency_classification: "",
    gst_agency_GST: "",
    gst_agency_state: "",
    gst_agency_city: "",
    gst_provisional_GST: "",
    gst_contact_person: "",
    gst_phone: "",
    gst_alternate_phone: "",
    gst_email: "",
    gst_alternate_email: "",
    gst_registration_status: "",
    gst_address_line_1: "",
    gst_hsn_sac_code: "",
    gst_address_line_2: "",
    gst_pincode: "",
    gst_supply_type: "",
    gst_comp_levy_sec10_GST: "",
  });

  const [agency_name, setAgency_name] = useState("");
  const [mobileerror, setMobileerror] = useState("");
  const [phoneerror, setPhoneerror] = useState("");
  const [agency_gst, setAgency_gst] = useState("");
  const [agency_pro_gst, setAgency_pro_gst] = useState("");
  const [contact_person, setContact_person] = useState("");
  const [pincode, setPincode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [hsncode, setHsncode] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [compliance_status, setCompliance_status] = useState("");

  const vRegistration3 = (e) => {
    const { name, value } = e.target;
    setVendorRegistration3({ ...vendorRegistration3, [name]: value });
  };
  console.log(vendorRegistration3);

  const RegistrationNext3 = async (e) => {
    e.preventDefault();

    const {
      gst_agency_name,
      gst_agency_GST,
      gst_agency_state,
      gst_agency_classification,
      gst_agency_city,
      gst_provisional_GST,
      gst_contact_person,
      gst_phone,
      gst_alternate_phone,
      gst_email,
      gst_alternate_email,
      gst_registration_status,
      gst_address_line_1,
      gst_hsn_sac_code,
      gst_address_line_2,
      gst_pincode,
      gst_supply_type,
      gst_comp_levy_sec10_GST,
    } = vendorRegistration3;

    if (
      gst_agency_name.length <= 0 ||
      gst_phone.length < 10 ||
      gst_alternate_phone.length < 10 ||
      gst_agency_GST.length <= 0 ||
      gst_provisional_GST.length <= 0 ||
      gst_contact_person.length <= 0 ||
      gst_pincode.length < 6 ||
      gst_address_line_1.length <= 0 ||
      gst_address_line_2 <= 0 ||
      gst_hsn_sac_code.length < 6 ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(gst_email) ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(gst_alternate_email) ||
      gst_comp_levy_sec10_GST.length <= 0
    ) {
      setAgency_name("enter agency name");
      setMobileerror("enter valid mobile  number");
      setPhoneerror("enter valid phone number");
      setAgency_gst("enter agency GSTIN");
      setAgency_pro_gst("enter agency provisional GSTIN");
      setContact_person("enter contact person");
      setPincode("enter pincode");
      setAddress1("enter your address");
      setAddress2("enter your address");
      setHsncode("enter HSN/SAC code");
      setEmail1("enter your email");
      setEmail2("enter your Correspondence email");
      setCompliance_status("choose compliance status");
    } else {
      const res = await fetch(`${BASE_URL}user/agency`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gst_agency_name,
          gst_agency_classification,
          gst_agency_GST,
          gst_agency_state,
          gst_agency_city,
          gst_provisional_GST,
          gst_contact_person,
          gst_phone,
          gst_alternate_phone,
          gst_email,
          gst_alternate_email,
          gst_registration_status,
          gst_address_line_1,
          gst_hsn_sac_code,
          gst_address_line_2,
          gst_pincode,
          gst_supply_type,
          gst_comp_levy_sec10_GST,
          role: "agency",
        }),
      });
      const data = await res.json();
      console.log(data);
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
                <p>Agency GST Details</p>
              </div>
              <form>
                <Row>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">Agency Name*</p>
                    <input
                      type="text"
                      onChange={vRegistration3}
                      name="gst_agency_name"
                      id=""
                    />
                    {vendorRegistration3.gst_agency_name.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {agency_name}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Choose Agency Classification*
                    </p>
                    <select
                      name="gst_agency_classification"
                      onChange={vRegistration3}
                      id=""
                    >
                      <option value="gujrat">
                        Choose Agency Classification*
                      </option>
                      <option value="maharashtra">canada</option>
                      <option value="tamilnadu">tamilnadu</option>
                      <option value="delhi">delhi</option>
                      <option value="asam">asam</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">Agency GSTIN</p>
                    <input
                      type="text"
                      onChange={vRegistration3}
                      name="gst_agency_GST"
                      id=""
                    />
                    {vendorRegistration3.gst_agency_GST.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {agency_gst}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Choose State*
                    </p>
                    <select
                      name="gst_agency_state"
                      onChange={vRegistration3}
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
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Provisional GST No
                    </p>
                    <input
                      type="text"
                      onChange={vRegistration3}
                      name="gst_provisional_GST"
                      id=""
                    />
                    {vendorRegistration3.gst_provisional_GST.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {agency_pro_gst}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Contact Person
                    </p>
                    <input
                      type="text"
                      onChange={vRegistration3}
                      name="gst_contact_person"
                      id=""
                    />
                    {vendorRegistration3.gst_contact_person.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {contact_person}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">Phone Number</p>
                    <input
                      type="number"
                      onChange={vRegistration3}
                      name="gst_phone"
                      id=""
                    />
                    {vendorRegistration3.gst_phone.length < 10 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {mobileerror}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Mobile Number
                    </p>
                    <input
                      type="number"
                      onChange={vRegistration3}
                      name="gst_alternate_phone"
                      id=""
                    />
                    {vendorRegistration3.gst_alternate_phone.length < 10 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {phoneerror}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">Email ID</p>
                    <input
                      type="email"
                      onChange={vRegistration3}
                      name="gst_email"
                      id=""
                    />
                    {vendorRegistration3.gst_email.length < 0 ||
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                      vendorRegistration3.gst_email
                    ) ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {email1}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Correspondence Mail ID
                    </p>
                    <input
                      type="email"
                      onChange={vRegistration3}
                      name="gst_alternate_email"
                      id=""
                    />
                    {vendorRegistration3.gst_alternate_email.length < 0 ||
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                      vendorRegistration3.gst_alternate_email
                    ) ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {email2}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      GST Registration Status*
                    </p>
                    <select
                      name="gst_registration_status"
                      onChange={vRegistration3}
                      id=""
                    >
                      <option value="ahmedaba">GST Registration Status</option>
                      <option value="surat">surat</option>
                      <option value="bhavnagar">bhavnagar</option>
                      <option value="amreli">amreli</option>
                      <option value="junagadh">junagadh</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Address Line 1*
                    </p>
                    <input
                      type="text"
                      onChange={vRegistration3}
                      name="gst_address_line_1"
                      id=""
                    />
                    {vendorRegistration3.gst_address_line_1.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {address1}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Choose Compliance Status
                    </p>
                    <input
                      type="gst_comp_levy_sec10_GST"
                      onChange={vRegistration3}
                      name=""
                      id=""
                    />
                    {vendorRegistration3.gst_comp_levy_sec10_GST.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {compliance_status}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">HSN/SAC Code</p>
                    <input
                      type="tel"
                      onChange={vRegistration3}
                      name="gst_hsn_sac_code"
                      id=""
                      maxLength={6}
                    />
                    {vendorRegistration3.gst_hsn_sac_code.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {hsncode}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Address Line 2*
                    </p>
                    <input
                      type="text"
                      onChange={vRegistration3}
                      name="gst_address_line_2"
                      id=""
                    />
                    {vendorRegistration3.gst_address_line_2.length <= 0 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {address2}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">PIN Code*</p>
                    <input
                      type="number"
                      onChange={vRegistration3}
                      name="gst_pincode"
                      id=""
                      maxLength={6}
                    />
                    {vendorRegistration3.gst_pincode.length < 10 ? (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {pincode}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <p className="cmnp mb-2 fw-normal  text-20">
                      Choose Agency City*
                    </p>
                    <select
                      name="gst_agency_city"
                      onChange={vRegistration3}
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
                      Choose Supply Type*
                    </p>
                    <select
                      name="gst_supply_type"
                      onChange={vRegistration3}
                      id=""
                    >
                      <option value="ahmedaba">Choose Supply Type</option>
                      <option value="surat">surat</option>
                      <option value="bhavnagar">bhavnagar</option>
                      <option value="amreli">amreli</option>
                      <option value="junagadh">junagadh</option>
                    </select>
                  </div>
                </Row>
                <div className="text-center sing_up_button">
                  <Button
                    type="submit"
                    className="w-50"
                    onClick={RegistrationNext3}
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

export default Registation__vandor3;
