import React, { useState } from 'react';
import Card from './Card';
import './Testimonials.css';
import {FaAngleRight , FaAngleLeft } from "react-icons/fa";

const Testimonials = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? props.data.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === props.data.length - 1 ? 0 : prevIndex + 1));
    };

    const random = () => {
        setCurrentIndex(Math.floor(Math.random() * props.data.length));
    }

    return(
        <div className='cardContainer'>
            <Card data={props.data[currentIndex]} />
            <div>
            <button onClick={handlePrev} className='arwbtn'><FaAngleLeft /></button>
            <button onClick={handleNext} className='arwbtn'><FaAngleRight /></button>
            </div>
            <button onClick={random} className='btn'>Surprise Me</button>
        </div>
    );
};

export default Testimonials;