/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./Header";
import { Row, Container } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../BASE_URL";
import { useNavigate } from "react-router-dom";

function My_packega(props) {

  const navigate = useNavigate();

  const [bookedData, setBookedData] = useState("")
  console.log(bookedData);

  const BookedPackage = async () => {
    const token = localStorage.getItem("userToken");
    const res = await fetch(`${BASE_URL}bookpackage`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setBookedData(data.data);
  };


  useEffect(() => {
    BookedPackage();
  }, []);


  const handleNavigate = (packageId) => {
    navigate(`/booking-full-detail/${packageId}`);
  }


  return (
    <>
      <div>
        <Header />
        <section>
          <div className="container-customes px-sm-5 px-2">
            <div className="pt-3">
              <h1
                className="text-center booked-package-list-media"
              >
                My Bookings
              </h1>
            </div>

            {bookedData && bookedData.map((e) => {
              return (
                <>
                  <section className=" pt-2 pb-3">
                    <div>
                      <div className="">
                        <Row>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center m-0 p-0 CuStom_package_image"
                            style={{
                              borderRadius: "10px"
                            }}
                          >
                            <img
                              src="/C-packega.png"
                              alt="img"
                              className="w-100 booked-package-list-image"
                            />
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-0 ">
                            <div className="d-flex justify-content-center align-items-center h-100">
                              <div className="inner_CuStom_package h-100">
                                <p className="CuStom_package_header">
                                  {e.departure} to {e.destination}
                                </p>
                                <div className="CuStom_package_content my_package_content">
                                  <p className="mb-xl-2 mb-lg-0">
                                    <span>Trip/Package ID</span>: {e._id}
                                  </p>
                                  <p className="mb-xl-2 mb-lg-0">
                                    <span>Category</span> : {e.category}
                                  </p>
                                  <p className="mb-xl-2 mb-lg-0">
                                    <span>Booking Date</span> : {e.bookdate.slice(0, 10)}
                                  </p>
                                  <p className="mb-xl-2 mb-lg-0">
                                    <span>Agency Contact No</span> : {e.agency_contect_no}{" "}
                                  </p>
                                  <p className="mb-xl-2 mb-lg-0">
                                    <span>Total Person</span> : {e.total_person}
                                  </p>
                                  <p className="mb-xl-2 mb-lg-0">
                                    <span>Package Price</span> : {e.agencyprice}
                                  </p>
                                  <p className="mb-xl-2 mb-lg-0">
                                    <span>Trip Duration</span> : {e.approx_start_date.slice(0, 10)} to {e.approx_end_date.slice(0, 10)}
                                  </p>
                                  <div className="d-flex justify-content-center mb-2 mt-2">
                                    <button className="button-9090" onClick={() => handleNavigate(e._id)}>
                                      View more Details
                                    </button>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </Row>
                      </div>
                    </div>
                  </section>
                </>
              )
            })}


          </div>
        </section>
      </div>
    </>
  );
}

export default My_packega;

