import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ coffee }) => {
    // console.log(coffee)
    const { name, image, category, type, origin, popularity, rating } = coffee;
    // const handleRatting = () => {
    //     coffee.sort((a,b)=>a.rating-b.rating)
    // }
    return (
        <div>
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
        </div>
    );
};

Card.propTypes = {
    
};

export default Card;