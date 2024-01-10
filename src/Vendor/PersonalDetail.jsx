import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../BASE_URL';
import { useNavigate } from 'react-router-dom';

function PersonalDetail() {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    const handleSaveChanges = async () => {
        try {
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
                // Handle success
            } else {
                // Handle errors
            }
        } catch (error) {
            console.error('Error:', error);
        }

        handleClose();
    };




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


    const handleEdit = () => {
        navigate("/vendor/EditPersonalDetail")
    }



    return (
        <>
            <div>
                <div className='float-end profile_edit_btn' onClick={handleEdit}>
                    <button>Edit</button>
                </div>
                <div className="row profile_text_css">
                    <div className="col-12 mb-3">
                        <h4>Personal Detail</h4>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Address : <span>{editedData.resident_address} </span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Email : <span>{editedData.email_address} </span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>SkypeId : <span>{editedData.skypeid} </span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Pancard : <span>{editedData.pancard_no} </span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Pincode : <span>{editedData.pincode} </span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>City : <span>{editedData.city} </span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>State : <span>{editedData.state} </span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Country : <span>{editedData.country} </span></h5>
                        </div>
                    </div>
                </div>






            </div>
        </>
    )
}

export default PersonalDetail;