/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faArrowLeft,
  faBell,
  faEnvelopeOpen,
  faCircle,
  faInbox,
  faLocationPin,
  faPhone,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Header from "../Project/Header";
import My_pannel from "./My_pannel";
import Header2 from "./Header2";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../BASE_URL";

function Requirements_details(props) {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

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
    console.log(data.data);
    setDetails(data.data);
  };

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
    console.log(data);

    const matchingBidPackage = data.data.find(
      (bidPackage) => bidPackage.custom_requirement_id === id
    );

    if (matchingBidPackage) {
      console.log(matchingBidPackage);
      setBidData(matchingBidPackage);
      setBidDataId(matchingBidPackage._id);
    } else {
      console.log("No matching bid package found.");
    }
  };

  useEffect(() => {
    Requirement();
    getBidPackage();
  }, [id]);


  const [editedata, setEditedData] = useState("")

  const Call = async () => {
    const token = localStorage.getItem("vendorToken")
    console.log(token);
    const res = await fetch(`${BASE_URL}agency/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    setEditedData(data?.data?.[0]);
    console.log(data?.data?.[0]);
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
                  <div className="ps-xl-3 ps-lg-3 ps-md-4 ps-sm-2 ps-2 pe-lg-5 pe-md-4 pe-sm-2 pe-2 align-items-center d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <a
                        onClick={() => navigate("/display/custom")}
                        style={{ cursor: "pointer" }}
                      >
                        <FontAwesomeIcon
                          icon={faArrowLeft}
                          className="p-2 cmnbkg"
                        />
                      </a>
                      <span className=" ps-2">Package List Details</span>
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

          <div className="requirements_details">
            <section className="requirements_details_section pt-4">
              {details.map((e) => {
                return (
                  <>
                    <div className="requirements_details_1 green_border_requirments">
                      <div className="p-3">
                        <span className="cmnbkg span_squar">1</span>
                        <p className="text-end">
                          Status :{" "}
                          <span
                            style={{
                              fontWeight: "500",
                              color: "green",
                              fontSize: "20px",
                            }}
                          >
                            {BidData.bid_status
                              ? BidData.bid_status
                              : "Pending"}
                          </span>
                        </p>
                        <div className="py-2 px-xl-4 px-lg-4 px-md-3 px-sm-2 px-1">
                          <Row className="py-2">
                            <div className="col-lg-4 col-md-6">
                              <div style={{ borderRight: "1px solid #B8B8B8" }}>
                                <div>
                                  {e.destination_category.map((ele) => {
                                    return (
                                      <>
                                        <Link className="cmn-re-btn ms-2">
                                          {ele.category_name}
                                        </Link>
                                      </>
                                    );
                                  })}
                                </div>
                                <div className="pt-3">
                                  <h6>
                                    <FontAwesomeIcon
                                      icon={faCircle}
                                      style={{ color: "#00B707" }}
                                    />{" "}
                                    Departure: {e.departure}
                                  </h6>
                                  <h6>
                                    <FontAwesomeIcon
                                      icon={faCircle}
                                      style={{ color: "#00B707" }}
                                    />{" "}
                                    Destination: {e.destination}
                                  </h6>
                                </div>
                                <div className="py-1 d-flex align-items-center">
                                  <h6>Travel by</h6>
                                  {e.travel_by.map((ele) => {
                                    return (
                                      <>
                                        <Link className="cmn-re-btn ms-2">
                                          {ele}
                                        </Link>
                                      </>
                                    );
                                  })}
                                </div>
                                <div>
                                  <h6 className="py-2">Total People</h6>
                                  <div>
                                    <ButtonGroup
                                      aria-label="Basic example"
                                      style={{
                                        border: "1px solid #B8B8B8",
                                        borderRadius: "8px",
                                      }}
                                    >
                                      <Button
                                        variant="white"
                                        className="btn_group_style"
                                        style={{
                                          borderRight: "1px solid #B8B8B8",
                                        }}
                                      >
                                        Adults {e.total_adult}
                                      </Button>
                                      <Button
                                        variant="white"
                                        className="btn_group_style"
                                        style={{
                                          borderRight: "1px solid #B8B8B8",
                                        }}
                                      >
                                        Infants {e.Infant}
                                      </Button>
                                      <Button
                                        variant="white"
                                        className="btn_group_style"
                                        style={{}}
                                      >
                                        Children {e.total_child}
                                      </Button>
                                    </ButtonGroup>
                                    <button className="cmn-re-btn btn_group_style ms-2 py-1">
                                      Total{" "}
                                      {e.total_adult + e.Infant + e.total_child}
                                    </button>
                                  </div>
                                </div>
                                <div className="pt-3">
                                  <h6>
                                    Personal Care :{" "}
                                    {e.personal_care == true ? "Yes" : "No"}
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div style={{ borderRight: "1px solid #B8B8B8" }}>
                                <div>
                                  <p className="cmnp cmnli py-1">
                                    Package ID : {e._id}
                                  </p>
                                  <p className="cmnp py-1">
                                    <FontAwesomeIcon icon={faUser} /> Name:{" "}
                                    {e.full_name}
                                  </p>
                                  <p className="cmnp py-1">
                                    <FontAwesomeIcon icon={faInbox} /> Email Id:{" "}
                                    {e.email_address}
                                  </p>
                                  <p className="cmnp py-1">
                                    <FontAwesomeIcon icon={faPhone} /> Phone
                                    Number: {e.mobile_no}
                                  </p>
                                  <p className="cmnp py-1">
                                    <FontAwesomeIcon icon={faLocationPin} />{" "}
                                    City: {e.city}
                                  </p>
                                  <p className="cmnp py-1">
                                    <FontAwesomeIcon icon={faTag} />
                                    Budget Per Person: {e.budget_per_person}
                                  </p>
                                </div>
                                <div className="py-3 pt-3 pb-4">
                                  <Link
                                    to={`/vendor/Submit_package_form/${e._id}`}
                                    className="batann_2_2"
                                  >
                                    Submit Bid
                                  </Link>
                                  <Link
                                    variant="primary"
                                    className="ms-2 batanv_2_2"
                                  >
                                    Cancle
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                              <div className="py-2">
                                <div className="py-1 d-flex align-items-center">
                                  <h6>
                                    {e.start_date.slice(0, 10)} to {e.end_date.slice(0, 10)}
                                  </h6>
                                  <Link className="cmn-re-btn ms-2">
                                    {e.total_travel_days} Days
                                  </Link>
                                </div>
                                <div className="py-1 d-flex align-items-center">
                                  <h6>Hotel</h6>
                                  {e.hotel_type.map((ele) => {
                                    return (
                                      <>
                                        <Link className="cmn-re-btn ms-2">
                                          {ele}
                                        </Link>
                                      </>
                                    );
                                  })}
                                </div>
                                <div className="py-1 d-flex align-items-center">
                                  <h6>{e.meal_type}</h6>
                                  {e.meal_require.map((ele) => {
                                    return (
                                      <>
                                        <Link className="cmn-re-btn ms-2">
                                          {ele}
                                        </Link>
                                      </>
                                    );
                                  })}
                                </div>
                                <div className="py-2">
                                  <h6>Extra requirements</h6>
                                  <Form>
                                    <Form.Control
                                      type="text"
                                      id="name"
                                      name="name"
                                      style={{ height: "80px" }}
                                      className="extra_requirements_input"
                                      value={e.additional_requirement[0]}
                                    />
                                  </Form>
                                </div>
                              </div>
                            </div>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Requirements_details;
