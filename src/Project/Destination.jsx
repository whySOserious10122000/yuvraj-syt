import React, { useState, useEffect } from "react";
import "./css/Destination.css";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { dataContext } from "../App";
import { monthContext } from "../App";
import { rangeContext } from "../App";
import { useContext } from "react";
import { BASE_URL } from "../BASE_URL";
import SwiperCore, { Navigation } from "swiper";
import Footer from "./Footer";
import { faTrainSubway } from '@fortawesome/free-solid-svg-icons';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Navigation]);

function Destination(props) {
  const { info, setInfo } = useContext(dataContext);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const xyz = id._id;

  const myDest = localStorage.getItem("filterDest");

  const [originalPackages, setOriginalPackages] = useState([]);
  const [temp, setTemp] = useState([]);
  const [temp2, setTemp2] = useState([]);
  const [destination, setDestination] = useState([]);
  const [packages, setPackages] = useState([]);
  
  const [city, setCity] = useState("");
  const [cityphoto, setCityphoto] = useState("");
  const [besttime, setBestTime] = useState("");
  const [bestprice, setBestprice] = useState("");
  const [aboutDestination, setAboutDestination] = useState("");

  const { monthData, setMonthData } = useContext(monthContext);
  const { rangeData, setRangeData } = useContext(rangeContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const destinationDetail = async () => {
    const res = await fetch(`${BASE_URL}placetovisit/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setDestination(data.data);
  };

  const packageDetail = async () => {
    const res = await fetch(
      `${BASE_URL}destination/getDestinationData?destination_id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setCity(data.data[0].destination.destination_name);
    setBestTime(data.data[0].destination.best_time_for_visit);
    setBestprice(data.data[0].destination.Package_price);
    setCityphoto(data.data[0].destination.photo);
    setPackages(data.data[0].Packages);
    setTemp2(data.data[0].Packages);
    setTemp(data.data[0].Packages);
    setAboutDestination(data.data[0].destination);
  };

  useEffect(() => {
    packageDetail();
    destinationDetail();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const initialPackages = [];
    setOriginalPackages(initialPackages);
    setPackages(initialPackages);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // filter start form here

  const [selectedFilters, setSelectedFilters] = useState({
    sortBy: null,
    duration: null,
    budget: null,
    twenty: null,
    twentyfour: null,
    foursix: null,
    sixeight: null,
    eight: null,

  });



  const [highToLow, setHighToLow] = useState();

  const handleHightolow = (e) => {
    let selectprice = "";
    e.target.checked
      ? (selectprice = [...packages].sort(
        (a, b) => b.price_per_person - a.price_per_person
      ))
      : (selectprice = [...temp]);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'HighToLow',
    }));


    setHighToLow(selectprice);
    setPackages(selectprice);
  };

  const [lowTohigh, setLowtohigh] = useState();

  const handleLowtohigh = (e) => {
    let selectprice = "";
    // const selectPrice = e.target.checked;
    e.target.checked
      ? (selectprice = [...packages].sort(
        (a, b) => a.price_per_person - b.price_per_person
      ))
      : (selectprice = [...temp]);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'HighToLow',
    }));


    setLowtohigh(selectprice);
    setPackages(selectprice);
  };

  const handleTen = () => {
    const filteredData = temp.filter((ele) => ele.price_per_person < 10000);
    const sortedData = [...filteredData].sort((a, b) => a.price_per_person - b.price_per_person);
    setPackages(sortedData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'LowToHigh',
    }));


  };

  const handleTentwenty = () => {
    const filteredData = temp.filter(
      (ele) => ele.price_per_person >= 10000 && ele.price_per_person <= 20000
    );
    const sortedData = [...filteredData].sort((a, b) => a.price_per_person - b.price_per_person);
    setPackages(sortedData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'twenty',
    }));


  };

  const handleTwentyfour = () => {
    const filteredData = temp.filter(
      (ele) => ele.price_per_person >= 20000 && ele.price_per_person <= 40000
    );
    const sortedData = [...filteredData].sort((a, b) => a.price_per_person - b.price_per_person);
    setPackages(sortedData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'twentyfour',
    }));


  };

  const handleFoursix = () => {
    const filteredData = temp.filter(
      (ele) => ele.price_per_person >= 40000 && ele.price_per_person <= 60000
    );
    const sortedData = [...filteredData].sort((a, b) => a.price_per_person - b.price_per_person);
    setPackages(sortedData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'foursix',
    }));


  };

  const handleSixeight = () => {
    const filteredData = temp.filter(
      (ele) => ele.price_per_person >= 60000 && ele.price_per_person <= 80000
    );
    const sortedData = [...filteredData].sort((a, b) => a.price_per_person - b.price_per_person);
    setPackages(sortedData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'sixeight',
    }));


  };

  const handleEight = () => {
    const filteredData = temp.filter((ele) => ele.price_per_person > 80000);
    const sortedData = [...filteredData].sort((a, b) => a.price_per_person - b.price_per_person);
    setPackages(sortedData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'eight',
    }));


  };

  const [selectedOption, setSelectedOption] = useState(''); // Initialize state variable for selected option

  // const handleSelectChange = (event) => {
  //   const selectedValue = event.target.value;
  //   setSelectedOption(selectedValue); // Update the selectedOption state with the selected value

  //   const filteredData = temp.filter((ele) => {
  //     // Assuming ele.days is a string in the format "X to Y"
  //     const [firstNumber] = ele.days.split(' ').map(Number);
  //     return firstNumber === parseInt(selectedValue, 10);
  //   });

  //   // Optionally, you can add sorting logic if needed
  //   const sortedData = [...filteredData].sort((a, b) => a.days - b.days);

  //   setPackages(sortedData);

  //   setSelectedFilters((prevFilters) => ({
  //     ...prevFilters,
  //     duration: selectedValue,
  //   }));
  // };


  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    const filteredData = temp.filter((item) => {
      if (selectedValue === '') {
        return true; // Display all data when no option is selected
      }

      const totalDays = item.days.slice(0, 1);

      const [lowerLimit, upperLimit] = selectedValue.split('-').map(Number);

      return totalDays >= lowerLimit && totalDays <= upperLimit;
    });

    setPackages(filteredData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      duration: selectedValue,
    }));


  };

  // Function to filter data based on the selected option
  const filteredData = packages.filter(item => {
    const daysPart = item.days.split('/')[0]; // Extract the day part from the days string, e.g., "12D"
    return daysPart === selectedOption;
  }
  );

  const [selectedMonth, setSelectedMonth] = useState("");
  const [why, setWhy] = useState(""); // Initialize why as an empty string initially

  const handleMonthChange = (e) => {
    const newValue = e.target.value;
    setSelectedMonth(newValue);


    if (newValue === "0") {
      const whyso = localStorage.getItem('whyso');

      setWhy(whyso); // Set why to the value from localStorage
    } else {
      setWhy(newValue); // Set why to the selectedMonth value
    }
  };




  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('whyso'); // Clear the 'whyso' value from local storage
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const [storedYuvraj, setStoredYuvraj] = useState('');


  // In your useEffect or componentDidMount, set the value of storedYuvraj
  useEffect(() => {
    // Set the desired value in storedYuvraj
    setStoredYuvraj(why);
  }, []);


  const retrievedSelectedMonth = localStorage.getItem('selectedMonth');


  const soserious = localStorage.getItem('whyare');



  const handleResetFilters = () => {
    // Reset all filters
    setSelectedFilters({
      sortBy: null,
      duration: null,
      budget: null,
      twenty: null,
      twentyfour: null,
      foursix: null,
      sixeight: null,
      eight: null,

      // Add more filter categories as needed
    });

    const inputElements = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    inputElements.forEach((input) => {
      input.checked = false;
    });

    setSelectedOption("Select a day")

    setPackages(temp2)
  };






  return (
    <div>
      <Header />
      <section class="container-customes himachal-head mt-4">
        <div class="row">
          <div class="col-12">
            <div className="prts">
              <h1>{city}</h1>
              <div className="prts_photo">
                <img src={cityphoto} alt="" style={{ borderRadius: "5px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container-customes">
        <div class="d-flex justify-content-between time-to-visit">
          <div class="package-offer mt-3">
            <p>
              Best Time to Visit <span>{besttime}</span>
            </p>
          </div>
          <div class="package-offer mt-3">
            <p>
              Starting from{" "}
              <span>
                <i class="fa-solid fa-indian-rupee-sign"></i>
                {bestprice}/-
                {/* to <i class="fa-solid fa-indian-rupee-sign"></i>
                40,000/- */}
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="container-customes DestinationSlider py-3" style={{}}>
        <Carousel responsive={responsive}>
          {destination.map((ele) => {
            return (
              <>
                <div
                  className="px-2"
                  style={{ cursor: "pointer" }}
                  onClick={handleShow}
                >
                  <img
                    src={ele.photo}
                    alt=""
                    class="img-flud w-100"
                    style={{ height: "200px", borderRadius: "5px" }}
                  />
                  <h5 class="py-2 text-center">{ele.name}</h5>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>

      <section>
        <div class="container-customes">
          <div class="d-flex justify-content-between">
            <div class="trending">
              <h1 className="mb-3">Top Trending Packages</h1>
            </div>
            <div class="d-flex justify-content-end">
              <button
                class="bt-filter d-xl-none d-lg-block d-md-block d-sm-block"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                filters
              </button>
            </div>
          </div>

          {/* <!------------------------------------- filter -------------------------------------------> */}
          <div class="row justify-content-between">
            <div class="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-6 d-xl-block d-lg-none d-md-none d-sm-none d-none  text-start">
              <div class="sort-list filter px-3 py-3">
                <div>
                  <ul class="list-none ps-0">
                    <li className="d-flex justify-content-between">
                      <h6 class="filter-headers">Sort by</h6>
                      <div className="reset-filter-button">
                        <button onClick={handleResetFilters}>RESET</button>
                      </div>
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="range"
                        className="input-margin"
                        onChange={handleHightolow}
                      />
                      High To Low
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="range"
                        class="input-margin"
                        onChange={handleLowtohigh}
                      />
                      Low To High
                    </li>
                    <li>
                      <input type="checkbox" class="input-margin" />
                      Popularity
                    </li>
                  </ul>
                </div>
                <div></div>
                <div class="mb-3">
                  <h6 class="filter-headers">Filters</h6>
                </div>
                <div class="mb-3">
                  <h6 class="filters-inner">Duration (in Days)</h6>
                  <select className="select-day" value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Select a day</option>
                    <option value="1-3">1-3</option>
                    <option value="4-7">4-7</option>
                    <option value="8-12">8-12</option>
                    <option value="12+">12 or more</option>
                  </select>
                </div>
                <div>
                  <ul class="list-none ps-0">
                    <li>
                      <h6 class="filters-inner">Budget Per Person</h6>
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="nation"
                        class="input-margin"
                        onChange={handleTen}
                      />
                      Less than 10,000
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="nation"
                        class="input-margin"
                        onChange={handleTentwenty}
                      />
                      10,000 to 20,000
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="nation"
                        class="input-margin"
                        onChange={handleTwentyfour}
                      />
                      20,000 to 40,000
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="nation"
                        class="input-margin"
                        onChange={handleFoursix}
                      />
                      40,000 to 60,000
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="nation"
                        class="input-margin"
                        onChange={handleSixeight}
                      />
                      60,000 to 80,000
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="nation"
                        class="input-margin"
                        onChange={handleEight}
                      />
                      Above 80,000
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!------------------------------------- toggle button ------------------------------------> */}

            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                  Filter Options
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div class="col-12  text-start">
                  <div class="sort-list filter px-3 py-3">
                    <div>
                      <ul class="list-none ps-0">
                        <li>
                          <h6 class="filter-headers">Sort by</h6>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="range"
                            className="input-margin"
                            onChange={handleHightolow}
                          />
                          High To Low
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="range"
                            class="input-margin"
                            onChange={handleLowtohigh}
                          />
                          Low To High
                        </li>
                        <li>
                          <input type="checkbox" class="input-margin" />
                          Popularity
                        </li>
                      </ul>
                    </div>
                    <div class="mb-3">
                      <h6 class="filter-headers">Filters</h6>
                    </div>
                    <div class="mb-3">
                      <h6 class="filters-inner">Duration (in Days)</h6>
                      <select class="select-day">
                        <option selected> 1 to 3</option>
                        <option value="1">4 to 7</option>
                        <option value="2">8 to 12</option>
                        <option value="3">12 or more</option>
                      </select>
                    </div>
                    <div>
                      <ul class="list-none ps-0">
                        <li>
                          <h6 class="filters-inner">Budget Per Person</h6>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="nation"
                            class="input-margin"
                            onChange={handleTen}
                          />
                          Less than 10,000
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="nation"
                            class="input-margin"
                            onChange={handleTentwenty}
                          />
                          10,000 to 20,000
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="nation"
                            class="input-margin"
                            onChange={handleTwentyfour}
                          />
                          20,000 to 40,000
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="nation"
                            class="input-margin"
                            onChange={handleFoursix}
                          />
                          40,000 to 60,000
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="nation"
                            class="input-margin"
                            onChange={handleSixeight}
                          />
                          60,000 to 80,000
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="nation"
                            class="input-margin"
                            onChange={handleEight}
                          />
                          Above 80,000
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="list-none ps-0">
                        <li>
                          <h6 class="filters-inner">Month of Travel</h6>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Jan-Mar
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Apr-Jun
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Jul-Sep
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Oct-Dec
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!------------------------------------- tourplaces ---------------------------------> */}

            <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="tourplaces px-2 py-3">
                <div class="row gy-2 ps-3 pe-1">
                  {packages.map((ele) => {
                    return (
                      <>
                        <div
                          class="col-xl-4 col-lg-6 col-md-6 col-sm-12 ps-0"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="d-flex justify-content-center h-100">
                            <NavLink
                              to={`/packega_details/${ele._id}`}
                              style={{
                                textDecoration: "none",
                                color: "#044711",
                              }}
                            >
                              <div className="rating-top jiji h-100">
                                <div className="hyby" style={{ height: "100%" }}>
                                  <div class="Rating">
                                    <img
                                      src={ele.Place}
                                      alt=""
                                      style={{ maxWidth: "100%", borderRadius: "10px 10px 0px 0px" }}
                                      height="250px"

                                    />
                                    <span>
                                      <FontAwesomeIcon
                                        icon={faStar}
                                        style={{ color: "yellow" }}
                                      />{" "}
                                      4.3
                                    </span>
                                  </div>
                                  <div class="customise "
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      height: "49.5%",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <div>
                                      <div class="d-flex justify-content-between" style={{ position: "relative" }}>
                                        <p style={{
                                          fontSize: "17px",
                                          fontWeight: "600",
                                          lineHeight: "19px",
                                        }}>
                                          {ele.name}
                                        </p>
                                        <h4 className="d-inline">
                                          <i class="fa-solid fa-indian-rupee-sign"></i>
                                          ₹{ele.price_per_person}
                                        </h4>
                                        <div className="per-person-price">
                                          <span>per person</span>
                                        </div>
                                      </div>
                                      <div class="per-person d-flex">
                                        <h5 className="mb-1">Travel Include</h5>
                                        <p className="ms-1 mb-1" style={{ fontWeight: "700" }}>({ele.days})</p>
                                      </div>
                                      <div class="mb-4 d-flex ">

                                        <div className="text-center">
                                          <FontAwesomeIcon icon={faHotel} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                          <br />
                                          <span>Upto 3 Stars</span>
                                        </div>
                                        <div className="mx-3 text-center">
                                          <FontAwesomeIcon icon={faUtensils} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                          <br />
                                          <span>Meals</span>
                                        </div>
                                        <div className="text-center">
                                          <FontAwesomeIcon icon={faBinoculars} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                          <br />
                                          <span>Sightseeing</span>
                                        </div>
                                        <div className="mx-3 text-center">
                                          {ele.travel_by === 'Bus' && (
                                            <>
                                              <FontAwesomeIcon icon={faBus} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                              <br />
                                              <span>Bus</span>
                                            </>
                                          )}
                                          {ele.travel_by === 'Train' && (
                                            <>
                                              <FontAwesomeIcon icon={faTrainSubway} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                              <br />
                                              <span>Train</span>
                                            </>
                                          )}
                                          {ele.travel_by === 'Flight' && (
                                            <>
                                              <FontAwesomeIcon icon={faPlane} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                              <br />
                                              <span>Flight</span>
                                            </>
                                          )}
                                          {ele.travel_by === 'Car' && (
                                            <>
                                              <FontAwesomeIcon icon={faTaxi} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                              <br />
                                              <span>Car</span>
                                            </>
                                          )}
                                        </div>

                                      </div>
                                    </div>
                                    <div class="Customize-btn">
                                      <button>Customize & Get Quotes</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </NavLink>
                          </div >
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
      <section className="mt-5" style={{ backgroundColor: "#253329", color: "white" }}>
        <div className="container-customes">
          <div className="paragraph">
            <h3 className="mb-3">
              How to reach {aboutDestination.destination_name} by {aboutDestination.how_to_reach}
              <span className="mx-2 himachal_train_vector">
                {/* <img src="/Vector1.3.3.png" alt="" classNames="img-fluid " /> */}
                {/* <FontAwesomeIcon icon={faTrainSubway} /> */}

                {aboutDestination.how_to_reach === 'Bus' && (
                  <FontAwesomeIcon icon={faBus} />
                )}
                {aboutDestination.how_to_reach === 'Train' && (
                  <FontAwesomeIcon icon={faTrainSubway} />
                )}
                {aboutDestination.how_to_reach === 'Flight' && (
                  <FontAwesomeIcon icon={faPlane} />
                )}
                {aboutDestination.how_to_reach === 'Car' && (
                  <FontAwesomeIcon icon={faTaxi} />
                )}


              </span>
            </h3>
            <p>{aboutDestination.about_destination}</p>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose} style={{ borderRadius: "0px" }}>
        <Modal.Body>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
          >
            {destination.map((ele) => (
              <SwiperSlide key={ele.id}>
                <img
                  src={ele.photo || "/co-slider.png"}
                  className="img-fluid"
                  alt="Destination"
                />
                <h1 className="pt-2">{ele.name}</h1>
                <div style={{ height: "100vh" }}>
                  <p
                    style={{ textAlign: "justify", height: "100vh" }}
                    className="p-1 cmnp"
                  >
                    {ele.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal.Body>
      </Modal>
      <Footer />
    </div >
  );
}

export default Destination;
