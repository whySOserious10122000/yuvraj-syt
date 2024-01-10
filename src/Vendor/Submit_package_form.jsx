import React, { useContext, useEffect, useState, useRef } from "react";
import {
  faArrowLeft,
  faBell,
  faEnvelopeOpen,
  faUser,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, NavLink } from "react-router-dom";
import My_pannel from "./My_pannel";
import "../Project/css/index1.css";
import Header2 from "./Header2";
import { Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Select from "react-select";
import { day } from "../App";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../BASE_URL";
// import { colourOptions } from "../data";

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

function Submit_package_form(props) {
  const [details, setDetails] = useState([]);

  const [detailsData, setDetailsData] = useState({
    total_adult: "",
    Infant: "",
    total_child: "",
    destination_category: "",
    hotel_types: "",
    meal_types: "",
    meal_required: "",
    other_Services: "",
    price_per_person: "",
    total_days: "",
    personal_care: "",
    travel_by: "",
    total_nights: "",
    total_amount: "",
  });

  console.log(detailsData.total_days);


  const editorRef = useRef(null);
  const [includeList, setIncludeList] = useState([]);
  const [excludeList, setExcludeList] = useState([]);

  useEffect(() => {
    setIncludeList(details?.[0]?.include_services || []);
    setExcludeList(details?.[0]?.exclude_services || []);
  }, [details])


  const handleIncludeClick = () => {
    const includeData = editorRef.current.editor.getData();
    setIncludeList([...includeList, includeData]);
    editorRef.current.editor.setData("");
  };


  const handleIncludeDelete = (index) => {
    const updatedList = [...includeList];
    updatedList.splice(index, 1);
    setIncludeList(updatedList);
  };

  const handleExcludeClick = () => {
    const excludeData = editorRef.current.editor.getData();
    setExcludeList([...excludeList, excludeData]);
    editorRef.current.editor.setData("");
  };

  const handleExcludeDelete = (index) => {
    const updatedList = [...excludeList];
    updatedList.splice(index, 1);
    setExcludeList(updatedList);
  };

  const { dayNumber, setDayNumber } = useContext(day);
  // const { bidId, setBidId } = useContext(ids);
  const navigate = useNavigate();
  const { id } = useParams();
  const [value, setValue] = React.useState(0);



  const [budget_per_person, setBudget_per_person] = useState({});
  const txtPrice = (e) => {
    setBudget_per_person(e.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [daysValue, setDaysValue] = useState("")
  const [nightError, setNightError] = useState("")

  const txtData = (e) => {
    const { name, value } = e.target;

    if (name === 'total_days') {
      setDetailsData({ ...detailsData, total_days: value });
    }
    if (name === 'total_nights') {
      const night = e.target.value;
      const daysValueInt = parseInt(detailsData.total_days);
      const nightInt = parseInt(night);

      if (
        nightInt !== daysValueInt &&
        nightInt !== daysValueInt - 1 &&
        nightInt !== daysValueInt + 1
      ) {
        setNightError("Enter valid details");
      } else {
        setNightError("");
        setDetailsData({ ...detailsData, total_nights: night });
      }
    }
  };

  const calculateNights = (totalDays) => {
    // Calculate the allowed range for total_nights based on totalDays
    const minNights = totalDays - 1;
    const maxNights = totalDays + 1;

    // Ensure total_nights is within the allowed range
    let currentNights = detailsData.total_nights;
    if (currentNights < minNights) {
      currentNights = minNights;
    } else if (currentNights > maxNights) {
      currentNights = maxNights;
    }

    return currentNights;
  };



  const [isSearchable, setIsSearchable] = useState(false);

  const colourOptions = [
    { value: "5 Star", label: "5 Star" },
    { value: "4 Star", label: "4 Star" },
    { value: "3 Star", label: "3 Star" },
    { value: "2 Star", label: "2 Star" },
    { value: "Any", label: "Any" },
    { value: "No", label: "No" },
    { value: "Budget Property", label: "Budget Property" },
  ];
  const colourOptions1 = [
    { value: "Veg", label: "Veg" },
    { value: "Non-Veg", label: "Non-Veg" },
    { value: "Any", label: "Any" },
  ];
  const colourOptions2 = [
    { value: "Breakfast", label: "Breakfast" },
    { value: "Lunch", label: "Lunch" },
    { value: "Dinner", label: "Dinner" },
  ];
  const colourOptions3 = [
    { value: "Flight", label: "Flight" },
    { value: "Train", label: "Train" },
    { value: "Bus", label: "Bus" },
    { value: "Cab/Car", label: "Cab/Car" },
  ];

  const [selectedHotelTypes, setSelectedHotelTypes] = useState([]);

  const [selectedMealTypes, setSelectedMealTypes] = useState([]);

  const [selectedMeals, setSelectedMeals] = useState([]);

  const [selectedTravelBy, setSelectedTravelBy] = useState([]);

  const updateHotelTypes = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    const exclusiveValues = ["Any", "No", "Budget Property"];

    if (selectedValues.some((value) => exclusiveValues.includes(value))) {
      const exclusiveOption = selectedOptions.find((option) =>
        exclusiveValues.includes(option.value)
      );
      setSelectedHotelTypes([exclusiveOption]);
    } else {
      setSelectedHotelTypes(selectedOptions);
    }
  };

  const updateMealTypes = (selectedOptions) => {
    const isAnySelected = selectedOptions.some((option) => option.value === "Any");
    const isVegSelected = selectedOptions.some((option) => option.value === "Veg");
    const isNonVegSelected = selectedOptions.some((option) => option.value === "Non-Veg");

    // Update selected options
    setSelectedMealTypes((prevSelectedMealTypes) => {
      if (isAnySelected && (!isVegSelected || !isNonVegSelected)) {
        // If only "Any" is selected, keep only "Any"
        return [{ value: "Any", label: "Any" }];
      } else {
        // If "Veg" or "Non-Veg" is selected along with "Any", remove "Veg" and "Non-Veg"
        const updatedOptions = isAnySelected
          ? [{ value: "Any", label: "Any" }]
          : selectedOptions.filter((option) => option.value !== "Any");

        return updatedOptions;
      }
    });
  };







  const updateMeals = (selectedOptions) => {
    setSelectedMeals(selectedOptions);
  };

  const updateTravelBy = (selectedOptions) => {
    setSelectedTravelBy(selectedOptions);
  };

  // Display customer requirement
  const [displayData, setDisplayData] = useState([]);
  const [infants, setinfants] = useState("")
  const [Tadult, setTadult] = useState("")
  const [Tchild, setTchild] = useState("")
  const [mealtype, setMealtypes] = useState("")
  const [addReq, setAddReq] = useState("")
  const [mealReq, setMealReq] = useState("")

  const Requirement = async () => {
    const token = localStorage.getItem("vendorToken");
    const res = await fetch(`${BASE_URL}customrequirements/details?_id=${id}`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setDisplayData(data.data);
    setBudget_per_person(data.data[0].budget_per_person);
    setinfants(data.data[0].Infant);
    setTadult(data.data[0].total_adult);
    setTchild(data.data[0].total_child);
    setAddReq(data.data[0].additional_requirement);
    setMealtypes(data.data[0].meal_type);
    setMealReq(data.data[0].meal_require);
  };

  // Get BidId
  const [BidData, setBidData] = useState([]);
  const [BidDataId, setBidDataId] = useState();

  const getBidPackage = async () => {
    const token = localStorage.getItem("vendorToken");
    const res = await fetch(`${BASE_URL}bidpackage/agencybid`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    const matchingBidPackage = data.data.find(
      (bidPackage) => bidPackage.custom_requirement_id === id
    );

    if (matchingBidPackage) {
      setBidData(matchingBidPackage);
      setBidDataId(matchingBidPackage._id);
    } else {
    }
  };

  // Display Itinerary
  const [it, setIt] = useState([]);
  console.log(it);

  const getItinerary = async () => {
    const res = await fetch(`${BASE_URL}itinerary?bid_id=${BidDataId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setIt(data.data);
  };

  // Post Bid
  const getBidDetails = async (e) => {
    e.preventDefault();

    console.log(detailsData.total_days);

    const {
      total_adult,
      Infant,
      total_child,
      destination_category,
      other_Services,
      price_per_person,
      total_days,
      personal_care,
      total_nights,
      total_amount,
    } = detailsData;

    if (includeList.length < 1) {
      toast.error('Please Enter Include Services!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }


    if (!detailsData.total_days || !detailsData.total_nights) {
      toast.error('Please Enter Valid Days And Night!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }


    if (detailsData.total_days !== undefined && detailsData.total_nights !== undefined) {
      if (detailsData.total_nights < detailsData.total_days - 1 && detailsData.total_nights !== detailsData.total_days && detailsData.total_nights > detailsData.total_days + 1) {
        toast.error('Please enter a valid number of nights based on the days entered!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return;
      }
    } else {
      toast.error('Please enter valid values for days and nights!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }



    if (includeList.length < 1) {
      toast.error('Please Enter Include Services!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (excludeList.length < 1) {
      alert("hyyyyyy")
      toast.error('Please Enter Exclude Services!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }


    const token = localStorage.getItem("vendorToken");

    const res = await fetch(`${BASE_URL}bidpackage`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        custom_requirement_id: id,
        total_adult,
        Infant,
        total_child,
        destination_category,
        hotel_types: selectedHotelTypes
          .map((option) => option.value)
          .join(", "),
        meal_types: selectedMealTypes.map((option) => option.value).join(", "),
        meal_required: selectedMeals.map((option) => option.value).join(", "),
        other_Services: other_Services,
        price_per_person: budget_per_person,
        total_days: Number(total_days),
        personal_care,
        travel_by: selectedTravelBy.map((option) => option.value).join(", "),
        total_nights,
        total_amount: 50000,
        include_services: includeList,
        exclude_services: excludeList,
      }),
    });
    const data = await res.json();
    if (data.code == 200) {
      toast.success('Bid Saved Successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
    } else {
      toast.success(data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
    }
  };

  // Edit Bid
  const LastSubmit = async (e) => {
    e.preventDefault();

    if (it.length < 1) {
      toast.error('Please Enter Minimum One Itinerary!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }




    const token = localStorage.getItem("vendorToken");

    const {
      total_adult,
      Infant,
      total_child,
      destination_category,
      other_Services,
      price_per_person,
      total_days,
      personal_care,
      total_nights,
      total_amount,
    } = detailsData;

    const res = await fetch(`${BASE_URL}bidpackage?bid_id=${BidDataId}`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        include_services: includeList,
        exclude_services: excludeList,
      }),
    });
    const data = await res.json();

    setTimeout(() => {
      navigate(`/display/custom/details/${id}`)
    }, 2000);

    if(data.code == 200){
      toast.success('Bid Sent Successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
    }
  };

  const [hotalData, setHotalData] = useState({
    hotel_name: "",
    hotel_address: "",
    hotel_photo: "",
    hotel_type: "",
    city: "",
    state: "",
    hotel_description: "",
    other: "",
  });

  const hotelTxt = (e) => {
    const { name, value } = e.target;
    setHotalData({ ...hotalData, [name]: value });
  };


  useEffect(() => {
    const fetchData = async () => {
      await Requirement();
      await getBidPackage();
      if (BidDataId) {
        await getItinerary(BidDataId);
      }
    };

    fetchData();
  }, [id, BidDataId]);

  useEffect(() => {
    if (BidDataId) {
      setDetails([BidData]);
    } else {
      setDetails(displayData);
    }
  }, [BidDataId, displayData]);


  const [totalDays, setTotalDays] = useState("")
  const [totalNights, setTotalNights] = useState("")



  const [editedata, setEditedData] = useState("")

  const Call = async () => {
    const token = localStorage.getItem("vendorToken")
    const res = await fetch(`${BASE_URL}agency/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    setEditedData(data?.data?.[0]);
  };

  useEffect(() => {
    Call();
  }, []);

  const handleNav = () => {
    navigate("/vendor/myprofile")
  }


  return (
    <>
      <Header2 />
      <div className="costum_container">
        <My_pannel />
        <ToastContainer />
        <div style={{ backgroundColor: "whitesmoke" }}>
          <section style={{ backgroundColor: "#fff" }}>
            <div className="costum_container">
              <div>
                <div className="pt-1 align-items-center second_navbar">
                  <div className="ps-md-4 ps-sm-2 ps-2 pe-xl-5 pe-lg-5 pe-md-3 pe-sm-2 pe-2 align-items-center d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <a
                        onClick={() =>
                          navigate(`/display/custom/details/${id}`)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <FontAwesomeIcon
                          icon={faArrowLeft}
                          className="p-2 cmnbkg"
                        />
                      </a>
                      <span className=" ps-2">Submit Form</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <a href="">
                        <FontAwesomeIcon
                          icon={faBell}
                          className="p-2 cmnclr cmnicon"
                        />
                      </a>
                      <a href="">
                        <FontAwesomeIcon
                          icon={faEnvelopeOpen}
                          className="p-2 cmnclr cmnicon ms-2"
                        />
                      </a>
                      <div
                        className="d-flex  align-items-center cmn py-1 px-2 ms-2"
                        style={{ cursor: "pointer" }}
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className="cmnclr cmnicon p-2"
                        />
                        <p className="cmnp ps-1" onClick={handleNav}>{editedata.full_name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="p-3">
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  overflowX: "auto",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Overview" {...a11yProps(0)} />
                  <Tab label="Services" {...a11yProps(1)} />
                  <Tab label="Itinerary" {...a11yProps(2)} />
                  <Tab label="Hotels" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <section>
                  <div className="costum_container">
                    <div className="p-sm-3 p-0 ">
                      {details.map((ele, index) => {
                        return (
                          <>
                            <Form>
                              <Row
                                className="green_border gy-sm-2 gy-0 gx-sm-5 gx-3 margin_left_right"
                                style={{ backgroundColor: "#ffffff" }}
                              >
                                {BidDataId ? (
                                  <p className="text-end">Bid Data</p>
                                ) : (
                                  <p className="text-end">
                                    Custome Requirement{" "}
                                  </p>
                                )}
                                <p>
                                  <h3>
                                    {ele.departure} To {ele.destination}
                                  </h3>
                                </p>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Adult (12+ years)</p>
                                  <input
                                    type="number"
                                    name="total_adult"
                                    id=""
                                    value={ele.total_adult}
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Infants (0 to 2 years)</p>
                                  <input
                                    type="number"
                                    name="Infant"
                                    id=""
                                    value={ele.Infant}
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Child (2 to 12 years)</p>
                                  <input
                                    type="number"
                                    name="total_child"
                                    id=""
                                    value={ele.total_child}
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Total Person</p>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={
                                      ele.total_adult +
                                      ele.total_child +
                                      ele.Infant
                                    }
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Personal Care</p>
                                  <input
                                    type="text"
                                    name="personal_care"
                                    id=""
                                    value={
                                      ele.personal_care == true ? "Yes" : "No"
                                    }
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1 ms-1">
                                  <div className="col-6 py-2">
                                    <p className="mb-2">Total Days</p>
                                    {BidDataId ? (
                                      <>
                                        <input
                                          type="text"
                                          name="total_days"
                                          onChange={txtData}
                                          value={ele.total_days}
                                        />
                                        {totalDays && <span className="text-danger">{totalDays}</span>}
                                      </>
                                    ) : (
                                      <div>
                                        <input
                                          type="text"
                                          name="total_days"
                                          onChange={txtData}
                                        />
                                        {totalDays && <span className="text-danger">{totalDays}</span>}
                                      </div>
                                    )}
                                  </div>
                                  <div className="col-6 py-2">
                                    <p className="mb-2">Total Night</p>
                                    {BidDataId ? (
                                      <input
                                        type="text"
                                        name="total_nights"
                                        id=""
                                        onChange={txtData}
                                        value={ele.total_nights}
                                      />
                                    ) : (
                                      <div>
                                        <input
                                          type="text"
                                          name="total_nights"
                                          id=""
                                          onChange={txtData}
                                          min={detailsData.total_days - 1} // Set the minimum value for total_nights based on total_days
                                          max={detailsData.total_days + 1} // Set the maximum value for total_nights based on total_days
                                        />
                                        {totalNights && <span className="text-danger">{totalNights}</span>}
                                        <span style={{ color: "red" }}>{nightError}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Destination Category(here i have got id not a name)</p>
                                  {BidDataId ? (
                                    <input
                                      type="text"
                                      name="destination_category"
                                      id=""
                                      value={
                                        ele.destination_category_name
                                          ? ele.destination_category_name.map(
                                            (e) => {
                                              return <>{e.category_name}</>;
                                            }
                                          )
                                          : ""
                                      }
                                      onChange={txtData}
                                    />
                                  ) : (
                                    <input
                                      type="text"
                                      name="destination_category"
                                      id=""
                                      value={
                                        ele.destination_category
                                          ? ele.destination_category
                                            .map((e) => e.category_name)
                                            .join(", ")
                                          : ""
                                      }
                                      onChange={txtData}
                                    />
                                  )}
                                </div>
                                <div className="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1 ms-1">
                                  <div className="col-xl-6 py-2">
                                    <p className="mb-2">Hotel Type</p>
                                    {BidDataId ? (
                                      <input
                                        type="text"
                                        name="hotel_type"
                                        value={
                                          ele.hotel_types
                                            ? ele.hotel_types
                                              .map((e) => e)
                                              .join(", ")
                                            : ""
                                        }
                                      />
                                    ) : (
                                      <input
                                        type="text"
                                        name="hotel_type"
                                        value={
                                          ele.hotel_type
                                            ? ele.hotel_type
                                              .map((e) => e)
                                              .join(", ")
                                            : ""
                                        }
                                      />
                                    )}
                                  </div>
                                  <div className="col-xl-6 mt-xl-4">
                                    <p className="mb-2 mt-3"></p>
                                    <Select
                                      isMulti
                                      name="New_hotel_type"
                                      options={colourOptions}
                                      className="basic-multi-select"
                                      classNamePrefix="select"
                                      onChange={updateHotelTypes}
                                      isSearchable={isSearchable}
                                      value={selectedHotelTypes}
                                    />
                                  </div>
                                </div>
                                <div className="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1 ms-1">
                                  <div className="col-xl-6 py-2">
                                    <p className="mb-2">Meal Type</p>
                                    {BidDataId ? (
                                      <input
                                        type="text"
                                        name="meal_type"
                                        id=""
                                        value={
                                          ele.meal_types
                                            ? ele.meal_types
                                              .map((e) => e)
                                              .join(", ")
                                            : ""
                                        }
                                        onChange={txtData}
                                      />
                                    ) : (
                                      <input
                                        type="text"
                                        name="meal_type"
                                        id=""
                                        value={ele.meal_type}
                                        onChange={txtData}
                                      />
                                    )}
                                  </div>
                                  <div className="col-xl-6 mt-xl-4">
                                    <p className="mb-2 mt-3"></p>
                                    <Select
                                      isMulti
                                      name="colors"
                                      options={colourOptions1}
                                      className="basic-multi-select"
                                      classNamePrefix="select"
                                      onChange={updateMealTypes}
                                      isSearchable={isSearchable}
                                      value={selectedMealTypes}
                                    />
                                  </div>
                                </div>
                                <div className="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1 ms-2">
                                  <div className="col-xl-6 py-2">
                                    <p className="mb-2">Meals Required</p>
                                    {BidDataId ? (
                                      <input
                                        type="text"
                                        name="meal_require"
                                        id=""
                                        value={
                                          ele.meal_required
                                            ? ele.meal_required
                                              .map((e) => e)
                                              .join(", ")
                                            : ""
                                        }
                                        onChange={txtData}
                                      />
                                    ) : (
                                      <input
                                        type="text"
                                        name="meal_require"
                                        id=""
                                        value={
                                          ele.meal_require
                                            ? ele.meal_require
                                              .map((e) => e)
                                              .join(", ")
                                            : ""
                                        }
                                        onChange={txtData}
                                      />
                                    )}
                                  </div>
                                  <div className="col-xl-6 mt-xl-4">
                                    <p className="mb-2 mt-3"></p>
                                    <Select
                                      isMulti
                                      name="colors"
                                      options={colourOptions2}
                                      className="basic-multi-select"
                                      classNamePrefix="select"
                                      onChange={updateMeals}
                                      isSearchable={isSearchable}
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">
                                    Approx Departure Between
                                  </p>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={
                                      ele.start_date.slice(0, 10) + " To " +
                                      ele.end_date.slice(0, 10)
                                    }
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1 ms-1">
                                  <div className="col-xl-6 py-2">
                                    <p className="mb-2">Travel By</p>
                                    <input
                                      type="text"
                                      name="travel_by"
                                      id=""
                                      value={
                                        ele.travel_by
                                          ? ele.travel_by
                                            .map((e) => e)
                                            .join(", ")
                                          : ""
                                      }
                                      onChange={txtData}
                                    />
                                  </div>
                                  <div className="col-xl-6 mt-xl-4">
                                    <p className="mb-2 mt-3"></p>
                                    <Select
                                      isMulti
                                      name="colors"
                                      options={colourOptions3}
                                      className="basic-multi-select"
                                      classNamePrefix="select"
                                      onChange={updateTravelBy}
                                      isSearchable={isSearchable}
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Other Requirement</p>
                                  <input
                                    type="text"
                                    name="additional_requirement"
                                    id=""
                                    value={ele.additional_requirement}
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Price Per Person</p>
                                  {BidDataId ? (
                                    <input
                                      type="text"
                                      name="budget_per_person"
                                      id=""
                                      onChange={txtData}
                                      value={ele.price_per_person}
                                    />
                                  ) : (
                                    <input
                                      type="text"
                                      name="budget_per_person"
                                      id=""
                                      onChange={txtPrice}
                                      value={budget_per_person}
                                    />
                                  )}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Total Amount</p>
                                  <input
                                    type="text"
                                    name="total_amount"
                                    id=""
                                    value={
                                      budget_per_person *
                                      (ele.total_adult +
                                        ele.Infant +
                                        ele.Infant)
                                    }
                                    onChange={txtData}
                                  />
                                </div>

                                <div className="col-12  text-end sing_up_button">
                                  <Button
                                    type="button" // Use type "button" to prevent form submission
                                    className="w-xl-25 w-lg-25 w-md-25 w-sm-25 w-25"
                                    onClick={() => {
                                      if (detailsData.total_days && detailsData.total_nights) {
                                        // Navigate to the next page
                                        setValue(1);
                                      } else {
                                        // Show an error toast
                                        setTotalDays("please fill this field")
                                        setTotalNights("please fill this field")
                                        toast.error("Please fill in total days and total nights.", {
                                          position: toast.POSITION.BOTTOM_RIGHT,
                                          autoClose: 1000,
                                        });
                                      }
                                    }}
                                  >
                                    Next
                                  </Button>
                                </div>
                              </Row>
                            </Form>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </section>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <section>
                  <div className="costum_container">
                    <div
                      className="service_border"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div className="py-2 itinerary_header">
                        <p className="cmnp">Include / Exclude</p>
                      </div>

                      {/* include */}

                      <div className="cmn py-3">
                        <div className="border_bottom_2">

                          {includeList && includeList.map((includeItem, index) => (
                            <>
                              <div
                                className="border_bottom_2_width ps-4 py-1"
                                style={{
                                  borderBottom: "1px solod #09646D",
                                }}
                              >
                                <div
                                  key={index}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: includeItem,
                                    }}
                                  ></div>
                                  <button
                                    onClick={() =>
                                      handleIncludeDelete(index)
                                    }
                                    style={{
                                      marginLeft: "auto",
                                      border: "none",
                                      background: "none",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                  </button>
                                </div>
                                <div className="">
                                  <ButtonGroup
                                    aria-label="Basic example"
                                    className="text-end"
                                  >
                                    <Button
                                      style={{
                                        background: "#09646D",
                                        color: "#fff",
                                        borderRadius: "10px 0 0 10px",
                                        border: "none",
                                      }}
                                      className="text-end"
                                    >
                                      Include
                                    </Button>
                                    <Button
                                      style={{
                                        background: "#FFF",
                                        color: "#B8B8B8",
                                        border: "none",
                                      }}
                                    >
                                      Exclude
                                    </Button>
                                  </ButtonGroup>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>

                        {/* exclude */}
                        <div className="border_bottom_2">

                          {excludeList && excludeList.map((excludeItem, index) => (
                            <>
                              <div
                                className="border_bottom_2_width ps-4 py-1"
                                style={{
                                  borderBottom: "1px solod #09646D",
                                }}
                              >
                                <div
                                  key={index}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: excludeItem,
                                    }}
                                  ></div>
                                  <button
                                    onClick={() =>
                                      handleExcludeDelete(index)
                                    }
                                    style={{
                                      marginLeft: "auto",
                                      border: "none",
                                      background: "none",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                  </button>
                                </div>
                                <div className="">
                                  <ButtonGroup
                                    aria-label="Basic example"
                                    className="text-end"
                                  >
                                    <Button
                                      style={{
                                        background: "#FFF",
                                        color: "#B8B8B8",
                                        border: "none",
                                      }}
                                      className="text-end"
                                    >
                                      Include
                                    </Button>
                                    <Button
                                      style={{
                                        background: "red",
                                        color: "#FFF",
                                        border: "none",
                                        borderRadius: "0 10px 10px 0",
                                      }}
                                    >
                                      Exclude
                                    </Button>
                                  </ButtonGroup>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div>
                          <div className="pt-4 mb-1">
                            <p className="itinerary_header mb-0">
                              Enter Services
                            </p>
                          </div>
                          <div className="py-1">
                            <CKEditor editor={ClassicEditor} ref={editorRef} />
                          </div>
                        </div>
                        <div className="py-3 pt-3 text-end">
                          <button
                            className="include_exclude_btn"
                            style={{
                              backgroundColor: "#155E75",
                              color: "#fff",
                              padding: "8px 40px",
                              border: "none",
                            }}
                            onClick={handleIncludeClick}
                          >
                            Include
                          </button>
                          <button
                            variant="primary"
                            className="ms-2 include_exclude_btn"
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              padding: "8px 40px",
                              border: "none",
                            }}
                            onClick={handleExcludeClick}
                          >
                            Exclude
                          </button>
                        </div>
                      </div>
                      <div className="col-12  text-end sing_up_button">
                        <Button
                          type="submit"
                          className=" "
                          onClick={getBidDetails}
                        >
                          Submit
                        </Button>
                      </div>
                      <div className="py-3 pt-3 text-end">
                        <Button
                          className="back_next_btn"
                          style={{
                            background: "#0000",
                            color: "#BBBB",
                            border: "1px solid #BBBB",
                          }}
                          onClick={() => setValue(0)}
                        >
                          Back
                        </Button>
                        <Button
                          variant="primary"
                          className="ms-2 back_next_btn back_next_btn2"
                          style={{
                            backgroundColor: "#155E75",
                          }}
                          onClick={() => setValue(2)}
                        >
                          next
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <section>
                  <div className="costum_container">
                    <div className=" p-sm-3 p-0">
                      <div>
                        <Form>
                          <Row
                            className="itinerary_padding green_border gy-2 gx-5 margin_left_right"
                            style={{ backgroundColor: "#ffffff" }}
                          >
                            <div className="col-12">
                              <div className="row">
                                <div className="col-6">
                                  <span className="text-20 itinerary_header">
                                    Day wise Itinerary plan
                                  </span>
                                </div>
                                {details &&
                                  details.map((ele) => {
                                    return (
                                      <>
                                        <div className="col-6 d-flex align-items-center justify-content-end">
                                          <p className="cmnclr cmnp">
                                            Add days
                                          </p>
                                          <NavLink
                                            to={`/vendor/add-itineries/${id}/${BidDataId}`}
                                          >
                                            <a>
                                              <FontAwesomeIcon
                                                icon={faPlus}
                                                className="cmnbkg p-2 ms-2"
                                                style={{ cursor: "pointer" }}
                                              />
                                            </a>
                                          </NavLink>
                                        </div>
                                      </>
                                    );
                                  })}
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="row gx-5 gy-3">
                                {it &&
                                  it.map((ele) => {
                                    return (
                                      <>
                                        <div className="col-md-6 col-12">
                                          <div
                                            style={{
                                              border: "1px solid grey",
                                              borderRadius: "15px",
                                            }}
                                          >
                                            <div className="d-flex justify-content-between">
                                              <p
                                                style={{
                                                  backgroundColor: "#09646d",
                                                  color: "white",
                                                  padding: "5px 10px",
                                                  display: "inline-block",
                                                  borderRadius:
                                                    "15px 0px 5px 0px",
                                                }}
                                              >
                                                Day {ele.day}
                                              </p>
                                              <p
                                                style={{
                                                  backgroundColor: "#09646d",
                                                  color: "white",
                                                  padding: "1px 5px",
                                                  textDecoration: "none",
                                                  cursor: "pointer",
                                                  borderRadius:
                                                    "0px 15px 0px 5px",
                                                }}
                                                onClick={() => {
                                                  navigate(
                                                    `/vendor/add-itineriesEdit/${ele._id}/${id}`
                                                  );
                                                  setDayNumber(ele.day);
                                                }}
                                              >
                                                EDIT
                                              </p>
                                            </div>
                                            <div className="p-3">
                                              <div>
                                                <div className="mb-2">
                                                  <label htmlFor="text">
                                                    Add Location
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    value={ele.title}
                                                  />
                                                </div>
                                                <div className="mb-2">
                                                  <label htmlFor="text">
                                                    Add Photo
                                                  </label>
                                                  <input
                                                    type="file"
                                                    name=""
                                                    id=""
                                                  />
                                                </div>
                                                <div className="mb-2">
                                                  <label htmlFor="text">
                                                    Add Hotel Name
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    value={ele.hotel_name}
                                                  />
                                                </div>
                                                <div className="mb-2">
                                                  <a>Description</a>
                                                  <textarea
                                                    name=""
                                                    id=""
                                                    value={ele.activity}
                                                    style={{
                                                      width: "100%",
                                                      height: "150px",
                                                    }}
                                                  ></textarea>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    );
                                  })}
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="py-2 pt-3 text-end">
                                <Button
                                  className="back_next_btn"
                                  style={{
                                    background: "#0000",
                                    color: "#BBBB",
                                    border: "1px solid #BBBB",
                                  }}
                                  onClick={() => setValue(1)}
                                >
                                  Back
                                </Button>
                                <Button
                                  variant="primary"
                                  className="ms-2 back_next_btn back_next_btn2"
                                  type="submit"
                                  style={{
                                    backgroundColor: "#155E75",
                                  }}
                                  onClick={() => setValue(3)}
                                >
                                  Next
                                </Button>
                              </div>
                            </div>
                          </Row>
                        </Form>
                      </div>
                    </div>
                  </div>
                </section>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <section>
                  <div className="costum_container">
                    <div className="p-sm-3 p-0">
                      <div
                        className="green_border hotels_padding"
                        style={{ backgroundColor: "#ffffff" }}
                      >
                        <div className="px-3">
                          <Form>
                            <Row className="">
                              <div className="col-12 d-flex justify-content-between">
                                <span className="itinerary_header text-20 cmnclr h-100 d-flex justify-content-left text-start align-items-center">
                                  Hotel & Food
                                </span>
                                <div className="d-flex align-items-center float-end">
                                  <p className="cmnclr cmnp">Add Hotel</p>
                                  <a
                                    onClick={() =>
                                      navigate("/vendor/add-hotel")
                                    }
                                    style={{ cursor: "pointer" }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faPlus}
                                      className="cmnbkg p-2 ms-2"
                                    />
                                  </a>
                                </div>
                              </div>

                              <div
                                className="col-12"
                                style={{ margin: "auto" }}
                              >
                                <div className="inner_green_border py-3 my-3 px-4">
                                  <div className="row">
                                    <div className="col-md-6 col-sm-12 col-12 margin_left_right">
                                      <p className="mb-1" htmlFor="">
                                        Hotel name
                                      </p>
                                      <input
                                        type="text"
                                        name="hotel_name"
                                        id=""
                                        className="mb-2"
                                        style={{ width: "100%" }}
                                        onChange={hotelTxt}
                                      />
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-12 margin_left_right">
                                      <p className="mb-1" htmlFor="">
                                        Hotel address
                                      </p>
                                      <input
                                        type="text"
                                        name="hotel_address"
                                        id=""
                                        className="mb-2"
                                        style={{ width: "100%" }}
                                        onChange={hotelTxt}
                                      />
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-12 margin_left_right">
                                      <p className="mb-1" htmlFor="">
                                        Hotel photo
                                      </p>
                                      <input
                                        type="file"
                                        name="hotel_photo"
                                        id=""
                                        className="mb-2"
                                        style={{ width: "100%" }}
                                        onChange={hotelTxt}
                                      />
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-12 margin_left_right">
                                      <p className="mb-1" htmlFor="">
                                        Hotel Type
                                      </p>
                                      <input
                                        type="text"
                                        name="hotel_type"
                                        id=""
                                        className="mb-2"
                                        style={{ width: "100%" }}
                                        onChange={hotelTxt}
                                      />
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-12 margin_left_right">
                                      {" "}
                                      <p className="mb-1" htmlFor="">
                                        Hotel city
                                      </p>
                                      <input
                                        type="text"
                                        name="city"
                                        id=""
                                        className="mb-2"
                                        style={{ width: "100%" }}
                                        onChange={hotelTxt}
                                      />
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-12 margin_left_right">
                                      <p className="mb-1" htmlFor="">
                                        Hotel state
                                      </p>
                                      <input
                                        type="text"
                                        name="state"
                                        id=""
                                        className="mb-2"
                                        style={{ width: "100%" }}
                                        onChange={hotelTxt}
                                      />
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-12 margin_left_right">
                                      <p className="mb-1" htmlFor="">
                                        Hotel description
                                      </p>
                                      <textarea
                                        name="hotel_description"
                                        id=""
                                        onChange={hotelTxt}
                                        style={{
                                          width: "100%",
                                          height: "150px",
                                        }}
                                      ></textarea>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-12 margin_left_right">
                                      <p className="mb-1" htmlFor="">
                                        Other
                                      </p>
                                      <textarea
                                        name="other"
                                        id=""
                                        onChange={hotelTxt}
                                        style={{
                                          width: "100%",
                                          height: "150px",
                                        }}
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Row>
                            <div className="py-2 pt-3 text-end">
                              <Button
                                className="back_next_btn"
                                style={{
                                  background: "#0000",
                                  color: "#BBBB",
                                  padding: "8px 40px",
                                  border: "1px solid #BBBB",
                                }}
                                onClick={() => setValue(2)}
                              >
                                Back
                              </Button>
                              <Button
                                variant="primary"
                                className="ms-2 back_next_btn"
                                type="submit"
                                style={{
                                  backgroundColor: "#155E75",
                                }}
                                onClick={LastSubmit}
                              >
                                Submit
                              </Button>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </TabPanel>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default Submit_package_form;
