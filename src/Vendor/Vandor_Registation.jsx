import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { BASE_URL } from "../BASE_URL";
import Header from "../Project/Header";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Vandor_Registation = () => {

  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");


  const [registerAgency, setRegisterAgency] = useState({
    full_name: "",
    mobile_number: "",
    email_address: "",
    resident_address: "",
    pincode: "",
    skypeid: "",
    agency_name: "",
    agency_phone_no: "",
    GST_no: "",
    pancard_no: "",
    agency_fax: "",
    agency_address: "",
    alternate_address: "",
    agency_officespace: "",
    alternate_phone: "",
    agency_pincode: "",
    agency_logo: "",
    business_type: "",
    agency_securitization_mode: "",
    year_in_business: "",
    agency_monthlybookingvolume: "",
    TDS_exemption: "",
    TDS_for_exemption: "",
    website: "",
    reference: "",
    agency_remarks: "",
    gst_agency_name: "",
    gst_agency_classification: "",
    agency_tdsexemption_percent: "",
    gst_registration_status: "",
    gst_agency_GST: "",
    gst_provisional_GST: "",
    gst_contact_person: "",
    gst_phone: "",
    gst_alternate_phone: "",
    gst_agency_state_code: "",
    gst_email: "",
    gst_alternate_email: "",
    gst_address_line_1: "",
    gst_comp_levy_sec10_GST: "",
    gst_hsn_sac_code: "",
    gst_address_line_2: "",
    gst_pincode: "",
  });

  const [skypeIdValid, setSkypeIdValid] = useState(true);
  const [emailError, setEmailError] = useState('');

  // Regular expression for a typical Skype ID pattern
  const skypeIDRegex = /^[a-zA-Z][a-zA-Z0-9\.,\-_]{5,31}$/;



  const txt = (e) => {
    const { name, value } = e.target;

    if (name === 'skypeid') {
      setSkypeIdValid(skypeIDRegex.test(value));
    }

    if (name === 'email_address') {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? '' : 'Invalid email address');
    }
    setRegisterAgency({ ...registerAgency, [name]: value });
  };

  const postRegistration = async () => {
    const {
      full_name,
      mobile_number,
      email_address,
      resident_address,
      pincode,
      skypeid,
      agency_name,
      pancard_no,
      agency_pincode,
      agency_phone_no,
      alternate_phone,
      GST_no,
      agency_address,
      alternate_address,
      agency_officespace,
      agency_fax,
      business_type,
      agency_securitization_mode,
      year_in_business,
      agency_monthlybookingvolume,
      TDS_exemption,
      TDS_for_exemption,
      website,
      reference,
      agency_remarks,
      gst_agency_name,
      gst_agency_classification,
      agency_tdsexemption_percent,
      gst_registration_status,
      gst_supply_type,
      gst_agency_GST,
      gst_provisional_GST,
      gst_contact_person,
      gst_phone,
      gst_alternate_phone,
      gst_agency_state_code,
      gst_email,
      gst_alternate_email,
      gst_address_line_1,
      gst_comp_levy_sec10_GST,
      gst_hsn_sac_code,
      gst_address_line_2,
      gst_pincode,
    } = registerAgency;


    console.log("agency name" + gst_agency_name);
    console.log("gst_agency_classification" + gst_agency_classification);
    console.log("gst_agency_state_code" + gst_agency_state_code);
    console.log("gst_registration_status" + gst_registration_status);
    console.log("gst_address_line_1" + gst_address_line_1);


    if (!gst_agency_name || !gst_agency_classification || !gst_agency_state_code || !gst_registration_status || !gst_address_line_1) {
      toast.error('All fields marked with * are required!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
      return;
    }




    const res = await fetch(`${BASE_URL}agency`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        mobile_number,
        email_address,
        resident_address,
        pincode,
        skypeid,
        country: selectedCountry.name,
        state: selectedState.name,
        city: selectedCity.name,
        agency_name,
        GST_no,
        pancard_no,
        agency_fax,
        agency_address,
        alternate_address,
        alternate_phone,
        agency_officespace,
        agency_pincode,
        agency_phone_no,
        agency_country: selectedCountry.name,
        agency_state: selectedState.name,
        agency_city: selectedCity.name,
        business_type,
        agency_securitization_mode,
        agency_tdsexemption_percent,
        year_in_business,
        agency_monthlybookingvolume,
        TDS_exemption,
        TDS_for_exemption,
        website,
        reference,
        agency_remarks,
        gst_agency_name,
        gst_agency_GST,
        gst_agency_classification,
        gst_agency_state: selectedState.name,
        gst_agency_state_code,
        gst_agency_city: selectedCity.name,
        gst_provisional_GST,
        gst_contact_person,
        gst_phone,
        gst_alternate_phone,
        gst_email,
        gst_alternate_email,
        gst_address_line_1,
        gst_comp_levy_sec10_GST,
        gst_hsn_sac_code,
        gst_address_line_2,
        gst_pincode,
      }),
    });
    const data = await res.json();
    if (data.code == 403) {
      toast.error('Already Registered', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    }
    if (data.code == 200) {
      toast.success('Registered Successfully', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/vendor/login");
      }, 2000);

    }
  };

  const handleNextClick = () => {
    const { full_name, mobile_number, email_address, resident_address, pincode, skypeid } = registerAgency;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      full_name.trim() === '' ||
      mobile_number.trim() === '' ||
      resident_address.trim() === '' ||
      pincode.trim() === '' ||
      selectedCountry === '' ||
      selectedState === '' ||
      selectedCity === '' ||
      skypeid.trim() === ''
    ) {
      toast.error('All fields marked with * are required!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    } else if (mobile_number.length !== 10) {
      toast.error('Mobile number must be 10 digits!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    } else if (!emailRegex.test(email_address)) {
      toast.error('Invalid email address!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    } else if (pincode.length !== 6) {
      toast.error('Pincode must be 6 digits!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    } else {
      setValue(1); // Assuming you have a function setValue to proceed to the next step
    }
  };




  const handleNextClick1 = () => {
    const {
      agency_name,
      pancard_no,
      business_type,
      agency_securitization_mode,
      year_in_business,
      agency_monthlybookingvolume,
      agency_address,
      agency_phone_no,
      GST_no,
      alternate_address,
      alternate_phone,
      agency_officespace,
      agency_tdsexemption_percent,
      agency_pincode,
    } = registerAgency;

    // Basic mobile number validation
    const mobileNumberRegex = /^[0-9]{10}$/;
    // Basic pincode validation
    const pincodeRegex = /^[0-9]{6}$/;

    if (
      agency_name.trim() === '' ||
      pancard_no.trim() === '' ||
      business_type.trim() === '' ||
      agency_securitization_mode.trim() === '' ||
      year_in_business === '' ||
      agency_monthlybookingvolume === '' ||
      agency_address === '' ||
      GST_no.trim() === '' ||
      alternate_address === '' ||
      alternate_phone.trim() === '' ||
      agency_officespace === '' ||
      agency_tdsexemption_percent === '' ||
      agency_officespace === ''
    ) {
      toast.error('All fields marked with * are required or have invalid data!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    } else if (agency_phone_no.trim().length !== 10) {
      toast.error('Mobile number must be 10 digits!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    } else if (alternate_phone.trim().length !== 10) {
      toast.error('Alternate phone must be 10 digits!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    } else {
      setValue(2); // Assuming you have a function setValue to proceed to the next step
    }
  };



  //------------------- number validation 

  const handleKeyDown = (e) => {
    // Allow: backspace, delete, tab, escape, enter
    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A/Ctrl+C/Ctrl+V
      (e.keyCode === 65 && e.ctrlKey === true) ||
      (e.keyCode === 67 && e.ctrlKey === true) ||
      (e.keyCode === 86 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
      // Let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  };




  return (
    <>
      <Header />
      <Box sx={{ width: "100%" }}>

        <TabPanel value={value} index={0}>
          <section className="py-5">
            <Container>
              <div className="vendor_signup py-5">
                <div className="sign_up_form py-xl-4 py-lg-3 py-md-2 py-sm-1">
                  <div className="sign_up_header">
                    <h3 className="text-center mb-3">
                      Sign Up to your account
                    </h3>
                    <p>Personal Details</p>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <Row className="gy-2 gx-5">

                      {/*------------------------ full_name  -----------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Full Name<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          name="full_name"
                          id=""
                          className="w-100"
                          onChange={txt}
                        />
                      </div>

                      {/*------------------------ mobile_number  -----------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Mobile Number<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="tel"
                          name="mobile_number"
                          id=""
                          maxLength={10}
                          onChange={txt}
                          onKeyDown={handleKeyDown}
                        />
                      </div>

                      {/*------------------------ email  -----------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Email<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="email"
                          name="email_address"
                          onChange={txt}
                          id=""
                        />
                        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                      </div>

                      {/*------------------------ residential_area  -----------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Residential Area
                          <span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          name="resident_address"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*------------------------ pincode  -----------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Pincode<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="tel"
                          name="pincode"
                          onChange={txt}
                          maxLength={6}
                          onKeyDown={handleKeyDown}
                        />
                      </div>

                      {/*------------------------ skype_id  -----------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">Skype ID<span style={{ color: "red" }}>*</span></p>
                        <input
                          type="email"
                          name="skypeid"
                          onChange={txt}
                          id=""
                        />
                        {!skypeIdValid && (
                          <p style={{ color: 'red' }}>Invalid Skype ID format</p>
                        )}
                      </div>

                      {/*------------------------ country  -----------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Choose Country<span style={{ color: "red" }}>*</span>
                        </p>
                        <Select
                          options={Country.getAllCountries()}
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={selectedCountry}
                          onChange={(item) => {
                            setSelectedCountry(item);
                            setSelectedState("");
                            setSelectedCity("");
                          }}
                          name="country"
                        />
                      </div>

                      {/*------------------------ state  -----------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Choose State<span style={{ color: "red" }}>*</span>
                        </p>
                        <Select
                          options={State?.getStatesOfCountry(
                            selectedCountry?.isoCode
                          )}
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={selectedState}
                          onChange={(item) => {
                            setSelectedState(item);
                            setSelectedCity("");
                          }}
                          name="state"
                        />
                      </div>

                      {/*------------------------ city  -----------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Choose City<span style={{ color: "red" }}>*</span>
                        </p>
                        <Select
                          options={City.getCitiesOfState(
                            selectedState?.countryCode,
                            selectedState?.isoCode
                          )}
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={selectedCity}
                          onChange={(item) => {
                            setSelectedCity(item);
                          }}
                          name="city"
                        />
                      </div>

                    </Row>
                    <div className="text-center sing_up_button">
                      <Button
                        type="button" // Change to "button" to prevent form submission
                        className="w-50"
                        onClick={handleNextClick}
                      >
                        Next
                      </Button>
                      <ToastContainer />
                    </div>
                  </form>
                </div>
              </div>
            </Container>
          </section>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <section className="py-5">
            <Container>
              <div className="vendor_signup py-5">
                <div className="sign_up_form py-xl-4 py-lg-3 py-md-2 py-sm-1">
                  <div className="sign_up_header">
                    <h3 className="text-center mb-3">
                      Sign Up to your account
                    </h3>
                    <p>Agency Details</p>
                  </div>
                  <form>
                    <Row className="gy-2 gx-5">

                      {/*----------------------------- Agency_name ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Agency Name<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          name="agency_name"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*------------------------ agency_phone_number  -----------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Agency Phone Number<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="tel"
                          name="agency_phone_no"
                          id=""
                          maxLength={10}
                          onChange={txt}
                          onKeyDown={handleKeyDown}
                        />
                      </div>

                      {/*------------------------ agency alternate phone number  -----------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Agency Alternate Phone Number<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="tel"
                          name="alternate_phone"
                          id=""
                          maxLength={10}
                          onChange={txt}
                          onKeyDown={handleKeyDown}
                        />
                      </div>

                      {/*----------------------------- pancard ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Pan card<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          name="pancard_no"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*----------------------------- Agency GST no ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Agency GST No<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          name="GST_no"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*----------------------------- fax ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">Fax</p>
                        <input
                          type="text"
                          name="agency_fax"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*----------------------------- agency pincode ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Agency Pincode<span style={{ color: "red" }} >*</span>
                        </p>
                        <input
                          type="tel"
                          name="agency_pincode"
                          onChange={txt}
                          maxLength={6}
                          onKeyDown={handleKeyDown}
                        />
                      </div>

                      {/*------------------------ agency address  -----------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Agency Address
                          <span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          name="agency_address"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*------------------------ agency alternate address  -----------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Agency Alternate Address
                          <span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          name="alternate_address"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*----------------------------- Agency_logo ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Agency Logo
                        </p>
                        <input type="file" name="agency_logo" id="" />
                      </div>

                      {/*----------------------------- Agency_pancard_image------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Attach Pan Card Image
                        </p>
                        <input type="file" name="pancard_image" id="" />
                      </div>

                      {/*----------------------------- Agency_country ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Choose Country
                        </p>
                        <Select
                          options={Country.getAllCountries()}
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={selectedCountry}
                          onChange={(item) => {
                            setSelectedCountry(item);
                            setSelectedState("")
                            setSelectedCity("")
                          }}
                        />
                      </div>

                      {/*----------------------------- Agency_state ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Choose State
                        </p>
                        <Select
                          options={State?.getStatesOfCountry(
                            selectedCountry?.isoCode
                          )}
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={selectedState}
                          onChange={(item) => {
                            setSelectedState(item);
                            setSelectedCity("")
                          }}
                        />
                      </div>

                      {/*----------------------------- Agency_city ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Choose City
                        </p>
                        <Select
                          options={City.getCitiesOfState(
                            selectedState?.countryCode,
                            selectedState?.isoCode
                          )}
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={selectedCity}
                          onChange={(item) => {
                            setSelectedCity(item);
                          }}
                        />
                      </div>

                      {/*----------------------------- bussiness_type ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Business Type<span style={{ color: "red" }}>*</span>
                        </p>
                        <select name="business_type" id="" onChange={txt}>
                          <option value="">Select</option>
                          <option value="Sole Proprietor">
                            Sole Proprietor
                          </option>
                          <option value="Partnership">Partnership</option>
                          <option value="3">Joint Venture</option>
                          <option value="Joint Venture">PVT LTD. CO.</option>
                          <option value="HUF">HUF</option>
                          <option value="Limited">Limited</option>
                          <option value="Sole Proprietor with GST">
                            Sole Proprietor with GST
                          </option>
                          <option value="Sole Proprietor Without GST">
                            Sole Proprietor Without GST
                          </option>
                          <option value="Partnership LLP">
                            Partnership LLP
                          </option>
                          <option value="Partnership Non LLP">
                            Partnership Non LLP
                          </option>
                          <option value="Corporate">Corporate</option>
                        </select>
                      </div>

                      {/*----------------------------- securitization_mode ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Securitization Mode
                          <span style={{ color: "red" }}>*</span>
                        </p>
                        <select name="agency_securitization_mode" id="" onChange={txt}>
                          <option value="">Select</option>
                          <option value="Unsecure">Unsecure</option>
                          <option value="Bank Guarantee">Bank Guarantee</option>
                          <option value="Post Dated Cheque">
                            Post Dated Cheque
                          </option>
                        </select>
                      </div>

                      {/*----------------------------- years_in_business ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Years in Business
                          <span style={{ color: "red" }}>*</span>
                        </p>
                        <select name="year_in_business" id="" onChange={txt}>
                          <option value="">Select</option>
                          <option value="Less Then 1">Less Then 1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="More Then 12">More Then 12</option>
                        </select>
                      </div>

                      {/*----------------------------- monthly_booking_volume ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Monthly Booking Volume
                          <span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          name="agency_monthlybookingvolume"
                          id=""
                          onChange={txt}
                        />
                      </div>

                      {/*----------------------------- TDS_exemption ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          TDS Exemption<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          name="TDS_exemption"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*----------------------------- TDS_exemption_in_percentage ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          TDS( % Exemption )<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          name="agency_tdsexemption_percent"
                          onChange={txt}
                          onKeyDown={handleKeyDown}
                          id=""
                        />
                      </div>

                      {/*----------------------------- website_url ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Website url
                        </p>
                        <input
                          type="text"
                          name="website"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*----------------------------- References ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          References: (optional)
                        </p>
                        <input
                          type="text"
                          name="reference"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*----------------------------- remarks ------------------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Remarks: (optional)
                        </p>
                        <input
                          type="text"
                          name="agency_remarks"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*----------------------------- office_space ------------------------------------*/}

                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-1">
                        <div className="radio_input d-flex align-items-center">
                          <p className="mb-0">Office Space : <span style={{ color: "red" }}>*</span></p>
                          <div className="d-flex align-items-center">
                            <input
                              type="radio"
                              name="agency_officespace"
                              id=""
                              className="ms-2"
                              onChange={txt}
                            />
                            <label htmlFor="radio" className="ms-1">
                              Owned
                            </label>
                            <input
                              type="radio"
                              name="agency_officespace"
                              id=""
                              className="ms-2"
                              onChange={txt}
                            />
                            <label htmlFor="radio" className="ms-1">
                              Rented
                            </label>
                          </div>
                        </div>
                      </div>

                      {/*----------------------------- IATA_registered ------------------------------------*/}

                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-1">
                        <div className="radio_input d-flex align-items-center">
                          <p className="mb-0">IATA Registered : :</p>
                          <div className="d-flex align-items-center">
                            <input
                              type="radio"
                              name="IATA"
                              id=""
                              className="ms-2"
                            />
                            <label htmlFor="radio" className="ms-1">
                              Yes
                            </label>
                            <input
                              type="radio"
                              name="IATA"
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
                    <div className="row">
                      <div className="text-center col-6 sing_up_button">
                        <Button
                          className="w-50"
                          onClick={() => setValue(0)}
                          style={{
                            backgroundColor: "lightgray",
                            color: "black",
                            border: "none",
                          }}
                        >
                          Back
                        </Button>
                      </div>
                      <div className="text-center col-6 sing_up_button">
                        <Button className="w-50" onClick={handleNextClick1}>
                          Next
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Container>
          </section>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <section className="py-5">
            <Container>
              <div className="vendor_signup py-5">
                <div className="sign_up_form py-xl-4 py-lg-3 py-md-2 py-sm-1">
                  <div className="sign_up_header">
                    <h3 className="text-center mb-3">
                      Sign Up to your account
                    </h3>
                    <p>Agency GST Details</p>
                  </div>
                  <form>
                    <Row>

                      {/*------------------------- gst agency name  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Agency Name<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          name="gst_agency_name"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*------------------------- gst agency classification  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Choose Agency Classification
                          <span style={{ color: "red" }}>*</span>
                        </p>
                        <select name="gst_agency_classification" onChange={txt} id="">
                          <option value="" selected disabled>Select</option>
                          <option value="Unregistered">Unregistered</option>
                          <option value="Registered">Registered</option>
                          <option value="AppliedFor">AppliedFor</option>
                        </select>
                      </div>

                      {/*------------------------- gst agency GSTIN  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Agency GSTIN
                        </p>
                        <input
                          type="text"
                          name="gst_agency_GST"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*------------------------- gst agency state code  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Gst Agency State Code<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          name="gst_agency_state_code"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*------------------------- gst agency state  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Choose State<span style={{ color: "red" }}>*</span>
                        </p>
                        <Select
                          options={State?.getStatesOfCountry(
                            selectedCountry?.isoCode
                          )}
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={selectedState}
                          onChange={(item) => {
                            setSelectedState(item);
                          }}
                        />
                      </div>

                      {/*------------------------- gst agency city  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal text-20">
                          Choose City<span style={{ color: "red" }}>*</span>
                        </p>
                        <Select
                          options={City.getCitiesOfState(
                            selectedState?.countryCode,
                            selectedState?.isoCode
                          )}
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={selectedCity}
                          onChange={(item) => {
                            setSelectedCity(item);
                          }}
                        />
                      </div>

                      {/*------------------------- provisional gst no  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Provisional GST No
                        </p>
                        <input
                          type="text"
                          name="gst_provisional_GST"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*------------------------- contact person  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Contact Person
                        </p>
                        <input
                          type="text"
                          name="gst_contact_person"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*------------------------- gst phone number  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Phone Number<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="tel"
                          name="gst_phone"
                          onChange={txt}
                          id=""
                          maxLength={10}
                          onKeyDown={handleKeyDown}
                        />
                      </div>

                      {/*------------------------- gst mobile number  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Alternate Phone Number <span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="tel"
                          name="gst_alternate_phone"
                          onChange={txt}
                          id=""
                          maxLength={10}
                          onKeyDown={handleKeyDown}
                        />
                      </div>

                      {/*------------------------- gst agency email  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">Email ID</p>
                        <input
                          type="email"
                          name="gst_email"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*------------------------- correspondence mail id  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Correspondence Mail ID
                        </p>
                        <input
                          type="email"
                          name="gst_alternate_email"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*------------------------- gst registration status  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          GST Registration Status<span style={{ color: "red" }}>*</span>
                        </p>
                        <select name="gst_registration_status" id="" onChange={txt}>
                          <option value="">
                            select
                          </option>
                          <option value="pending">pending</option>
                          <option value="registered">registered</option>
                          <option value="rejected">rejected</option>
                        </select>
                      </div>

                      {/*------------------------- gst address line 1  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Address Line 1<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="text"
                          name="gst_address_line_1"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*------------------------- choose compiance status  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Choose Compliance Status
                        </p>
                        <input
                          type="gst_comp_levy_sec10_GST"
                          onChange={txt}
                          name=""
                          id=""
                        />
                      </div>

                      {/*------------------------- HSN/SAC code  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          HSN/SAC Code
                        </p>
                        <input
                          type="tel"
                          name="gst_hsn_sac_code"
                          id=""
                          maxLength={6}
                          onChange={txt}
                        />
                      </div>

                      {/*------------------------- address line 2  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Address Line 2
                        </p>
                        <input
                          type="text"
                          name="gst_address_line_2"
                          onChange={txt}
                          id=""
                        />
                      </div>

                      {/*------------------------- gst pincode   ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          PIN Code<span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                          type="tel"
                          name="gst_pincode"
                          id=""
                          maxLength={6}
                          onChange={txt}
                          onKeyDown={handleKeyDown}
                        />
                      </div>

                      {/*------------------------- gst supply type  ----------------------------*/}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                        <p className="cmnp mb-2 fw-normal  text-20">
                          Choose Supply Type
                          <span style={{ color: "red" }}>*</span>
                        </p>
                        <select name="gst_supply_type" id="" onChange={txt}>
                          <option value="ahmedaba">TAX</option>
                          <option value="ahmedaba">SEZWOP</option>
                        </select>
                      </div>
                    </Row>
                    <div className="row">
                      <div className="text-center col-6 sing_up_button">
                        <Button
                          className="w-50"
                          onClick={() => setValue(1)}
                          style={{
                            backgroundColor: "lightgray",
                            color: "black",
                            border: "none",
                          }}
                        >
                          Back
                        </Button>
                      </div>
                      <div className="text-center col-6 sing_up_button">
                        <Button className="w-50" onClick={postRegistration}>
                          Submit
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Container>
          </section>
        </TabPanel>
      </Box>
    </>
  );
};

export default Vandor_Registation;
