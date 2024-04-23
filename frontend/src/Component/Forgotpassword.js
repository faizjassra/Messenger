import React from 'react';
import { Link } from 'react-router-dom';


export default function Forgotpassword() {
    return (
        <>
            <div className='w-full bg-gray-300 h-screen flex flex-col lg:flex-row justify-evenly  items-center  ' >

                <div className='text-center p-5 '>
                    <h1 className="font-serif font-bold text-purple-500 lg:text-5xl text-3xl">
                        Forgot Your Password
                    </h1>
                    <p className='pt-4 text-purple-400 font-serif text-base font-bold' >Enter your email address and we will send you reset your password.</p>
                </div>


                <div className=" shadow-2xl bg-gray-100 rounded-xl hover:rounded-3xl hover:shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6" action="POST" >

                            <input
                                type="email address"
                                name="Email Address"
                                placeholder="Email Address"
                                className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-2xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                            <br />
                            <div className="flex justify-center items-center w-80 h-5">
                                <button type='continue' className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 border-blue-700 rounded-3xl w-full">
                                    Continue
                                </button>
                            </div>

                            <div className="hover:md:animate-pulse mx-2 my-8 border-gray-300 border-2 dark:bg-gray-700" />

                            <div className="flex justify-center items-center ">
                                <Link to="/SignIn" className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 border-blue-700 rounded-3xl w-full text-center">
                                    Back to SignIn
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}