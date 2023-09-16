import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

const activeClass = (params) => {
    return params.isActive ? "active-item" : ""
}

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center h-[50px] sm:max-w-[80%] md:w-[60%]  bg-white mx-auto mt-5 font-bold text-lg'>
                <div>
                    <NavLink to="/" className={activeClass}>All Quotes</NavLink>
                </div>
                <div>
                    <NavLink to="/randomquotes" className={activeClass}>Random Quotes</NavLink>
                </div>
                <div>
                    <NavLink to="/authorquotes" className={activeClass}>Author Quotes</NavLink>
                </div>
            </div>
            <hr className='bg-gray-600'></hr>
        </>
    )
}

export default Navbar;