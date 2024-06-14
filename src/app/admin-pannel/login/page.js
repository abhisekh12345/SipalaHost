"use client"
import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { setCredentials } from '@/redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useSigninMutation } from '@/redux/slices/userApiSlice';
import { useRouter } from 'next/navigation';


const Page = () => {
    const [signin, { isLoading,isError }] = useSigninMutation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [catchError, setCatchError] = useState('')
    const dispatch = useDispatch();
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");  // Add this line
        try {
            console.log("now dispatch");  // Add this line
            const res = await signin({ username, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            console.log('response data', res);
             router.push("/admin-pannel/dashboard");  // Correct navigation method
           
        } catch (err) {
            console.log(err?.data?.error || err?.data?.message);
            setCatchError(err?.data?.error || err?.data?.message)
        }
    };

    return (
        <div className=' h-[85vh] flex justify-center items-center'>
            <div className=''>
                <div className='w-[400px] py-7 px-9 border border-gray-200 rounded-lg'>
                    <div className='flex items-center'>
                        <CgProfile size={30} />
                        <h1 className='ml-2'>Admin Login</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-4'>
                            <label htmlFor='username' className='block'>Username</label>
                            <input 
                                type='text' 
                                id='username' 
                                value={username} 
                                autoComplete='username'
                                onChange={(e) => setUsername(e.target.value)} 
                                className='border border-gray-300 w-full px-2 py-1 mt-1 rounded-lg'
                            />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor='password' className='block'>Password</label>
                            <input 
                                type='password' 
                                id='password' 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                autoComplete='current-password'
                                className='border border-gray-300 w-full px-2 py-1 mt-1 rounded-lg'
                            />
                        </div>
                        <div className='mt-4'>
                            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
                                {isLoading ? 'Loading...' : 'Login'}
                            </button>
                        </div>
                    </form>
                     {
                        catchError && <div className='mt-4 text-red-500'>{catchError}</div>
                     }
                </div>
            </div>
        </div>
    );
};

export default Page;
