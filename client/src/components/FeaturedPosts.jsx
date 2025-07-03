import React from 'react'
import { Link } from 'react-router-dom'


const FeaturedPosts = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
      {/* First Post */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4 '>
        {/* Image */}
        <img
          src="featured1.jpeg"
          alt="Featured Post"
          className='rounded-3xl object-cover'
        />
        {/* Deatails */}
        <div className='flex items-center justify-baseline gap-4 '>
          <h1 className='text-lg font-bold'>01.</h1>
          <Link className='text-blue-400 lg:text-lg font-serif '>Web Design</Link>
          <span className=' lg:text-lg text-gray-400'>2 days ago</span>
        </div>
        {/* Title */}
        
          <Link className='text-xl font-semibold lg:text-3xl lg:font-bold w-full'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Link>
        
      </div>
      {/* Other Posts */}

      
      <div className='w-full lg:w-1/2 flex flex-col gap-4 '>
      
      
      </div>
    </div>
  )
}

export default FeaturedPosts