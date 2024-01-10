import React, { useState, useEffect, useContext } from "react";
import Hearer from "./Header";
import { Container, Form, Modal, Row } from "react-bootstrap";
import "../Project/css/index1.css";
import "../Project/css/custom_package.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faCalendar,
  faCheck,
  faHandHoldingDroplet,
  faHandsHoldingCircle,
  faHandshakeAlt,
  faHotel,
  faIndianRupeeSign,
  faLocationPinLock,
  faPaperclip,
  faStar,
  faUserDoctor,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleCheck,
  faUser,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import { useParams } from "react-router-dom";
import { bidContext } from "../App";
import { BASE_URL } from "../BASE_URL";
import Footer from "./Footer";
import { faTrainSubway } from '@fortawesome/free-solid-svg-icons';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dayjs from 'dayjs';

function Custom_packega(props) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [bidDetails, setBidDetails] = useState([]);
  const { bidData, setBidData } = useContext(bidContext);


  const [fullname, setFullname] = useState("")
  const [departure, setDeparture] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [Adult, setAdult] = useState(bidDetails.total_adult)
  const [Child, setChild] = useState(bidDetails.total_child)
  const [Infant, setInfant] = useState(bidDetails.total_infant)
  const [Night, setNight] = useState(bidDetails.total_nights)
  const [Day, setDay] = useState(bidDetails.total_days)
  const [Meal, setMeal] = useState(bidDetails.meal_required)
  const [Mealtype, setMealtype] = useState(bidDetails.meal_types)
  const [Sightseeing, setSightseeing] = useState(bidDetails.siteseeing)
  const [Vehicle, setVehicle] = useState(bidDetails.travel_by)
  const [Hoteltype, setHoteltype] = useState(bidDetails.hotel_types)
  const [PriceperPerson, setPriceperPerson] = useState(bidDetails.price_per_person)
  const [category, setcategory] = useState(bidDetails.destination_category)
  const [CustomId, setCustomId] = useState(bidDetails.custom_requirement_id)
  const [BidId, setBidId] = useState(bidDetails._id)
  const [booking, setBooking] = useState("")

  function convertDateFormat(inputDate) {
    const [day, month, year] = inputDate.split('/');
    // Adding padding with zeros for single-digit days and months
    const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    return formattedDate;
  }


  const [startDate, setStartDate] = useState(bidDetails.start_date1);
  const [formattedStartDate, setformattedStartDate] = useState('')
  const [finalStartDate, setFinalStartDate] = useState('')

  useEffect(() => {
    if (formattedStartDate) {

      const formattedAbc = startDate ? new Date(startDate).toISOString() : '';
      setFinalStartDate(formattedAbc)

      // const formattedXyz = endDate ? new Date(endDate).toISOString() : '';

    }
  }, [formattedStartDate]);

  useEffect(() => {
    if (startDate) {
      const dateComponents = startDate.split('/');

      // Rearrange the components in the "yyyy-mm-dd" format
      const formattedDate = `${dateComponents[2]}-${dateComponents[1]}-${dateComponents[0]}`;

      // Set the formatted date using setFormattedStartDate
      setStartDate(formattedDate);
      setformattedStartDate(formattedDate);
    } else {
      console.error("bidDetails.start_date1 is undefined or null");
    }
  }, [startDate]);

  const [endDate, setEndDate] = useState(bidDetails.end_date1);
  const [formattedEndDate, setformattedEndDate] = useState('')
  const [finalEndDate, setFinalEndDate] = useState('')


  useEffect(() => {
    if (formattedEndDate) {

      const formattedAbc = endDate ? new Date(endDate).toISOString() : '';
      setFinalEndDate(formattedAbc)

      // const formattedXyz = endDate ? new Date(endDate).toISOString() : '';

    }
  }, [formattedEndDate]);

  useEffect(() => {
    if (endDate) {
      const dateComponents = endDate.split('/');

      // Rearrange the components in the "yyyy-mm-dd" format
      const formattedDate = `${dateComponents[2]}-${dateComponents[1]}-${dateComponents[0]}`;

      // Set the formatted date using setFormattedendDate
      setEndDate(formattedDate);
      setformattedEndDate(formattedDate);
    } else {
      console.error("bidDetails.end_date1 is undefined or null");
    }
  }, [endDate]);



  const handleName = (e) => {
    setFullname(e.target.value)
  }
  const handleDeparture = (e) => {
    setDeparture(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleNumber = (e) => {
    setNumber(e.target.value)
  }


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
    setNumber(data.data?.[0]?.phone)
    setEmail(data.data?.[0]?.user_details?.[0]?.email_address)
    setFullname(data.data?.[0]?.user_details?.[0]?.name)
  };

  useEffect(() => {
    Profile();
  }, []);




  const [privacy, setPrivacy] = useState([]);

  const privacypolicies = async () => {
    const res = await fetch(`${BASE_URL}policy`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setPrivacy(data.data[2]);
  };

  useEffect(() => {
    privacypolicies();
  }, []);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const { id } = useParams();

  const DetailsBid = async () => {
    const res = await fetch(`${BASE_URL}bidpackage/biddetails?_id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    setBidDetails(data.data);
    setBooking(data.data[0])
    setDeparture(data?.data?.[0]?.departure)
    setAdult(data.data[0].total_adult);
    setChild(data.data[0].total_child);
    setInfant(data.data[0].Infant);
    setNight(data.data[0].total_nights);
    setDay(data.data[0].total_days);
    setMeal(data.data[0].meal_required);
    setMealtype(data.data[0].meal_types);
    setSightseeing(data.data[0].siteseeing);
    setVehicle(data.data[0].travel_by);
    setHoteltype(data.data[0].hotel_types);
    setPriceperPerson(data.data[0].price_per_person);
    setcategory(data.data[0].destination_category);
    setCustomId(data.data[0].custom_requirement_id);
    setBidId(data.data[0]._id);
    setStartDate(data.data[0].start_date1);
    setEndDate(data.data[0].end_date1);
  };

  useEffect(() => {
    DetailsBid();
  }, []);


  const totalPerson = Adult + Child + Infant;

  const LastSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("userToken");


    const Sightseeing = true;

    const res = await fetch(`${BASE_URL}bookpackage`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        total_adult: Adult,
        total_child: Child,
        total_infant: Infant,
        contact_number: number,
        email_id: email,
        totalnight: Night,
        totaldays: Day,
        meal: Meal,
        meal_type: Mealtype,
        siteseeing: Sightseeing,
        transport_mode: Vehicle,
        hoteltype: Hoteltype,
        priceperperson: PriceperPerson,
        category: category,
        custom_package_id: CustomId,
        departure: departure,
        user_name: fullname,
        bid_package_id: BidId,
        approx_start_date: finalStartDate,
        // approx_end_date: endDate,
        approx_end_date: "10-12-2000",
        payment_type: 'upi',
        personal_care: "no",
        othere_requirement: "no",
        transport_include_exclude: "no",
        total_person: totalPerson,
        siteseeing: Sightseeing ? 'include' : 'exclude',
      }),
    });
    const data = await res.json();

    if (data.code == 200) {
      toast.success('Package Booked Successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
      handleClose();
    }
  };

  const handleReject = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${BASE_URL}bidpackage/updateBidStatus/${id}`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bid_status: 1,
      }),
    });
    const data = await res.json();
    if (data.code == 200) {
      toast.success('Bid Reject Successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
      handleClose1();
    }
  };








  const overRef = useRef(null);
  const itenarary = useRef(null);
  const services = useRef(null);


  const scrollTo = (section) => {
    let targetRef;

    switch (section) {
      case 'overview':
        targetRef = overRef;
        break;
      case 'services':
        targetRef = services;
        break;
      case 'itenarary':
        targetRef = itenarary;
        break;
      case 'privacy':
        targetRef = privacy;
        break;
      default:
        targetRef = null;
    }

    if (targetRef) {
      window.scroll({
        top: targetRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };




  return (
    <>
      <Hearer />
      {bidDetails.map((ele) => {
        return (
          <>
            <section className="pt-5 pb-3">
              <div className="container-customes">
                <div className="">
                  <Row>
                    <div className="col-xl-8 col-lg-6 col-md-6 col-sm-12 col-12 text-center m-0 p-0 ">
                      <div className="CuStom_package_image">
                        <img src="/C-packega.png"
                          className="w-100 rounded h-md-50"
                          style={{ height: "370px" }}
                        />
                      </div>
                      <div className="d-flex mt-3">
                        <div className="me-3" ><button class="button-47" role="button" onClick={() => scrollTo('overview')}>Overview</button></div>
                        <div className="me-3" ><button class="button-47" role="button" onClick={() => scrollTo('services')}>Services</button></div>
                        <div className="me-3" ><button class="button-47" role="button" onClick={() => scrollTo('itenarary')}>Itinerary</button></div>
                        <div className="me-3" ><button class="button-47" role="button" onClick={() => scrollTo('privacy')}>Policy</button></div>
                        <ToastContainer />
                      </div>
                      <section className="mb-3 mt-3" ref={overRef}>
                        <div className="">
                          <div>
                            <button className="w-100 over-btn">
                              <img src="/c-icon.png" className=" me-3" />
                              Overview
                            </button>
                          </div>
                        </div>
                      </section>

                      <section className="text-start">
                        <div className="">
                          <Row>
                            <div className="col-lg-6">
                              <div className="amh_to_hima">
                                <div>
                                  <h6 className="pb-2 mb-0 cmntext">
                                    {ele.departure} to statick
                                  </h6>
                                </div>
                                <div className="">
                                  <div className="row">
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-9 px-0">
                                      <div className="amh_to_hima_border ms-3 px-2 px-sm-4 px-md-4 px-lg-4 px-xl-4 py-2">
                                        <p className="cmnp py-1">
                                          <FontAwesomeIcon
                                            icon={faUser}
                                            className="cmnclr"
                                          />{" "}
                                          Adults (12+yrs)
                                        </p>
                                        <p className="cmnp py-1">
                                          <FontAwesomeIcon
                                            icon={faHandHoldingDroplet}
                                            className="cmnclr"
                                          />{" "}
                                          Infants(2 to 12 years)
                                        </p>
                                        <p className="cmnp py-1">
                                          <FontAwesomeIcon
                                            icon={faHandHoldingDroplet}
                                            className="cmnclr"
                                          />{" "}
                                          Child(0 to 12 years)
                                        </p>
                                        <p className="cmnp py-1">
                                          <FontAwesomeIcon
                                            icon={faUsers}
                                            className="cmnclr"
                                          />{" "}
                                          Total Person
                                        </p>
                                        <p className="cmnp py-1">
                                          <FontAwesomeIcon
                                            icon={faHandsHoldingCircle}
                                            className="cmnclr"
                                          />{" "}
                                          Personal Care
                                        </p>
                                        <p className="cmnp py-1">
                                          <FontAwesomeIcon
                                            icon={faCalendar}
                                            className="cmnclr"
                                          />{" "}
                                          Total Days
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3 px-0">
                                      <div className="amh_to_hima_border amh_to_hima_border_2 me-3 text-center px-4 py-2">
                                        <p className="py-1 cmnp">{ele.total_adult}</p>
                                        <p className="py-1 cmnp">{ele.Infant}</p>
                                        <p className="py-1 cmnp">{ele.total_child}</p>
                                        <p className="py-1 cmnp">{parseInt(ele.total_adult) + parseInt(ele.total_child) + parseInt(ele.Infant)}</p>
                                        <p className="py-1 cmnp">Statick</p>
                                        <p className="py-1 cmnp">{ele.total_days}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="mt-3 mb-2">
                                    <h6 className="cmntext">
                                      <FontAwesomeIcon
                                        icon={faCalendar}
                                        className="cmnclr"
                                      />{" "}
                                      Approx Departure Between{" "}
                                    </h6>
                                  </div>
                                  <div className="cmn">
                                    <p className="cmnp ms-4 py-2">
                                      {ele.start_date1} to {ele.end_date1}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="amh_to_hima">
                                <div>
                                  <h6 className=" pb-2 mb-0 cmntext">
                                    <FontAwesomeIcon icon={faHotel} className="cmnclr" />{" "}
                                    Hotel & Food
                                  </h6>
                                </div>
                                <div className="">
                                  <div className="row">
                                    <div className="col-6 px-0">
                                      <div className="amh_to_hima_border ms-3 px-4 py-2">
                                        <p className="cmnp py-1">
                                          <FontAwesomeIcon
                                            icon={faHotel}
                                            className="cmnclr"
                                          />{" "}
                                          Hotel Type
                                        </p>
                                        <p className="cmnp py-1">
                                          <FontAwesomeIcon
                                            icon={faUserDoctor}
                                            className="cmnclr"
                                          />{" "}
                                          Meal
                                        </p>
                                        <p className="cmnp py-1">
                                          <FontAwesomeIcon
                                            icon={faUserDoctor}
                                            className="cmnclr"
                                          />{" "}
                                          Meal Type
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-6 px-0">
                                      <div className="amh_to_hima_border amh_to_hima_border_2 me-3 text-center px-4 py-2">
                                        <div className="text-start">
                                          <p className="cmnp py-1">{ele.hotel_types}</p>
                                          <p className="cmnp py-1">{ele.meal_required}</p>
                                          <p className="cmnp py-1">{ele.meal_types}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 mb-2">
                                  <h6 className="cmntext">
                                    <FontAwesomeIcon
                                      icon={faLocationPinLock}
                                      className="cmnclr"
                                    />{" "}
                                    Travel By
                                  </h6>
                                </div>
                                <div className="cmn">
                                  <p className="cmnp ms-4 py-2">{ele.travel_by}</p>
                                </div>
                              </div>
                            </div>
                          </Row>

                          <div className="cmn  text-start mt-3">
                            <div className="mt-3 mb-2 text-start cmnp ms-4 pb-2">
                              <h6 className="cmntext">
                                <FontAwesomeIcon
                                  icon={faPaperclip}
                                  className="cmnclr"
                                />{" "}
                                Other Requirements
                              </h6>
                            </div>
                            <p className="cmnp ms-4 py-2 mb-3">
                              {/* {ele.exclude_services.map((e) => {
                                return (
                                  <>
                                    <div>{e.exclude_services_value}</div>
                                  </>
                                );
                              })} */}
                            </p>
                          </div>
                        </div>
                      </section>

                      <section className="my-3" ref={services}>
                        <div className="">
                          <div className="mb-3">
                            <button className="w-100 over-btn">
                              <FontAwesomeIcon className="me-3" icon={faBrush} /> Services
                            </button>
                          </div>
                          <div className="cmn cmn_2 row text-start">
                            <div className="col-6">
                              <h6 className="cmntext mb-2">
                                <FontAwesomeIcon icon={faCircleCheck} /> Included
                              </h6>
                              <div className="cmn package_service mb-3">
                                <p style={{ color: "#00B707" }} className="cmnp">
                                  {ele.include_services.map((e1) => {
                                    return (
                                      <>
                                        <div className="d-flex , align-items-center">
                                          <FontAwesomeIcon
                                            icon={faCheck}
                                            className="me-2"
                                            style={{
                                              marginBottom: "15px"
                                            }}
                                          />
                                          <div dangerouslySetInnerHTML={{ __html: e1.include_services_value }} />
                                        </div>
                                      </>
                                    );
                                  })}
                                </p>
                              </div>
                            </div>
                            <div className="col-6">
                              <h6 className="cmntext">
                                <FontAwesomeIcon icon={faXmarkCircle} /> Excluded
                              </h6>
                              <div className="cmn package_service">
                                <p style={{ color: "red" }} className="cmnp">
                                  {ele.exclude_services.map((e2) => {
                                    return (
                                      <>
                                        <div className="d-flex , align-items-center">
                                          <FontAwesomeIcon
                                            icon={faXmarkCircle}
                                            className="me-2"
                                            style={{
                                              marginBottom: "15px"
                                            }}
                                          />
                                          <div dangerouslySetInnerHTML={{ __html: e2.exclude_services_value }} />
                                        </div>
                                      </>
                                    );
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="text-start" ref={itenarary}>
                        <div className="">
                          <div className="my-3">
                            <button className="w-100 over-btn">
                              <FontAwesomeIcon icon={faHandshakeAlt} /> Itinerary
                            </button>
                          </div>
                          <div className="cmn cmn__3">
                            {ele.itineries.map((e3, i) => {
                              return (
                                <>
                                  <div className="py-2">
                                    <h6 className="cmntext mb-2">Day {i + 1}</h6>
                                    <div className="cmn p-3">
                                      <p className="cmnp">{e3.title} :</p>
                                      <p className="cmnp"> {e3.activity}</p>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </section>

                      <Modal
                        show={show1}
                        onHide={handleClose1}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Are you sure want to reject?
                        </Modal.Body>
                        <Modal.Footer>
                          <button variant="secondary" onClick={handleClose1}>
                            No
                          </button>
                          <button variant="primary" onClick={handleReject}>Yes</button>
                        </Modal.Footer>
                      </Modal>

                      <section>

                      </section>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 ">
                      <div className="CuStom_package d-flex justify-content-center align-items-center hyhy p-0">
                        <div className="inner_CuStom_package">
                          <p className="CuStom_package_header">
                            Agency : {bidData}
                          </p>
                          <div className="CuStom_package_content">
                            <p className="">
                              {" "}
                              <span>Date </span> <span className="mx-1">:</span>{" "}
                              {ele.start_date1} to {ele.end_date1}
                            </p>
                            <div className="d-flex">
                              <p className=" ms-1 ">
                                <span>Price</span>
                                <span className="ms-1 me-2">:</span>
                                <FontAwesomeIcon
                                  className="me-1"
                                  icon={faIndianRupeeSign}
                                />
                                {ele.price_per_person}
                              </p>
                            </div>
                            <div className="" style={{ display: "grid", gridAutoColumns: "1fr 1fr" }} >
                              <p className="mb-1">
                                {" "}
                                <span> Total Reviews </span>{" "}
                                <span className="mx-1">:</span> 11,000(statick)
                              </p>
                              <p className="mb-2">
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="CuStom_package_icon"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="CuStom_package_icon "
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="CuStom_package_icon"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="CuStom_package_icon "
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "#B8B8B8" }}
                                />
                              </p>
                            </div>
                            <div className="CuStom_package_images">
                              <div className="text-center">
                                <FontAwesomeIcon icon={faHotel} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                <p>{ele.hotel_types}</p>
                              </div>
                              <div className="mx-2 text-center">
                                <FontAwesomeIcon icon={faUtensils} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                <p>Meals</p>
                              </div>
                              <div className="text-center">
                                <FontAwesomeIcon icon={faBinoculars} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                <p>Sightseeing</p>
                              </div>
                              <div className="mx-2 text-center">
                                <div>
                                  {ele.travel_by === 'Bus' && (
                                    <>
                                      <FontAwesomeIcon icon={faBus} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                    </>
                                  )}
                                  {ele.travel_by === 'Train' && (
                                    <>
                                      <FontAwesomeIcon icon={faTrainSubway} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                    </>
                                  )}
                                  {ele.travel_by === 'Flight' && (
                                    <>
                                      <FontAwesomeIcon icon={faPlane} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                    </>
                                  )}
                                  {ele.travel_by === 'Car' && (
                                    <>
                                      <FontAwesomeIcon icon={faTaxi} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                    </>
                                  )}
                                </div>
                                <p>By {ele.travel_by}</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6 d-flex justify-content-center">
                                <button className="CuStom_package_btn" onClick={handleShow1}>
                                  Reject
                                </button>
                              </div>
                              <div className="col-6 d-flex justify-content-center">
                                <button
                                  className="CuStom_package_btn CuStom_package_btn_2"
                                  onClick={handleShow}
                                >
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12" ref={privacy}>
                      <div className="mt-5">
                        <div dangerouslySetInnerHTML={{ __html: privacy.term_and_condition_content }} />
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </section>


          </>
        );
      })}

      {/* ----------------------modal--------------------- */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div>
            <Row>
              <div className="col-6">
                <form>
                  <div
                    style={{
                      background: "linear-gradient(#00363D, #005C63)",
                      color: "#fff",
                      borderRadius: "8px",
                    }}
                    className="p-1"
                  >
                    <p className="cmnp pt-1 textcm">{booking.departure} to Mumbai(statick)</p>
                    <span className="cmnp textcm">
                      <FontAwesomeIcon
                        icon={faIndianRupeeSign}
                        className="ps-2"
                      />{" "}
                      {booking.price_per_person}
                    </span>
                    <p className="cmnp pb-1 textcm">
                      Per person on twin sharing
                    </p>
                    <div className=" textcm">
                      <FontAwesomeIcon icon={faStar} className="inner_star" />
                      <FontAwesomeIcon icon={faStar} className="inner_star" />
                      <FontAwesomeIcon icon={faStar} className="inner_star" />
                      <FontAwesomeIcon icon={faStar} className="inner_star" />
                      <FontAwesomeIcon icon={faStar} className="inner_star" />
                    </div>
                  </div>
                  <div className="cmn p-1">
                    <p className="text-center">Booking Details</p>
                    <div>
                      <Form.Control
                        type="text"
                        placeholder="Full Name"
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderTop: "none",
                          fontSize: "10px",
                        }}
                        value={fullname}
                        onChange={handleName}
                        className="mt-1 my-1"
                        name="fname"
                      />

                      <Form.Control
                        type="text"
                        placeholder="Departure"
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderTop: "none",
                          fontSize: "10px",
                        }}
                        value={departure}
                        onChange={handleDeparture}
                        className="mt-1 my-1"
                        name="Departure"
                      />

                      <Form.Control
                        type="text"
                        placeholder="Email id"
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderTop: "none",
                          fontSize: "10px",
                        }}
                        value={email}
                        onChange={handleEmail}
                        className="mt-1 my-1"
                        name="email"
                      />

                      <Form.Control
                        type="text"
                        placeholder="Mobile Number"
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderTop: "none",
                          fontSize: "10px",
                        }}
                        value={number}
                        onChange={handleNumber}
                        className="mt-1 my-1"
                        name="mobile"
                      />
                    </div>
                    <div>
                      <Row className="p-1">
                        <div className="col-6">
                          <p className="cmnp textcm">Adults : {booking.total_adult}</p>
                          <p className="cmnp textcm">Child : {booking.total_child}</p>
                        </div>
                        <div className="col-6">
                          <p className="cmnp textcm">Infant : {booking.Infant}</p>
                          <p className="cmnp textcm">Total : {parseInt(booking.total_adult) + parseInt(booking.total_child) + parseInt(booking.Infant)}</p>
                        </div>
                      </Row>
                    </div>
                  </div>
                  <div className="text-center pt-2">
                    <button
                      href=""
                      type="submit"
                      className="w-100 border-0 py-1"
                      style={{
                        background: "#09646D",
                        color: "#fff",
                        borderRadius: "8px",
                      }}
                      onClick={LastSubmit}
                    >
                      Proceed to Pay
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-6">
                <img src="boocking.png" className="img-fluid h-100" />
              </div>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
      <hr />
      <Footer />
    </>
  );
}

export default Custom_packega;
