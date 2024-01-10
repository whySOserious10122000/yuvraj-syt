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
import PersonalDetail from "./PersonalDetail";
import Editagencydetail from "./Editagencydetail";
import EditagencyGst from "./EditagencyGst";
import { useState, useEffect } from "react";
import { BASE_URL } from "../BASE_URL";
import { useNavigate } from "react-router-dom";

const EditMyProfile = () => {


    const navigate = useNavigate();

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
                                    <div className="ps-md-4 ps-sm-2 ps-2 pe-xl-5 pe-lg-5 pe-md-3 pe-sm-2 pe-2 align-items-center d-flex justify-content-between">
                                        <div className="w-50 d-flex align-items-center">
                                            <p className="mb-0" style={{fontSize: "24px" , fontWeight: "600"}}>My Profile</p>
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
                    <section className="my_profile">
                        <div className="mb-4 mt-3">
                            <h2>{editedata.full_name}</h2>
                        </div>
                        <div className="edit_my_profile mb-5">
                            <PersonalDetail />
                        </div>
                        <div className="edit_my_profile mb-5">
                            <Editagencydetail />
                        </div>
                        <div className="pb-3">
                            <div className="edit_my_profile">
                                <EditagencyGst />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default EditMyProfile;