import React from 'react';

const Contact = () => {
    return (
        <div className='rounded-lg md:w-3/5 mx-auto mt-10 mx-5 py-4 text-center bg-gray-700'>
            <h2 className='font-bold text-4xl text-red-500 mb-10'>Welcom To Our <span className='text-purple-500'>Resturant</span></h2>
            <div>
                <form action="">

                    <input className=' md:w-96 py-2 px-4 rounded' type="text" placeholder='First Name' /> <br />

                    <input className=' md:w-96 py-2 px-4 rounded my-3' type="text" placeholder='Last Name' />  <br />

                    <input className=' md:w-96 py-2 px-4 rounded' type="email" placeholder='email' /> <br />
    
                    <input className=' md:w-96 py-2 px-4 rounded mt-3' type="text" placeholder='Phone Number' /> <br />
                    <div className='md:flex mx-auto mt-10 md:ml-72'>
                        <input className='px-8 rounded-lg mb-4 md:mb-0 text-white py-2 md:mr-3  font-bold bg-green-600 hover:bg-purple-500' type="submit" value="Submit" /> <br />
                        <input className='px-8 rounded-lg text-white py-2 hover:bg-yellow-500 font-bold bg-red-600' type="reset" value="Reset" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;