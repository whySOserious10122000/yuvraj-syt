import Input from 'postcss/lib/input';
import React from 'react';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function Modal1(props) {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const clickshow = ()=>{
        handleClose(false);
        handleShow1(true);
    }


    return (
        <div>
        <Button onClick={handleShow}>launch</Button>
            <Modal show={show}  style={{borderRadius:"0px"}}>
                <Modal.Header closeButton style={{background:"#fff" , border:"none"}}></Modal.Header>
                <Modal.Body>
                    <div className='p-3' show={show1}>
                    <h1>Set New Password</h1>
                        <Form>
                            <div className='py-2'>
                                <p className='cmnp text_20'>Old Password</p>
                                <input type='password' className='w-100 p-1' placeholder='Chirag@123'/>
                            </div>
                            <div className='py-2'>
                                <p className='cmnp text_20'>New Password</p>
                                <input type='password' className='w-100 p-1' placeholder='Chirag@123'/>
                            </div>
                            <div className='py-2'>
                                <p className='cmnp text_20'>Confirm New Password</p>
                                <input type='password' className='w-100 p-1' placeholder='Chirag@123'/>
                            </div>
                            <div className='text-center pt-3'>
                                <p href='' className='top-a c_btn2 text-20' onClick={clickshow} style={{cursor:'pointer'}}>Next</p>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>

            {/* <Button onClick={handleShow}>launch</Button> */}
            <Modal show={show1} onHide={handleClose1} style={{borderRadius:"0px"}}>
                <Modal.Body>
                    <div className='p-3' show={show1}>
                    <h1>login</h1>
                        <Form>
                            <div className='py-2'>
                                <p className='cmnp text_20'>username</p>
                                <input type='password' className='w-100 p-1' placeholder='Chirag@123'/>
                            </div>
                            <div className='py-2'>
                                <p className='cmnp text_20'>Mo:-No</p>
                                <input type='password' className='w-100 p-1' placeholder='Chirag@123'/>
                            </div>
                            <div className='py-2'>
                                <p className='cmnp text_20'>Password</p>
                                <input type='password' className='w-100 p-1' placeholder='Chirag@123'/>
                            </div>
                            <div className='text-center pt-3'>
                                <p href='' className='top-a c_btn2 text-20' onClick={clickshow} style={{cursor:'pointer'}}>Next</p>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Modal1;