import React from "react";
import {
  faArrowLeft,
  faBell,
  faBrush,
  faCheck,
  faCheckCircle,
  faClipboard,
  faEnvelopeOpen,
  faLayerGroup,
  faLocationPin,
  faStar,
  faUser,
  faXmark,
  faXmarkCircle,
  faPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header2 from "./Header2";
import My_pannel from "./My_pannel";
import Button from "react-bootstrap/Button";
import { Container, Form, Row } from "react-bootstrap";

const AddHotel = () => {
  return (
    <>
      <Header2 />
      <div className="costum_container">
        <My_pannel />
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
                      Hotel & Food
                    </span>
                    <div className="d-flex align-items-center float-end">
                      <p className="cmnclr cmnp">Add Hotel</p>
                      <a style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="cmnbkg p-2 ms-2"
                        />
                      </a>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-md-6 col-sm-6"
                    style={{ margin: "auto" }}
                  >
                    <div className="inner_green_border py-3 my-3 px-4">
                      <span className="itinerary_header text-20 cmnclr h-100 d-flex justify-content-left text-start align-items-center">
                        Hotel & Food
                      </span>
                      <div className="margin_left_right mt-3">
                        <p className="mb-1" htmlFor="">
                          Day
                        </p>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="mb-2"
                          style={{ width: "100%" }}
                        />
                        <br />
                        <p className="mb-1" htmlFor="">
                          Hotel name
                        </p>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="mb-2"
                          style={{ width: "100%" }}
                        />
                        <br />
                        <p className="mb-1" htmlFor="">
                          Hotel address
                        </p>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="mb-2"
                          style={{ width: "100%" }}
                        />
                        <br />
                        <p className="mb-1" htmlFor="">
                          Hotel photo
                        </p>
                        <input
                          type="file"
                          name=""
                          id=""
                          className="mb-2"
                          style={{ width: "100%" }}
                        />
                        <br />
                        <p className="mb-1" htmlFor="">
                          Hotel city
                        </p>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="mb-2"
                          style={{ width: "100%" }}
                        />
                        <br />
                        <p className="mb-1" htmlFor="">
                          Hotel state
                        </p>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="mb-2"
                          style={{ width: "100%" }}
                        />
                        <br />
                        <div className="mb-2">
                          <p className="mb-1" htmlFor="">
                            Hotel description
                          </p>
                          <textarea
                            name=""
                            id=""
                            style={{
                              width: "100%",
                              height: "150px",
                            }}
                          ></textarea>
                        </div>
                        <div>
                          <p className="mb-1" htmlFor="">
                            Hotel highlights
                          </p>
                          <textarea
                            name=""
                            id=""
                            style={{
                              width: "100%",
                              height: "150px",
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="py-2 pt-3 text-end">
                  <Button
                    variant="primary"
                    className="ms-2"
                    type="submit"
                    style={{
                      backgroundColor: "#155E75",
                      padding: "8px 40px",
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddHotel;
