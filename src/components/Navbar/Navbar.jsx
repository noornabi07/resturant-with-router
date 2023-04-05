import React from 'react';
import img from '../../../public/logo-small.png'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
    return (
        <div className='text-center bg-slate-900 text-white py-5 flex items-center justify-between px-20'>
            <img src={img} alt="" />
            <div>
                <ActiveLink className='px-8 text-2xl font-semibold' to="/home">Home</ActiveLink>
                <ActiveLink className='px-8 text-2xl font-semibold' to="/country">Country</ActiveLink>
                <ActiveLink className='px-8 text-2xl font-semibold' to="/foods">Foods</ActiveLink>
                <ActiveLink className='px-8 text-2xl font-semibold' to="/contact">Contact</ActiveLink>
                <ActiveLink className='px-8 text-2xl font-semibold' to="/login">Login</ActiveLink>
            </div>
        </div>
    );
};

export default Navbar;