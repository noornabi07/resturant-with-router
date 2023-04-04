import React from 'react';

const Login = () => {
    return (
        <div className='mx-auto w-3/4 bg-slate-700 p-9 text-center mt-10 rounded-xl'>
            <h2 className='text-white text-3xl font-bold mb-4'>Login Information</h2>
            <form action="">
                <input className='border rounded py-2 px-8 font-bold w-96 mb-4' type="text"  placeholder='Username'/> <br />
                <input className='border rounded py-2 px-8 font-bold w-96' type="password"  placeholder='Password'/>
                <div className='mt-5'>
                    <input className='py-2 px-8 bg-green-700 text-white font-bold mr-3 rounded-lg' type="submit" value="Submit" />
                    <input className='py-2 px-8 bg-red-700 text-white font-bold rounded-lg' type="reset" value="Reset" />
                </div>
            </form>
        </div>
    );
};

export default Login;