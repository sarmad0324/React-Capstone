import logo from '../assets/nav-logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  const [nav, setnav] = useState(false)
  function open() {
    nav ? setnav(false) : setnav(true)
  }
  return (
    <nav className="md:flex md:justify-between ">
      <div className='flex justify-between items-center md:w-1/5'>
        <img alt="logo" src={logo} className='w-48 mix-blend-multiply py-1 px-3 md:pl-7 md:py-0 md:w-56' />
        <div className='text-2xl pr-6 md:hidden'>
          {nav ? <i className="fa-solid fa-xmark" onClick={open}></i> : 
          <i className="fa-solid fa-bars" onClick={open} ></i>}
        </div>
      </div>

      <ul className={`${nav ? 'block': 'hidden md:grid md:grid-cols-6 items-center md:w-4/5'}  `}>
        <Link to='/'  className='font-bold flex font-serif justify-center py-6 text-lg md:no-underline md:py-5  hover:bg-[#f4ce14]'>Home</Link>
        <Link to='/about' className='font-bold flex font-serif justify-center py-6 text-lg md:no-underline md:py-5  hover:bg-[#f4ce14]'>About</Link>
        <a href={require("../assets/menu.webp")} target='blank' className='font-bold flex font-serif justify-center py-6 text-lg md:no-underline md:py-5  hover:bg-[#f4ce14]'>Menu</a>
        <Link to='/reservation' className='font-bold flex font-serif justify-center py-6 text-lg md:no-underline md:py-5  hover:bg-[#f4ce14]'>Reservation</Link>
        <Link to='/order' className='font-bold flex font-serif justify-center py-6 text-lg md:no-underline md:py-5  hover:bg-[#f4ce14]'>Order</Link>
        <Link to='/login' className='font-bold flex font-serif justify-center py-6 text-lg md:no-underline md:py-5  hover:bg-[#f4ce14]'>Login</Link>
      </ul>
    </nav>
  )
}

export default Nav
