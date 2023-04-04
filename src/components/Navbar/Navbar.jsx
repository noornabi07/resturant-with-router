import React from 'react';

const Navbar = () => {
    return (
        <div className='text-center bg-slate-900 text-white py-5'>
            <a className='px-8 font-bold hover:text-orange-400' href="/home">Home</a>
            <a className='px-8 font-bold hover:text-orange-400' href="/service">Service</a>
            <a className='px-8 font-bold hover:text-orange-400' href="/product">Product</a>
            <a className='px-8 font-bold hover:text-orange-400' href="/contact">Contact</a>
            <a className='px-8 font-bold hover:text-orange-400' href="/login">Login</a>
        </div>
    );
};

export default Navbar;