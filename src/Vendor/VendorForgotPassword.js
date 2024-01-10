import React from 'react'
import Header from '../Project/Header';
import { useState } from 'react';
import index1 from "../Project/css/index1.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function VendorForgotPassword() {

    const Navigate = useNavigate();

    const [mobileNumber, setMobileNumber] = useState('');

    const handleMobileNumberChange = (event) => {
        const inputNumber = event.target.value;
        if (inputNumber.length <= 10) {
            setMobileNumber(inputNumber);
        }
    };


    const handleSubmit = () => {
        if (mobileNumber.length < 10) {
            toast.error('Please Enter Valid Mobile Number!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
        }
        else if (mobileNumber === '') {
            toast.error('Please Enter Mobile Number!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
        } else {
            Navigate("/vendor/otp");
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


    return (
        <>
            <Header />
            <div className='container'>
                <div className="forgot_not">
                    <div className="forgot_pass">
                        <div className='forgot_box'>
                            <div className='text-center mt-3'>
                                <h2>Reset Password</h2>
                            </div>
                            <div className='mobile_number_box'>
                                <div className='mobile_number_forgot text-start'>
                                    <p className='mb-1'>Enter Your Mobile Number</p>
                                    <input
                                        type="tel" // Use type "tel" for mobile numbers
                                        name="mobileNumber"
                                        id="mobileNumber"
                                        value={mobileNumber}
                                        onChange={handleMobileNumberChange}
                                        onKeyDown={handleKeyDown}
                                        maxLength={10}
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

export default VendorForgotPassword;