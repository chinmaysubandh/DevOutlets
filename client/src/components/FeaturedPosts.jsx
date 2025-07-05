import React from 'react'
import { Link } from 'react-router-dom'


const FeaturedPosts = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8 pb-4'>
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

      
      <div className='w-full lg:w-1/2 flex flex-col gap-4  '>
        {/* second */}  
        <div className='flex justify-between  lg:h-1/3 w-full bg-[#e6e6ff] rounded-sm'>
          {/* Image */}
          <img src="featured2.jpeg" className='rounded-3xl w-1/3 object-cover aspect-video' />
          
          {/* Details and Title */}
          <div className='w-2/3 px-2'>
            {/*  Details*/}
            <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
              <h1 className='text-lg font-bold'>01.</h1>
              <Link className='text-blue-400 lg:text-lg font-serif '>Web Design</Link>
              <span className=' lg:text-lg text-gray-400'>2 days ago</span>
            </div>
           
            {/* Title */}
            <Link to='/test' className='text-base sm:text-sm md:text-2xl lg:text-xl xl:text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
          </div>
        </div>


        {/* third */}
        <div className='flex justify-between  lg:h-1/3 w-full bg-[#e6e6ff] rounded-sm'>
          {/* Image */}
          <img src="featured2.jpeg" className='rounded-3xl w-1/3 object-cover aspect-video' />

          {/* Details and Title */}
          <div className='w-2/3 px-2'>
            {/*  Details*/}
            <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
              <h1 className='text-lg font-bold'>01.</h1>
              <Link className='text-blue-400 lg:text-lg font-serif '>Web Design</Link>
              <span className=' lg:text-lg text-gray-400'>2 days ago</span>
            </div>

            {/* Title */}
            <Link to='/test' className='text-base sm:text-sm md:text-2xl lg:text-xl xl:text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
          </div>
        </div>
        {/* fourth */}
        <div className='flex justify-between  lg:h-1/3 w-full bg-[#e6e6ff] rounded-sm'>
          {/* Image */}
          <img src="featured2.jpeg" className='rounded-3xl w-1/3 object-cover aspect-video' />

          {/* Details and Title */}
          <div className='w-2/3 px-2'>
            {/*  Details*/}
            <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
              <h1 className='text-lg font-bold'>01.</h1>
              <Link className='text-blue-400 lg:text-lg font-serif '>Web Design</Link>
              <span className=' lg:text-lg text-gray-400'>2 days ago</span>
            </div>

            {/* Title */}
            <Link to='/test' className='text-base sm:text-sm md:text-2xl lg:text-xl xl:text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPosts