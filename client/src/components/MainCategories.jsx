import React from 'react'
import { Link } from 'react-router-dom'

const MainCategories = () => {
  return (
    <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8 '>
      {/* All links */}
      <div className='flex-1  flex items-center justify-between flex-wrap max-lg:justify-baseline '>
        <Link className='bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 shadow-sm '>All Posts</Link>
        <Link className='bg-white hover:bg-gray-100 px-4 py-2 rounded-full  '>Web Design</Link>
        <Link className='bg-white hover:bg-gray-100 px-4 py-2 rounded-full  '>Development</Link>
        <Link className='bg-white hover:bg-gray-100 px-4 py-2 rounded-full  '>Databases</Link>
        <Link className='bg-white hover:bg-gray-100 px-4 py-2 rounded-full  '>Search Engine</Link>
        <Link className='bg-white hover:bg-gray-100 px-4 py-2 rounded-full  '>Markating</Link>
        
      </div>
      
      {/* search */}
      <div className='flex'>
        <h2 className='font-bold px-4 py-2'>|</h2>
        <input type="text" placeholder='Search'  className='text-black text-center rounded-full bg-gray-100 ring-0 placeholder:text-gray-400 py-2 px-2 hover:scale-105' />
      </div>
    </div>
  )
}

export default MainCategories