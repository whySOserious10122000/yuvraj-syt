import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../BASE_URL';
import { useNavigate } from 'react-router-dom';

function Editagencydetail() {


    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    const handleSaveChanges = async () => {
        try {
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
        navigate("/vendor/AgencyEdit");
    }



    return (
        <>
            <div>
                <div className='float-end profile_edit_btn' onClick={handleNavigate}>
                    <button>Edit</button>
                </div>
                <div className="row profile_text_css">
                    <div className="col-12">
                        <h4 className='mb-3'>Agency Detail</h4>
                    </div>
                    <div className="col-12 ms-2 mb-4">
                        <div className='d-flex align-items-center'>
                            {/* src={editedData.agency_logo} */}
                            <img src="/bimg2.png" alt="Image not Found" />
                            <span className='ms-3' style={{fontSize: "20px" , fontWeight: "600"}}>{editedData.agency_name}</span>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency Fax : <span>{editedData.agency_fax}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency City : <span>{editedData.agency_city}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency State : <span>{editedData.agency_state}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency Country : <span>{editedData.agency_country}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency Business Type : <span>{editedData.business_type}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency Securitization Mode : <span>{editedData.agency_securitization_mode}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency Year In Business : <span>{editedData.year_in_business}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency Monthly Booking Volume : <span>{editedData.agency_monthlybookingvolume}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency TDS Exemption : <span>{editedData.TDS_exemption}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency TDS Exemption in Percentage : <span>{editedData.agency_tdsexemption_percent}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency Website : <span>{editedData.website}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency Consolidators : <span>{editedData.agency_consolidators}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Reference : <span>{editedData.reference}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency Remarks : <span>{editedData.agency_remarks}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency Office Space : <span>{editedData.agency_officespace}</span></h5>
                        </div>
                    </div>
                    <div className="col-5 ms-2">
                        <div>
                            <h5>Agency IATA : <span>{editedData.IATA}</span></h5>
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
                        <Modal.Title>Edit Agency Detail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='edit_form_input'>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency Name</p>
                                <input type="text" name='agency_name' value={editedData.agency_name} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency Fax</p>
                                <input type="text" name='agency_fax' value={editedData.agency_fax} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency City</p>
                                <input type="text" name='agency_city' value={editedData.agency_city} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency State</p>
                                <input type="text" name='agency_state' value={editedData.agency_state} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency Country</p>
                                <input type="text" name='agency_country' value={editedData.agency_country} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency Logo</p>
                                <input type="text" name='agency_logo' value={editedData.agency_logo} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency Business Type</p>
                                <input type="text" name='business_type' value={editedData.business_type} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency Securitization Mode</p>
                                <input type="text" name='agency_securitization_mode' value={editedData.agency_securitization_mode} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency Year In Business</p>
                                <input type="text" name='year_in_business' value={editedData.year_in_business} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency Monthly Booking Volume</p>
                                <input type="number" name='agency_monthlybookingvolume' value={editedData.agency_monthlybookingvolume} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency TDS Exemption</p>
                                <input type="text" name='TDS_exemption' value={editedData.TDS_exemption} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency TDS Exemption in Percentage</p>
                                <input type="text" name='agency_tdsexemption_percent' value={editedData.agency_tdsexemption_percent} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency Website</p>
                                <input type="text" name='website' value={editedData.website} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency Consolidators</p>
                                <input type="text" name='agency_consolidators' value={editedData.agency_consolidators} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Reference</p>
                                <input type="text" name='reference' value={editedData.reference} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency Remarks</p>
                                <input type="text" name='agency_remarks' value={editedData.agency_remarks} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency Office Space</p>
                                <input type="text" name='agency_officespace' value={editedData.agency_officespace} onChange={handleChange} className='w-100' />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-1'>Edit Your Agency IATA</p>
                                <input type="text" name='IATA' value={editedData.IATA} onChange={handleChange} className='w-100' />
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

export default Editagencydetail;