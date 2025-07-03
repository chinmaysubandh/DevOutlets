import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';



export const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between '>
            {/* Logo */}
            <Link to="/" className='flex items-center justify-between gap-4 text-2xl font-bold'>
                <img src="\src\assets\logo.png" className='w-8 h-8' alt="" />
                <span>LammaPosts</span>
            </Link>
            {/* Mobile Button */}
            <div className='md:hidden flex '>
                <button className='text-3xl  cursor-pointer' onClick={() => setOpen((prev) => !(prev))} >
                    {open ? "X" : <img className='font-bold' height={18} width={20} src="\src\assets\menu.png" alt="" />}

                </button>
            </div>
            {/* Mobile Link List */}
            <div className={`md:hidden w-full h-screen flex flex-col items-center justify-center fixed top-16 gap-8 font-medium text-lg  transition-all duration-400 ease-in-out ${open ? ' translate-x-0' : ' translate-x-full'} `}>
                <Link to="/" >Trending</Link>
                <Link to="/" >Most Popular</Link>
                <Link to="/" >About</Link>
                <Link to="/">
                    <button className='px-4 py-2 rounded-3xl bg-blue-600 text-white hover:shadow-black hover:shadow-xl/30 hover:bg-blue-950  '>Login✌️</button>
                </Link>
            </div>
            {/* Desktop Menu */}
            <div className='hidden md:flex items gap-8 lx:gap-12 font-medium items-center'>
                <Link to="/" >Trending</Link>
                <Link to="/" >Most Popular</Link>
                <Link to="/" >About</Link>
                <Link to="/login">
                    <button className='px-4 py-2 rounded-3xl bg-blue-600 text-white hover:bg-blue-950
                     hover:shadow-black hover:shadow-xl/30'>Login✌️</button>
                </Link>

                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>

            </div>
        </div>
    )
}
