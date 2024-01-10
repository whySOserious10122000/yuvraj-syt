import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
  faXmark,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faCube,
  faGear,
  faHome,
  faHotel,
  faMapLocationDot,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGift,
  faMobileScreenButton,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "../Project/css/index1.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FormCheck, FormControl, Row } from "react-bootstrap";
import { Female, Male } from "@mui/icons-material";
import Form from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const vendtoken = localStorage.getItem("vendorToken");

  return (
    <>
      <div className="" style={{ borderBottom: "1px solid #000" }} bg="light">
        <Navbar expand="lg" className="px-lg-0 px-md-4 px-sm-2 px-2 nav_width">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand className="logo">START YOUR TOUR</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-right my-2 my-lg-0"
              style={{ maxHeight: "200px", marginLeft: "auto" }}
              navbarScroll
            >
              <Nav.Link href="" className="text-dark">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="me-1 d-xl-inline-block d-lg-inline-block d-md-none d-sm-none d-none"
                />
                <span className="d-xl-inline-block d-lg-inline-block d-md-none d-sm-none d-none">
                +91 96623 99609
                </span>
                <a
                  href="/Home"
                  className="p-2 d-xl-none d-lg-none d-md-block d-sm-block d-block header_2_anchor"
                >
                  HOME
                </a>
              </Nav.Link>
              {vendtoken ? null : (
                <Nav.Link href="" className="text-dark">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="me-1 d-xl-inline-block d-lg-inline-block d-md-none d-sm-none d-none"
                  />
                  <span className="d-xl-inline-block d-lg-inline-block d-md-none d-sm-none d-none">
                    Travel Agent? Join Us
                  </span>
                </Nav.Link>
              )}
              <Nav.Link href="" className="text-dark">
                <FontAwesomeIcon
                  icon={faGift}
                  className="me-1 d-xl-inline-block d-lg-inline-block d-md-none d-sm-none d-none"
                />
                <span className="d-xl-inline-block d-lg-inline-block d-md-none d-sm-none d-none">
                  Offers
                </span>
                <a
                  href="/Location"
                  className=" p-2 d-xl-none d-lg-none d-md-block d-sm-block d-block header_2_anchor"
                >
                  HOME
                </a>
              </Nav.Link>
              <Nav.Link href="" className="text-dark">
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  className="me-1 d-xl-inline-block d-lg-inline-block d-md-none d-sm-none d-none"
                />
                <span className="d-xl-inline-block d-lg-inline-block d-md-none d-sm-none d-none">
                  Download App
                </span>
                <a
                  href="/Hotal"
                  className="p-2 d-xl-none d-lg-none d-md-block d-sm-block d-block header_2_anchor"
                >
                  HOME
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header2;
