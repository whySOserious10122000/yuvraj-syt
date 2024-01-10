import React from "react";
import { Nav } from "react-bootstrap";
import "../Project/css/index1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faCube,
  faGear,
  faHome,
  faHotel,
  faMapLocationDot,
  faVectorSquare,
  faRightFromBracket,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from "react";

function My_pannel(props) {
  const navigate = useNavigate();


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleYesClick = () => {

    localStorage.removeItem("vendorToken");

    handleClose();

    navigate("/vendor/login");
  };


  useEffect(() => {
    const vendorToken = localStorage.getItem("vendorToken");
    if (!vendorToken) {
      // If "vendorToken" is present, automatically navigate to login
      navigate("/vendor/login");
    }
  }, [navigate]);



  return (
    <>
      <nav className="position_sticky">
        <ul className="side_nav_list mb-0">
          <li className="button-48 d-flex align-items-center mb-2" onClick={() => navigate("/vendor/home-page")}>
            <a>
              <FontAwesomeIcon icon={faHome} className="your-external-css-class" />
            </a>
            <p className="mb-0">Home</p>
          </li>
          <li className="py-2 button-48 d-flex align-items-center mb-2">
            <a href="/Vector">
              <FontAwesomeIcon icon={faBarsProgress} className="your-external-css-class" />
            </a>
            <p className="mb-0">Home</p>
          </li>
          <li className="button-48 d-flex align-items-center mb-2" onClick={() => navigate("/display/custom")}>
            <a>
              <FontAwesomeIcon icon={faCube} className="your-external-css-class" />
            </a>
            <p className="mb-0">Package</p>
          </li>
          <li className="py-2 button-48 d-flex align-items-center mb-2" onClick={() => navigate("/vendor/Booked-packega")}>
            <a>
              <FontAwesomeIcon icon={faMapLocationDot} className="your-external-css-class" />
            </a>
            <p className="mb-0">Booked</p>
          </li>
          <li className="button-48 d-flex align-items-center mb-2">
            <a href="/Hotal">
              <FontAwesomeIcon icon={faHotel} className="your-external-css-class" />
            </a>
            <p className="mb-0">Home</p>
          </li>
          <li className="py-2 button-48 d-flex align-items-center mb-2">
            <a href="/Vector">
              <FontAwesomeIcon icon={faVectorSquare} className="your-external-css-class" />
            </a>
            <p className="mb-0">Home</p>
          </li>
          <li className="button-48 d-flex align-items-center mb-2">
            <a href="/setting">
              <FontAwesomeIcon icon={faGear} className="your-external-css-class" />
            </a>
            <p className="mb-0">Home</p>
          </li>
          <li className="button-48 d-flex align-items-center mb-2" onClick={handleShow}>
            <a >
              <FontAwesomeIcon icon={faRightFromBracket}  className="your-external-css-class" />
            </a>
            <p className="mb-0">LogOut</p>
          </li>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered // Add the centered prop to center the modal
          >
            <Modal.Body className="p-5">
              <div>
                <h4 className="text-center">Are you Sure Want to Logout?</h4>
              </div>
              <div className="d-flex justify-content-center" style={{ gap: "10px", marginTop: "30px" }}>
                <button style={{
                  width: "80px",
                  padding: "4px 0px",
                  backgroundColor: "lightgray",
                  borderRadius: "10px",
                  boxShadow: "none",
                  border: "none",
                  color: "grey"
                }}
                  onClick={handleClose}
                >No</button>
                <button style={{
                  width: "80px",
                  padding: "4px 0px",
                  backgroundColor: "#09646d",
                  borderRadius: "10px",
                  boxShadow: "none",
                  border: "none",
                  color: "white"
                }}
                  onClick={handleYesClick}
                >Yes</button>
              </div>
            </Modal.Body>
          </Modal>
          <li className="button-48 d-flex align-items-center mb-2">
            <a href="/vendor/changepassword">
              <FontAwesomeIcon icon={faKey} className="your-external-css-class" />
            </a>
            <p className="mb-0 text-left">Change <br /> Password</p>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default My_pannel;
