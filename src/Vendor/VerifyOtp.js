import React from 'react'
import Header from '../Project/Header';
import { useState } from 'react';
import index1 from "../Project/css/index1.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function VerifyOtp() {

    const Navigate = useNavigate();

    const [otp, setOtp] = useState('');

    const handleOtp = (event) => {
        const inputNumber = event.target.value;
        if (inputNumber.length <= 4) {
            setOtp(inputNumber);
        }
    };


    const handleSubmit = () => {
        if (otp === '1234') {  // Change OTP to the desired value
            Navigate("/vendor/newpassword");  // Navigate to the desired page
        } else if (otp === '') {
            toast.error('Please Enter OTP!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
        } else {
            toast.error('Invalid OTP. Please try again.', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
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
                                <h2>Verify Your Otp</h2>
                            </div>
                            <div className='mobile_number_box'>
                                <div className='mobile_number_forgot text-start'>
                                    <p className='mb-1'>Enter Otp</p>
                                    <input
                                        type="tel"
                                        name="otp"
                                        id="otp"
                                        value={otp}
                                        onChange={handleOtp}
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

export default VerifyOtp;