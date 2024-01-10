import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../BASE_URL';
import { useNavigate } from 'react-router-dom';

function EditagencyGst() {


    const navigate = useNavigate();


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [editedData, setEditedData] = useState({
        gst_agency_name: "",
        gst_agency_classification: "",
        gst_agency_GST: "",
        gst_agency_state: "",
        gst_agency_city: "",
        gst_provisional_GST: "",
        gst_contact_person: "",
        gst_phone: "",
        gst_alternate_phone: "",
        gst_email: "",
        gst_alternate_email: "",
        gst_registration_status: "",
        gst_address_line_1: "",
        gst_hsn_sac_code: "",
        gst_address_line_2: "",
        gst_pincode: "",
        gst_supply_type: "",
        gst_comp_levy_sec10_GST: "",
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

            formData.append('gst_agency_name', editedData.gst_agency_name);
            formData.append('gst_agency_classification', editedData.gst_agency_classification);
            formData.append('gst_agency_GST', editedData.gst_agency_GST);
            formData.append('gst_agency_state', editedData.gst_agency_state);
            formData.append('gst_agency_city', editedData.gst_agency_city);
            formData.append('gst_provisional_GST', editedData.gst_provisional_GST);
            formData.append('gst_contact_person', editedData.gst_contact_person);
            formData.append('gst_phone', editedData.gst_phone);
            formData.append('gst_alternate_phone', editedData.gst_alternate_phone);
            formData.append('gst_email', editedData.gst_email);
            formData.append('gst_alternate_email', editedData.gst_alternate_email);
            formData.append('gst_registration_status', editedData.gst_registration_status);
            formData.append('gst_address_line_1', editedData.gst_address_line_1);
            formData.append('gst_hsn_sac_code', editedData.gst_hsn_sac_code);
            formData.append('gst_address_line_2', editedData.gst_address_line_2);
            formData.append('gst_pincode', editedData.gst_pincode);
            formData.append('gst_supply_type', editedData.gst_supply_type);
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


    const handleNavigate = () => {
        navigate("/vendor/GstEditForm")
    }

    const handleBack = () => {
        navigate("/vendor/myprofile")
    }



    return (
        <>
            <div>
                <div className='float-end profile_edit_btn' onClick={handleNavigate}>
                    <button>Edit</button>
                </div>
                <div className="row profile_text_css">
                    <div className="col-12">
                        <h4 className='mb-3'>GST Detail</h4>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency Name : <span>{editedData.gst_agency_name}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency Classification : <span>{editedData.gst_agency_classification}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency gst : <span>{editedData.gst_agency_GST}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency Provisional GST : <span>{editedData.gst_provisional_GST}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency City : <span>{editedData.gst_agency_city}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency State : <span>{editedData.gst_agency_state}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency Contact Person : <span>{editedData.gst_contact_person}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency Phone Number : <span>{editedData.gst_phone}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency Alternate Phone Number : <span>{editedData.gst_alternate_phone}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency Email : <span>{editedData.gst_email}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency Alternate Email : <span>{editedData.gst_alternate_email}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency Registration Status : <span>{editedData.gst_registration_status}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency Address Line  : <span>{editedData.gst_address_line_1}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency Address Line 2 : <span>{editedData.gst_address_line_2}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency HSN SAC code : <span>{editedData.gst_hsn_sac_code}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency Pincode : <span>{editedData.gst_pincode}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Agency Supply Type : <span>{editedData.gst_supply_type}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>GST Company Levy sec10 GST : <span>{editedData.gst_comp_levy_sec10_GST}</span></h5>
                        </div>
                    </div>
                </div>


                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit GST Detail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='edit_form_input'>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Name</p>
                                <input type="text" name='gst_agency_name' value={editedData.gst_agency_name} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Address</p>
                                <input type="text" name='gst_agency_classification' value={editedData.gst_agency_classification} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Email</p>
                                <input type="text" name='gst_agency_GST' value={editedData.gst_agency_GST} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your SkypeId</p>
                                <input type="text" name='gst_agency_state' value={editedData.gst_agency_state} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Pancard</p>
                                <input type="text" name='gst_agency_city' value={editedData.gst_agency_city} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Pincode</p>
                                <input type="text" name='gst_provisional_GST' value={editedData.gst_provisional_GST} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your City</p>
                                <input type="text" name='gst_contact_person' value={editedData.gst_contact_person} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your State</p>
                                <input type="tel" name='gst_phone' value={editedData.gst_phone} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Country</p>
                                <input type="tel" name='gst_alternate_phone' value={editedData.gst_alternate_phone} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Country</p>
                                <input type="email" name='gst_email' value={editedData.gst_email} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Country</p>
                                <input type="email" name='gst_alternate_email' value={editedData.gst_alternate_email} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Country</p>
                                <input type="text" name='gst_registration_status' value={editedData.gst_registration_status} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Country</p>
                                <input type="text" name='gst_address_line_1' value={editedData.gst_address_line_1} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Country</p>
                                <input type="text" name='gst_hsn_sac_code' value={editedData.gst_hsn_sac_code} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Country</p>
                                <input type="text" name='gst_address_line_2' value={editedData.gst_address_line_2} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Country</p>
                                <input type="number" name='gst_pincode' value={editedData.gst_pincode} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Country</p>
                                <input type="text" name='gst_supply_type' value={editedData.gst_supply_type} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Country</p>
                                <input type="text" name='gst_comp_levy_sec10_GST' value={editedData.gst_comp_levy_sec10_GST} onChange={handleChange} className='w-100' />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className='edit_submit_btn' onClick={handleSaveChanges}>Save</Button>
                    </Modal.Footer>
                </Modal>


            </div>
        </>
    )
}

export default EditagencyGst;