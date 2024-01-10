import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Header from "../Project/Header";
import My_pannel from "./My_pannel";
import Header2 from "./Header2";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../BASE_URL";

function Booked_packega(props) {
  const [bookData, setBookData] = useState([]);

  const navigate = useNavigate();

  const displayBookPackage = async () => {
    const token = localStorage.getItem("vendorToken");
    const res = await fetch(`${BASE_URL}bookpackage/bookpackageforagency`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setBookData(data.data);
  };

  useEffect(() => {
    displayBookPackage();
  }, []);


  const [editedata, setEditedData] = useState("")

  const Call = async () => {
    const token = localStorage.getItem("vendorToken")
    const res = await fetch(`${BASE_URL}agency/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    setEditedData(data?.data?.[0]);
  };

  useEffect(() => {
    Call();
  }, []);

  const handleNav = () => {
    navigate("/vendor/myprofile")
  }




  return (
    <>
      <Header2 />
      <div className="costum_container">
        <My_pannel />
        <div style={{ backgroundColor: "whitesmoke" }}>
          <section style={{ backgroundColor: "#fff" }}>
            <div className="costum_container">
              <div>
                <div className="pt-1 align-items-center second_navbar">
                  <div className="px-lg-3 px-md-4 px-sm-2 pe-2 align-items-center d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      {/* <a href="">
                        <FontAwesomeIcon
                          icon={faArrowLeft}
                          className="p-2 cmnbkg"
                        />
                      </a> */}
                      <span className=" ps-2">Booked Package List</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <a href="">
                        <FontAwesomeIcon
                          icon={faBell}
                          className="p-2 cmnclr cmnicon"
                        />
                      </a>
                      <a href="">
                        <FontAwesomeIcon
                          icon={faEnvelopeOpen}
                          className="p-2 cmnclr cmnicon ms-2"
                        />
                      </a>
                      <div
                        className="d-flex  align-items-center cmn py-1 px-2 ms-2"
                        style={{ cursor: "pointer" }}
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className="cmnclr cmnicon p-2"
                        />
                        <p className="cmnp ps-1" onClick={handleNav}>{editedata.full_name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="booked_packega_margin">
            {bookData.map((ele) => {
              return (
                <>
                  <div className="mb-3" style={{ backgroundColor: "#fff" }}>
                    <Row>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center m-0 p-0 CuStom_package_image">
                        <img src="/C-packega.png" className="img-fluid w-100" />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-0 ">
                        <div
                          className="CuStom_package"
                          style={{ backgroundColor: "#fff" }}
                        >
                          <div className="inner_CuStom_package">
                            <p className="CuStom_package_header">
                              {ele.departure} to {ele.destination}{" "}
                              <span className="ms-3">
                                {ele.total_days}D/{ele.total_nights}N
                              </span>
                            </p>
                            <div className="CuStom_package_content my_package_content">
                              <p className="mb-xl-2 mb-lg-0">
                                <span>Package ID </span>: {ele._id}
                              </p>
                              <p className="mb-xl-2 mb-lg-0">
                                <span>Package Type </span>:{" "}
                                {ele.book_package.map((e) => {
                                  return <>{e.category}</>;
                                })}
                              </p>
                              <p className="mb-xl-2 mb-lg-0">
                                <span>Contact Person </span>:{" "}
                                {ele.book_package.map((e) => {
                                  return <>{e.user_name}</>;
                                })}
                              </p>
                              <p className="mb-xl-2 mb-lg-0">
                                <span>Contact No </span>:{" "}
                                {ele.book_package.map((e) => {
                                  return (
                                    <>
                                      {e.users_details.map((e1) => {
                                        return <>{e1.phone}</>;
                                      })}
                                    </>
                                  );
                                })}
                              </p>
                              <p className="mb-xl-2 mb-lg-0">
                                <span>Booking Date </span>:{" "}
                                {ele.book_package.map((e) => {
                                  return <>{e.bookdate}</>;
                                })}
                              </p>
                              <p className="mb-xl-2 mb-lg-0">
                                <span>Total Person </span>:{" "}
                                {ele.total_child + ele.total_adult + ele.Infant}
                              </p>
                              <div className="batanv2 d-flex c-top-p my-1">
                                <Link
                                  to={`/vendor/Book-packega/details/${ele.book_package[0]._id}`}
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </div>
                </>
              );
            })}

            {/* <div className="" style={{ backgroundColor: "#fff" }}>
              <Row>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center m-0 p-0 CuStom_package_image">
                  <img src="/C-packega.png" className="img-fluid w-100" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-0 ">
                  <div
                    className="CuStom_package"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <div className="inner_CuStom_package">
                      <p className="CuStom_package_header">
                        Ahmedabad to Goa <span className="ms-3">3D/2N</span>
                      </p>
                      <div className="CuStom_package_content my_package_content">
                        <p className="mb-xl-2 mb-lg-0">
                          <span>Package ID </span>: 123456
                        </p>
                        <p className="mb-xl-2 mb-lg-0">
                          <span>Package Type </span>: Honeymoon
                        </p>
                        <p className="mb-xl-2 mb-lg-0">
                          <span>Contact Person </span>: Gautam Shah
                        </p>
                        <p className="mb-xl-2 mb-lg-0">
                          <span>Contact No </span>: 99999 99999
                        </p>
                        <p className="mb-xl-2 mb-lg-0">
                          <span>Booking Date </span>: 28/04/2023 to 01/05/2023
                        </p>
                        <p className="mb-xl-2 mb-lg-0">
                          <span>Total Person </span>: 2
                        </p>
                        <div className="batanv2 d-flex c-top-p my-1">
                          <Link to="/vendor/Book-packega/details">View</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </div> */}
          </section>
        </div>
      </div>

      {/* <section>
            <div className='py-4'>
                <Row>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center m-0 p-0 CuStom_package_image'>
                        <img src='/C-packega.png' className='img-fluid w-100'/>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-0 '>
                        <div className='CuStom_package'>
                            <div className='inner_CuStom_package'>
                                <p className='CuStom_package_header'>Ahmedabad to Goa <span className='ms-3'>3D/2N</span></p>
                                <div className='CuStom_package_content my_package_content'>
                                    <p className='mb-xl-2 mb-lg-0'><span>Package ID </span>: 123456</p>
                                    <p className='mb-xl-2 mb-lg-0'><span>Package Type </span>: Honeymoon</p>
                                    <p className='mb-xl-2 mb-lg-0'><span>Contact Person </span>: Gautam Shah</p>
                                    <p className='mb-xl-2 mb-lg-0'><span>Contact No </span>: 99999 99999</p>
                                    <p className='mb-xl-2 mb-lg-0'><span>Booking Date </span>: 28/04/2023 to 01/05/2023</p>
                                    <p className='mb-xl-2 mb-lg-0'><span>Total Person </span>: 2</p>
                                <div className='batanv2 d-flex c-top-p my-1'>
                                    <Link>View</Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>

            <div className=''>
                <Row>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center m-0 p-0 CuStom_package_image'>
                        <img src='/C-packega.png' className='img-fluid w-100'/>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-0 '>
                        <div className='CuStom_package'>
                            <div className='inner_CuStom_package'>
                                <p className='CuStom_package_header'>Ahmedabad to Goa <span className='ms-3'>3D/2N</span></p>
                                <div className='CuStom_package_content my_package_content'>
                                    <p className='mb-xl-2 mb-lg-0'><span>Package ID </span>: 123456</p>
                                    <p className='mb-xl-2 mb-lg-0'><span>Package Type </span>: Honeymoon</p>
                                    <p className='mb-xl-2 mb-lg-0'><span>Contact Person </span>: Gautam Shah</p>
                                    <p className='mb-xl-2 mb-lg-0'><span>Contact No </span>: 99999 99999</p>
                                    <p className='mb-xl-2 mb-lg-0'><span>Booking Date </span>: 28/04/2023 to 01/05/2023</p>
                                    <p className='mb-xl-2 mb-lg-0'><span>Total Person </span>: 2</p>
                                <div className='batanv2 d-flex c-top-p my-1'>
                                    <Link>View</Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </section>    */}
    </>
  );
}

export default Booked_packega;
