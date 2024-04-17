import React from 'react';
import './Card.css';
import { FaQuoteRight , FaQuoteLeft } from "react-icons/fa";

const Card = ({data}) => {
    return(
        <div className='container'>
            <img className='img' src={data.image} alt={data.name} />
            <div className='circle'></div>
            <div className='name'>{data.name}</div>
            <div className='title'>{data.title}</div>
            <div className='icon'><FaQuoteLeft /></div>
            <div className='descri'>{data.description}</div>
            <div className='icon'><FaQuoteRight /></div>
        </div>
    );
}

export default Card;