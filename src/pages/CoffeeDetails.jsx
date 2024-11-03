import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeeDetails = () => {
    const { id } = useParams()
    const allData = useLoaderData();
    // const [coffee, setCoffee] = useState()
    const filterData = allData.find(coffee => coffee.id === id)
    // setCoffee(filterData)
    console.log(filterData)
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default CoffeeDetails;