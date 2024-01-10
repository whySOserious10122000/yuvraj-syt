import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Container, FormLabel, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";

function Login(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div>
            <Container>
              <div className="common_p">
                <div className="inerp p-5 border-1">
                  <Row>
                    <div className="col">
                      <div>
                        <div>
                          <h6 style={{ fontWeight: "600", fontSize: "15px" }}>
                            LOG IN
                          </h6>
                          <p
                            style={{
                              margin: "0",
                              padding: "0",
                              fontSize: "10px",
                            }}
                          >
                            Enter Your Mobile No.
                          </p>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            pattern="[0-9]"
                          />
                        </div>

                        <div className="py-3">
                          <p
                            style={{
                              margin: "0",
                              padding: "0",
                              fontSize: "10px",
                            }}
                          >
                            Enter Your Password
                          </p>
                          <input type="password" />
                          <a
                            href=""
                            className="text-danger "
                            style={{
                              textDecoration: "none",
                              float: "right",
                              fontSize: "10px",
                            }}
                          >
                            Forgot Your Password
                          </a>
                        </div>
                        <div className="py-2 text-center my-3">
                          <Button
                            type="button"
                            style={{
                              color: "white",
                              background: "#09646D",
                              fontSize: "14px",
                            }}
                          >
                            Log in
                          </Button>
                          <p style={{ fontSize: "10px" }} className="pt-3">
                            Don’t Have an Account?
                            <a href="" style={{ textDecoration: "none" }}>
                              Create Account
                            </a>
                            ?
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <img src="/login.png" className="img-fluid" />
                    </div>
                  </Row>
                </div>
              </div>
            </Container>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;
