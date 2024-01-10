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
import { useNavigate, useNavigation } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Countries from "../CountryStateCity.json"

const AgencyDetailForm = () => {

    const [selectedStates, setSelectedStates] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedCountryObject, setSelectedCountryObject] = useState(null);

    const [editedData, setEditedData] = useState({
        agency_name: '',
        agency_fax: '',
        agency_state: '',
        agency_city: '',
        pancard_image: '',
        agency_logo: '',
        agency_country: '',
        agency_state: '',
        business_type: '',
        agency_securitization_mode: '',
        year_in_business: '',
        agency_monthlybookingvolume: '',
        TDS_exemption: '',
        agency_tdsexemption_percent: '',
        website: '',
        agency_consolidators: '',
        reference: '',
        agency_remarks: '',
        agency_officespace: '',
        IATA: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'agency_country') {
            const selectedCountryObject = Countries.find((country) => country.name === value);

            setSelectedCountryObject(selectedCountryObject)

            setEditedData((prevData) => ({
                ...prevData,
                [name]: value,
                agency_state: '',
                agency_city: '',
            }));

            // Update the states based on the selected country
            if (selectedCountryObject) {
                setSelectedStates(selectedCountryObject.states);
                setSelectedCities([]);
            } else {
                setSelectedStates([]);
            }
        } else if (name === 'agency_state') {
            // Update the state normally
            setEditedData((prevData) => ({
                ...prevData,
                [name]: value,
                // Clear the city when a new state is selected
                agency_city: '',
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

            if (
                !editedData.agency_name ||
                !editedData.agency_state ||
                !editedData.agency_city ||
                !editedData.agency_country ||
                !editedData.business_type ||
                !editedData.agency_securitization_mode ||
                !editedData.year_in_business ||
                !editedData.TDS_exemption ||
                !editedData.agency_tdsexemption_percent ||
                !editedData.agency_consolidators ||
                !editedData.agency_monthlybookingvolume
            ) {
                toast.error("Please Fill All Fields!", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 1000,
                });
                return;
            }

            const token = localStorage.getItem("vendorToken")
            const formData = new FormData();

            formData.append('agency_name', editedData.agency_name);
            formData.append('agency_fax', editedData.agency_fax);
            formData.append('agency_state', editedData.agency_state);
            formData.append('agency_city', editedData.agency_city);
            formData.append('agency_logo', editedData.agency_logo);
            formData.append('agency_country', editedData.agency_country);
            formData.append('business_type', editedData.business_type);
            formData.append('agency_securitization_mode', editedData.agency_securitization_mode);
            formData.append('year_in_business', editedData.year_in_business);
            formData.append('agency_monthlybookingvolume', editedData.agency_monthlybookingvolume);
            formData.append('TDS_exemption', editedData.TDS_exemption);
            formData.append('agency_tdsexemption_percent', editedData.agency_tdsexemption_percent);
            formData.append('website', editedData.website);
            formData.append('agency_consolidators', editedData.agency_consolidators);
            formData.append('reference', editedData.reference);
            formData.append('agency_remarks', editedData.agency_remarks);
            formData.append('agency_officespace', editedData.agency_officespace);
            formData.append('IATA', editedData.IATA);


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
                // Handle errors
                console.error('Failed to update data');
            }
        } catch (error) {
            console.error('Error:', error);
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
            (country) => country.name === data?.data?.[0]?.agency_country
        );

        if (selectedCountryObject) {
            setSelectedStates(selectedCountryObject.states);

            const selectedStateArray = selectedCountryObject.states.find(
                (state) => state.name === data?.data?.[0]?.agency_state
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
                        <div className="agency_detail_edit">
                            <div className='edit_form_input'>
                                <div className="row justify-content-center" style={{ paddingBottom: "20px" }}>
                                    <div className="col-12 text-center mb-5">
                                        <h1 className="mt-5" style={{ color: "#09646d" }}>Edit Your Agency Detail</h1>
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency Name</p>
                                        <input type="text" name='agency_name' value={editedData.agency_name} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency Fax</p>
                                        <input type="text" name='agency_fax' value={editedData.agency_fax} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency City</p>
                                        {/* <input type="text" name='agency_city' value={editedData.agency_city} onChange={handleChange} className='w-100' /> */}
                                        <select className="w-100" name='agency_city' value={editedData.agency_city} onChange={handleChange}>
                                            <option value=''>All</option>
                                            {selectedCities.map((city) => (
                                                <option key={city.name} value={city.name}>
                                                    {city.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency State</p>
                                        {/* <input type="text" name='agency_state' value={editedData.agency_state} onChange={handleChange} className='w-100' /> */}
                                        <select className="w-100" name='agency_state' value={editedData.agency_state} onChange={handleChange}>
                                            <option value=''>All</option>
                                            {selectedStates.map((state) => (
                                                <option key={state.name} value={state.name}>
                                                    {state.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency Country</p>
                                        {/* <input type="text" name='agency_country' value={editedData.agency_country} onChange={handleChange} className='w-100' /> */}
                                        <select className="w-100" name="agency_country" id="" value={editedData.agency_country} onChange={handleChange}>
                                            <option value="">All</option>
                                            {Countries && Countries.map((country) => {
                                                return (
                                                    <option value={country.name}>{country.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency Business Type</p>
                                        <input type="text" name='business_type' value={editedData.business_type} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency Securitization Mode</p>
                                        <input type="text" name='agency_securitization_mode' value={editedData.agency_securitization_mode} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency Year In Business</p>
                                        <input type="tel" maxLength={2} name='year_in_business' value={editedData.year_in_business} onChange={handleChange} onKeyDown={handleKeyDown} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Agency Monthly Booking Volume</p>
                                        <input type="tel" maxLength={4} name='agency_monthlybookingvolume' onKeyDown={handleKeyDown}  value={editedData.agency_monthlybookingvolume} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency TDS Exemption</p>
                                        <input type="text" name='TDS_exemption' value={editedData.TDS_exemption} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Agency TDS Exemption(in %)</p>
                                        <input type="text" name='agency_tdsexemption_percent' value={editedData.agency_tdsexemption_percent} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency Website</p>
                                        <input type="text" name='website' value={editedData.website} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency Consolidators</p>
                                        <input type="text" name='agency_consolidators' value={editedData.agency_consolidators} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Reference</p>
                                        <input type="text" name='reference' value={editedData.reference} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency Remarks</p>
                                        <input type="text" name='agency_remarks' value={editedData.agency_remarks} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency Office Space</p>
                                        <input type="text" name='agency_officespace' value={editedData.agency_officespace} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5'>
                                        <p className='mb-1'>Edit Your Agency IATA</p>
                                        <input type="text" name='IATA' value={editedData.IATA} onChange={handleChange} className='w-100' />
                                    </div>
                                    <div className='mb-2 col-5 d-flex'>
                                        <img src="/bimg2.png" alt="" />
                                        <input type="file" name='agency_logo' onChange={handleChange} className='w-100 ms-3' />
                                    </div>
                                    <div className="d-flex justify-content-end mt-3 me-5">
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

export default AgencyDetailForm;
