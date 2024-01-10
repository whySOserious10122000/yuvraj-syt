import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import { Button, Container, Row } from "react-bootstrap";
import "./css/index1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  faArrowAltCircleLeft,
  faArrowRight,
  faCalendar,
  faIdBadge,
  faIndianRupeeSign,
  faLocationPin,
  faPlane,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { bidContext } from "../App";
import { ids } from "../App";
import { hotelName } from "../App";
import { BASE_URL } from "../BASE_URL";
import Footer from "./Footer";

function C_packegga(props) {
  const navigate = useNavigate();

  const [packages, setPackages] = useState([]);
  const [bid, setBid] = useState([]);
  const { bidData, setBidData } = useContext(bidContext);
  const { id, setId } = useContext(ids);
  const { hotel, setHotel } = useContext(hotelName);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 2000, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const handleHotelClick = (HotelName) => {
    setBidData(HotelName);
  };

  const token = localStorage.getItem("userToken");
  const ShowPackage = async () => {
    const res = await fetch(`${BASE_URL}customrequirements`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setPackages(data.data);
  };

  const Show_Packages = async (id) => {
    const res = await fetch(
      `${BASE_URL}bidpackage/displaybidpackages?custom_requirement_id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setBid(data.data);
  };

  const handleCheckboxChange = (event, idValue, hotelName) => {
    if (event.target.checked) {
      // Add the logic to store the id and hotel if they're not already present
      if (!id.includes(idValue)) {
        setId((prevIds) => [...prevIds, idValue]);
        setHotel((prevHotels) => [...prevHotels, hotelName]);
      }
    } else {
      // Add the logic to remove the id and hotel from the arrays if they're present
      setId((prevIds) => prevIds.filter((prevId) => prevId !== idValue));
      setHotel((prevHotels) =>
        prevHotels.filter((prevHotel) => prevHotel !== hotelName)
      );
    }
  };

  useEffect(() => {
    ShowPackage();
  }, []);

  const fetchPackageDetails = async (tripId) => {
    try {
      const response = await fetch(`${BASE_URL}bidpackage/displaybidpackages?custom_requirement_id=${tripId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const [bidCount, setBidCount] = useState("")

  useEffect(() => {
    // Fetch details for each package using their _id
    const fetchPackageDetailsForAll = async () => {
      const detailsPromises = packages.map((ele) => fetchPackageDetails(ele.Trip_id));

      try {
        const detailsData = await Promise.all(detailsPromises);
        setBidCount(detailsData)
      } catch (error) {
        
      }
    };

    if (packages.length > 0) {
      fetchPackageDetailsForAll();
    }
  }, [packages]);




  return (
    <>
      <Header />
      <section className="py-5">
        <div className="container-customes">
          <div className="text-center">
            <img src="/C-packega1.png" className="w-100" />
          </div>
          <div className="minas">
            <Carousel responsive={responsive} className="mx-xl-4 mx-lg-0">
              {packages.map((ele, index) => {
                return (
                  <>
                    <Row key={ele._id} className="d-flex justify-content-center mx-xl-2">
                      {bidCount[index] && (
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="py-4 px-3 cmn d-flex bg-white">
                            <img src="/C-packega2.png" className="img-fluid" />
                            <div className="ps-3 row  w-100">
                              <div className="">
                                <p className="textcm">
                                  <FontAwesomeIcon icon={faPlane} /> Departure:
                                  {ele.departure}
                                </p>
                                <p className="textcm">
                                  <FontAwesomeIcon icon={faLocationPin} />{" "}
                                  Destination: {ele.Arival}
                                </p>
                                <p className="textcm">
                                  <FontAwesomeIcon icon={faLocationPin} />{" "}
                                  Total Bid: {bidCount[index].data.length}
                                </p>
                                <p className="textcm">
                                  <FontAwesomeIcon icon={faCalendar} /> On Date:
                                  {ele.On_Date}
                                </p>
                              </div>
                              <div className="w-100 compare_package_btn text-end">
                                <button href="" className=" act collg-6">
                                  {ele.custom_requirement.status}
                                </button>
                                <button
                                  onClick={() => Show_Packages(ele.Trip_id)}
                                  className="show1"
                                >
                                  Show Packages
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Row>
                  </>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>

      {bid.length == 0 ? (
        <div
          style={{
            color: "red",
            fontSize: "22px",
            display: "grid",
            placeItems: "center",
            padding: "30px 0px",
          }}
        >
          No Bid Data
        </div>
      ) : (
        <div>
          {bid.map((ele) => {
            return (
              <>
                <section className="py-2">
                  <div className="container-customes">
                    <div>
                      <Row className="cmn px-4 py-4">
                        <div className="col-xl-5 col-lg-7 col-md-7 col-sm-12 col-12 ps-0 pe-3">
                          <div className="d-flex">
                            <div>
                              <img
                                src="/C-packega3.png"
                                className="img-fluid h-100"
                              />
                            </div>
                            <div className="ps-5 d-flex flex-column justify-content-center">
                              <p className="cmnp py-1 text-15">{ele.Agency}</p>
                              <div className="py-1">
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="c_icon"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="c_icon"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="c_icon"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="c_icon"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "#DDDDDD" }}
                                />
                              </div>
                              <p className="cmnp py-1 text-15">{ele.Date}</p>
                              <p className="cmnp py-1 text-15">
                                Total Review : 11,000
                              </p>
                              <div>
                                <h2 className="ruppe_text">
                                  Price :{" "}
                                  <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                                  {ele.Price}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-3 col-md-3 col-sm-6  col-6 d-flex justify-content-center align-items-end py-4">
                          <div className=" justify-content-center topp">
                            <p className="cmp text-15  m-0">
                              4 days & 3 Nights
                              <br />
                              Hotel : 3 star
                            </p>
                            <p className="cmnp text-15 ">
                              Mumbai(2N) <FontAwesomeIcon icon={faArrowRight} />{" "}
                              Lonavala(2N){" "}
                            </p>
                          </div>
                        </div>

                        <div className="col-xl-3 col-lg-2 col-md-2 col-sm-6 col-6 text-center pe-0 py-3">
                          <div className="text-center d-flex flex-column align-items-end justify-content-between h-100">
                            <div className="">
                              Add To Compare{" "}
                              <input
                                type="checkbox"
                                className="ms-3"
                                onChange={(event) => {
                                  handleCheckboxChange(
                                    event,
                                    ele._id,
                                    ele.Agency
                                  );
                                }}
                              />
                              <p className="cmnp text-15"></p>
                            </div>
                            <div
                              className="text-center mb-3"
                              onClick={() => {
                                navigate(`/custome_package/${ele._id}`);
                                handleHotelClick(ele.Agency);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              <a className="view1">View Quote</a>
                            </div>
                          </div>
                        </div>
                      </Row>
                    </div>
                  </div>
                </section>
              </>
            );
          })}
          <NavLink to="/compare_packega" style={{ textDecoration: "none" }}>
            <div className="text-center py-5">
              <a className="view">Compare Quotes</a>
            </div>
          </NavLink>
        </div>
      )}
      <hr />
      <Footer />
    </>
  );
}

export default C_packegga;
