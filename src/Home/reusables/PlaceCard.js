import React from 'react'
import { FaBicycle } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';

export const Newscard = ({ img, title, description, location, eta, reverse }) => {
    return (
        <div className="card mb-3 mb-4" >
            <div className={`row g-0 ${reverse && 'flex-row-reverse'}`}>
                <div className="col-md-4">
                    <img style={{ width: '100%' }} src={img} />
                </div>
                <div className="col-md-8" style={{ display: 'flex', flexDirection: 'column' }} >
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <h5><a href={location} target="_blank" ><FiMapPin />&nbsp;Open In Google Maps</a></h5>
                    </div>
                    <div className="mb-3 ml-3" >
                        <span><AiFillCar size={32} /> {eta.bicycle}</span>
                    </div>
                </div>
            </div>

        </div>

    )
}
