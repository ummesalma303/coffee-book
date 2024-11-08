import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

const Card = ({ coffee }) => {
    // console.log(coffee)
    const {pathname}=useLocation()
    console.log(pathname);
    const { name, image, category, type, origin, popularity, rating ,id} = coffee;
    
    return (
        <div>
            <Link to={`/coffeeDetails/${id}`}>
            <div className="card card-compact bg-base-100 shadow-xl">
  <figure>
    <img className='aspect-video' src={image} alt={name} />
  </figure>
  <div className=" p-6">
                    <h2 className="card-title text-3xl font-normal">{name}</h2>
                    <h3 className='text-lg'>Category: { category}</h3>
                    <h3 className='text-lg'>Type: { type}</h3>
                    <h3 className='text-lg'>Origin: { origin}</h3>
                    <h3 className='text-lg'>Popularity: {popularity}</h3>
                    <h3 className='text-lg'>Ratting: { rating}</h3>
  </div>
           </div>
            </Link>
            {/* {pathname ==='/dashBoard'&& <span className='absolute -top-1 -right-1 bg-yellow-500 text-2xl'><MdDeleteForever /></span>} */}

            {pathname === '/dashBoard' && (
        <div
          className='absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5'
        >
          <FaTrashAlt size={20} />
        </div>
      )}
        </div>
    );
};

Card.propTypes = {
    
};

export default Card;