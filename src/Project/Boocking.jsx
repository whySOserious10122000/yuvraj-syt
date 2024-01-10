import React, { useEffect, useState } from "react";
import './css/index1.css';
import Header from "./Header";
import { BASE_URL } from "../BASE_URL";
import { useParams } from "react-router-dom";

function Boocking(props) {


    const { id } = useParams();


    const [bookedData, setBookedData] = useState([])

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



    const [booked, setBooked] = useState("")


    useEffect(() => {
        // Move this state update inside a useEffect
        const matchingPackage = bookedData.find(item => item._id === id);
        if (matchingPackage) {
            
            setBooked(matchingPackage);
        } else {
            
        }
    }, [bookedData, id]);




    useEffect(() => {
        BookedPackage();
    }, []);


    return (
        <>
            <Header />
            <section className="my-3 mt-5">
                <div className="container">
                    <div className="row gy-4 border_booking p-3">
                        <div className="border_booking col-12" style={{ overflow: "hidden" }}>
                            <div className="d-flex booking_footer">
                                <div className="">
                                    <div>
                                        <img src="/booking.png" alt="" style={{ height: "240px" }} />
                                    </div>
                                </div>
                                <div className=" ps-3">
                                    <div className="booking_content">
                                        <div className="booking_content_header">
                                            <h3 className="">{booked.destination}</h3>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <div className="booking_content_header mb-2">
                                                <h6>6 days & 5 Nights | <span>Customizable</span></h6>
                                            </div>
                                            <div className="booking_price mb-3 mt-3">
                                                <p className="mb-0">Starting from</p>
                                                <h4 className="mb-2">₹ 25,000 /-</h4>
                                            </div>
                                            <div className="booking_hotel">
                                                <h5 className="mb-1">Hotel included in package</h5>
                                                <div className="d-flex mb-3">
                                                    <div className=" input_radio d-flex align-items-center">
                                                        <input type="radio" name="hotel" id="" />
                                                        <label htmlFor="">3 Star</label>
                                                    </div>
                                                    <div className="ms-2 input_radio  d-flex align-items-center">
                                                        <input type="radio" name="hotel" id="" />
                                                        <label htmlFor="">4 Star</label>
                                                    </div>
                                                    <div className="ms-2 input_radio d-flex align-items-center">
                                                        <input type="radio" name="hotel" id="" />
                                                        <label htmlFor="">5 Star</label>
                                                    </div>
                                                </div>
                                                <h6>Cities: Phuket(3D) - Bangkok(3D)</h6>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-end mb-1">
                                                <div className="booking_aside">
                                                    <p className="mb-0 py-1 px-2">Nature</p>
                                                </div>
                                                <div className="booking_aside ms-1">
                                                    <p className="mb-0 py-1 px-2">Water Activities</p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="booking_aside">
                                                    <p className="mb-0 py-1 px-2">Beach Holiday</p>
                                                </div>
                                                <div className="booking_aside ms-1">
                                                    <p className="mb-0 py-1 px-2">Phi Phi island tour</p>
                                                </div>
                                                <div className="booking_aside ms-1">
                                                    <p className="mb-0 py-1 px-2">Nature</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="">

                                </div>
                            </div>
                            {/* <div className="row booking_top_border">
                                <div className="col-12">
                                    <div className="d-flex justify-content-between booking_footer">
                                        <div className="d-flex hotel_facilities">
                                            <div className="d-flex align-items-center flex-column">
                                                <img src="/Vector.png" alt="" style={{ height: "30px", width: "30px" }} />
                                                <p className="mb-0">Upto 3 Stars</p>
                                            </div>
                                            <div className="d-flex align-items-center flex-column ms-2">
                                                <img src="/Vector1.2.png" alt="" style={{ height: "30px", width: "30px" }} />
                                                <p className="mb-0">Upto 3 Stars</p>
                                            </div>
                                            <div className="d-flex align-items-center flex-column ms-2">
                                                <img src="/Vector1.3.3.png" alt="" style={{ height: "30px", width: "30px" }} />
                                                <p className="mb-0">Upto 3 Stars</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-0 flex-column ms-3 plus_two_more">
                                                <p className="mb-0">+2 more</p>
                                            </div>
                                        </div>
                                        <div className="d-flex ms-3 align-items-center">
                                            <div className="view_detail_booking">
                                                <p className="mb-0">View Details</p>
                                            </div>
                                            <div className="booking_customise ms-3">
                                                <button>Customize & Get Quotes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Boocking;