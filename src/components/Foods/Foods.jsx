import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const meals = useLoaderData()
    const foods = meals.meals;
    // console.log(foods)
    return (
        <div>
            <h2 className='text-center font-bold text-4xl text-red-600 mt-5'>This is food loading</h2>
            <div className='grid grid-cols-3 gap-5 mt-10 px-20'>
                {
                    foods.map(food => <Food
                        key={food.id}
                        food={food}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;