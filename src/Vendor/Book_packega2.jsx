import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Book_packega2(props) {
  return (
    <>
      <section>
        <div className="costum_container">
          <div
            className="green_border book_packega_1"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="cmn p-3">
              <div className="py-2">
                <h6 className="cmnclr font-weight-bold cmnhr1">Payment</h6>
              </div>

              <div>
                <div className="py-2">
                  <div>
                    <Row>
                      <div className="col-lg-6 col-md-6 ">
                        <div className="py-2 ">
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Payment Status</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              Paid
                            </p>
                          </div>
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Name</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              Gautam Shah
                            </p>
                          </div>
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Mobile No</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              99999 99999
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 ">
                        <div className="ps-md-4 ps-0 py-2">
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Payment Date</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              20/04/2023
                            </p>
                          </div>
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Payment To</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              Gujarat Travels
                            </p>
                          </div>
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Email</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              gautamshah@gmail.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <h6 className="cmnclr font-weight-bold cmnhr2">
                  Payment Statement
                </h6>
              </div>

              <div>
                <div className="px-sm-5 ps-0 py-2">
                  <div>
                    <Row>
                      <div className="col-lg-6 col-md-6 ">
                        <div className="ps-sm-4 ps-0 py-2">
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Payment Method</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              UPI
                            </p>
                          </div>
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Paid via</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              Google Pay
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 ">
                        <div className="ps-sm-4 ps-0 py-2">
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Transaction ID</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              AB12546GHIJK
                            </p>
                          </div>
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Total Amount</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              <FontAwesomeIcon icon={faIndianRupee} /> 18,000/-
                            </p>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
              <div className="py-2 pt-3 ">
                <Link className="batanv">View</Link>
                <Link variant="primary" className="ms-2 batann">
                  Download
                </Link>
              </div>
            </div>
            <div className="py-2 pb-3 pt-3 text-end">
              <Link className="batanv">Back</Link>
              <Link variant="primary" className="ms-2 batann">
                Next
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Book_packega2;
