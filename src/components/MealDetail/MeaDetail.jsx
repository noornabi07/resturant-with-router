import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const MeaDetail = () => {
    const meal = useLoaderData()
    const mealDetail = meal.meals[0];
    const { strMeal, strMealThumb, strArea, idMeal } = mealDetail;

    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1);
    }

    return (
        <div className='text-center mt-5 rounded-lg p-5 bg-gray-600 w-1/4 mx-auto'>
            <img className='w-96 mx-auto rounded-lg' src={strMealThumb} alt="" />
            <p className='text-white font-bold text-2xl mt-5'>{strMeal}</p>
            <p className='text-red-500 font-bold '>{strArea}</p>
            <p className='text-red-500 font-semibold text-2xl'>${idMeal}</p>
            <div className='mt-5'>
                <button className='font-bold bg-green-700 py-2 px-2 rounded text-white mr-3'>Order Now</button>
                <button onClick={handleBack} className='font-bold bg-red-700 py-2 px-2 rounded text-white'>Cancel</button>
            </div>
        </div>
    );
};

export default MeaDetail;