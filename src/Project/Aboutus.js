import React from 'react'
import Header from './Header';
import { useState , useEffect } from 'react';
import { BASE_URL } from '../BASE_URL';
import Footer from './Footer';

function Aboutus() {

    const [aboutus, setAboutus] = useState([]);

    const Aboutdata = async () => {
        const res = await fetch(`${BASE_URL}about`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        setAboutus(data.data);
    };

    useEffect(() => {
        Aboutdata();
    }, []);

    return (
        <>
            <Header />
            <section className='my-4'>
                <div className="container">
                    <h3>ABOUT US</h3>
                    <p>{aboutus.description}</p>
                </div>
            </section>
            <hr />
            <Footer/>
        </>
    );
}

export default Aboutus;