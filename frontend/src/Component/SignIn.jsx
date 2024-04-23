import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            email,
            password
        }
        console.log(email, password)
        try {
            let req = await fetch('/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
            let msg = await req.json()
            console.log(msg)
            if (msg == 'success') {
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className='w-full bg-gray-300 h-screen flex flex-col lg:flex-row justify-evenly  items-center' >

                <div className='text-center p-5 '>
                    <h1 className=" font-serif font-bold text-blue-700 lg:text-6xl text-3xl">
                        Messenger
                    </h1>
                    <p className='pt-4 text-blue-500 font-serif text-base font-bold' >Messenger helps you connect and share with the people in your life.</p>
                </div>


                <div className=" shadow-2xl bg-gray-100 rounded-xl hover:rounded-3xl hover:shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6" action="POST" onSubmit={handleSubmit}>

                            <input
                                type="email"
                                name="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-2xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />

                            <input
                                type="password"
                                name="Password"
                                maxlength="6"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-2xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                            <br />
                            <div className="flex justify-center items-center w-80 h-5">
                                <button type='submit' className="  bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 border-blue-700 rounded w-96">
                                    Log in
                                </button>
                            </div>
                            <div className='flex flex-row justify-center items-center'>
                                <Link to="/Forgotpassword" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                            </div>
                            <div className="hover:md:animate-pulse mx-2 my-8 border-t-4 border-gray-400 border-2 dark:bg-gray-700"></div>
                            <div className="flex justify-center items-center ">
                                <Link to="/SignUp" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 border-blue-700 rounded w-full text-center">

                                    Create New account

                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}