import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faStar,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import "./css/index1.css";
import { BASE_URL } from "../BASE_URL";
import { useNavigate } from "react-router-dom";

function Top_rate_hotel(props) {

  const navigate = useNavigate();

  const [hotelSwiper, setHotelSwiper] = useState([]);

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
    console.log(data.data);
  };

  useEffect(() => {
    hotelList();
  }, []);


  const handleNavigate = (hotelId) => {
    navigate(`/hotel_details/${hotelId}`);
  }


  return (
    <>
      <Header />
      <section>
        <div className="container-customes">
          <div className="pt-4 pb-2 text-center">
            <h2 className="mb-0">Top rated hotels in Alberta</h2>
            <p className="top_text">
              These are the top-rated hotels on our list for your Alberta
              vacation
            </p>
          </div>

          <div className="row">
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
                        <button >RESET</button>
                      </div>
                    </li>
                    <li>
                      <input type="radio" name="range" className="input-margin" />
                      High To Low
                    </li>
                    <li>
                      <input type="radio" name="range" class="input-margin" />
                      Low To High
                    </li>
                    <li>
                      <input type="radio" name="range" class="input-margin" />
                      Popularity
                    </li>
                  </ul>
                </div>
                <div className="mb-3 ">
                  <label htmlFor="" className="filter-headers mb-1">Enter Hotel Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="px-2 py-1 focus-outline"
                    style={{ borderRadius: "10px", border: "1px solid lightgrey" }}
                  />
                </div>
                <div class="mb-3">
                  <h6 class="filter-headers">Filters</h6>
                </div>
                <div>
                  <ul class="list-none ps-0">
                    <li>
                      <h6 class="filters-inner">Hotel Price Range</h6>
                    </li>
                    <li>
                      <input type="radio" name="nation" class="input-margin" />
                      Less than 10,000
                    </li>
                    <li>
                      <input type="radio" name="nation" class="input-margin" />
                      10,000 to 20,000
                    </li>
                    <li>
                      <input type="radio" name="nation" class="input-margin" />
                      20,000 to 40,000
                    </li>
                    <li>
                      <input type="radio" name="nation" class="input-margin" />
                      40,000 to 60,000
                    </li>
                    <li>
                      <input type="radio" name="nation" class="input-margin" />
                      60,000 to 80,000
                    </li>
                    <li>
                      <input type="radio" name="nation" class="input-margin" />
                      Above 80,000
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              {hotelSwiper && hotelSwiper.map((ele) => {
                return (
                  <>
                    <div className=" top-border p-4 mb-2">
                      <div className="row gx-5">
                        <div className="col-lg-4 col-md-5 col-sm-6 text-center d-flex align-items-center">
                          <img src="/top-rate.png" className="img-fluid w-100" />
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm-6 d-flex flex-column justify-content-center pe-md-4 pe-2">
                          <div className="py-2">
                            <div className="align-items-center top_hotels_name">
                              <a
                                onClick={() => handleNavigate(ele._id)}
                                className="float-end d-sm-none d-md-block d-block"
                                style={{ color: "#09646D", textDecoration: "none", cursor: "pointer" }}
                              >
                                View Details
                              </a>
                              <h3>{ele.hotel_name}</h3>
                            </div>
                            <div className="top_hotels_star pt-2">
                              <FontAwesomeIcon icon={faStar} className="top_font_crl" />
                              <FontAwesomeIcon icon={faStar} className="top_font_crl" />
                              <FontAwesomeIcon icon={faStar} className="top_font_crl" />
                              <FontAwesomeIcon icon={faStar} className="top_font_crl" />
                              <FontAwesomeIcon icon={faStar} className="top_font_crl" />
                            </div>
                          </div>
                          <div className="d-flex top_hotels_map">
                            <a href="" className="top-a">
                              <FontAwesomeIcon icon={faLocationPin} /> {ele.hotel_address},{ele.city},{ele.state}{" "}
                              <span style={{ color: "#B8B8B8" }}>|</span>
                            </a>
                            <a href="" className="top-ab px-1">
                              View Map
                            </a>
                          </div>
                          <div className="pt-3 top_hotels_price_night">
                            <p>Price / Night(statick)</p>
                            <p style={{ color: "#09646D" }}>
                              <FontAwesomeIcon
                                icon={faIndianRupeeSign}
                                className="me-1"
                              />
                              19,000 / Person (statick)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
              {/* <div className=" top-border p-4 mb-2">
                <div className="row gx-5">
                  <div className="col-lg-4 col-md-5 col-sm-6 text-center d-flex align-items-center">
                    <img src="/top-rate.png" className="img-fluid w-100" />
                  </div>
                  <div className="col-lg-8 col-md-7 col-sm-6 d-flex flex-column justify-content-center pe-md-4 pe-2">
                    <div className="py-2">
                      <div className="align-items-center top_hotels_name">
                        <a
                          href="/hotel_details"
                          className="float-end d-sm-none d-md-block d-block"
                          style={{ color: "#09646D", textDecoration: "none" }}
                        >
                          View Details
                        </a>
                        <h3>Rose Valley Resort Alberta</h3>
                      </div>
                      <div className="top_hotels_star pt-2">
                        <FontAwesomeIcon icon={faStar} className="top_font_crl" />
                        <FontAwesomeIcon icon={faStar} className="top_font_crl" />
                        <FontAwesomeIcon icon={faStar} className="top_font_crl" />
                        <FontAwesomeIcon icon={faStar} className="top_font_crl" />
                        <FontAwesomeIcon icon={faStar} className="top_font_crl" />
                      </div>
                    </div>
                    <div className="d-flex top_hotels_map">
                      <a href="" className="top-a">
                        <FontAwesomeIcon icon={faLocationPin} /> Alberta{" "}
                        <span style={{ color: "#B8B8B8" }}>|</span>
                      </a>
                      <a href="" className="top-ab px-1">
                        View Map
                      </a>
                    </div>
                    <div className="pt-3 top_hotels_price_night">
                      <p>Price / Night</p>
                      <p style={{ color: "#09646D" }}>
                        <FontAwesomeIcon
                          icon={faIndianRupeeSign}
                          className="me-1"
                        />
                        19,000 / Person
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Top_rate_hotel;
