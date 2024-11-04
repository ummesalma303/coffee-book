import React, { useEffect, useState } from 'react';
import Heading from '../component/Heading';
import { useLoaderData, useLocation } from 'react-router-dom';
import { getAllFavorite } from '../utility';
import Card from '../component/Card';

const DashBoard = () => {
   
    const allData= useLoaderData();
    const [coffees, setCoffee] = useState([]);
    useEffect(()=>{
        const favorite= getAllFavorite()

        const favoriteInt= favorite.map(id=>parseInt(id))
        const filterData= allData.filter(data=>favoriteInt.includes(data.id) );
        setCoffee(filterData);
    },[])
    return (
        <div className='flex justify-center items-center w-[90%] mx-auto my-8'>
          <div>
         <div className='my-6'>
         <Heading title={'Welcome to Dashboard'} subTitle={'Manage coffees that you have previously added as favorite. You can view or remove them from here.'}></Heading>
         </div>
          <div className="card card-compact bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {
                coffees.map(coffee=><Card key={coffee.id} coffee={coffee}></Card>)
            }
          </div>
          </div>
        </div>
    );
};

export default DashBoard;