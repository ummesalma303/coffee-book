import React, { useState } from 'react';
import Card from '../component/Card';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffee] = useState(data);
    ;
  
    const handleRatting = (sortTpe) => {
        if (sortTpe==='rating') {
        const sortRatting = [...data].sort((a, b) =>a.rating - b.rating );
            setCoffee(sortRatting)
        } else if(sortTpe==='popularity'){
            const sortRatting = [...data].sort((a, b) =>a.popularity - b.popularity );
            setCoffee(sortRatting)
        }
        // console.log(sortRatting)
    }
    return (
        <div className='my-7 w-[90%] mx-auto'>
             <Helmet>
                <title>Coffee Book - Coffee</title>
            </Helmet>
            <div className='flex justify-between items-center my-10'>
                <h2 className='text-4xl font-light'>Sort Coffee&apos;s by Popularity & Rating -&gt;</h2>
                <div>
                    <button onClick={()=>handleRatting('rating')} className="btn btn-warning mr-4"> Sort By Popularity</button>
                    <button onClick={()=>handleRatting('popularity')} className="btn btn-warning">Sort By Ratting </button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto gap-10 justify-items-center'>
            {
                coffees.map(coffee=><Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
        </div>
    );
};

export default Coffees;