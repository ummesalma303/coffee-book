import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCard = () => {
    const [coffees, setCoffee] = useState([]);
    const { category } = useParams();
    const data = useLoaderData()
  
    const navigate= useNavigate()

    useEffect(() => {
        if (category) {
        const filteredByCategory = [...data].filter(coffee => coffee.category === category);
        setCoffee(filteredByCategory)
        } else {
            setCoffee(data)
        }
    }, [category])

    useEffect(() => {
        const showData = data.slice(0, 6)
        setCoffee(showData)
    },[])
    
    console.log(coffees)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto gap-10 justify-items-center'>
            {
                coffees.map(coffee=><Card key={coffee.id} coffee={coffee}></Card>)
            }
            <button onClick={()=>navigate('/coffees')} className='btn btn-warning mb-12'>View All</button>
        </div>
    );
};

export default CoffeeCard;