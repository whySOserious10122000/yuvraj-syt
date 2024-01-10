import React from 'react'
import Header from './Header';
import { BASE_URL } from '../BASE_URL';
import { useState, useEffect } from 'react';
import Footer from './Footer';


function Cancellation() {

    const [cancel, setCancel] = useState([]);

    const Cancelpolicies = async () => {
        const res = await fetch(`${BASE_URL}policy`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        setCancel(data.data[0]);
        
    };

    useEffect(() => {
        Cancelpolicies();
    }, []);

    // const [textData, setTextData] = useState('');

    // useEffect(() => {
    //     Cancelpolicies();
    //     const parser = new DOMParser();
    //     const parsedHtml = parser.parseFromString(htmlData, 'text/html');
    //     const text = parsedHtml.documentElement.textContent;
    //     setCancel(text);
    // }, [htmlData]);


    return (
        <>
            <Header />
            <section>
                <div className="container">
                    <div className='my-4'>
                        <h2 className='text-center'>{cancel.term_and_condition_type}</h2>
                        <div dangerouslySetInnerHTML={{__html: cancel.term_and_condition_content}} />
                    </div>
                </div>
            </section>
            <hr />
            <Footer/>
        </>
    );
}

export default Cancellation;