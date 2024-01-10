import React from 'react';
import { Nav } from 'react-bootstrap';
// import { withRouter } from "react-router";
import '../Project/css/index1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress, faCube, faGear, faHome , faHotel, faMapLocationDot, faVectorSquare } from '@fortawesome/free-solid-svg-icons';

function Side_navbar(props) {
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar position_sticky" activeKey="/home"  >
                <div className="sidebar-sticky"></div>
                <Nav.Item >
                    <Nav.Link href="/Home"><FontAwesomeIcon icon={faHome} className='sideclr'/><span className='nav-inner-text active'>Home</span>
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Vector"><FontAwesomeIcon icon={faBarsProgress} className='sideclr'/><span className='nav-inner-text active'>Home</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/package"><FontAwesomeIcon icon={faCube} className='sideclr'/><span className='nav-inner-text active'>Package</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Location"><FontAwesomeIcon icon={faMapLocationDot} className='sideclr'/><span className='nav-inner-text active'>Home</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Hotal"><FontAwesomeIcon icon={faHotel} className='sideclr'/><span className='nav-inner-text active'>Home</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Vector"><FontAwesomeIcon icon={faVectorSquare} className='sideclr'/><span className='nav-inner-text active'>Home</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/setting"><FontAwesomeIcon icon={faGear} className='sideclr'/><span className='nav-inner-text active'>Home</span></Nav.Link>
                </Nav.Item>

            </Nav>   
        </>
    );
}

// const Sidebar = withRouter(Side);;

export default Side_navbar;