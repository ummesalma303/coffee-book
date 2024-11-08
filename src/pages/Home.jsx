import React from 'react';
import Banner from '../component/Banner';
import Heading from '../component/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../component/Categories';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const categories= useLoaderData()
    return (
        <div className='mx-w-7xl mx-auto'>
            <Helmet>
                <title>Coffee Book - Home</title>
            </Helmet>

           <Banner></Banner>
            <Heading title={'Browse Coffees by Category'} subTitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></Heading>

            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
                       
        </div>
    );
};

export default Home;