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
import Countries from "../CountryStateCity.json"

const GstEditForm = () => {

    const [selectedStates, setSelectedStates] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedCountryObject, setSelectedCountryObject] = useState(null);

    const selectedCountryObject1 = Countries.find((country) => country.name === "India");


    const [editedData, setEditedData] = useState({
        gst_agency_name: '',
        gst_agency_name: '',
        gst_agency_classification: '',
        gst_agency_GST: '',
        gst_agency_state: '',
        gst_agency_city: '',
        gst_provisional_GST: '',
        gst_contact_person: '',
        gst_phone: '',
        gst_alternate_phone: '',
        gst_email: '',
        gst_alternate_email: '',
        gst_registration_status: '',
        gst_address_line_1: '',
        gst_hsn_sac_code: '',
        gst_address_line_2: '',
        gst_pincode: '',
        gst_supply_type: '',
        gst_comp_levy_sec10_GST: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'gst_agency_state') {
            // Update the state normally
            setEditedData((prevData) => ({
                ...prevData,
                [name]: value,
                // Clear the city when a new state is selected
                city: '',
            }));


            const selectedStateObject = selectedCountryObject1?.states.find((state) => state.name === value);


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


    const handleSaveChanges = async () => {
        try {
            const token = localStorage.getItem("vendorToken")
            const formData = new FormData();

            formData.append('gst_agency_name', editedData.gst_agency_name);
            formData.append('gst_agency_city', editedData.gst_agency_city);
            formData.append('gst_agency_state', editedData.gst_agency_state);
            formData.append('gst_alternate_phone', editedData.gst_alternate_phone);
            formData.append('gst_email', editedData.gst_email);
            formData.append('gst_address_line_1', editedData.gst_address_line_1);
            formData.append('gst_address_line_2', editedData.gst_address_line_2);
            formData.append('gst_alternate_email', editedData.gst_alternate_email);
            formData.append('gst_hsn_sac_code', editedData.gst_hsn_sac_code);
            formData.append('gst_pincode', editedData.gst_pincode);
            formData.append('gst_comp_levy_sec10_GST', editedData.gst_comp_levy_sec10_GST);


            const response = await fetch(`${BASE_URL}agency`, {
                method: 'PUT',
                body: formData,
                headers: {
                    Authorization: token,
                },
            });

            if (response.ok) {
                // Handle success
                navigate("/vendor/myprofile")
            } else {
                // Handle errors
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

        if (selectedCountryObject1) {
            setSelectedStates(selectedCountryObject1.states);

            const selectedStateArray = selectedCountryObject1.states.find(
                (state) => state.name === data?.data?.[0]?.gst_agency_state
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
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency Name</p>
                                        <input type="text" name='gst_agency_name' value={editedData.gst_agency_name} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your City</p>
                                        {/* <input type="text" name='gst_contact_person' value={editedData.gst_contact_person} onChange={handleChange} className='w-100' />  */}
                                        <select className="w-100" name='gst_agency_city' value={editedData.gst_agency_city} onChange={handleChange}>
                                            <option value=''>All</option>
                                            {selectedCities.map((city) => (
                                                <option key={city.name} value={city.name}>
                                                    {city.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your State</p>
                                        {/* <input type="tel" name='gst_phone' value={editedData.gst_phone} onChange={handleChange} className='w-100' /> */}
                                        <select className="w-100" name='gst_agency_state' value={editedData.gst_agency_state} onChange={handleChange}>
                                            <option value=''>All</option>
                                            {selectedStates.map((state) => (
                                                <option key={state.name} value={state.name}>
                                                    {state.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Alternate Phone Number</p>
                                        <input type="tel" maxLength={10} onKeyDown={handleKeyDown} name='gst_alternate_phone' value={editedData.gst_alternate_phone} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit GST Email</p>
                                        <input type="email" name='gst_email' value={editedData.gst_email} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Alternate Email</p>
                                        <input type="email" name='gst_alternate_email' value={editedData.gst_alternate_email} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit GST Address Line</p>
                                        <input type="text" name='gst_address_line_1' value={editedData.gst_address_line_1} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit HSN SAC Code</p>
                                        <input type="text" name='gst_hsn_sac_code' value={editedData.gst_hsn_sac_code} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit GST Address Line 2</p>
                                        <input type="text" name='gst_address_line_2' value={editedData.gst_address_line_2} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit GST Pincode</p>
                                        <input type="tel" maxLength={10} onKeyDown={handleKeyDown} name='gst_pincode' value={editedData.gst_pincode} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Comp Levy Sec GST</p>
                                        <input type="text" name='gst_comp_levy_sec10_GST' value={editedData.gst_comp_levy_sec10_GST} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className="d-flex justify-content-end me-5 mt-2 mb-3">
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

export default GstEditForm;
