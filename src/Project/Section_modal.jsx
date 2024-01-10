import {
  faBus,
  faCar,
  faChevronLeft,
  faChevronRight,
  faPlane,
  faTrain,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FormCheck, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./css/index1.css";
// import Calendar from "react-calendar";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../BASE_URL";
import DatePicker, {
  DateObject,
  getAllDatesInRange,
  Calendar,
} from "react-multi-date-picker";

function Practic(props) {
  const [selectedRange, setSelectedRange] = useState([]);
  const [startDateValidation, setStartDateValidation] = useState([]);
  const [endDateValidation, setEndDateValidation] = useState([]);
  const [currentDateValidation, setCurrentDateValidation] = useState([]);

  const handleDateChange = (value) => {
    if (Array.isArray(value) && value.length >= 2) {
      const [startDateString, endDateString] = value;
      const startDate = new Date(startDateString);
      const endDate = new Date(endDateString);

      // Get the current date
      const currentDate = new Date();

      setStartDateValidation(startDate)
      setEndDateValidation(endDate)
      setCurrentDateValidation(currentDate)

      setSelectedRange([startDate, endDate]);
    }
  };


  // profile details 


  const [profile, setProfile] = useState("")

  const Profile = async () => {
    const token = localStorage.getItem("userToken");
    const res = await fetch(`${BASE_URL}user/userprofile`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setProfile(data?.data?.[0]);

    setDetails((prevDetails) => ({
      ...prevDetails,
      mobile_no: data?.data?.[0]?.phone || "",
      email_address: data?.data?.[0]?.user_details?.[0]?.email_address || "",
      full_name: data?.data?.[0]?.user_details?.[0]?.name || "",
      city: data?.data?.[0]?.user_details?.[0]?.city || "",
    }));


  };

  useEffect(() => {
    Profile();
  }, []);

  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    number == 0 ? setNumber(number - 0) : setNumber(number - 1);
  };

  const [error, setError] = useState("")


  const [date, setDate] = useState(new Date());
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const click1 = () => {
    if (!details?.departure || !details.destination || selectedValues.length === 0) {
      // setError("please fill all field");
      toast.error('please fill all field!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      // alert("please fill departure")
      // handleClose1(true);
      return;
    }

    if (selectedValues.length === 0) {
      // setError("Please select at least one checkbox");
      toast.error('Please select at least one checkbox!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    handleClose1(false);
    handleShow2(true);
  };

  // page 2
  const click2 = () => {

    if (!details.total_adult || selectedValuesTravel.length === 0 || !details.personal_care) {
      // setError("please fill all field");
      toast.error('please fill all field!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      // alert("please fill all fields")
      // handleClose1(true);
      return;
    }


    handleClose2(false);
    handleShow3(true);
  };

  const back1 = () => {
    handleClose2(false);
    handleShow1(true);
  };

  // page 3

  const click3 = () => {

    if (selectedRange.length === 0 || number === 0) {
      toast.error('please fill all field!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (startDateValidation < currentDateValidation || endDateValidation < currentDateValidation) {
      toast.error('Please select a start and end date after the current date!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    handleClose3(false);
    handleShow4(true);
  };

  const back2 = () => {
    handleClose3(false);
    handleShow2(true);
  };

  // page 4

  const validateRequiredFields = () => {
    // Replace these conditions with your actual required fields and their values
    const requiredFields = [
      selectedValuesHotel,
      selectedValuesMeal,
      selectedValueMealType,
      // Add more required fields here
    ];

    const hasEmptyField = requiredFields.some(field => field.length === 0);
    return !hasEmptyField;
  };

  const click4 = () => {
    // Add your validation logic here
    const requiredFieldsFilled = validateRequiredFields(); // Replace with your validation logic

    if (requiredFieldsFilled) {
      handleClose4(false);
      handleShow5(true);
    } else {
      toast.error('please fill all field!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
    }
  };

  const back3 = () => {
    handleClose4(false);
    handleShow3(true);
  };

  // 5

  const click5 = () => {

    if (details.additional_requirement.length === 0) {
      // setError("Please select a date range");
      // setError("please fill all field");
      toast.error('please fill all field!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    handleClose5(false);
    handleShow6(true);
  };

  const back4 = () => {
    handleClose5(false);
    handleShow4(true);
  };

  // 6

  const click6 = () => {
    handleClose5(false);
    // handleShow5(true);
  };

  const back5 = () => {
    handleClose6(false);
    handleShow5(true);
  };

  const CssTextField = styled(TextField)({
    "& .MuiInput-underline:after": {
      borderBottomColor: "transparent",
    },
  });

  //api

  const [categoty, setCategoty] = useState([]);

  const getCategoty = async () => {
    const res = await fetch(`${BASE_URL}destinationcategory`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setCategoty(data.data);
  };

  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const [selectedValuesTravel, setSelectedValuesTravel] = useState([]);

  const handleCheckboxChangeTravel = (value) => {
    if (selectedValuesTravel.includes(value)) {
      setSelectedValuesTravel(selectedValuesTravel.filter((v) => v !== value));
    } else {
      setSelectedValuesTravel([...selectedValuesTravel, value]);
    }
  };

  const [selectedValuesHotel, setSelectedValuesHotel] = useState([]);

  const handleCheckboxChangeHotel = (value) => {
    if (value === "Any" || value === "No" || value === "Budget Property") {
      setSelectedValuesHotel([value]);
    } else {
      setSelectedValuesHotel((prevSelected) => {
        if (prevSelected.includes("Any") || prevSelected.includes("No") || prevSelected.includes("Budget Property")) {
          prevSelected = prevSelected.filter((v) => v !== "Any" && v !== "No" && v !== "Budget Property");
        }

        if (prevSelected.includes(value)) {
          return prevSelected.filter((v) => v !== value);
        } else {
          return [...prevSelected, value];
        }
      });
    }
  };



  const [notRequired, setNotRequired] = useState("")

  const [selectedValuesMeal, setSelectedValuesMeal] = useState([]);

  const handleCheckboxChangeMeal = (value) => {
    setNotRequired("")
    if (selectedValuesMeal.includes(value)) {
      setSelectedValuesMeal(selectedValuesMeal.filter((v) => v !== value));
    } else {
      setSelectedValuesMeal([...selectedValuesMeal, value]);
    }
  };





  const [selectedValueMealType, setSelectedValueMealType] = useState("");

  const handleCheckboxChangeMealType = (value) => {
    setSelectedValueMealType(value);
  };

  const handleNotRequiredChange = (e) => {
    setSelectedValuesMeal("Not Required")
    handleCheckboxChangeMealType("Not Required")
    setNotRequired("Not Required")
  }

  const [errors, setErrors] = useState("")

  const [details, setDetails] = useState({
    departure: "",
    destination: "",
    total_adult: 2,
    total_child: 0,
    Infant: 0,
    personal_care: "no",
    additional_requirement: "",
    full_name: "",
    email_address: "",
    mobile_no: "",
    city: "",
    budget_per_person: 5000,
  });


  const txt = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
    if (name === 'budget_per_person') {
      const budgetValue = parseInt(value, 10);
      if (budgetValue <= 5000) {
        setErrors("Please Enter Amount Above 5000")
      }
    } else {
      setErrors("")
    }
  };

  const customerRequirment = {
    details,
    selectedValues,
    selectedValuesTravel,
    selectedValuesHotel,
    selectedValuesMeal,
  };

  const customerRequirmentToken = localStorage.getItem("customerRequirment");
  const parsedData = JSON.parse(customerRequirmentToken);



  const CustomPackage = async () => {
    const token = localStorage.getItem("userToken");



    if (!token) {
      if (!details.full_name || !details.email_address || !details.mobile_no || !details.city || !details.budget_per_person) {
        toast.error('please fill all field!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return; // Stop the function execution if validation fails
      }


      if (details.mobile_no.length < 10) {
        toast.error('please enter valid mobile number!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(details.email_address)) {
        toast.error('Please enter a valid email address!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return;
      }

      if (details.budget_per_person < 5000) {
        toast.error('please price above 5000!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return;
      }
      alert("please Login First");
      handleClose6(false);
      localStorage.setItem(
        "customerRequirment",
        JSON.stringify(customerRequirment)
      );
    } else {
      const {
        departure,
        destination,
        total_adult,
        total_child,
        Infant,
        personal_care,
        additional_requirement,
        full_name,
        email_address,
        mobile_no,
        city,
        budget_per_person,
      } = details;

      if (!details.full_name || !details.email_address || !details.mobile_no || !details.city || !details.budget_per_person) {
        toast.error('please fill all field!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return; // Stop the function execution if validation fails
      }

      if (details.mobile_no.length < 10) {
        toast.error('please enter valid mobile number!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return;
      }

      if (details.budget_per_person < 5000) {
        toast.error('please enter amount above 5000!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return;
      }

      const res = await fetch(`${BASE_URL}customrequirements`, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          departure,
          destination,
          category: selectedValues,
          total_adult,
          total_child,
          Infant,
          travel_by: selectedValuesTravel,
          personal_care,
          start_date: selectedRange[0].toLocaleDateString(),
          end_date: selectedRange[1].toLocaleDateString(),
          hotel_type: selectedValuesHotel,
          meal_require: selectedValuesMeal,
          meal_type: selectedValueMealType,
          additional_requirement,
          full_name,
          email_address,
          mobile_no: Number(mobile_no),
          city,
          budget_per_person,
          total_travel_days: number,
        }),
      });
      const data = await res.json();

      if (data.code == 200) {

        setDetails({
          departure: "",
          destination: "",
          total_adult: 2,
          total_child: 0,
          Infant: 0,
          personal_care: "no",
          additional_requirement: "",
          budget_per_person: 5000,
        });

        setSelectedValues([]);
        setSelectedValuesTravel([]);
        setSelectedRange([]);
        setSelectedValuesHotel([]);
        setSelectedValuesMeal([]);
        setSelectedValueMealType([]);
        setSelectedRange([]);

        handleClose6(false);
        toast.success('Requirment Saved Successfully!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        localStorage.removeItem("customerRequirment");
      }
    }
  };

  useEffect(() => {
    getCategoty();
    setTimeout(() => {
      localStorage.removeItem("customerRequirment");
    }, 24 * 60 * 60 * 1000);
  }, []);

  return (
    <>
      <a
        variant="primary"
        onClick={handleShow1}
        className="inner_btn cmnpointer"
      >
        CREATE CUSTOM PACKAGE
      </a>
      {/* 1 */}
      <Modal
        show={show1}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="m-o p-2"
      >
        <Modal.Body className="p-0">
          <Row>
            <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ background: "#D6D6D6" }} >
            </div>
            <div className="col-md-8">
              <div className="float-end pe-4 pt-2 p-2" onClick={handleClose1}>
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ fontSize: "25px", cursor: "pointer" }}
                />
              </div>
              <div className="text-center pt-5">
                <img
                  src="/modal1.png"
                  className="img-fluid"
                  style={{ marginRight: "10px" }}
                />
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginRight: "8px",
                    color: "#09646D",
                  }}
                >
                  Where would you like to go?
                </p>
              </div>
              <div style={{ marginLeft: "15px", marginRight: "30px" }}>

                {/* departure  */}

                <div className="py-1">
                  {selectedValues.length === 0 ? (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {error}
                    </span>
                  ) : (
                    ""
                  )}
                  <p
                    className="cmnp"
                    style={{ fontSize: "18px", fontWeight: "600" }}
                  >
                    Departure
                  </p>
                  {customerRequirmentToken &&
                    customerRequirmentToken.length > 0 ? (
                    <input
                      type="text"
                      placeholder="Departure"
                      className="w-100 p-2"
                      onChange={txt}
                      name="departure"
                      value={parsedData.details.departure}
                      style={{
                        border: "1px solid #B8B8B8",
                        borderRadius: "10px",
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Departure"
                      className="w-100 p-2"
                      onChange={txt}
                      value={details.departure}
                      name="departure"
                      style={{
                        border: "1px solid #B8B8B8",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                </div>

                {/* destination   */}

                <div className="py-1">
                  <p
                    className="cmnp"
                    style={{ fontSize: "18px", fontWeight: "600" }}
                  >
                    Destination
                  </p>
                  {customerRequirmentToken &&
                    customerRequirmentToken.length > 0 ? (
                    <input
                      type="text"
                      placeholder="Destination"
                      className="w-100 p-2"
                      onChange={txt}
                      name="departure"
                      value={parsedData.details.destination}
                      style={{
                        border: "1px solid #B8B8B8",
                        borderRadius: "10px",
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Destination"
                      onChange={txt}
                      className="w-100 p-2"
                      value={details.destination}
                      name="destination"
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #B8B8B8",
                      }}
                    />
                  )}
                </div>


              </div>

              {/* category */}
              <h5 style={{ fontWeight: "600" }} className="mt-2 ms-2">Category</h5>
              <Row className="py-1">
                {categoty.map((ele) => {
                  return (
                    <>
                      <div className="col-6">
                        <div className="py-1 mx-lg-5 mx-sm-3 mx-0 ms-2">
                          <div>
                            <div className="py-1 d-flex">
                              {customerRequirmentToken &&
                                customerRequirmentToken.length > 0 ? (
                                <FormCheck
                                  className="p-0 m-0"
                                  name="Historical"
                                  value={ele._id}
                                  checked={parsedData.selectedValues.includes(
                                    `${ele._id}`
                                  )}
                                  onChange={() =>
                                    handleCheckboxChange(`${ele._id}`)
                                  }
                                />
                              ) : (
                                <FormCheck
                                  className="p-0 m-0"
                                  name="Historical"
                                  value={ele._id}
                                  checked={selectedValues.includes(
                                    `${ele._id}`
                                  )}
                                  onChange={() =>
                                    handleCheckboxChange(`${ele._id}`)
                                  }
                                />
                              )}
                              <span className="ms-1">{ele.category_name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Row>

              <div className="d-flex justify-content-center">
                <div className="py-3 w-75">
                  <p
                    className="load_btn text-center"
                    style={{ cursor: "pointer" }}
                    onClick={click1}
                  >
                    Next
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Modal.Body>
        <ToastContainer />
      </Modal>

      {/* 2 */}
      <Modal
        show={show2}
        backdrop="static"
        keyboard={false}
        className="m-o p-2"
        size="lg"
      >
        <Modal.Body className="p-0">
          <Row>
            <div className="col-md-4 side">
              <div className="pt-2 ps-3">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{
                    background: "#09646D",
                    color: "#fff",
                    borderRadius: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                  }}
                  onClick={back1}
                />
              </div>
            </div>
            <div className="col-md-8 px-4 mx-md-0 mx-2">
              <div className="float-end pe-4 pt-2 p-2" onClick={handleClose2}>
                <FontAwesomeIcon icon={faXmark} className="cross" />
              </div>
              <div className="text-center pt-5">
                <h5
                  className="py-1 pb-3"
                  style={{ fontWeight: "600", marginRight: "10px" }}
                >
                  Give Us More Info
                </h5>
                {!details.total_adult || selectedValuesTravel.length === 0 || !details.personal_care ? (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {error}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="py-1">
                <p className="cmnp" style={{ fontWeight: "500" }}>
                  Age Group
                </p>
              </div>
              <Row>
                <div className="col-4 p-1 m-0 text-center">
                  <div className="py-1">
                    <p className="cmnp" style={{ fontSize: "10px" }}>
                      Adults{" "}
                      <span
                        className="breack_span"
                        style={{ color: "#B4B4B4" }}
                      >
                        (12+ yrs)
                      </span>
                    </p>
                    <div class="anyone">
                      <FontAwesomeIcon icon={faUser} />
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <select
                          name="total_adult"
                          id="cars"
                          value={parsedData.details.total_adult}
                          onChange={txt}
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      ) : (
                        <select name="total_adult" id="cars" onChange={txt} value={details.total_adult}>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2" selected>2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-4 p-1 m-0 text-center">
                  <div className="py-1">
                    <p className="cmnp" style={{ fontSize: "10px" }}>
                      Children{" "}
                      <span
                        className="breack_span"
                        style={{ color: "#B4B4B4" }}
                      >
                        (2 to 12 yrs)
                      </span>
                    </p>
                    <div class="anyone">
                      <FontAwesomeIcon icon={faUser} />
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <select
                          name="total_child"
                          id="cars"
                          value={parsedData.details.total_child}
                          onChange={txt}
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      ) : (
                        <select name="total_child" id="cars" onChange={txt} value={details.total_child}>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-4 p-1 m-0 text-center">
                  <div className="py-1">
                    <p className="cmnp" style={{ fontSize: "10px" }}>
                      Infant{" "}
                      <span
                        className="breack_span"
                        style={{ color: "#B4B4B4" }}
                      >
                        (0 to 2 yrs)
                      </span>
                    </p>
                    <div class="anyone">
                      <FontAwesomeIcon icon={faUser} />
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <select
                          name="Infant"
                          id="cars"
                          value={parsedData.details.Infant}
                          onChange={txt}
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      ) : (
                        <select name="Infant" id="cars" onChange={txt} value={details.Infant}>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      )}
                    </div>
                  </div>
                </div>
              </Row>
              <div className="py-1">
                <p className="cmnp" style={{ fontWeight: "500" }}>
                  Travel by
                </p>
              </div>
              <Row>
                <div class="col-6 p-1 m-0 px-3">
                  <div class="check-box check-box-0 text-center p-0 m-0">
                    <label for="whyNeed" class="w-75">
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <input
                          type="checkbox"
                          id="whyNeed"
                          name="Flight"
                          value="Flight"
                          checked={parsedData.selectedValuesTravel.includes(
                            "Flight"
                          )}
                          onChange={() => handleCheckboxChangeTravel("Flight")}
                        />
                      ) : (
                        <input
                          type="checkbox"
                          id="whyNeed"
                          name="Flight"
                          value="Flight"
                          checked={selectedValuesTravel.includes("Flight")}
                          onChange={() => handleCheckboxChangeTravel("Flight")}
                        />
                      )}
                      <span class="klass w-100">
                        <FontAwesomeIcon icon={faPlane} /> Flight
                      </span>
                    </label>
                  </div>
                </div>
                <div class="col-6 p-1 m-0 px-3">
                  <div>
                    <div class="check-box check-box-1  m-0 p-0">
                      <label for="whyWas" class="w-75 text-center">
                        {customerRequirmentToken &&
                          customerRequirmentToken.length > 0 ? (
                          <input
                            type="checkbox"
                            id="whyWas"
                            name="Train"
                            value="Train"
                            checked={parsedData.selectedValuesTravel.includes(
                              "Train"
                            )}
                            onChange={() => handleCheckboxChangeTravel("Train")}
                          />
                        ) : (
                          <input
                            type="checkbox"
                            id="whyWas"
                            name="Train"
                            value="Train"
                            checked={selectedValuesTravel.includes("Train")}
                            onChange={() => handleCheckboxChangeTravel("Train")}
                          />
                        )}
                        <span class="klass1 w-100">
                          <FontAwesomeIcon icon={faTrain} /> Train
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-6 p-1 m-0 px-3">
                  <div class="check-box check-box-2 text-center m-o p-0">
                    <label for="whySo" class="w-75">
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <input
                          type="checkbox"
                          id="whySo"
                          name="Bus"
                          value="Bus"
                          checked={parsedData.selectedValuesTravel.includes(
                            "Bus"
                          )}
                          onChange={() => handleCheckboxChangeTravel("Bus")}
                        />
                      ) : (
                        <input
                          type="checkbox"
                          id="whySo"
                          name="Bus"
                          value="Bus"
                          checked={selectedValuesTravel.includes("Bus")}
                          onChange={() => handleCheckboxChangeTravel("Bus")}
                        />
                      )}
                      <span class="klass2 w-100">
                        <FontAwesomeIcon icon={faBus} /> Bus
                      </span>
                    </label>
                  </div>
                </div>
                <div class="col-6 p-1 m-0 px-3">
                  <div class="check-box check-box-3  m-0 p-0">
                    <label for="whyMe" class="w-75 text-center">
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <input
                          type="checkbox"
                          id="whyMe"
                          name="Car"
                          value="Car"
                          checked={parsedData.selectedValuesTravel.includes(
                            "Car"
                          )}
                          onChange={() => handleCheckboxChangeTravel("Car")}
                        />
                      ) : (
                        <input
                          type="checkbox"
                          id="whyMe"
                          name="Car"
                          value="Car"
                          checked={selectedValuesTravel.includes("Car")}
                          onChange={() => handleCheckboxChangeTravel("Car")}
                        />
                      )}
                      <span class="klass3 w-100">
                        <FontAwesomeIcon icon={faCar} /> Cab/Car
                      </span>
                    </label>
                  </div>
                </div>
              </Row>

              <div className="text-start">
                <p className="cmnp" style={{ fontWeight: "500" }}>
                  Need any personal care?{" "}
                </p>
                <div className="p-2 pb-0">
                  {customerRequirmentToken &&
                    customerRequirmentToken.length > 0 ? (
                    <input
                      type="radio"
                      name="personal_care"
                      checked={parsedData.details.personal_care.includes("yes")}
                      value="yes"
                      onChange={txt}
                      id="YN"
                    />
                  ) : (
                    <input
                      type="radio"
                      name="personal_care"
                      value="yes"
                      onChange={txt}
                      checked={details.personal_care.includes("yes")}
                      id="YN"
                    />
                  )}

                  <label for="radio" className="ps-1">
                    Yes
                  </label>
                  <br />
                  {customerRequirmentToken &&
                    customerRequirmentToken.length > 0 ? (
                    <input
                      type="radio"
                      name="personal_care"
                      checked={parsedData.details.personal_care.includes("no")}
                      value="no"
                      onChange={txt}
                      id="YN"
                    />
                  ) : (
                    <input
                      type="radio"
                      name="personal_care"
                      value="no"
                      checked={details.personal_care.includes("no")}
                      onChange={txt}
                      id="YN"
                    />
                  )}

                  <label for="radio" className="ps-1">
                    No
                  </label>
                </div>
              </div>
              <div className="py-2 w-75 ps-4 mx-4">
                <p
                  className="load_btn text-center"
                  style={{ cursor: "pointer" }}
                  onClick={click2}
                >
                  Next
                </p>
              </div>
            </div>
          </Row>
        </Modal.Body>
      </Modal>

      {/* 3 */}
      <Modal
        show={show3}
        backdrop="static"
        keyboard={false}
        className="m-o p-2"
        size="lg"
      >
        <Modal.Body className="p-0">
          <Row>
            <div className="col-md-4 side">
              <div className="pt-2 ps-3">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{
                    background: "#09646D",
                    color: "#fff",
                    borderRadius: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                  }}
                  onClick={back2}
                />
              </div>
            </div>
            <div className="col-md-8 px-4">
              <div className="float-end pe-4 pt-2 p-2" onClick={handleClose3}>
                <FontAwesomeIcon icon={faXmark} className="cross" />
              </div>
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: "600",
                  textAlign: "center",
                  margin: "20px 0px",
                }}
              >
                Departure Between & Travel days
              </div>
              {selectedRange.length === 0 ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {error}
                </span>
              ) : (
                ""
              )}
              <div className="containerFor d-flex flex-column justify-content-center align-items-center calender_parent">
                <Calendar
                  value={selectedRange}
                  onChange={handleDateChange}
                  range
                  rangeHovery
                  style={{ paddingBottom: "100px" }}
                />
                <div className="text-center calender_btn">
                  <div
                    class="btn-group d-flex align-items-center"
                    role="group"
                    aria-label="Basic example"
                  >
                    <h6 className="mb-0 me-2">Tour Days</h6>
                    <button
                      type="button"
                      class="btn first_bttn"
                      onClick={decrement}
                      style={{
                        marginRight: "2px",
                        lineHeight: "0px"
                      }}
                    >
                      -
                    </button>
                    <button type="button" class="btn second_bttn" style={{ lineHeight: "0px" }}>
                      {number}
                    </button>
                    <button
                      type="button"
                      class="btn third_bttn"
                      onClick={increment}
                      style={{ lineHeight: "0px", marginLeft: "1.2px" }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              {/* <div>
                {selectedRange.length >= 2 && (
                  <div>
                    First Date: {selectedRange[0].toLocaleDateString()}
                    <br />
                    Last Date: {selectedRange[1].toLocaleDateString()}
                  </div>
                )}
              </div> */}

              <div className="d-flex justify-content-center mt-3">
                <div className="py-1  w-75">
                  <p
                    className="load_btn text-center"
                    style={{ cursor: "pointer" }}
                    onClick={click3}
                  >
                    Next <FontAwesomeIcon icon={faChevronRight} />
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Modal.Body>
      </Modal>

      {/* 4 */}
      <Modal
        show={show4}
        backdrop="static"
        keyboard={false}
        className="m-o p-2"
        size="lg"
      >
        <Modal.Body className="p-0">
          <Row>
            <div className="col-md-4 side">
              <div className="pt-2 ps-3">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{
                    background: "#09646D",
                    color: "#fff",
                    borderRadius: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                  }}
                  onClick={back3}
                />
              </div>
            </div>
            <div className="col-md-8 container px-5">
              <div className="float-end pe-4 pt-2 p-2" onClick={handleClose4}>
                <FontAwesomeIcon icon={faXmark} className="cross" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    margin: "50px 0px 30px",
                  }}
                >
                  Hotel Type
                </div>
              </div>
              <Row>
                <div className="col-6">
                  <div>
                    <div className="py-1 d-flex">
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <FormCheck
                          className="p-0 m-0"
                          name="2 Star"
                          value="2 Star"
                          checked={parsedData.selectedValuesHotel.includes(
                            "2 Star"
                          )}
                          onChange={() => handleCheckboxChangeHotel("2 Star")}
                        />
                      ) : (
                        <FormCheck
                          className="p-0 m-0"
                          name="2 Star"
                          value="2 Star"
                          checked={selectedValuesHotel.includes("2 Star")}
                          onChange={() => handleCheckboxChangeHotel("2 Star")}
                        />
                      )}
                      <span className="ms-1">2 Star</span>
                    </div>
                    <ToastContainer />
                    <div className="py-1 d-flex">
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <FormCheck
                          className="p-0 m-0"
                          name="4 Star"
                          value="4 Star"
                          checked={parsedData.selectedValuesHotel.includes(
                            "4 Star"
                          )}
                          onChange={() => handleCheckboxChangeHotel("4 Star")}
                        />
                      ) : (
                        <FormCheck
                          className="p-0 m-0"
                          name="4 Star"
                          value="4 Star"
                          checked={selectedValuesHotel.includes("4 Star")}
                          onChange={() => handleCheckboxChangeHotel("4 Star")}
                        />
                      )}

                      <span className="ms-1">4 Star</span>
                    </div>
                    <div className="py-1 d-flex">
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <FormCheck
                          className="p-0 m-0"
                          name="Any"
                          value="Any"
                          checked={parsedData.selectedValuesHotel.includes(
                            "Any"
                          )}
                          onChange={() => handleCheckboxChangeHotel("Any")}
                        />
                      ) : (
                        <FormCheck
                          className="p-0 m-0"
                          name="Any"
                          value="Any"
                          checked={selectedValuesHotel.includes("Any")}
                          onChange={() => handleCheckboxChangeHotel("Any")}
                        />
                      )}
                      <span className="ms-1">Any</span>
                    </div>
                    <div className="py-1 d-flex">
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <FormCheck
                          className="p-0 m-0"
                          name="Budget Property"
                          value="Budget Property"
                          checked={parsedData.selectedValuesHotel.includes(
                            "Budget Property"
                          )}
                          onChange={() =>
                            handleCheckboxChangeHotel("Budget Property")
                          }
                        />
                      ) : (
                        <FormCheck
                          className="p-0 m-0"
                          name="Budget Property"
                          value="Budget Property"
                          checked={selectedValuesHotel.includes(
                            "Budget Property"
                          )}
                          onChange={() =>
                            handleCheckboxChangeHotel("Budget Property")
                          }
                        />
                      )}
                      <span className="ms-1">Budget Property</span>
                    </div>
                  </div>
                </div>
                <div className="col-6 ps-md-4">
                  <div className="mx-lg-5 options">
                    <div className="py-1 d-flex">
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <FormCheck
                          className="p-0 m-0"
                          name="3 Star"
                          value="3 Star"
                          checked={parsedData.selectedValuesHotel.includes(
                            "3 Star"
                          )}
                          onChange={() => handleCheckboxChangeHotel("3 Star")}
                        />
                      ) : (
                        <FormCheck
                          className="p-0 m-0"
                          name="3 Star"
                          value="3 Star"
                          checked={selectedValuesHotel.includes("3 Star")}
                          onChange={() => handleCheckboxChangeHotel("3 Star")}
                        />
                      )}

                      <span className="ms-1">3 Star</span>
                    </div>
                    <div className="py-1 d-flex">
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <FormCheck
                          className="p-0 m-0"
                          name="5 Star"
                          value="5 Star"
                          checked={parsedData.selectedValuesHotel.includes(
                            "5 Star"
                          )}
                          onChange={() => handleCheckboxChangeHotel("5 Star")}
                        />
                      ) : (
                        <FormCheck
                          className="p-0 m-0"
                          name="5 Star"
                          value="5 Star"
                          checked={selectedValuesHotel.includes("5 Star")}
                          onChange={() => handleCheckboxChangeHotel("5 Star")}
                        />
                      )}

                      <span className="ms-1">5 Star</span>
                    </div>
                    <div className="py-1 d-flex">
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <FormCheck
                          className="p-0 m-0"
                          name="No"
                          value="No"
                          checked={parsedData.selectedValuesHotel.includes(
                            "No"
                          )}
                          onChange={() => handleCheckboxChangeHotel("No")}
                        />
                      ) : (
                        <FormCheck
                          className="p-0 m-0"
                          name="No"
                          value="No"
                          checked={selectedValuesHotel.includes("No")}
                          onChange={() => handleCheckboxChangeHotel("No")}
                        />
                      )}
                      <span className="ms-1">No</span>
                    </div>
                  </div>
                </div>
              </Row>
              <div>
                <div className="d-flex justify-content-between">
                  <div
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      margin: "30px 0px 0px 0px",
                    }}
                  >
                    Meals Required
                  </div>
                  <div
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      margin: "30px 30px 15px 0px",
                    }}
                  >
                    Meals Type
                  </div>
                </div>
                <Row>
                  <div className="col-6">
                    <div>
                      <div className="py-1 d-flex">
                        <FormCheck
                          className="p-0 m-0"
                          name="Not Required"
                          value="Not Required"
                          checked={notRequired.includes("Not Required")}
                          onChange={() => handleNotRequiredChange("Not Required")}
                        />
                        <label htmlFor="" className="ms-1">Not Required</label>
                      </div>
                      <div className="py-1 d-flex">
                        {customerRequirmentToken &&
                          customerRequirmentToken.length > 0 ? (
                          <FormCheck
                            className="p-0 m-0"
                            name="Breakfast"
                            value="Breakfast"
                            checked={parsedData.selectedValuesMeal.includes(
                              "Breakfast"
                            )}
                            onChange={() =>
                              handleCheckboxChangeMeal("Breakfast")
                            }
                          />
                        ) : (
                          <FormCheck
                            className="p-0 m-0"
                            name="Breakfast"
                            value="Breakfast"
                            checked={selectedValuesMeal.includes("Breakfast")}
                            onChange={() =>
                              handleCheckboxChangeMeal("Breakfast")
                            }
                          />
                        )}
                        <span className="ms-1">Breakfast</span>
                      </div>
                      <div className="py-1 d-flex">
                        {customerRequirmentToken &&
                          customerRequirmentToken.length > 0 ? (
                          <FormCheck
                            className="p-0 m-0"
                            name="Lunch"
                            value="Lunch"
                            checked={parsedData.selectedValuesMeal.includes(
                              "Lunch"
                            )}
                            onChange={() => handleCheckboxChangeMeal("Lunch")}
                          />
                        ) : (
                          <FormCheck
                            className="p-0 m-0"
                            name="Lunch"
                            value="Lunch"
                            checked={selectedValuesMeal.includes("Lunch")}
                            onChange={() => handleCheckboxChangeMeal("Lunch")}
                          />
                        )}
                        <span className="ms-1">Lunch</span>
                      </div>
                      <div className="py-1 d-flex">
                        {customerRequirmentToken &&
                          customerRequirmentToken.length > 0 ? (
                          <FormCheck
                            className="p-0 m-0"
                            name="Dinner"
                            value="Dinner"
                            checked={parsedData.selectedValuesMeal.includes(
                              "Dinner"
                            )}
                            onChange={() => handleCheckboxChangeMeal("Dinner")}
                          />
                        ) : (
                          <FormCheck
                            className="p-0 m-0"
                            name="Dinner"
                            value="Dinner"
                            checked={selectedValuesMeal.includes("Dinner")}
                            onChange={() => handleCheckboxChangeMeal("Dinner")}
                          />
                        )}
                        <span className="ms-1">Dinner</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 ps-4">
                    <div className="mx-lg-5 options">
                      <div className="py-1 d-flex">
                        {customerRequirmentToken &&
                          customerRequirmentToken.length > 0 ? (
                          <FormCheck
                            className="p-0 m-0"
                            name="meal_type"
                            value="Any"
                            checked={parsedData.details.meal_type === "Any"}
                            onChange={() => handleCheckboxChangeMealType("Any")}
                          />
                        ) : (
                          <FormCheck
                            className="p-0 m-0"
                            name="meal_type"
                            value="Any"
                            checked={selectedValueMealType === "Any"}
                            onChange={() => handleCheckboxChangeMealType("Any")}
                          />
                        )}
                        <span className="ms-1">Any</span>
                      </div>
                      <div className="py-1 d-flex">
                        {customerRequirmentToken &&
                          customerRequirmentToken.length > 0 ? (
                          <FormCheck
                            className="p-0 m-0"
                            name="meal_type"
                            value="Veg"
                            checked={parsedData.details.meal_type === "Veg"}
                            onChange={() => handleCheckboxChangeMealType("Veg")}
                          />
                        ) : (
                          <FormCheck
                            className="p-0 m-0"
                            name="meal_type"
                            value="Veg"
                            checked={selectedValueMealType === "Veg"}
                            onChange={() => handleCheckboxChangeMealType("Veg")}
                          />
                        )}
                        <span className="ms-1">Veg</span>
                      </div>
                      <div className="py-1 d-flex">
                        {customerRequirmentToken &&
                          customerRequirmentToken.length > 0 ? (
                          <FormCheck
                            className="p-0 m-0"
                            name="meal_type"
                            value="Non-Veg"
                            checked={parsedData.details.meal_type === "Non-Veg"}
                            onChange={() =>
                              handleCheckboxChangeMealType("Non-Veg")
                            }
                          />
                        ) : (
                          <FormCheck
                            className="p-0 m-0"
                            name="meal_type"
                            value="Non-Veg"
                            checked={selectedValueMealType === "Non-Veg"}
                            onChange={() =>
                              handleCheckboxChangeMealType("Non-Veg")
                            }
                          />
                        )}

                        <span className="ms-1">Non-Veg</span>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
              <div className="py-2 w-75 ps-4 mx-4 mt-3">
                <p
                  className="load_btn text-center"
                  style={{ cursor: "pointer" }}
                  onClick={click4}
                >
                  Next <FontAwesomeIcon icon={faChevronRight} />
                </p>
              </div>
            </div>
          </Row>
        </Modal.Body>
      </Modal>

      {/* 5 */}
      <Modal
        show={show5}
        backdrop="static"
        keyboard={false}
        className="m-o p-2"
        size="lg"
      >
        <Modal.Body className="p-0">
          <Row>
            <div className="col-md-4 side">
              <div className="pt-2 ps-3">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{
                    background: "#09646D",
                    color: "#fff",
                    borderRadius: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                  }}
                  onClick={back4}
                />
              </div>
            </div>
            <div className="col-md-8 container px-5">
              <div className="float-end pe-4 pt-2 p-2" onClick={handleClose5}>
                <FontAwesomeIcon icon={faXmark} className="cross" />
              </div>
              <div className="TextareaFont">Need Any Extra Requirements?</div>
              <div>
                {customerRequirmentToken &&
                  customerRequirmentToken.length > 0 ? (
                  <textarea
                    name="additional_requirement"
                    id=""
                    // cols="55"
                    rows="10"
                    placeholder="Type Your Requirements..."
                    className="textareaCSS"
                    onChange={txt}
                    value={parsedData.details.additional_requirement}
                  ></textarea>
                ) : (
                  <textarea
                    name="additional_requirement"
                    id=""
                    // cols="55"
                    rows="10"
                    placeholder="Type Your Requirements..."
                    className="textareaCSS"
                    onChange={txt}
                    value={details.additional_requirement}
                  ></textarea>
                )}
              </div>
              {!details.additional_requirement ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {error}
                </span>
              ) : (
                ""
              )}
              <div className="py-2 w-75 ps-4 mx-4 mt-3">
                <p
                  className="load_btn text-center"
                  style={{ cursor: "pointer" }}
                  onClick={click5}
                >
                  Next <FontAwesomeIcon icon={faChevronRight} />
                </p>
              </div>
            </div>
          </Row>
        </Modal.Body>
      </Modal>

      {/* 6 */}
      <Modal
        show={show6}
        backdrop="static"
        keyboard={false}
        className="m-o p-2"
        size="lg"
      >
        <Modal.Body className="p-0">
          <Row>
            <div className="col-md-4 side">
              <div className="pt-2 ps-3">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{
                    background: "#09646D",
                    color: "#fff",
                    borderRadius: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                  }}
                  onClick={back5}
                />
              </div>
            </div>
            <div className="col-md-8 container px-5">
              <div className="float-end pe-4 pt-2 p-2" onClick={handleClose6}>
                <FontAwesomeIcon icon={faXmark} className="cross" />
              </div>
              <div className="LastModel">
                <div
                  className="txtLast"
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  User Details
                </div>
                <div>
                  <div className="mt-2 modal_6">
                    {customerRequirmentToken &&
                      customerRequirmentToken.length > 0 ? (
                      <input
                        type="text"
                        name="full_name"
                        onChange={txt}
                        placeholder="Full Name"
                        value={parsedData.details.full_name}
                      />
                    ) : (
                      <input
                        type="text"
                        name="full_name"
                        onChange={txt}
                        value={details.full_name}
                        placeholder="Full Name"

                      />
                    )}
                  </div>
                  <div className="mt-4 modal_6">
                    {customerRequirmentToken &&
                      customerRequirmentToken.length > 0 ? (
                      <input
                        type="text"
                        name="email_address"
                        onChange={txt}
                        placeholder="Full Name"
                        value={parsedData.details.email_address}
                      />
                    ) : (
                      <input
                        type="email"
                        name="email_address"
                        value={details.email_address}
                        onChange={txt}
                        placeholder="Email"
                      />
                    )}
                  </div>
                  <div className="mt-4 modal_6">
                    {customerRequirmentToken &&
                      customerRequirmentToken.length > 0 ? (
                      <input
                        type="number"
                        name="mobile_no"
                        onChange={txt}
                        placeholder="Mobile No"
                        value={parsedData.details.mobile_no}
                      />
                    ) : (
                      <input
                        type="number"
                        name="mobile_no"
                        value={details.mobile_no}
                        onChange={txt}
                        placeholder="Mobile No"
                      />
                    )}
                  </div>
                  <div className="mt-4 modal_6">
                    {customerRequirmentToken &&
                      customerRequirmentToken.length > 0 ? (
                      <input
                        type="text"
                        name="city"
                        onChange={txt}
                        placeholder="City"
                        value={parsedData.details.city}
                      />
                    ) : (
                      <input
                        type="text"
                        name="city"
                        onChange={txt}
                        value={details.city}
                        placeholder="City"
                      />
                    )}
                  </div>
                  <div>
                    <div className="mt-3 txtLast">
                      <span
                        style={{
                          fontSize: "22px",
                          fontWeight: "400",
                          marginRight: "5px",
                        }}
                      >
                        Budget
                      </span>
                      <span>(minimum budget must be 5000)</span>
                    </div>
                    <div className="modal_6">
                      {customerRequirmentToken &&
                        customerRequirmentToken.length > 0 ? (
                        <input
                          type="number"
                          name="budget_per_person"
                          onChange={txt}
                          value={parsedData.details.budget_per_person}
                        />
                      ) : (
                        <>
                          <input
                            type="number"
                            name="budget_per_person"
                            value={details.budget_per_person}
                            onChange={txt}
                          />
                          <span style={{ color: "red" }}>{errors}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {!details.full_name || !details.email_address || !details.mobile_no || !details.city || !details.budget_per_person ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {error}
                </span>
              ) : (
                ""
              )}

              <div className="py-2 w-75 ps-4 mx-4 mt-3" onClick={CustomPackage}>
                <p
                  className="load_btn text-center"
                  style={{ cursor: "pointer" }}
                >
                  Submit
                </p>
              </div>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default Practic;