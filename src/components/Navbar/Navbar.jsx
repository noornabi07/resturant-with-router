import React from 'react';
import img from '../../../public/logo-small.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='text-center bg-slate-900 text-white py-5 flex items-center justify-between px-20'>
            <img src={img} alt="" />
            <div>
                <Link className='px-8 text-2xl font-semibold hover:text-orange-400' to="/home">Home</Link>
                <Link className='px-8 text-2xl font-semibold hover:text-orange-400' to="/country">Country</Link>
                <Link className='px-8 text-2xl font-semibold hover:text-orange-400' to="/foods">Foods</Link>
                <Link className='px-8 text-2xl font-semibold hover:text-orange-400' to="/contact">Contact</Link>
                <Link className='px-8 text-2xl font-semibold hover:text-orange-400' to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;