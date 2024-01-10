import React, { useState, useEffect, useContext } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import "./css/Destination.css";
import { dataContext } from "../App";
import { categoryName } from "../App";
import { BASE_URL } from "../BASE_URL";
import { useLocation } from 'react-router-dom';
import Footer from "./Footer";

function Destination1(props) {



  const { info, setInfo } = useContext(dataContext);
  const { categoryData, setCategoryData } = useContext(categoryName);

  const navigate = useNavigate();
  const { id } = useParams();


  const [temp, setTemp] = useState([]);
  const [destination, setDestination] = useState([]);

  const handleDestinationClick = (destinationName) => {
    setInfo(destinationName);
  };

  const destinationCategory = async () => {
    const res = await fetch(
      `${BASE_URL}destination/getDestinations?category_id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setDestination(data.data);
    setTemp(data.data);
  };

  useEffect(() => {
    destinationCategory();
    window.scrollTo(0, 0);
  }, [id]);

  // filter start form here 

  const [selectedFilters, setSelectedFilters] = useState({
    sortBy: null,
    month: null,
    days: null,
    time: null,
    Eight: null,
    SixEight: null,
    FourSix: null,
    TwentyFour: null,
    TenTwenty: null,
    Ten: null,
    LowHighTo: null,
    SerachInput: null,

  });



  const [highToLow, setHighToLow] = useState();

  const handleHightolow = (e) => {
    let selectprice = "";
    e.target.checked ? selectprice = [...destination].sort((a, b) => b.Package - a.Package) : selectprice = [...temp];
    setHighToLow(selectprice);
    setDestination(selectprice)

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'HighToLow',
    }));
  }


  const [lowTohigh, setLowtohigh] = useState();

  const handleLowtohigh = (e) => {
    let selectprice = "";
    e.target.checked ? selectprice = [...destination].sort((a, b) => a.Package - b.Package) : selectprice = [...temp];
    setLowtohigh(selectprice);
    setDestination(selectprice)

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'LowHighTo',
    }));


  }

  const handleTen = () => {
    const filteredData = destination.filter((ele) => ele.Package < 10000);
    const sortedData = [...filteredData].sort((a, b) => a.Package - b.Package);
    setDestination(sortedData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'Ten',
    }));


  };


  const handleTentwenty = () => {
    const filteredData = destination.filter((ele) => ele.Package >= 10000 && ele.Package <= 20000);
    const sortedData = [...filteredData].sort((a, b) => a.Package - b.Package);
    setDestination(sortedData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'TenTwenty',
    }));

  };

  const handleTwentyfour = () => {
    const filteredData = destination.filter((ele) => ele.Package >= 20000 && ele.Package <= 40000);
    const sortedData = [...filteredData].sort((a, b) => a.Package - b.Package);
    setDestination(sortedData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'TwentyFour',
    }));

  };


  const handleFoursix = () => {
    const filteredData = destination.filter((ele) => ele.Package >= 40000 && ele.Package <= 60000);
    const sortedData = [...filteredData].sort((a, b) => a.Package - b.Package);
    setDestination(sortedData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'FourSix',
    }));

  };


  const handleSixeight = () => {
    const filteredData = destination.filter((ele) => ele.Package >= 60000 && ele.Package <= 80000);
    const sortedData = [...filteredData].sort((a, b) => a.Package - b.Package);
    setDestination(sortedData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'SixEight',
    }));

  };

  const handleEight = () => {
    const filteredData = destination.filter((ele) => ele.Package > 80000);
    const sortedData = [...filteredData].sort((a, b) => a.Package - b.Package);
    setDestination(sortedData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'Eight',
    }));

  };



  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const filterValue = searchParams.get('filterValue');


  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);

    const search = destination.filter((ele) =>
      ele.destination_name.toLowerCase().includes(searchInput.toLowerCase()))

    setDestination(search);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'SerachInput',
    }));
  };

  const [selectedFilter, setSelectedFilter] = useState('');

  const handleChange = (event) => {
    const year = event.target.value
    setSelectedFilter(event.target.value);
    const filteredData = destination.filter((item) => {
      if (year === '') {
        return true;
      } else {
        const timeRange = item.best_time_for_visit;
        return timeRange.includes(year);

      }

    }
    );
    setDestination(filteredData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'time',
    }));

  };


  const [selectedMonth, setSelectedMonth] = useState('');


  const handleMonthChange = (e) => {
    const selectedMonthValue = e.target.value;
    setSelectedMonth(selectedMonthValue);

    const filteredData = destination.filter((item) => {
      if (selectedMonthValue === '') {
        return true;
      }

      const months = item.best_time_for_visit.split(' - ');
      return months.some((month) => month.includes(selectedMonthValue));
    });

    setDestination(filteredData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'month',
    }));

  };


  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    // setDestination(temp);
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    const filteredData = destination.filter((item) => {
      if (selectedValue === '') {
        return true; // Display all data when no option is selected
      }

      const totalDays = item.total_days;

      const [lowerLimit, upperLimit] = selectedValue.split('-').map(Number);

      return totalDays >= lowerLimit && totalDays <= upperLimit;
    });

    setDestination(filteredData);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: 'days',
    }));

  };






  const handleResetFilters = () => {
    // Reset all filters
    setSelectedFilters({
      sortBy: null,
      month: null,
      days: null,
      time: null,
      Eight: null,
      SixEight: null,
      FourSix: null,
      TwentyFour: null,
      TenTwenty: null,
      Ten: null,
      LowHighTo: null,
      SerachInput: null,

      // Add more filter categories as needed
    });

    const inputElements = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    inputElements.forEach((input) => {
      input.checked = false;
    });

    // setSelectedOption("Select a day")

    setDestination(temp)
  };







  return (
    <div className="">
      <Header />
      <section className="pt-2 pb-5 border-bottom">
        <div class="container-customes">
          <div class="d-flex justify-content-between text-center">
            <div className="py-3 d-flex justify-content-center w-100 ">
              <h1
                className="text-center"
                style={{ color: "#09646D", fontWeight: "600" }}
              >
                Best {categoryData} Places (india)
              </h1>
            </div>
            <div class="d-flex justify-content-end align-items-center">
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
            <div class="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-6 d-xl-block d-lg-none d-md-none d-sm-none d-none  text-start"
              style={{
                position: "sticky",
                top: "0px"
              }}
            >
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
                      <input type="radio" name="range" className="input-margin" onChange={handleHightolow} />
                      High To Low
                    </li>
                    <li>
                      <input type="radio" name="range" class="input-margin" onChange={handleLowtohigh} />
                      Low To High
                    </li>
                    <li>
                      <input type="radio" name="range" class="input-margin" />
                      Popularity
                    </li>
                  </ul>
                </div>
                <div className="mb-3 ">
                  <label htmlFor="" className="filter-headers mb-1">Search destination</label>
                  <input
                    type="text"
                    placeholder=""
                    className="px-2 py-1 focus-outline"
                    style={{ borderRadius: "10px", border: "1px solid lightgrey" }}
                    value={filterValue}
                    onChange={handleSearchInput}
                  />
                </div>
                <div>
                  <ul class="list-none ps-0">
                    <li>
                      <h6 class="filter-headers">Type of Destination</h6>
                    </li>
                    <li>
                      <input type="radio" name="nation" class="input-margin" />
                      India
                    </li>
                    <li>
                      <input type="radio" name="nation" class="input-margin" />
                      International
                    </li>
                  </ul>
                </div>
                <div class="mb-3">
                  <h6 class="filter-headers">Filters</h6>
                </div>
                <div class="mb-3">
                  <select name="" id="" onChange={handleOptionChange}>
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
                      <input type="radio" name="nation" class="input-margin" onChange={handleTen} />
                      Less than 10,000
                    </li>
                    <li>
                      <input type="radio" name="nation" class="input-margin" onChange={handleTentwenty} />
                      10,000 to 20,000
                    </li>
                    <li>
                      <input type="radio" name="nation" class="input-margin" onChange={handleTwentyfour} />
                      20,000 to 40,000
                    </li>
                    <li>
                      <input type="radio" name="nation" class="input-margin" onChange={handleFoursix} />
                      40,000 to 60,000
                    </li>
                    <li>
                      <input type="radio" name="nation" class="input-margin" onChange={handleSixeight} />
                      60,000 to 80,000
                    </li>
                    <li>
                      <input type="radio" name="nation" class="input-margin" onChange={handleEight} />
                      Above 80,000
                    </li>
                  </ul>
                </div>

                <div class="mb-3">
                  <select name="" id="" value={selectedMonth} onChange={handleMonthChange}>
                    <option value="">Select a month</option>
                    <option value="Jan">January</option>
                    <option value="Feb">February</option>
                    <option value="Mar">March</option>
                    <option value="Jul">July</option>
                    <option value="Nov">November</option>
                  </select>
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
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Filter Options</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
                          {/* <input type="checkbox" class="input-margin" name="hightolow" value={highToLow} onClick={handleHightolow} />
                      <label htmlFor="hightolow">High To Low</label> */}
                          <input type="radio" name="range" className="input-margin" onChange={handleHightolow} />
                          High To Low
                        </li>
                        <li>
                          <input type="radio" name="range" class="input-margin" onChange={handleLowtohigh} />
                          Low To High
                        </li>
                        <li>
                          <input type="radio" name="range" class="input-margin" />
                          Popularity
                        </li>
                      </ul>
                    </div>
                    <div></div>
                    <div className="mb-3 ">
                      <label htmlFor="" className="filter-headers mb-1">Search destination</label>
                      <input
                        type="text"
                        placeholder=""
                        className="px-2 py-1 focus-outline"
                        style={{ borderRadius: "10px", border: "1px solid lightgrey" }}
                        value={searchInput}
                        onChange={handleSearchInput}
                      />
                    </div>
                    <div class="mb-3">
                      <h6 class="filter-headers">Filters</h6>
                    </div>
                    <div class="mb-3">
                      <h6 class="filters-inner">Duration (in Days)</h6>
                      <select class="select-day">
                        <option selected> 1 to 3</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div>
                      <ul class="list-none ps-0">
                        <li>
                          <h6 class="filters-inner">Budget Per Person</h6>
                        </li>
                        <li>
                          <input type="radio" name="nation" class="input-margin" onChange={handleTen} />
                          Less than 10,000
                        </li>
                        <li>
                          <input type="radio" name="nation" class="input-margin" onChange={handleTentwenty} />
                          10,000 to 20,000
                        </li>
                        <li>
                          <input type="radio" name="nation" class="input-margin" onChange={handleTwentyfour} />
                          20,000 to 40,000
                        </li>
                        <li>
                          <input type="radio" name="nation" class="input-margin" onChange={handleFoursix} />
                          40,000 to 60,000
                        </li>
                        <li>
                          <input type="radio" name="nation" class="input-margin" onChange={handleSixeight} />
                          60,000 to 80,000
                        </li>
                        <li>
                          <input type="radio" name="nation" class="input-margin" onChange={handleEight} />
                          Above 80,000
                        </li>
                      </ul>
                    </div>
                    <div class="mb-3">
                      <label htmlFor="filterSelect">Select Filter:</label>
                      <select id="filterSelect" value={selectedFilter} onChange={handleChange}>
                        <option value="">All</option>
                        <option value="Jan">January</option>
                        <option value="Feb">February</option>
                        <option value="Mar">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="Mar">March</option>
                        <option value="Mar">March</option>
                        <option value="Mar">March</option>
                        <option value="Mar">March</option>
                        <option value="Mar">March</option>
                        {/* Add more options for other months if needed */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!------------------------------------- tourplaces ---------------------------------> */}

            <div class="ps-0 col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="tourplaces px-3 py-2">
                <div class="">
                  <div className="row gy-2">
                    {destination &&
                      destination.map((ele) => {
                        return (
                          <>
                            <div className="col-sm-4 col-12 d-flex justify-content-center px-1">
                              <div
                                class="best_natural_places w-100"
                                onClick={() => {
                                  navigate(`/destination/${ele._id}`, {
                                    state: { city: info },
                                  });
                                  handleDestinationClick(ele.destination_name);
                                }}
                                style={{
                                  cursor: "pointer",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "space-between",
                                }}
                              >
                                <div class="rating-top">
                                  <div class="Rating w-100">
                                    <img
                                      src={ele.Place_to_visit}
                                      alt=""
                                      class="img-fluid w-100"
                                      style={{ height: "200px", borderRadius: "10px 10px 0px 0px" }}
                                    />
                                    <span>
                                      <FontAwesomeIcon
                                        icon={faStar}
                                        style={{ color: "yellow" }}
                                      />{" "}
                                      4.3
                                    </span>
                                  </div>
                                  <div class="customise customise2 d-flex justify-content-between">
                                    <h5>{ele.destination_name}</h5>
                                    <div style={{ width: "44%", textAlign: "end" }}>
                                      <h4 className="d-inline" style={{ fontSize: "12px" }}>
                                        <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
                                        Starting From
                                      </h4>
                                      <h4>
                                        ₹{ele.Package}
                                      </h4>
                                    </div>
                                    <div className="customise_span">
                                      <span>per person</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h6 className="ps-3">Best Time To Visit
                                    <span className="ms-2" style={{color: "#09646d" , fontSize: "18px", lineHeight: "15px"}}>
                                      {ele.best_time_for_visit}
                                    </span>
                                  </h6>
                                </div>
                                <div class="Customize-btn Customize-btn-2">
                                  <button>More Details</button>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Destination1;
