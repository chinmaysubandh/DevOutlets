import React, { useState } from 'react'



export const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between '>
            {/* Logo */}
            <div className='flex items-center justify-between gap-4 text-2xl font-bold'>
                <img src="\src\assets\logo.png" className='w-8 h-8' alt="" />
                <span>LammaPosts</span>
            </div>
            {/* Mobile Button */}
            <div className='md:hidden flex '>
                <div className='text-3xl  cursor-pointer' onClick={() => setOpen((prev) => !(prev))} >
                    {open ? "x" : "="}
                </div>
            </div>
            {/* Mobile Link List */}
            <div className={`md:hidden w-full h-screen flex flex-col items-center justify-center absolute top-16 gap-8 font-medium text-lg  transition-all ease-in-out ${open ? '-right-0':'-right-[100%]'} `}>
                <a href="/" >Home</a>
                <a href="/" >Trending</a>
                <a href="/" >Most Popular</a>
                <a href="/" >About</a>
                <a href="/">
                    <button className='px-4 py-2 rounded-3xl bg-blue-800 text-white'>Login✌️</button>
                </a>
            </div>
            {/* Desktop Menu */}
            <div className='hidden md:flex items gap-8 lx:gap-12 font-medium items-center'>
                <a href="/" >Home</a>
                <a href="/" >Trending</a>
                <a href="/" >Most Popular</a>
                <a href="/" >About</a>
                <a href="/">
                    <button className='px-4 py-2 rounded-3xl bg-blue-800 text-white'>Login✌️</button>
                </a> 
                
            </div>
        </div>
    )
}
