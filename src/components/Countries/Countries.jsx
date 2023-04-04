import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countries = useLoaderData()
    // console.log(countries);
    return (
        <div>
            <h2 className='text-center text-4xl font-bold text-red-600 mt-4'>All <span className='text-purple-500'>Countries</span> Service <span className='text-purple-500'>Provider</span></h2>
            <div className='grid grid-cols-3 gap-5 mt-10 px-20 pb-5'>
                {
                    countries.slice(0, 21)?.map(country => <Country
                        key={country.id}
                        country={country}

                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;