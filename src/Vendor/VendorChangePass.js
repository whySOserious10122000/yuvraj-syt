import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faSearch,
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
import My_pannel from "./My_pannel";
import Header2 from "./Header2";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Project/css/index1.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../BASE_URL";

const VendorChangePass = () => {

    const [formData, setFormData] = useState({
        new_password: "",
        old_password: "",
        confirm_password: "",
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        const token = localStorage.getItem("vendorToken")
        e.preventDefault();
        if (!formData.old_password || !formData.new_password || !formData.confirm_password) {
            toast.error('Enter Old Password and New Password!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (formData.new_password !== formData.confirm_password) {
            toast.error('New Password And Confirm Password Not Match!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        // alert("api call here");

        const { new_password, old_password } = formData;

        const res = await fetch(`${BASE_URL}agency/chengepassword`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({
                new_password,
                old_password,
            })
        })
        const data = await res.json();
        console.log(data.code);
        if (data.code === 200) {
            toast.success('Password Change Successfully!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });

            // Delay the navigation by 1 second (1000 milliseconds)
            setTimeout(() => {
                navigate("/vendor/home-page"); // Specify the URL of the page you want to navigate to
            }, 1000);
        }
    }


    const [editedata, setEditedData] = useState("")

    const Call = async () => {
        const token = localStorage.getItem("vendorToken")
        console.log(token);
        const res = await fetch(`${BASE_URL}agency/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        });
        const data = await res.json();
        setEditedData(data?.data?.[0]);
        console.log(data?.data?.[0]);
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
                <div style={{ backgroundColor: "whitesmoke", height: "100vh" }}>
                    <section style={{ backgroundColor: "#fff" }}>
                        <div className="costum_container">
                            <div>
                                <div className="pt-1 align-items-center second_navbar">
                                    <div className="ps-md-4 ps-sm-2 ps-2 pe-xl-5 pe-lg-5 pe-md-3 pe-sm-2 pe-2 align-items-center d-flex justify-content-between">
                                        <div className="w-50 d-flex align-items-center">

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
                    <section className="home_page_box">
                        <div style={{
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px"
                        }}>

                            <div>
                                <p className="mb-1" style={{ fontWeight: "500", fontSize: "18px" }}>Enter Your Old Password</p>
                                <input onChange={handleChange} className="py-1 px-3" style={{ width: "380px", borderRadius: "5px", border: "1px solid #09646d" }} type="password" name="old_password" id="" />
                            </div>
                            <div>
                                <p className="mb-1" style={{ fontWeight: "500", fontSize: "18px" }}>Enter Your New Password</p>
                                <input onChange={handleChange} className="py-1 px-3" style={{ width: "380px", borderRadius: "5px", border: "1px solid #09646d" }} type="password" name="new_password" id="" />
                            </div>
                            <div>
                                <p className="mb-1" style={{ fontWeight: "500", fontSize: "18px" }}>Confirm Your Old Password</p>
                                <input onChange={handleChange} className="py-1 px-3" style={{ width: "380px", borderRadius: "5px", border: "1px solid #09646d" }} type="password" name="confirm_password" id="" />
                            </div>
                            <button className="change_pass_button" onClick={handleSubmit} style={{
                                width: "120px",
                                height: "40px",
                                borderRadius: "10px",
                                backgroundColor: "transparent",
                                fontWeight: "600",
                                color: "black",
                                border: "2px solid #09646d"

                            }}>Submit</button>
                            <ToastContainer />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default VendorChangePass;
