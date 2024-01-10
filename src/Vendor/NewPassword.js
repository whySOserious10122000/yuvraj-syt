import React from 'react'
import Header from '../Project/Header';
import { useState } from 'react';
import index1 from "../Project/css/index1.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../BASE_URL';

function NewPassword() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        mobile_number: "",
        newpassword: "",
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };


    const handleSubmit = async (e) => {
        const token = localStorage.getItem("vendorToken")
        e.preventDefault();
        if (!formData.mobile_number || !formData.newpassword) {
            toast.error('Enter Mobile Number and Password!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (formData.mobile_number.length < 10) {
            toast.error('Enter Valid Mobile Number!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        // alert("api call here");

        const { mobile_number, newpassword } = formData;

        const res = await fetch(`${BASE_URL}agency/forgatepassword`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({
                newpassword,
                mobile_number,
            })
        })
        const data = await res.json();
        if (data.code === 200) {
            toast.success('Password Change Successfully!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });

            setTimeout(() => {
                navigate("/vendor/login");
            }, 2000);
        } 
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
            <Header />
            <div className='container'>
                <div className="forgot_not">
                    <div className="forgot_pass">
                        <div className='forgot_box'>
                            <div className='text-center mt-3'>
                                <h2>Set New Password</h2>
                            </div>
                            <div className='mobile_number_box'>
                                <div className='mobile_number_forgot text-start'>
                                    <p className='mb-1'>Enter Your Mobile Number</p>
                                    <input
                                        type="tel"
                                        name="mobile_number"
                                        id="pasword"
                                        onChange={handleChange}
                                        onKeyDown={handleKeyDown}
                                        maxLength={10}
                                    />
                                </div>
                            </div>
                            <div className='mobile_number_box'>
                                <div className='mobile_number_forgot text-start'>
                                    <p className='mb-1'>Enter New Password</p>
                                    <input
                                        type="password"
                                        name="newpassword"
                                        id="pasword"
                                        onChange={handleChange}
                                    />
                                    <ToastContainer />
                                </div>
                            </div>
                            <div className='mobile_btn'>
                                <button onClick={handleSubmit}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPassword;