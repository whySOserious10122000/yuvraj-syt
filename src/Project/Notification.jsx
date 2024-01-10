import React from 'react';
import Header from './Header';
import './css/index1.css'
import { Container } from 'react-bootstrap';

function Notification(props) {
    return (
        <>
            <Header/>
            <section>
            <Container>
                <div className='main_noti'>
                    <div className='input_notification text-center'>
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className='slide_notification'>
                        <div className='a_notification d-flex justify-content-between'>
                            <a href="#">All</a>
                            <a href="#">New notification</a>
                            <a href="#">All read</a>
                        </div>
                    </div>
                    <div></div>

                    <div>
                        <div className='noti-1 my-2 d-flex'>
                            <div className='content_notification'>
                                <div className='pt-2 d-block align-items-center justify-content-between d-lg-flex align-items-lg-center'>
                                    <div className='d-flex align-items-center'>
                                    <img src='/Notification.png' className=' img-fluid'/>
                                    <h6 className='ps-2 ps-md-4 left_imgtext mb-0'>Your Bangkok package booked successfully</h6>
                                    </div>
                                    <div className='d-flex justify-content-end  '>
                                    <h6 className='time_date px-4 mb-0'>12:30</h6>
                                    <h6 className='time_date ms-3 mb-0'>20/04/2023</h6>
                                    </div>
                                </div>
                                <div>
                                    <p className='innertext py-2 mb-1'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, actupsp aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos...</p>
                                </div>
                            </div>
                            <div>
                                +
                            </div>
                        </div>

                        <div className='noti-1 my-2 d-flex disabled'>
                            <div className='content_notification'>
                                <div className='pt-2 d-block align-items-center justify-content-between d-lg-flex align-items-lg-center'>
                                    <div className='d-flex align-items-center'>
                                    <img src='/Notification.png' className=' img-fluid'/>
                                    <h6 className='ps-2 ps-md-4 left_imgtext mb-0'>Your Bangkok package booked successfully</h6>
                                    </div>
                                    <div className='d-flex justify-content-end  '>
                                    <h6 className='time_date px-4 mb-0'>12:30</h6>
                                    <h6 className='time_date ms-3 mb-0'>20/04/2023</h6>
                                    </div>
                                </div>
                                <div>
                                    <p className='innertext py-2 mb-1'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, actupsp aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos...</p>
                                </div>
                            </div>
                            <div>
                                +
                            </div>
                        </div>

                        <div className='noti-1 my-2 d-flex'>
                            <div className='content_notification'>
                                <div className='pt-2 d-block align-items-center justify-content-between d-lg-flex align-items-lg-center'>
                                    <div className='d-flex align-items-center'>
                                    <img src='/Notification.png' className=' img-fluid'/>
                                    <h6 className='ps-2 ps-md-4 left_imgtext mb-0'>Your Bangkok package booked successfully</h6>
                                    </div>
                                    <div className='d-flex justify-content-end  '>
                                    <h6 className='time_date px-4 mb-0'>12:30</h6>
                                    <h6 className='time_date ms-3 mb-0'>20/04/2023</h6>
                                    </div>
                                </div>
                                <div>
                                    <p className='innertext py-2 mb-1'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, actupsp aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos...</p>
                                </div>
                            </div>
                            <div>
                                +
                            </div>
                        </div>

                        <div className='noti-1 my-2 d-flex'>
                            <div className='content_notification'>
                                <div className='pt-2 d-block align-items-center justify-content-between d-lg-flex align-items-lg-center'>
                                    <div className='d-flex align-items-center'>
                                    <img src='/Notification.png' className=' img-fluid'/>
                                    <h6 className='ps-2 ps-md-4 left_imgtext mb-0'>Your Bangkok package booked successfully</h6>
                                    </div>
                                    <div className='d-flex justify-content-end  '>
                                    <h6 className='time_date px-4 mb-0'>12:30</h6>
                                    <h6 className='time_date ms-3 mb-0'>20/04/2023</h6>
                                    </div>
                                </div>
                                <div>
                                    <p className='innertext py-2 mb-1'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, actupsp aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos...</p>
                                </div>
                            </div>
                            <div>
                                +
                            </div>
                        </div>
                    </div>
                </div>
                
                </Container>
            </section>
        </>
    );
}

export default Notification;