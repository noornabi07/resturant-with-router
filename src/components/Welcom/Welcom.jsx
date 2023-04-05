import React from 'react';
import logo from '../../../public/resturant-logo.png'
const Welcom = () => {
    return (
        <div className='md:w-3/4 md:mx-auto mt-5 text-center mx-4'>
            <h2 className='font-bold text-5xl text-red-600 mb-10 mt-6'>NOORNABI <span className='text-lime-500'>RESTURANT</span> IN <span className='text-purple-500'>BANGLADESH</span></h2>
            <img className='w-100 h-96 mx-auto' src={logo} alt="" />
        </div>
    );
};

export default Welcom;