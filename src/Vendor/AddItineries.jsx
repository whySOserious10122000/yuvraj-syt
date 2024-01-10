/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Project/css/index1.css";
import Header2 from "./Header2";
import { Form, Row } from "react-bootstrap";
import My_pannel from "./My_pannel";
import { useEffect } from "react";
import { Itineries } from "../App";
import { ids } from "../App";
import { BASE_URL } from "../BASE_URL";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItineries = () => {
  const navigate = useNavigate();
  const [BidData, setBidData] = useState([]);

  const { id, BidId } = useParams();



  const [itineriesData, setItineriesData] = useState({
    day: "",
    title: "",
    photo: "",
    hotel_name: "",
    activity: "",
  });

  const txt = (e) => {
    const { name, value } = e.target;
    setItineriesData({ ...itineriesData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setItineriesData({ ...itineriesData, photo: file });
  };

  const AddItineriesData = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("vendorToken");

    const { day, title, photo, hotel_name, activity } = itineriesData;

    if (!day || !title || !hotel_name || !activity) {
      toast.error('Please Enter Valid Days And Night!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (day > 10) {
      toast.error('Please Enter Valid Day!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    const formData = new FormData();
    formData.append("bid_id", BidId);
    formData.append("day", day);
    formData.append("title", title);
    formData.append("hotel_name", hotel_name);
    formData.append("activity", activity);
    formData.append("photo", itineriesData.photo);

    const res = await fetch(`${BASE_URL}itinerary/addBid`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: formData,
    });

    if (res.status === 200) {
      navigate(`/vendor/Submit_package_form/${id}`);
    } else {
      console.error("Error:", res.status, res.statusText);
    }
  };

  return (
    <>
      <Header2 />
      <div className="costum_container">
        <My_pannel />
        <ToastContainer />
        <section>
          <div className="costum_container">
            <div className=" p-3">
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
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div
                        className="col-5 me-5"
                        style={{
                          border: "1px solid grey",
                          borderRadius: "15px",
                        }}
                      >
                        <div className="p-3">
                          <div>
                            <div className="mb-2">
                              <label htmlFor="text">Day</label>
                              <input type="text" name="day" onChange={txt} />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="text">Add Location</label>
                              <input type="text" name="title" onChange={txt} />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="text">Add Photo</label>
                              <input
                                type="file"
                                name="photo"
                                onChange={handlePhotoChange}
                              />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="text">Add Hotel Name</label>
                              <input
                                type="text"
                                name="hotel_name"
                                onChange={txt}
                              />
                            </div>
                            <div className="mb-2">
                              <a>Description</a>
                              <textarea
                                name="activity"
                                style={{
                                  width: "100%",
                                  height: "150px",
                                }}
                                onChange={txt}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "end" }}>
                          <button
                            className="m-3"
                            style={{
                              width: "160px",
                              height: "40px",
                              backgroundColor: "#09646d",
                              border: "none",
                              color: "white",
                            }}
                            onClick={AddItineriesData}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddItineries;
