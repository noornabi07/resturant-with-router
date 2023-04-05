import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Welcom from '../Welcom/Welcom';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center mt-4 text-4xl font-bold text-red-600'>Welcome Boss!!</h2>
            <div className='text-center mt-3 text-2xl text-red-600'>{navigation.state === 'loading' && 'Loading...'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;