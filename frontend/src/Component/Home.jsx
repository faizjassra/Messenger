import { useEffect } from 'react'
import Navbar from './Navbar';
import { RxAvatar } from "react-icons/rx";


export default function Home() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log()
  }
  useEffect(() => {
    async function getUser() {
      let user = await fetch('/home')
      let data = await user.json()
      console.log(data)
    }

    return () => {
      getUser()
    }
  }, [])

  return (
    <>
      < Navbar />
      <div className="md:max-w-2xl" >
        <form className="w-72 ml-11 max-w-md mx-auto pt-4 mx-5" onSubmit={handleSubmit}>
          <div className="flex justify-items-center border-b border-black py-2">
            <input className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search for friend" aria-label="Full name" />
          </div>
          <div className='mx-48 absolute right-20 flex justify-end'><RxAvatar size={40} style={{ marginLeft: '140px', marginRight: '140px' }} /></div>
          <h1 className='text-center font-serif font-bold text-black text-2xl py-1 mx-40 absolute right-20 '> Faiz Siddiqui</h1>
          <div className="hover:md:animate-pulse rotate-180 absolute inset-y-12 right-20 mx-96 my-12 border-gray-400 border-2 dark:bg-gray-700"></div>

        </form>
        <div className='flex justify-center max-w-md mx-auto py-4 absolute inset-x-0 bottom-0'>
          <textarea id="message" rows="5" className="block p-2.5 w-72  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
        <div className='flex justify-end max-w-md mx-auto px-44 py-5 absolute inset-x-14 bottom-0 mr-56'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
              Send
            </span>
          </button>
        </div>
      </div>

    </>
  )
}