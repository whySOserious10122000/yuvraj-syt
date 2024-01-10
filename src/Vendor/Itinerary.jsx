import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import { login } from "./Re_values";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Itinerary(props) {
  return (
    <>
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
                      <div className="col-6 d-flex align-items-center justify-content-end">
                        <p className="cmnclr cmnp">Add days</p>
                        <a href="">
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="cmnbkg p-2 ms-2"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <CKEditor editor={ClassicEditor} />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1"></div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                    <CKEditor editor={ClassicEditor} />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1"></div>
                  <div className="col-12">
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
                  </div>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Itinerary;
