import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <footer className='bg-[#495e57] text-white font-serif relative'>
      <div class="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="md:w-1/4 flex-shrink-0  mx-auto text-center md:text-left py-5">
            <img alt="footer img" src={require("../assets/footer-logo.png")} className='w-24 h-40' />
          </div>
          <div class=" md:w-1/4 w-full px-4 py-5 grid ">
            <h1 className='text-2xl font-bold pb-4'>Navigation</h1>
            <Link to='/' className='font-semibold hover:underline' >Home</Link>
            <Link to='/about' className='font-semibold hover:underline' >About</Link>
            <a href={require("../assets/menu.webp")} target='blank'Name='font-semibold hover:underline'>Menu</a>
            <Link to='/reservation' className='font-semibold hover:underline' >Reservation</Link>
            <Link to='/order' className='font-semibold hover:underline' >Order</Link>
            <Link to='/login' className='font-semibold hover:underline' >Login</Link>
          </div>
          <div class="md:w-1/4 w-full px-4 py-5">
            <ul className=' grid gap-2'>
              <h1 className='text-2xl font-bold pb-4'>Contact Us</h1>
              <li>2395 Maldove Way, Chicago Illinois</li>
              <li>(629)-243-6827</li>
              <a href="mailto: info@littlelemon.com" target="blank">
                info@littlelemon.com
              </a>
            </ul>
          </div>
          <div class="md:w-1/4 w-full px-4 grid py-5">
            <h1 className="text-xl">Connect With Us</h1>
            <div className="flex gap-3 justify-center sm:grid sm:gap-4 md:justify-start">
              <a
                className='text-blue-500'
                href="https://www.facebook.com/thelittlelemonshop/"
                target="blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                className='text-pink-500'
                href="https://www.instagram.com/littlelemonmoon/"
                target="blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className='text-red-500'
                href="https://www.youtube.com/watch?v=3Li-FfypZYE"
                target="blank"
                rel="noreferrer"
              >
                Youtube
              </a>
            </div>
          </div>

        </div>
      </div>
      
     
    </footer>


  )
}

export default Footer
