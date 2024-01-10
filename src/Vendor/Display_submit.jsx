import { faArrowLeft, faBell, faBrush, faCheck, faCheckCircle, faClipboard, faEnvelopeOpen,  faLayerGroup, faLocationPin, faStar, faUser, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Form, Row } from 'react-bootstrap';
import React from 'react';
import My_pannel from './My_pannel';
import Header from '../Project/Header';

function Display_submit(props) {
    return (
        <>
            <Header/>
                <div className="costum_container">
                    <My_pannel/>
                    <div className=''>
                         <section>
                            <div className='costum_container'>
                                <div>
                                    <div className='cmn align-items-center'>
                                        <div className='align-items-center d-flex justify-content-between'>
                                            <div className='d-flex align-items-center'>
                                                <a href=''><FontAwesomeIcon icon={faArrowLeft} className='p-2 cmnbkg' /></a>
                                                <span className='cmnp ps-2'>Submitted Package Details</span>
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

                        <section className='py-2'>
                                <div className='cmn p-3'>
                                    <div className='text-center'>
                                        <img src='/vendor-display.png' className='img-fluid'/>
                                    </div>
                                    <div className='py-2'>
                                        <div className='p-2 cmn'>
                                            <Form>
                                                <Row>
                                                    <div className='col-lg-6 col-md-6col-sm-6'>
                                                        <div className='py-1'>
                                                            <p className='cmnp text-20'>Name</p>
                                                            <Form.Control type="Email" id='name' name='name' placeholder='Gautam Shah'/>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-6col-sm-6'>
                                                    <div className='py-1'>
                                                            <p className='cmnp text-20'>City</p>
                                                            <Form.Control type="Email" id='name' name='name' placeholder='Ahmedabad-Goa'/>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </Form>
                                        </div>
                                    </div>
                                    <div className='py-2'>
                                        <div className='p-2 cmn'>
                                            <Form>
                                                <Row>
                                                    <div className='col-lg-6 col-md-6col-sm-6'>
                                                        <div className='py-1'>
                                                            <p className='cmnp text-20'>Package category</p>
                                                            <Form.Control type="Email" id='name' name='name' placeholder='Honeymoon'/>
                                                        </div>
                                                        <div className='py-1'>
                                                            <p className='cmnp text-20'>Number Of People</p>
                                                            <Form.Control type="Email" id='name' name='name' placeholder='2'/>
                                                        </div>
                                                        <div className='py-1'>
                                                            <p className='cmnp text-20'>Total Days</p>
                                                            <Form.Control type="Email" id='name' name='name' placeholder='3 Days & 2 Night'/>
                                                        </div>
                                                        <div className='py-1'>
                                                            <p className='cmnp text-20'>Hotel Type</p>
                                                            <Form.Control type="Email" id='name' name='name' placeholder='3 Stars'/>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-6col-sm-6'>
                                                        <div className='py-1'>
                                                            <p className='cmnp text-20'>Package</p>
                                                            <Form.Control type="Email" id='name' name='name' placeholder='Ahmedabad-Goa'/>
                                                        </div>
                                                        <div className='py-1'>
                                                            <p className='cmnp text-20'>Travel By</p>
                                                            <Form.Control type="Email" id='name' name='name' placeholder='Flight'/>
                                                        </div>
                                                        <div className='py-1'>
                                                            <p className='cmnp text-20'>Personal Care</p>
                                                            <Form.Control type="Email" id='name' name='name' placeholder='Yes'/>
                                                        </div>
                                                        <div className='py-1'>
                                                            <p className='cmnp text-20'>Meal Include</p>
                                                            <Form.Control type="Email" id='name' name='name' placeholder='Yes | VEG'/>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </Form>
                                        </div>
                                    </div>

                                    <div className='pt-4'>
                                        <button className='w-100 border-none Custom-btn'><FontAwesomeIcon icon={faLayerGroup} className=''/> Overview</button>
                                    </div>

                                    <div className='px-3 text-20' style={{textAlign:'justify'}}>
                                        <li className='py-1'><b>North Goa -</b> Nestled at the western coast of the country, Goa provides a totally different experience with its
                                        alluring beaches and crazy nightlife. Celebrate the start to your new journey and experience complete bliss with
                                        our customizable 4 nights and 5 days Goa honeymoon tour package. With this romantic Goa trip itinerary, you will
                                        visit the mesmerizing attractions of North and South Goa. Relish a delicious slice of leisure in the loving company
                                        of your soulmate in this nature kissed land.</li>
                                        <li className='py-1'>Opt our Goa couple tour package, and escape to this hippie state- one of the most popular tourist
                                        destinations amongst travellers from across the globe. Your honeymoon in Goa starts with a visit to the picture-perfect
                                        beaches of Goa like Calangute Beach, Baga Beach, Miramar Beach, and Anjuna Beach. Swaying coconut palm trees and the golden
                                        sandy beds invited you for a long walk with your better half on your romantic tour. Walk hand in hand over the sandy lagoons,
                                        and into the secluded caves that are perfect for picnics and sun tanning.</li>
                                        <li className='py-1'>The best part about booking a trip with us is that our 4 nights 5 days Goa couple packages can be easily 
                                        customized as per your pocket and preferences, imparting you a vacation together, just as you want. Your trip of togetherness 
                                        is laced by other attractions such as a romantic cruise, candlelight dinner, beach hopping, and an exciting nightlife. If you 
                                        and your beloved are interested to have a glimpse of the past, head to Fort Aguada to absorb the Portuguese charm.</li>
                                    </div>

                                    <div className='pt-4'>
                                        <button className='w-100 border-none Custom-btn'><FontAwesomeIcon icon={faBrush} className=''/> Services</button>
                                    </div>

                                    <div className='py-2'>
                                        <div className='cmn p-3'>
                                            <div>
                                                <Row>
                                                    <div className='col-lg-6 col-md-6 col-dm-6'>
                                                        <div className='cmn p-3'>
                                                            <h6><FontAwesomeIcon icon={faCheckCircle}/> Included</h6>
                                                            <p className='cmnp py-1 ruppe_text'><FontAwesomeIcon icon={faCheck}/> Accommodation as per tour itinerary</p>
                                                            <p className='cmnp py-1 ruppe_text'><FontAwesomeIcon icon={faCheck}/> All tours & transfers on private basis</p>
                                                            <p className='cmnp py-1 ruppe_text'><FontAwesomeIcon icon={faCheck}/> Daily dinner in hotel</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-6 col-dm-6'>
                                                    <div className='cmn p-3'>
                                                            <h6><FontAwesomeIcon icon={faXmarkCircle}/> Excluded</h6>
                                                            <p className='cmnp py-1 ruppe_text1'><FontAwesomeIcon icon={faXmark}/> Daily buffet breakfast in hotel</p>
                                                            <p className='cmnp py-1 ruppe_text1'><FontAwesomeIcon icon={faXmark}/> Transfers: Destination - Hotel - Destination</p>
                                                            <p className='cmnp py-1 ruppe_text1'><FontAwesomeIcon icon={faXmark}/> All taxes</p>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='pt-4'>
                                        <button className='w-100 border-none Custom-btn'><FontAwesomeIcon icon={faClipboard} className=''/> Itinerary</button>
                                    </div>

                                    <div>
                                        <div className='cmn p-3'>
                                            <div className='py-2'>
                                                <h6 className='cmnclr'>Day 1</h6>
                                                <div className='cmn p-2'>
                                                    <Row className='align-items-center'>
                                                        <div className='col-lg-9 '>
                                                            <li className='py-1'>Morning: Start your day by visiting the Basilica of Bom Jesus, a UNESCO World Heritage Site and 
                                                            one of the most famous churches in Goa. Admire the baroque architecture and visit the tomb of St. Francis Xavier.</li>
                                                            <li className='py-1'>Afternoon: Head to Miramar Beach, located just a few kilometers away from Panaji. Relax on 
                                                            the beach, take a dip in the sea, and enjoy the sunset.</li>
                                                            <li className='py-1'>Evening: Go for a stroll in the Fontainhas neighborhood in Panaji, which is known for its 
                                                            colorful Portuguese-style houses and narrow lanes.</li>
                                                        </div>
                                                        <div className='col-lg-3  text-center py-2'>
                                                            <img src='/Itinerary1.png' className='img-fluid text-center'/>
                                                        </div>
                                                    </Row>
                                                </div>
                                            </div>
                                            <div className='py-2'>
                                                <h6 className='cmnclr'>Day 2</h6>
                                                <div className='cmn p-2'>
                                                    <Row className='align-items-center'>
                                                        <div className='col-lg-9 '>
                                                            <li className='py-1'>Morning: Start your day by visiting the Basilica of Bom Jesus, a UNESCO World Heritage Site and 
                                                            one of the most famous churches in Goa. Admire the baroque architecture and visit the tomb of St. Francis Xavier.</li>
                                                            <li className='py-1'>Afternoon: Head to Miramar Beach, located just a few kilometers away from Panaji. Relax on 
                                                            the beach, take a dip in the sea, and enjoy the sunset.</li>
                                                            <li className='py-1'>Evening: Go for a stroll in the Fontainhas neighborhood in Panaji, which is known for its 
                                                            colorful Portuguese-style houses and narrow lanes.</li>
                                                        </div>
                                                        <div className='col-lg-3  text-center py-2'>
                                                            <img src='/Itinerary2.png' className='img-fluid text-center'/>
                                                        </div>
                                                    </Row>
                                                </div>
                                            </div>
                                            <div className='py-2'>
                                                <h6 className='cmnclr'>Day 3</h6>
                                                <div className='cmn p-2'>
                                                    <div className='py-1 text-justify'>
                                                        <li className='py-1'>Morning: Start your day by visiting the Basilica of Bom Jesus, a UNESCO World Heritage Site and 
                                                        one of the most famous churches in Goa. Admire the baroque architecture and visit the tomb of St. Francis Xavier.</li>
                                                        <li className='py-1'>Afternoon: Head to Miramar Beach, located just a few kilometers away from Panaji. Relax on 
                                                        the beach, take a dip in the sea, and enjoy the sunset.</li>
                                                        <li className='py-1'>Evening: Go for a stroll in the Fontainhas neighborhood in Panaji, which is known for its 
                                                        colorful Portuguese-style houses and narrow lanes.</li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='cmn p-3 my-2'>
                                        <h6 className='py-1'>Hotels</h6>
                                        <div className='cmn p-2 mx-3 my-2'>
                                            <div>
                                                <Row className='align-items-center'>
                                                    <div className='col-lg-3'>
                                                        <div className='text-center py-2'>
                                                            <img src='/Hotel1.png' className='img-fluid '/>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-9'>
                                                        <div className='px-3'>
                                                            <div className='p-2 cmn d-flex text-justify mt-2'>
                                                                <div>
                                                                    <h6 className='cmnp p-3'>Day 1</h6>
                                                                </div>
                                                                <div className='ps-3' style={{borderLeft:'1px solid #B8B8B8'}}>
                                                                    <p className='cmnp'>Montego Bay Beach Village</p>
                                                                    <p className='cmnp'><FontAwesomeIcon icon={faLocationPin}/> Goa</p>
                                                                </div>
                                                            </div>
                                                            <div className='py-2'>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} style={{color:'#B8B8B8' , padding:'3px'}}/>
                                                            </div>
                                                            <div className='py-1'>
                                                                <p className='cmnp'>Vithaldas Waddo, Morjim, Goa, India, 403512 </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>
                                        </div>

                                        <div className='cmn p-2 mx-3 my-2'>
                                            <div>
                                                <Row className='align-items-center'>
                                                    <div className='col-lg-3'>
                                                        <div className='text-center py-2'>
                                                            <img src='/Hotel2.png' className='img-fluid '/>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-9'>
                                                        <div className='px-3'>
                                                            <div className='p-2 cmn d-flex text-justify mt-2'>
                                                                <div>
                                                                    <h6 className='cmnp p-3'>Day 2</h6>
                                                                </div>
                                                                <div className='ps-3' style={{borderLeft:'1px solid #B8B8B8'}}>
                                                                    <p className='cmnp'>Sea Queen Beach Resort and SPA</p>
                                                                    <p className='cmnp'><FontAwesomeIcon icon={faLocationPin}/> Goa</p>
                                                                </div>
                                                            </div>
                                                            <div className='py-2'>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} style={{color:'#B8B8B8' , padding:'3px'}}/>
                                                            </div>
                                                            <div className='py-1'>
                                                                <p className='cmnp'>96/5 Colva Beach Betalbatim Beach Road Colve Salcete, Colva, Goa, India, 403708</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>
                                        </div>

                                        <div className='cmn p-2 mx-3 my-2'>
                                            <div>
                                                <Row className='align-items-center'>
                                                    <div className='col-lg-3'>
                                                        <div className='text-center py-2'>
                                                            <img src='/Hotel3.png' className='img-fluid '/>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-9'>
                                                        <div className='px-3'>
                                                            <div className='p-2 cmn d-flex text-justify mt-2'>
                                                                <div>
                                                                    <h6 className='cmnp p-3'>Day 3</h6>
                                                                </div>
                                                                <div className='ps-3' style={{borderLeft:'1px solid #B8B8B8'}}>
                                                                    <p className='cmnp'>De Lagom Comforts Goa</p>
                                                                    <p className='cmnp'><FontAwesomeIcon icon={faLocationPin}/> Goa</p>
                                                                </div>
                                                            </div>
                                                            <div className='py-2'>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                                                <FontAwesomeIcon icon={faStar} style={{color:'#B8B8B8' , padding:'3px'}}/>
                                                            </div>
                                                            <div className='py-1'>
                                                                <p className='cmnp'>Calangute - Anjuna Road, Anjuna, Goa, India, 403509</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                        </section>
                    </div>
                </div>
        </>
    );
}

export default Display_submit;