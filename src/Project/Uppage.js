import React, { useState, useEffect } from 'react';
import '.././Project/css/index1.css'; // Import your styles if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Uppage = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show the button when the user scrolls down
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <FontAwesomeIcon icon={faArrowUp} />

        </div>
    );
};

export default Uppage;