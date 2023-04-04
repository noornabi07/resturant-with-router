import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Welcom from '../Welcom/Welcom';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center mt-4 text-4xl font-bold text-red-600'>Welcome Boss!!</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;