// import React from 'react'
// import Header from './Header';
// import { BASE_URL } from '../BASE_URL';
// import { useState, useEffect } from 'react';


// function Faqs() {

//     const [faqs, setFaqs] = useState([]);

//     const Faq = async () => {
//         const res = await fetch(`${BASE_URL}faqs`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         const data = await res.json();
//         setFaqs(data.data);
//     };

//     useEffect(() => {
//         Faq();
//     }, []);


//     return (
//         <>
//             <Header />
//             <section>

//             </section>
//         </>
//     );
// }

// export default Faqs;


import React from "react";
// import "./faqs.css";
import "./css/faqs.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import downButton from "../../Assets/down.png";
// import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../BASE_URL";
import Header from "./Header";
import Footer from "./Footer";

const Faqs = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        const res = await fetch(`${BASE_URL}faqs`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await res.json();
        setFaqs(data.data);
    };

    return (
        <>
            <Header />
            <section>
                <div className="container__wrapper">
                    <div className="container">
                        <h2>Faqs</h2>
                        <div className="accordions">
                            {faqs.map((faq) => {
                                return (
                                    <Accordion>
                                        <AccordionSummary
                                              expandIcon={<img src="./dropdown.png" alt="" style={{height: "20px" , width: "20px"}}/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <h4 className="accordion_summary">{faq.question}</h4>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <p className="accordion_detais">{faq.answer}</p>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <Footer/>
        </>
    );
};

export default Faqs;