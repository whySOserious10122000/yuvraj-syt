import {
    faArrowRight,
    faBus,
    faCar,
    faCheck,
    faChevronLeft,
    faChevronRight,
    faIndianRupeeSign,
    faPlane,
    faTrain,
    faUser,
    faXmark,
    faBrush,
    faCalendar,
    faHandHoldingDroplet,
    faHandsHoldingCircle,
    faHandshakeAlt,
    faHotel,
    faLocationPinLock,
    faPaperclip,
    faStar,
    faUserDoctor,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
    faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faTrainSubway } from '@fortawesome/free-solid-svg-icons';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FormCheck, Modal, Row } from "react-bootstrap";
import Header from "./Header";
import "./css/index1.css";
import {
    faCircleCheck,
    faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../BASE_URL";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
import Footer from "./Footer";



function Booked_package_fulDetail() {


    const { id } = useParams();

    const [showReviewComponent, setShowReviewComponent] = useState(false);
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
        const currentDate = new Date();
        if (currentDate > new Date(booked.approx_start_date)) {
            setShowReviewComponent(true);
        }
    }, []);




    useEffect(() => {
        BookedPackage();
    }, []);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('');

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };



    const handleSubmit = async () => {

        const token = localStorage.getItem("userToken");


        if (!comment || !rating) {
            toast.error('please fill required fields!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }



        const res = await fetch(`${BASE_URL}review`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({
                book_package_id: id,
                star: rating,
                comment_box: comment,
            }),
        });
        const data = await res.json();
        handleClose();

        if (data.code == 200) {
            toast.success('please fill required fields!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
        } else {
            toast.error(data.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
        }
    };


    const overRef = useRef(null);
    const itenarary = useRef(null);
    const services = useRef(null);


    const scrollTo = (section) => {
        let targetRef;

        switch (section) {
            case 'overview':
                targetRef = overRef;
                break;
            case 'services':
                targetRef = services;
                break;
            case 'itenarary':
                targetRef = itenarary;
                break;
            case 'privacy':
                targetRef = privacy;
                break;
            default:
                targetRef = null;
        }

        if (targetRef) {
            window.scroll({
                top: targetRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };


    const [privacy, setPrivacy] = useState([]);

    const privacypolicies = async () => {
        const res = await fetch(`${BASE_URL}policy`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        setPrivacy(data.data[2]);
    };

    useEffect(() => {
        privacypolicies();
    }, []);



    return (
        <div>
            <Header />
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <div className="py-4 px-3">
                        <div>
                            <div className="d-flex" style={{ gap: "15px" }}>
                                <h5>Rattings </h5>
                                <Rating
                                    name="simple-controlled"
                                    onChange={handleRatingChange}
                                />
                            </div>
                        </div>
                        <div className="mt-3 mb-3">
                            <h5>Comment</h5>
                            <div>
                                <textarea
                                    name=""
                                    id=""
                                    cols="50"
                                    rows="5"
                                    className="ps-2 py-2"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center" style={{ gap: "10px" }}>
                            <button onClick={handleClose} className="button-251">Close</button>
                            <button onClick={handleSubmit} className="button-25">Submit</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            <section className="pt-sm-5 pt-2 pb-sm-3 pb-2">
                <div className="container-customes">
                    <div className="">
                        <Row>
                            <div className="col-xl-8 col-lg-6 col-md-6 col-sm-12 col-12 text-center m-0 posi-first ">
                                <div className="CuStom_package_image">
                                    <img src="/C-packega.png"
                                        className="w-100 rounded h-md-50 meadia-for-package-details-img"
                                    />
                                </div>
                                <div className="mt-3 hover-buttons-media">
                                    <div className="me-3" ><button class="button-47" role="button" onClick={() => scrollTo('overview')}>Overview</button></div>
                                    <div className="me-3" ><button class="button-47" role="button" onClick={() => scrollTo('services')}>Services</button></div>
                                    <div className="me-3" ><button class="button-47" role="button" onClick={() => scrollTo('itenarary')}>Itinerary</button></div>
                                    <div className="me-3" ><button class="button-47" role="button" onClick={() => scrollTo('privacy')}>Policy</button></div>
                                    <ToastContainer />
                                </div>
                                <section className="mb-3 mt-3" ref={overRef}>
                                    <div className="">
                                        <div className="overview-btn mb-4" ref={overRef}>
                                            <button className="mb-3 mt-sm-3 mt-2">Overview</button>
                                        </div>
                                    </div>
                                </section>

                                <section className="text-start">
                                    <div className="">
                                        <Row>
                                            <div className="col-lg-6">
                                                <div className="amh_to_hima">
                                                    <div>
                                                        <h6 className="pb-2 mb-0 cmntext">
                                                            {booked.departure} to statick
                                                        </h6>
                                                    </div>
                                                    <div className="">
                                                        <div className="row">
                                                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-9 px-0">
                                                                <div className="amh_to_hima_border ms-3 px-xl-3 px-lg-4 px-md-2 px-sm-2 px-2 py-2">
                                                                    <p className="cmnp py-1 media-for-booked-data-table">
                                                                        <FontAwesomeIcon
                                                                            icon={faUser}
                                                                            className="cmnclr"
                                                                        />{" "}
                                                                        Adults (12+yrs)
                                                                    </p>
                                                                    <p className="cmnp py-1 media-for-booked-data-table">
                                                                        <FontAwesomeIcon
                                                                            icon={faHandHoldingDroplet}
                                                                            className="cmnclr"
                                                                        />{" "}
                                                                        Infants(2 to 12 years)
                                                                    </p>
                                                                    <p className="cmnp py-1 media-for-booked-data-table">
                                                                        <FontAwesomeIcon
                                                                            icon={faHandHoldingDroplet}
                                                                            className="cmnclr"
                                                                        />{" "}
                                                                        Child(0 to 12 years)
                                                                    </p>
                                                                    <p className="cmnp py-1 media-for-booked-data-table">
                                                                        <FontAwesomeIcon
                                                                            icon={faUsers}
                                                                            className="cmnclr"
                                                                        />{" "}
                                                                        Total Person
                                                                    </p>
                                                                    <p className="cmnp py-1 media-for-booked-data-table">
                                                                        <FontAwesomeIcon
                                                                            icon={faHandsHoldingCircle}
                                                                            className="cmnclr"
                                                                        />{" "}
                                                                        Personal Care
                                                                    </p>
                                                                    <p className="cmnp py-1 media-for-booked-data-table">
                                                                        <FontAwesomeIcon
                                                                            icon={faCalendar}
                                                                            className="cmnclr"
                                                                        />{" "}
                                                                        Total Days
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3 px-0">
                                                                <div className="amh_to_hima_border amh_to_hima_border_2 me-sm-3 me-0 text-center px-sm-4 px-1 py-2">
                                                                    <p className="py-1 cmnp media-for-booked-data-table">{booked.total_adult}</p>
                                                                    <p className="py-1 cmnp media-for-booked-data-table">{booked.total_infant}</p>
                                                                    <p className="py-1 cmnp media-for-booked-data-table">{booked.total_child}</p>
                                                                    <p className="py-1 cmnp media-for-booked-data-table">{parseInt(booked.total_adult) + parseInt(booked.total_child) + parseInt(booked.total_infant)}</p>
                                                                    <p className="py-1 cmnp media-for-booked-data-table">Statick</p>
                                                                    <p className="py-1 cmnp media-for-booked-data-table">{booked.totaldays}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="mt-3 mb-2">
                                                            <h6 className="cmntext">
                                                                <FontAwesomeIcon
                                                                    icon={faCalendar}
                                                                    className="cmnclr"
                                                                />{" "}
                                                                Approx Departure Between{" "}
                                                            </h6>
                                                        </div>
                                                        <div className="cmn">
                                                            <p className="cmnp ms-4 py-2">
                                                                {booked?.approx_start_date?.slice(0, 10)} to {booked?.approx_end_date?.slice(0, 10)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="amh_to_hima">
                                                    <div>
                                                        <h6 className=" pb-2 mb-0 cmntext">
                                                            <FontAwesomeIcon icon={faHotel} className="cmnclr" />{" "}
                                                            Hotel & Food
                                                        </h6>
                                                    </div>
                                                    <div className="">
                                                        <div className="row">
                                                            <div className="col-6 px-0">
                                                                <div className="amh_to_hima_border ms-3 px-sm-4 px-2 py-2">
                                                                    <p className="cmnp py-1 media-for-booked-data-table">
                                                                        <FontAwesomeIcon
                                                                            icon={faHotel}
                                                                            className="cmnclr"
                                                                        />{" "}
                                                                        Hotel Type
                                                                    </p>
                                                                    <p className="cmnp py-1 media-for-booked-data-table">
                                                                        <FontAwesomeIcon
                                                                            icon={faUserDoctor}
                                                                            className="cmnclr"
                                                                        />{" "}
                                                                        Meal
                                                                    </p>
                                                                    <p className="cmnp py-1 media-for-booked-data-table">
                                                                        <FontAwesomeIcon
                                                                            icon={faUserDoctor}
                                                                            className="cmnclr"
                                                                        />{" "}
                                                                        Meal Type
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-6 px-0">
                                                                <div className="amh_to_hima_border amh_to_hima_border_2 me-3 text-center px-sm-4 px-2 py-2">
                                                                    <div className="text-start">
                                                                        <p className="cmnp py-1 media-for-booked-data-table">{booked.hoteltype}</p>
                                                                        <p className="py-1 cmnp media-for-booked-data-table">
                                                                            {booked && booked.meal && booked.meal.map((meal, index) => (index !== 0 ? `, ${meal}` : meal))}
                                                                        </p>
                                                                        <p className="py-1 cmnp media-for-booked-data-table">
                                                                        
                                                                        {booked && booked.meal_type && booked.meal_type.map((meal, index) => (index !== 0 ? `, ${meal}` : meal))}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 mb-2">
                                                        <h6 className="cmntext">
                                                            <FontAwesomeIcon
                                                                icon={faLocationPinLock}
                                                                className="cmnclr"
                                                            />{" "}
                                                            Travel By
                                                        </h6>
                                                    </div>
                                                    <div className="cmn">
                                                        <p className="cmnp ms-4 py-2">{booked.transport_mode}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>

                                        <div className="cmn  text-start mt-3">
                                            <div className="mt-3 mb-2 text-start cmnp ms-4 pb-2">
                                                <h6 className="cmntext">
                                                    <FontAwesomeIcon
                                                        icon={faPaperclip}
                                                        className="cmnclr"
                                                    />{" "}
                                                    Other Requirements
                                                </h6>
                                            </div>
                                            <p className="cmnp ms-4 py-2 mb-3">
                                                {booked.othere_requirement}
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="my-3" ref={services}>
                                    <div className="">
                                        <div className="mb-3">
                                            <button className="w-100 over-btn">
                                                <FontAwesomeIcon className="me-3" icon={faBrush} /> Services
                                            </button>
                                        </div>
                                        <div className="cmn cmn_2 row text-start">
                                            <div className="col-6">
                                                <h6 className="cmntext mb-2">
                                                    <FontAwesomeIcon icon={faCircleCheck} /> Included
                                                </h6>
                                                <div className="cmn package_service mb-3">
                                                    <p style={{ color: "#00B707" }} className="cmnp">
                                                        {booked?.booked_include &&
                                                            booked.booked_include.map((e1) => (
                                                                <div key={e1}>
                                                                    <FontAwesomeIcon icon={faCheck} className="me-2" />
                                                                    {e1}
                                                                </div>
                                                            ))}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <h6 className="cmntext">
                                                    <FontAwesomeIcon icon={faXmarkCircle} /> Excluded
                                                </h6>
                                                <div className="cmn package_service">
                                                    <p style={{ color: "red" }} className="cmnp">
                                                        {booked?.booked_exclude &&
                                                            booked.booked_exclude.map((e2) => (
                                                                <div key={e2}>
                                                                    <FontAwesomeIcon icon={faXmarkCircle} className="me-2" />
                                                                    {e2}
                                                                </div>
                                                            ))}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="text-start" ref={itenarary}>
                                    <div className="">
                                        <div className="my-3">
                                            <button className="w-100 over-btn">
                                                <FontAwesomeIcon icon={faHandshakeAlt} /> Itinerary
                                            </button>
                                        </div>
                                        {/* <div className="cmn cmn__3">
                                            {booked.itineries.map((e3, i) => {
                                                return (
                                                    <>
                                                        <div className="py-2">
                                                            <h6 className="cmntext mb-2">Day {i + 1}</h6>
                                                            <div className="cmn p-3">
                                                                <p className="cmnp">{e3.title} :</p>
                                                                <p className="cmnp"> {e3.activity}</p>
                                                            </div>
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div> */}
                                    </div>
                                </section>

                                <section>

                                </section>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 posi-second">
                                <div className="CuStom_package media-border-none d-flex justify-content-center align-items-center hyhy p-0">
                                    <div className="inner_CuStom_package">
                                        <p className="CuStom_package_header media-CuStom_package_header">
                                            {booked?.departure} To {booked?.destination}
                                        </p>
                                        <div className="CuStom_package_content">
                                            <p className="">
                                                {" "}
                                                <span>Date </span> <span className="mx-1">:</span>{" "}
                                                {booked.approx_start_date?.slice(0, 10)} to {booked.approx_end_date?.slice(0, 10)}
                                            </p>
                                            <div className="d-flex">
                                                <p className=" ms-1 ">
                                                    <span>Price</span>
                                                    <span className="ms-1 me-2">:</span>
                                                    <FontAwesomeIcon
                                                        className="me-1"
                                                        icon={faIndianRupeeSign}
                                                    />
                                                    {booked.priceperperson}
                                                </p>
                                            </div>
                                            <div className="" style={{ display: "grid", gridAutoColumns: "1fr 1fr" }} >
                                                <p className="mb-1">
                                                    {" "}
                                                    <span> Total Reviews </span>{" "}
                                                    <span className="mx-1">:</span> 11,000(statick)
                                                </p>
                                                <p className="mb-2">
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        className="CuStom_package_icon"
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        className="CuStom_package_icon "
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        className="CuStom_package_icon"
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        className="CuStom_package_icon "
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        style={{ color: "#B8B8B8" }}
                                                    />
                                                </p>
                                            </div>
                                            <div className="CuStom_package_images">
                                                <div className="text-center">
                                                    <FontAwesomeIcon icon={faHotel} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                                    <p>{booked.hoteltype}</p>
                                                </div>
                                                <div className="mx-2 text-center">
                                                    <FontAwesomeIcon icon={faUtensils} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                                    <p>Meals</p>
                                                </div>
                                                <div className="text-center">
                                                    <FontAwesomeIcon icon={faBinoculars} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                                    <p>Sightseeing</p>
                                                </div>
                                                <div className="mx-2 text-center">
                                                    <div>
                                                        {booked.transport_mode?.toLowerCase() === 'bus' && (
                                                            <>
                                                                <FontAwesomeIcon icon={faBus} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                                            </>
                                                        )}
                                                        {booked.transport_mode?.toLowerCase() === 'train' && (
                                                            <>
                                                                <FontAwesomeIcon icon={faTrainSubway} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                                            </>
                                                        )}
                                                        {booked.transport_mode?.toLowerCase() === 'flight' && (
                                                            <>
                                                                <FontAwesomeIcon icon={faPlane} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                                            </>
                                                        )}
                                                        {booked.transport_mode?.toLowerCase() === 'car' && (
                                                            <>
                                                                <FontAwesomeIcon icon={faTaxi} style={{ color: "#868383", fontSize: "30px" }} className="" />
                                                            </>
                                                        )}
                                                    </div>
                                                    <p>By {booked.transport_mode}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <p className="mb-0 mt-2" style={{ fontSize: "14px" }}>please give your <a style={{ cursor: "pointer", }} onClick={handleShow}>Review</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 posi-third" ref={privacy}>
                                <div className="mt-5">
                                    <div dangerouslySetInnerHTML={{ __html: privacy.term_and_condition_content }} />
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
            </section>

            <hr />
            <Footer />


        </div>
    );
}

export default Booked_package_fulDetail;
