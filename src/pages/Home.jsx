import React from 'react';
import Banner from '../component/Banner';
import Heading from '../component/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../component/Categories';

const Home = () => {
    const categories= useLoaderData()
    return (
        <div className='mx-w-7xl mx-auto'>
           <Banner></Banner>
           {/* <Heading></Heading> */}
            <Heading title={'Browse Coffees by Category'} subTitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></Heading>

            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
                       
        </div>
    );
};

export default Home;