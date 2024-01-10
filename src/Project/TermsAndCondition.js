import React from 'react'
import Header from './Header';
import { BASE_URL } from '../BASE_URL';
import { useState, useEffect } from 'react';
import Footer from './Footer';


function TermsAndCondition() {

    const [terms, setTerms] = useState([]);

    const Termscondition = async () => {
        const res = await fetch(`${BASE_URL}policy`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        setTerms(data.data[1]);
    };

    useEffect(() => {
        Termscondition();
    }, []);


    return (
        <>
            <Header />
            <section>
                <div className="container">
                    <div className='my-4'>
                        {/* <h3>{ele.term_and_condition_type}</h3> */}
                        {/* <p>{ele.term_and_condition_content}</p> */}
                        <div dangerouslySetInnerHTML={{ __html: terms.term_and_condition_content }} />
                    </div>

                </div>
            </section>
            <hr />
            <Footer/>
        </>
    );
}

export default TermsAndCondition;