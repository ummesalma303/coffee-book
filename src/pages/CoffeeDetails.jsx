import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeeDetails = () => {
    const { id } = useParams()
    const allData = useLoaderData();
    const [coffee, setCoffee] = useState({})
    useEffect(()=>{
    const filterData = allData.find(coffee => coffee.id === parseInt(id))
    setCoffee(filterData)

    },[])
    const {
        name,image,ingredients,nutrition_info,description,making_process,rating,popularity,
      } = coffee;
    console.log(coffee);
    return (
        <div>
           <div className="card card-compact bg-base-100 shadow-xl w-[90%] mx-auto my-12">
  <figure>
    <img className='aspect-video' src={image} alt={name} />
  </figure>
  <div className="card-body px-9">
                    <div className='flex justify-between'>
                        <div>
                        <h2 className="card-title text-3xl font-normal">{name}</h2>
                    <h3 className='text-lg'>Popularity: {popularity}</h3>
                    <h3 className='text-lg'>Ratting: { rating}</h3> <br />
                        </div>
                        <button className='btn btn-warning'>Add Favorite</button>
                    </div>

                    <h2 className="card-title text-3xl font-normal">Making Process:</h2>
                    <p>{making_process}</p><br /> 

                    <h2 className="card-title text-3xl font-normal">Ingredients:</h2>
                    <ul className='list-disc px-9'>
                    {
                        ingredients&&ingredients.map((coffee,i)=><li key={i}>{coffee}</li>)
                    }
                    </ul><br />

                    <h2 className="card-title text-3xl font-normal">Nutrition:</h2>
                    <ul className='list-disc px-9'>
                    {
                        nutrition_info&&Object.keys(nutrition_info).map((coffee,i)=><li key={i}>{coffee}</li>)
                    }
                    </ul><br />
                    <p>Description: {description}</p>
  </div>
           </div>
        </div>
    );
};

export default CoffeeDetails;