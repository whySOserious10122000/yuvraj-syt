import React, { useState, useEffect, useContext } from "react";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  faCalendarAlt,
  faClock,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row } from "react-bootstrap";
import "./css/index1.css";
import Slider1 from "./slider";
import Data from "./Data";
import { Navigate, useParams } from "react-router-dom";
import Section_modal from "./Section_modal";
import { BASE_URL } from "../BASE_URL";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Form from "react-bootstrap/Form";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { monthContext } from "../App";
import { rangeContext } from "../App";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Swiper, SwiperSlide } from 'react-id-swiper';
// import {  Scrollbar } from 'swiper';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

function valuetext(value) {
  return `${value}°C`;
}

function Section1(props) {
  const [fdata, setFdata] = useState(Data);
  const [copydata, setCopydata] = useState([]);
  const [goToPage, setGoToPage] = useState(false);
  const [saftyDescription, SetsaftyDescription] = useState("");
  const [safetyInfo, setSafetyInfo] = useState([]);
  const [destination, setDestination] = useState([]);

  const navigate = useNavigate();

  const handleViewAllClick = () => {
    // Navigate to the "/top_rate_hotel" route
    navigate('/top_rate_hotel');
  };

  const { monthData, setMonthData } = useContext(monthContext);
  const { rangeData, setRangeData } = useContext(rangeContext);

  localStorage.setItem('whyare', rangeData);


  const HomeData = async () => {
    const res = await fetch(`${BASE_URL}home`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    SetsaftyDescription(data.data[0].Saftyinformation[0].info.description);
    setSafetyInfo(data.data[0].Saftyinformation[0].safetyinfo);
  };

  const getAllDestination = async () => {
    const res = await fetch(`${BASE_URL}destination/alldestination`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setDestination(data.data);
  };

  // Destination

  const [anchorEl0, setAnchorEl0] = useState(null);

  const open0 = Boolean(anchorEl0);
  const handleClick0 = (event) => {
    setAnchorEl0(event.currentTarget);
  };
  const handleClose0 = () => {
    setAnchorEl0(null);
  };

  // Range

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState([0, 20]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setRangeData(newValue);
  };

  // Month calendar

  const [anchorEl1, setAnchorEl1] = useState(null);

  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedMonth, setSelectedMonth] = useState("");
  localStorage.setItem('whyso', selectedMonth);


  const MonthChange = (event) => {
    setSelectedMonth(event.target.value);
    setMonthData(event.target.value);
  };

  useEffect(() => {
    HomeData();
    getAllDestination();
    setCopydata(Data);
  }, []);



  // this is api for dropdown of select destination

  const [destinationforselect, setDestinationforselect] = useState("");

  const destinationCategory = async () => {
    const res = await fetch(`${BASE_URL}destination/alldestination`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setDestinationforselect(data.data);
  };

  const [selectedDestination, setSelectedDestination] = useState({
    name: "",
    id: "",
  });

  const [yuvraj, setYuvraj] = useState("");


  const handleDestinationChange = (event) => {
    setYuvraj(event.target.value);
    const selectedName = event.target.value;
    const selectedId = event.target.options[event.target.selectedIndex].id;
    setSelectedDestination({ name: selectedName, id: selectedId });
    localStorage.setItem('yuvraj', event.target.value);
  };

  useEffect(() => {
    destinationCategory();
    window.scrollTo(0, 0);
  }, []);

  const handleDestinationNavigate = () => {
    // Store selectedMonth in localStorage
    if (!selectedDestination.id) {
      toast.error('please select destination!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return
    } else {

      navigate(`/destination/${selectedDestination.id}`);
    }

  };

  const [hotelSwiper, setHotelSwiper] = useState([])
  console.log(hotelSwiper);

  const hotelList = async () => {
    const token = localStorage.getItem("userToken");
    const res = await fetch(`${BASE_URL}hotel_syt`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setHotelSwiper(data.data);
  };

  useEffect(() => {
    hotelList();
  }, []);

  const handleNavigate = (hotelId) => {
    navigate(`/hotel_details/${hotelId}`);
  }


  return (
    <>
      <div className="section_1">
        <ToastContainer />
        <div className="container-customes">
          <div className="title text-center pt-sm-5 pt-3 pb-sm-5 pb-2 ">
            <h1 style={{ fontWeight: "600" }}>
              Choose your next travel <br />
              <span style={{ color: "red" }}>Destination </span>
              as per your comfort!
            </h1>
            <p className="inner_title py-sm-2 mb-sm-2 mb-0">WITH CUSTOMIZED PACKAGES</p>
            <div className="py-3">
              <Section_modal />
            </div>
            <div className="explore">
              <ul className="d-flex justify-content-center ps-0">
                <li>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="me-1"
                    style={{ color: "#09646d" }}
                  />
                  {/* Select Destination */}
                  <select
                    name=""
                    id=""
                    className="destination_selection"
                    onChange={handleDestinationChange}
                    value={selectedDestination.name}
                  >
                    <option value="Select Destination">
                      Select Destination
                    </option>
                    {destinationforselect &&
                      destinationforselect.map((destination) => (
                        <option
                          key={destination.destination_id}
                          value={destination.destination_name}
                          id={destination._id}
                        >
                          {destination.destination_name}
                        </option>
                      ))}
                  </select>
                </li>
                <li>
                  <a
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={faClockFour} className="me-1" />
                    Select Duration
                  </a>
                </li>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem>
                    <div>
                      <Box sx={{ width: 250, padding: "10px 0" }}>
                        <Slider
                          getAriaLabel={() => "Temperature range"}
                          value={value}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          min={0}
                          max={20}
                        />
                      </Box>
                    </div>

                  </MenuItem>
                  <div className="ms-2">
                    Total Days {value[0]} To {value[1]}
                  </div>
                </Menu>
                <li>
                  <div>
                    <select name="" id="yourSelectId" className="select_month" onChange={MonthChange}>
                      <option value="select month">Select Month</option>
                      <option value="Jan">january</option>
                      <option value="Feb">february</option>
                      <option value="Mar">march</option>
                      <option value="Apr">april</option>
                      <option value="May">may</option>
                      <option value="Jun">june</option>
                      <option value="Jul">july</option>
                      <option value="Aug">august</option>
                      <option value="Sep">september</option>
                      <option value="Oct">october</option>
                      <option value="Nov">november</option>
                      <option value="Dec">december</option>
                    </select>
                  </div>
                </li>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open1}
                  onClose={handleClose1}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem>
                    <div className="calendar-container">
                      <div className="months-container">
                        <select value={selectedMonth} onChange={MonthChange}>
                          <option value="">Select Destination</option>
                          {months &&
                            months.map((month) => (
                              <option key={month} value={month}>
                                {month}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </MenuItem>
                </Menu>
                <li className="d-flex align-items-center">
                  <p className="mb-0" style={{ color: "white" }} onClick={handleDestinationNavigate}>
                    Explore
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container-customes">
          <Slider1 />
        </div>
      </section>

      <div className="pt-sm-5 pt-3 pb-sm-5 pb-2">
        <div className="container-customes">
          <div className="py-1 mt-2">
            <h3 className="font">Your Safety Is Our Priority</h3>
            <p className="text-center" style={{ color: "#B8B8B8" }}>
              {saftyDescription}
            </p>
          </div>
          <div className="py-2">
            <Row>
              {safetyInfo.map((ele) => {
                return (
                  <>
                    <div className="col text-center">
                      <img src={ele.safetyinfo_photo} className="img-fluid" />
                    </div>
                  </>
                );
              })}
            </Row>
          </div>
        </div>
      </div>

      <section className="pb-sm-5 pb-0">
        <div className="container-customes">
          <div className="hotel-description">
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-6 horizontal-rule py-4 ">
                <div className="w-75"></div>
                <div className="w-50"></div>
                <div className="w-25"></div>
              </div>
              <div className="col-lg-6 col-md-6 py-3">
                <p>
                  Pick the most over the top total and best accommodation
                  recommandation that you need to make your vacation charming.
                </p>
              </div>
            </div>
          </div>

          {/* top hotel */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h3 className="py-3" style={{ fontWeight: '600', margin: 0 }}>
                Top Rated Hotels
              </h3>
              <button
                style={{
                  marginLeft: 'auto',
                  padding: '0.5em 0.5em',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  backgroundColor: '#09646d',
                }}
                onClick={handleViewAllClick}
              >
                View All
              </button>
            </div>


            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={{
                250: {
                  width: 250,
                  slidesPerView: 2,
                },
                400: {
                  width: 400,
                  slidesPerView: 3,
                },
                576: {
                  width: 576,
                  slidesPerView: 3,
                },
                768: {
                  width: 768,
                  slidesPerView: 3,
                },
                992: {
                  width: 992,
                  slidesPerView: 3,
                },
                1399: {
                  width: 1199,
                  slidesPerView: 5,
                },
              }}
            >
              {hotelSwiper && hotelSwiper.map((ele) => {
                return (
                  <>
                    <SwiperSlide>
                      <div
                        className="swiper-slide d-flex justify-content-center"
                        onClick={() => handleNavigate(ele._id)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="hotel-0 hotel">
                          <div className="image-box">
                            <div className="hotel-name">
                              <h6 className="py-1">{ele.city}</h6>
                              <p>{ele.hotel_name}</p>
                            </div>
                            <div className="star">
                              <FontAwesomeIcon
                                icon={faStar}
                                className="col inner_star"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="col inner_star"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="col inner_star"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="col inner_star"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="col inner_star"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                )
              })}
              {/* <SwiperSlide>
                <div
                  className="swiper-slide d-flex justify-content-center"
                  onClick={() => {
                    setGoToPage(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="hotel-1 hotel">
                    <div className="hotel-name">
                      <h6 className="py-1">Goa</h6>
                      <p>Pacific Hotels</p>
                    </div>
                    <div className="star">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide d-flex justify-content-center"
                  onClick={() => {
                    setGoToPage(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="hotel-2 hotel">
                    <div className="hotel-name">
                      <h6 className="py-1">Delhi</h6>
                      <p>Pacific Hotels</p>
                    </div>
                    <div className="star">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide d-flex justify-content-center"
                  onClick={() => {
                    setGoToPage(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="hotel-4 hotel">
                    <div className="hotel-name">
                      <h6 className="py-1">Ladakh</h6>
                      <p>Pacific Hotels</p>
                    </div>
                    <div className="star">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide d-flex justify-content-center"
                  onClick={() => {
                    setGoToPage(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="hotel-1 hotel">
                    <div className="hotel-name">
                      <h6 className="py-1">Goa</h6>
                      <p>Pacific Hotels</p>
                    </div>
                    <div className="star">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide d-flex justify-content-center"
                  onClick={() => {
                    setGoToPage(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="hotel-0 hotel">
                    <div className="image-box">
                      <div className="hotel-name">
                        <h6 className="py-1">Maldives</h6>
                        <p>Pacific Hotels</p>
                      </div>
                      <div className="star">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="col inner_star"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="col inner_star"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="col inner_star"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="col inner_star"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="col inner_star"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </section>

      <section>
        <div class="services my-5">
          <div class="container-customes">
            <h3>How we work?</h3>
            <h1>We Offer Best Services</h1>
            <h4>Customer Service</h4>
            <ul>
              <li>
                <p>
                  Customized occasion visit bundle assists you with doing <br />
                  the things in your as own would prefer.
                </p>
              </li>
              <li>
                <p>
                  Just travel at your own speed with your preferred carrier{" "}
                  <br />
                  and we will work with all that you want.
                </p>
              </li>
              <li>
                <p>
                  Choice of lodgings will likewise be yours and various cooking
                  styles that you <br />
                  generally love to investigate would show up for you to pick.
                </p>
              </li>
              <li>
                <p>
                  You can pick an individual vehicle or need to accompany other
                  worldwide <br />
                  voyagers at seat-in-mentor office, your decision our need.
                </p>
              </li>
              <li>
                <p>
                  Just pick the range of spots you need to go. Accompany your{" "}
                  <br />
                  friends and family and investigate the world.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
