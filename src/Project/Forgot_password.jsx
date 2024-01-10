import React from "react";
import "./css/index1.css";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function Forgot_password(props) {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState({
    old_password: "",
    npassword: "",
    new_password: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const txt = (e) => {
    const { name, value } = e.target;
    setPass({ ...pass, [name]: value });
  };

  const changePassword = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("userToken");

    const { old_password, new_password } = pass;

    const res = await fetch("${BASE_URL}user/updatepassword", {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        old_password,
        new_password,
      }),
    });
    const data = await res.json();

  };

  return (
    <>
      {/* <!-- Button trigger modal --> */}

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      {/* <!-- Modal -->
    <div classname="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div classname="modal-dialog modal-dialog-centered">
            <div classname="modal-content">
                <div classname="modal-body password-modal">
                <Form>
                    <h3 classname="mb-4">Set New Password</h3>
                    <label for="text" classname="mb-1">Old Password</label><br/>
                    <input type="password" name="password" id="password" placeholder="Chirag@123" classname="mb-3"/><br/>
                    <label for="text" classname="mb-1">Old Password</label><br/>
                    <input type="password" name="password" id="password" placeholder="Chirag@123" classname="mb-3"/><br/>
                    <label for="text" classname="mb-1">Old Password</label><br/>
                    <input type="password" name="password" id="password" placeholder="Chirag@123" classname="mb-5"
                        classname="mb-5"/>
                    <div classname="text-center">
                        <a href="#">Save</a>
                    </div> 
                    <button type="button" classname="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </Form>
                </div>
            </div>
        </div>
    </div> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div>
            <Container>
              <div className="common p-4">
                <Form>
                  <div>
                    <h2>Set New Password</h2>
                  </div>
                  <div className="py-2">
                    <p className="cmnp text_20">Old Password</p>
                    <input
                      type="password"
                      placeholder="Chirag@123"
                      className="w-100"
                      name="old_password"
                      onChange={txt}
                    />
                  </div>
                  <div className="py-2">
                    <p className="cmnp text_20">New Password</p>
                    <input
                      type="password"
                      placeholder="Chirag@123"
                      className="w-100"
                      name="npassword"
                      onChange={txt}
                    />
                  </div>
                  <div className="py-2">
                    <p className="cmnp text_20">Confirm New Password</p>
                    <input
                      type="password"
                      placeholder="Chirag@123"
                      className="w-100"
                      name="new_password"
                      onChange={txt}
                    />
                  </div>
                  <div className="pt-4 text-center ">
                    <Button
                      variant="primary"
                      className="w-50"
                      style={{ backgroundColor: "#155E75" }}
                      onClick={changePassword}
                    >
                      Next
                    </Button>
                  </div>
                </Form>
              </div>
            </Container>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Forgot_password;
