import React from 'react'
import { Link } from 'react-router-dom'

const PostListItems = () => {
  return (
      <div className='flex flex-col xl:flex-row gap-8'>
          {/* Image */}
          <div className='md:hidden xl:block'>
              <img src="postImg.jpeg" alt="" className=' rounded-2xl object-cover' />
          </div>
          {/* Details */}
          <div className='flex flex-col'>
              <Link to='/test' className='max-sm:text-2xl sm:text-3xl lg:text-4xl font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Link>

              <div className='flex flex-row gap-2 text-lg py-1'>
                  <span className='text-gray-400'>Written by</span>
                  <Link to='/test' className='text-blue-400' >Chinmay </Link>
                  <span className='text-gray-400'>on</span>
                  <Link to='/test' className='text-blue-400'>Web Design</Link>
                  <span className='text-gray-400'>2 days ago</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae animi aliquid aspernatur accusamus ut illo cum quod optio ducimus sunt distinctio reiciendis pariatur exercitationem tempore molestias accusantium iure, culpa quas.</p>
              <Link to='/test' className='text-blue-400 underline pt-1'>Read More.</Link>
          </div>
    </div>
  )
}

export default PostListItems