import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
           <span className='logo'>GheetaBooking</span>
           <div className='navItem'>
               <button className='navButton'>Register</button>
               <button className='navButton'>Login</button>
               
           </div>
        </div>
    </div>
  )
}
