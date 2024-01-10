import React from 'react'
import { useState, useEffect } from 'react';
import Header from './Project/Header';
import { BASE_URL } from './BASE_URL';
import Footer from './Project/Footer';


function Privacy() {

    const [privacy, setPrivacy] = useState([]);

    const privacypolicies = async () => {
        const res = await fetch(`${BASE_URL}policy`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        setPrivacy(data.data[2]);
    };

    useEffect(() => {
        privacypolicies();
    }, []);


    return (
        <>
            <Header />
            <section>
                <div className="container">
                    <div className='my-4'>
                        <div dangerouslySetInnerHTML={{ __html: privacy.term_and_condition_content }} />
                    </div>
                </div>
            </section>
            <hr />
            <Footer/>
        </>
    );
}

export default Privacy;