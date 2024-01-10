import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import {
  faPenToSquare,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Itinerary from "./Itinerary";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useFormik } from "formik";
import { login } from "./Re_values";

function Hotels(props) {
  return (
    <>
      <section>
        <div className="costum_container">
          <div className="p-3">
            <div
              className="green_border hotels_padding"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="px-3">
                <Form>
                  <Row className="">
                    <div className="col-12 d-flex justify-content-between">
                      <span className="itinerary_header text-20 cmnclr h-100 d-flex justify-content-left text-start align-items-center">
                        Add Hotel & Details
                      </span>
                      <div className="d-flex align-items-center float-end">
                        <p className="cmnclr cmnp">Add Hotel</p>
                        <a href="">
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="cmnbkg p-2 ms-2"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="inner_green_border p-2">
                        <span className="cmnp p-2 cmnclr">DAY 1</span>
                        <div className="float-end">
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="p-1 cmnclr"
                          />
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="p-1 cmnclr"
                          />
                        </div>
                      </div>
                      <div className="inner_green_border py-3 my-3 px-4">
                        <div>
                          <input type="radio" />
                          <label className="ms-2" style={{ fontWeight: "600" }}>
                            Hotel
                          </label>
                          <input type="radio" className="ms-3" />
                          <lable className="ms-2" style={{ fontWeight: "600" }}>
                            Property
                          </lable>
                        </div>
                        <div className="py-1">
                          <p className="cmnp text-20">Location</p>
                        </div>
                        <div className="py-1">
                          <p className="cmnp text-20">Hotel</p>
                        </div>
                        <div className="py-1">
                          <p className="cmnp text-20">Hotel Type</p>
                        </div>
                        <div className="py-1">
                          <p
                            className="cmnp py-2"
                            style={{ fontWeight: "500" }}
                          >
                            Meals
                          </p>
                          <input type="radio" name="YN" id="YN" />
                          <label className="ms-2" style={{ fontWeight: "600" }}>
                            Veg
                          </label>
                          <input
                            type="radio"
                            className="ms-3"
                            name="YN"
                            id="YN"
                          />
                          <lable className="ms-2" style={{ fontWeight: "600" }}>
                            Non Veg
                          </lable>
                        </div>
                        <div className="py-1">
                          <input type="radio" />
                          <label className="ms-2" style={{ fontWeight: "600" }}>
                            Breakfast
                          </label>
                          <input type="radio" className="ms-3" />
                          <lable className="ms-2" style={{ fontWeight: "600" }}>
                            Lunch
                          </lable>
                          <input type="radio" className="ms-3" />
                          <lable className="ms-2" style={{ fontWeight: "600" }}>
                            Dinner
                          </lable>
                        </div>
                        <div className="py-1">
                          <p className="cmnp text-20">Other days</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="inner_green_border p-2">
                        <span className="cmnp p-2 cmnclr">DAY 2</span>
                        <div className="float-end">
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="p-1 cmnclr"
                          />
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="p-1 cmnclr"
                          />
                        </div>
                      </div>
                      <div className="inner_green_border py-2 my-2 px-3">
                        <div>
                          <input type="radio" />
                          <label className="ms-2" style={{ fontWeight: "600" }}>
                            Hotel
                          </label>
                          <input
                            type="radio"
                            className="ms-3"
                            name="YN3"
                            id="YN3"
                          />
                          <lable className="ms-2" style={{ fontWeight: "600" }}>
                            Property
                          </lable>
                        </div>
                        <div className="py-1">
                          <p className="cmnp text-20">Location</p>
                        </div>
                        <div className="py-1">
                          <p className="cmnp text-20">Hotel</p>
                        </div>
                        <div className="py-1">
                          <p className="cmnp text-20">Hotel Type</p>
                        </div>
                        <div className="py-1">
                          <p
                            className="cmnp py-2"
                            style={{ fontWeight: "500" }}
                          >
                            Meals
                          </p>
                          <input type="radio" />
                          <label className="ms-2" style={{ fontWeight: "600" }}>
                            Veg
                          </label>
                          <input type="radio" className="ms-3" />
                          <lable className="ms-2" style={{ fontWeight: "600" }}>
                            Non Veg
                          </lable>
                        </div>
                        <div className="py-1">
                          <input type="radio" />
                          <label className="ms-2" style={{ fontWeight: "600" }}>
                            Breakfast
                          </label>
                          <input type="radio" className="ms-3" />
                          <lable className="ms-2" style={{ fontWeight: "600" }}>
                            Lunch
                          </lable>
                          <input type="radio" className="ms-3" />
                          <lable className="ms-2" style={{ fontWeight: "600" }}>
                            Dinner
                          </lable>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="py-2 pt-3 text-end">
                    <Button
                      style={{
                        background: "#0000",
                        color: "#BBBB",
                        padding: "8px 40px",
                        border: "1px solid #BBBB",
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      variant="primary"
                      className="ms-2"
                      type="submit"
                      style={{
                        backgroundColor: "#155E75",
                        padding: "8px 40px",
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hotels;
