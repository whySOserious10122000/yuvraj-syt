import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Project/css/index1.css";
import Header2 from "./Header2";
import { Form, Row } from "react-bootstrap";
import My_pannel from "./My_pannel";
import { useEffect } from "react";
import { day } from "../App";
import { useContext } from "react";
import { BASE_URL } from "../BASE_URL";

const AddItineriesEdit = () => {
  const navigate = useNavigate();
  const { id, BidId } = useParams();

  const { dayNumber, setDayNumber } = useContext(day);

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

  // Get Itinerary
  const getItinerary = async () => {
    const token = localStorage.getItem("vendorToken");
    const res = await fetch(`${BASE_URL}itinerary/byid?_id=${id}`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setItineriesData(data.data);
  };

  // Edit Itinerary
  const AddItineriesDataEdit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("vendorToken");
  
    const formData = new FormData();
    formData.append("day", itineriesData.day);
    formData.append("title", itineriesData.title);
    formData.append("activity", itineriesData.activity);
    formData.append("hotel_name", itineriesData.hotel_name);
  
    // Assuming you have a file input field named "photo"
    if (itineriesData.photo) {
      formData.append("photo", itineriesData.photo);
    }
  
    const res = await fetch(
      `${BASE_URL}itinerary/biditinerary?bid_id=${BidId}&day=${dayNumber}`,
      {
        method: "PUT",
        headers: {
          Authorization: token,
        },
        body: formData, // Send the FormData object as the body
      }
    );
  
    const data = await res.json();
  };

  useEffect(() => {
    AddItineriesDataEdit();
    getItinerary();
  }, [id]);

  return (
    <>
      <Header2 />
      <div className="costum_container">
        <My_pannel />
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
                              <input
                                type="text"
                                name="day"
                                onChange={txt}
                                value={itineriesData.day}
                              />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="text">Add Location</label>
                              <input
                                type="text"
                                name="title"
                                onChange={txt}
                                value={itineriesData.title}
                              />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="text">Add Photo</label>
                              <input type="file" name="photo" onChange={txt} />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="text">Add Hotel Name</label>
                              <input
                                type="text"
                                name="hotel_name"
                                onChange={txt}
                                value={itineriesData.hotel_name}
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
                                value={itineriesData.activity}
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
                            onClick={AddItineriesDataEdit}
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

export default AddItineriesEdit;
