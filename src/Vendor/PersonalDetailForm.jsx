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
import { BASE_URL } from "../BASE_URL";
import { useNavigate } from "react-router-dom";
import Countries from "../CountryStateCity.json";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonalDetailForm = () => {

    const [selectedStates, setSelectedStates] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedCountryObject, setSelectedCountryObject] = useState(null);



    const [editedData, setEditedData] = useState({
        full_name: '',
        resident_address: '',
        email_address: '',
        skypeid: '',
        pancard_no: '',
        pincode: '',
        city: '',
        state: '',
        country: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'country') {
            const selectedCountryObject = Countries.find((country) => country.name === value);

            setSelectedCountryObject(selectedCountryObject)

            setEditedData((prevData) => ({
                ...prevData,
                [name]: value,
                state: '',
                city: '',
            }));

            // Update the states based on the selected country
            if (selectedCountryObject) {
                setSelectedStates(selectedCountryObject.states);
                setSelectedCities([]);
            } else {
                setSelectedStates([]);
            }
        } else if (name === 'state') {
            // Update the state normally
            setEditedData((prevData) => ({
                ...prevData,
                [name]: value,
                // Clear the city when a new state is selected
                city: '',
            }));


            const selectedStateObject = selectedCountryObject?.states.find((state) => state.name === value);


            // Update the cities based on the selected state
            if (selectedStateObject) {
                setSelectedCities(selectedStateObject.cities);
            } else {
                setSelectedCities([]);
            }
        } else {
            // For other fields, update normally
            setEditedData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };



    const handleSaveChanges = async () => {
        try {

            if (!editedData.full_name || !editedData.email_address || !editedData.resident_address || !editedData.skypeid || !editedData.pancard_no || !editedData.pincode || !editedData.city || !editedData.state || !editedData.country) {
                toast.error('Please Fill All Field!', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 1000,
                });
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(editedData.email_address)) {
                toast.error("Enter a Valid Email Address!", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 1000,
                });
                return;
            }

            if (editedData.pincode.length < 6) {
                toast.error('Enter Valid Pincode!', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 1000,
                });
                return;
            }

            const token = localStorage.getItem("vendorToken")
            const formData = new FormData();

            formData.append('full_name', editedData.full_name);
            formData.append('resident_address', editedData.resident_address);
            formData.append('email_address', editedData.email_address);
            formData.append('skypeid', editedData.skypeid);
            formData.append('pancard_no', editedData.pancard_no);
            formData.append('pincode', editedData.pincode);
            formData.append('city', editedData.city);
            formData.append('state', editedData.state);
            formData.append('country', editedData.country);


            const response = await fetch(`${BASE_URL}agency`, {
                method: 'PUT',
                body: formData,
                headers: {
                    Authorization: token,
                },
            });

            if (response.ok) {
                toast.success('Profile Update Successfully!', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 1000,
                });
                setTimeout(() => {
                    navigate("/vendor/myprofile")
                }, 2000);
            } else {
            }
        } catch (error) {

        }

    };




    const navigate = useNavigate();

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

        const selectedCountryObject = Countries.find(
            (country) => country.name === data?.data?.[0]?.country
        );

        if (selectedCountryObject) {
            setSelectedStates(selectedCountryObject.states);

            const selectedStateArray = selectedCountryObject.states.find(
                (state) => state.name === data?.data?.[0]?.state
            );

            setSelectedCities(selectedStateArray?.cities);
        } else {
            setSelectedStates([]);
            setSelectedCities([]);
        }

    };

    useEffect(() => {
        Call();
    }, []);

    const handleNav = () => {
        navigate("/vendor/myprofile")
    }


    const handleBack = () => {
        navigate("/vendor/myprofile")
    }


    const handleKeyDown = (e) => {
        // Allow: backspace, delete, tab, escape, enter
        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A/Ctrl+C/Ctrl+V
            (e.keyCode === 65 && e.ctrlKey === true) ||
            (e.keyCode === 67 && e.ctrlKey === true) ||
            (e.keyCode === 86 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // Let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    };



    return (
        <>
            <Header2 />
            <div className="costum_container">
                <My_pannel />
                <ToastContainer />
                <div style={{ backgroundColor: "whitesmoke" }}>
                    <section style={{ backgroundColor: "#fff" }}>
                        <div className="costum_container">
                            <div>
                                <div className="pt-1 align-items-center second_navbar">
                                    <div className="ps-md-4 ps-sm-2 ps-2 pe-xl-5 pe-lg-5 pe-md-3 pe-sm-2 pe-2 align-items-center d-flex justify-content-between">
                                        <div className="w-50 d-flex align-items-center">
                                            <p className="mb-0" style={{ fontSize: "24px", fontWeight: "600" }}>My Profile</p>
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
                                                <p className="cmnp ps-1" onClick={handleNav}>{editedData.full_name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="my_profile d-flex justify-content-center">
                        <div className="my_detail_edit">
                            <div className='edit_form_input'>
                                <div className="row justify-content-center" style={{ paddingBottom: "20px" }}>
                                    <div className="col-12 text-center mb-5">
                                        <h1 className="mt-5" style={{ color: "#09646d" }}>Edit Your Personal Detail</h1>
                                    </div>
                                    <div className='mb-3 col-5'>
                                        <p className='mb-1'>Edit Your Name</p>
                                        <input type="text" name='full_name' value={editedData.full_name} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-3 col-5'>
                                        <p className='mb-1'>Edit Your Address</p>
                                        <input type="text" name='resident_address' value={editedData.resident_address} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-3 col-5'>
                                        <p className='mb-1'>Edit Your Email</p>
                                        <input type="email" name='email_address' value={editedData.email_address} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-3 col-5'>
                                        <p className='mb-1'>Edit Your SkypeId</p>
                                        <input type="email" name='skypeid' value={editedData.skypeid} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-3 col-5'>
                                        <p className='mb-1'>Edit Your Pancard</p>
                                        <input type="text" name='pancard_no' value={editedData.pancard_no} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-3 col-5'>
                                        <p className='mb-1'>Edit Your Pincode</p>
                                        <input type="tel" maxLength={6} name='pincode' value={editedData.pincode} onChange={handleChange} onKeyDown={handleKeyDown} className='w-100' />
                                    </div>
                                    <div className='mb-3 col-5'>
                                        <p className='mb-1'>Edit Your City</p>
                                        {/* <input type="text" name='city' value={editedData.city} onChange={handleChange} className='w-100' /> */}

                                        <select className="w-100" name='city' value={editedData.city} onChange={handleChange}>
                                            <option value=''>All</option>
                                            {selectedCities.map((city) => (
                                                <option key={city.name} value={city.name}>
                                                    {city.name}
                                                </option>
                                            ))}
                                        </select>

                                    </div>
                                    <div className='mb-3 col-5'>
                                        <p className='mb-1'>Edit Your State</p>
                                        {/* <input type="text" name='state' value={editedData.state} onChange={handleChange} className='w-100' /> */}

                                        <select className="w-100" name='state' value={editedData.state} onChange={handleChange}>
                                            <option value=''>All</option>
                                            {selectedStates.map((state) => (
                                                <option key={state.name} value={state.name}>
                                                    {state.name}
                                                </option>
                                            ))}
                                        </select>

                                    </div>
                                    <div className='mb-3 col-5'>
                                        <p className='mb-1'>Edit Your Country</p>
                                        <select className="w-100" name="country" id="" value={editedData.country} onChange={handleChange}>
                                            <option value="">All</option>
                                            {Countries && Countries.map((country) => {
                                                return (
                                                    <option value={country.name}>{country.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className='mb-3 col-5 ' style={{ visibility: "hidden" }}>
                                        <p className='mb-1'>Edit Your Country</p>
                                        <input type="text" name='country' value={editedData.country} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className="d-flex justify-content-end me-5">
                                        <div className="me-5">
                                            <button className="me-2 submit_form_btn back_btn_color" onClick={handleBack}>Back</button>
                                            <button className="me-2 submit_form_btn" onClick={handleSaveChanges}>submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default PersonalDetailForm;
