import React from 'react'


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
        {/* Title */}
      </div>
      {/* Other Posts */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4 '></div>
    </div>
  )
}

export default FeaturedPosts