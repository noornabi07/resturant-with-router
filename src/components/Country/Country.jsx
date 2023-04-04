import React from 'react';

const Country = (props) => {
    // console.log(props.country)
    const {name, flags, population, region, status} = props.country;
    return (
        <div className='border border-gray-500 p-8 rounded-xl text-center'>
            <img className='mx-auto w-72 mb-4 rounded' src={flags.png} alt="" />
            <h2 className='font-semibold text-2xl'>Name: {name.common}</h2>
            <p className='font-semibold text-2xl text-red-500'>{population}</p>
            <p className='font-semibold text-2xl'>Region: {region}</p>
            <p className='font-semibold text-2xl'>{status}</p>
        </div>
    );
};

export default Country;