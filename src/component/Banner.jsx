import React from 'react';
import banner from '../assets/banner.jpg' 
const Banner = () => {
    return (
        <div>
            <img className='w-[90%] my-8 mx-auto h-[600px]' src={banner} alt="" />
        </div>
    );
};

export default Banner;