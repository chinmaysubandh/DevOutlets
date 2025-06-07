import React from 'react'



export const Navbar = () => {
    return (
        <div className='w-full items-center justify-between'>
            {/* Logo */}
            <div>
                <img src="\src\assets\logo.png" className='w-8 h-8' alt="" />
                <span>LammaPosts</span>
            </div>
            {/* Mobile Menu */}
            <div className='md:hidden flex '>Mobile menu </div>
            {/* Desktop Menu */}
            <div className='hidden md:flex'>
                Desktop menu
            </div>
        </div>
    )
}
