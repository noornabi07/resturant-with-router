import React from 'react';
import { Link } from 'react-router-dom';

const Food = (props) => {
    const {strMeal, strMealThumb, strArea, idMeal} = props.food;
    return (
        <div className='w-96 border-4 border-gray-500 p-5 rounded-lg text-center'>
            <img className='w-full h-64 rounded-lg mb-4' src={strMealThumb} alt="" />
            <h2 className='font-semibold text-2xl text-lime-500'>{strMeal}</h2>
            <p className='font-semibold text-2xl text-red-500'>Price: ${idMeal}</p>
            <p className='font-semibold text-2xl text-purple-500'>{strArea}</p>
            <button className='border-2 py-2 px-4 bg-green-600 font-bold text-white rounded-lg mt-4 hover:bg-purple-600'><Link>Show Details</Link></button>
        </div>
    );
};

export default Food;