import React from 'react';
import { faArrowLeft, faBell, faBrush, faCheck, faCheckCircle, faClipboard, faEnvelopeOpen,  faLayerGroup, faLocationPin, faStar, faUser, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Overview from './Overview';
import Itinerary from './Itinerary';
import Hotels from './Hotels';
import Services from './Services';
import { Route, Router, Routes } from 'react-router-dom';
import My_pannel from './My_pannel';
import Header from '../Project/Header';
import "../Project/css/index1.css"
import Header2 from './Header2';
import User1 from './User1';
import User2 from './User2';
import User3 from './User3';

function User_tab(props) {
    return (
        <>
            <Header2/>
            <div className='costum_container'>
                <My_pannel />
                <div style={{backgroundColor:"whitesmoke"}}>
                    <section style={{backgroundColor:"#fff"}}>
                        <div className='costum_container'>
                                <div>
                                    <div className='pt-1 align-items-center second_navbar'>
                                        <div className='ps-md-4 ps-sm-2 ps-2 pe-xl-5 pe-lg-5 pe-md-3 pe-sm-2 pe-2 align-items-center d-flex justify-content-between'>
                                            <div className='d-flex align-items-center'>
                                                <a href=''><FontAwesomeIcon icon={faArrowLeft} className='p-2 cmnbkg' /></a>
                                                <span className=' ps-2'>Submit Form</span>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <a href=''><FontAwesomeIcon icon={faBell} className='p-2 cmnclr cmnicon'/></a>
                                                <a href=''><FontAwesomeIcon icon={faEnvelopeOpen} className='p-2 cmnclr cmnicon ms-2'/></a>
                                                <div className='d-flex  align-items-center cmn py-1 px-2 ms-2' style={{cursor:'pointer'}}>
                                                    <FontAwesomeIcon icon={faUser} className='cmnclr cmnicon p-2'/>
                                                    <p className='cmnp ps-1'>User</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </section>
                    {/* <div className="d-flex flex-row"> */}
                        {/* <div >
                            <button className='user_tab_btn'>Edit</button>
                        </div> */}
                        {/* <div> */}
                            <Tabs className='pt-3 d-flex cba'>
                                <Tab eventKey="PERSONAL DETAILS"  title="PERSONAL DETAILS">
                                    <User1/>
                                </Tab>
                                <Tab eventKey="AGENCY DETAILS" title="AGENCY DETAILS">
                                    <User2/>
                                </Tab>
                                <Tab eventKey="AGENCY GST DETAILS" title="AGENCY GST DETAILS" >
                                    <User3/>
                                </Tab>
                            </Tabs>
                        {/* </div>
                    </div> */}
                    
                </div>
            </div>
        </>
    );
}

export default User_tab;