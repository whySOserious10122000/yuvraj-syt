import {
  faArrowLeft,
  faBell,
  faCableCar,
  faEnvelopeOpen,
  faLocationPin,
  faPenToSquare,
  faTag,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../Project/css/index1.css";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import Side_navbar from "./Side_navbar";
import My_pannel from "./My_pannel";
import Header from "../Project/Header";
import Header2 from "./Header2";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../BASE_URL";

function Display_custom(props) {
  const navigate = useNavigate();

  const { id } = useParams();

  const [showPackageData, setShowPackageData] = useState([]);

  const showPackages = async () => {
    const token = localStorage.getItem("vendorToken");

    const res = await fetch(`${BASE_URL}customrequirements/Agencyshowdata`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setShowPackageData(data.data);
  };

  useEffect(() => {
    showPackages();
  }, []);


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
        <div>
          <section style={{ backgroundColor: "#fff" }}>
            <div className="costum_container">
              <div>
                <div className="pt-1 align-items-center second_navbar">
                  <div className="ps-xl-4 ps-lg-4 ps-md-4 ps-sm-2 ps-2 pe-xl-5 pe-lg-5 pe-md-5 pe-sm-2 pe-2 align-items-center d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className=" ps-2">Package List</span>
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

          <section className="py-5" style={{ backgroundColor: "whitesmoke" }}>
            <div className="row gx-5 gy-4 me-xl-5 me-lg-5 me-md-0 me-sm-0 me-0 ps-3">
              {showPackageData &&
                showPackageData.map((ele, i) => {
                  return (
                    <>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div
                          className="row only_for_green_border p-xl-3 p-lg-3 p-md-3 p-sm-3 p-2 costum_requirments"
                          onClick={() =>
                            navigate(`/display/custom/details/${ele._id}`)
                          }
                          style={{
                            backgroundColor: "#ffffff",
                            cursor: "pointer",
                            height: "300px",
                          }}
                        >
                          <div className="col-1 px-xl-2 px-lg-0 px-md-0 px-sm-0 costum_requirments_span">
                            <span className="cmnp cmnbkg">{i + 1}</span>
                          </div>
                          <div className="col-xl-7 col-lg-11 col-md-11 col-sm-11 col-6 costum_requirments_center">
                            <div className="d-flex align-item-center pt-2 py-1">
                              <FontAwesomeIcon
                                icon={faUser}
                                className="cmnclr"
                              />
                              <p className="cmnp ps-1">{ele.full_name}</p>
                            </div>
                            <div className="d-flex align-item-center pt-2 py-1">
                              <FontAwesomeIcon
                                icon={faLocationPin}
                                className="cmnclr"
                              />
                              <p className="cmnp ps-1">
                                Destination : {ele.destination}
                              </p>
                            </div>
                            <div className="d-flex align-item-center pt-2 py-1">
                              <FontAwesomeIcon
                                icon={faCalendar}
                                className="cmnclr"
                              />
                              <p className="cmnp ps-1">
                                {ele.start_date.slice(0, 10)} to {ele.end_date.slice(0, 10)}
                              </p>
                            </div>
                            <div className="py-1">
                              <span
                                className="cmnp"
                                style={{ color: "#B8B8B8" }}
                              >
                                Package ID : {ele._id}
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-4 px-0">
                            <div className="costum_requirments_footer">
                              <div className="costum_requirments_footer_icon">
                                <FontAwesomeIcon
                                  icon={faPenToSquare}
                                  className="p-1 cmnclr"
                                />
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="p-1 cmnclr"
                                />
                              </div>
                              <div className="for_order_only">
                                <button
                                  href=""
                                  className="costum_requirments_footer_button"
                                >
                                  <FontAwesomeIcon
                                    icon={faTag}
                                    className="me-2"
                                  />
                                  Budget : {ele.budget_per_person}{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Display_custom;
