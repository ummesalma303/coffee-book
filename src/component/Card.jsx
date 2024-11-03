import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ coffee }) => {
    // console.log(coffee)
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
        </div>
    );
};

Card.propTypes = {
    
};

export default Card;