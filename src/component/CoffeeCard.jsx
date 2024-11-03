import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeeCard = () => {
    const [coffee,setCoffee]=useState([])
    const {category} = useParams();
    const data=useLoaderData()
    console.log(category);
    console.log(data);
    useEffect(()=>{

    },[])
    return (
        <div>
            
        </div>
    );
};

export default CoffeeCard;