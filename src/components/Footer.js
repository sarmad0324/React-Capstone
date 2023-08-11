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
            <Link to='/reservation' className='font-semibold hover:underline' >Redervation</Link>
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
            <nav class="flex justify-center py-5  md:justify-normal">
            
            </nav>
          </div>

        </div>
      </div>
      
     
    </footer>


  )
}

export default Footer
/*<menu className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 md:py-10'>
          <div className='flex justify-center pt-5 sm:justify-end sm:pr-16 '>
            <img alt="footer img" src={require("../assets/footer-logo.png")} className='w-24 h-40'/>
          </div>
          <ul className='text-left px-8 grid pt-4 gap-2'>
            <h1 className='text-2xl font-bold pb-4'>Navigation</h1>
            <Link to='/' className='font-semibold hover:underline' >Home</Link>
            <Link to='/about' className='font-semibold hover:underline' >About</Link>
            <Link to='/menu' className='font-semibold hover:underline' >Menu</Link>
            <Link to='/reservation' className='font-semibold hover:underline' >Redervation</Link>
            <Link to='/order' className='font-semibold hover:underline' >Order</Link>
            <Link to='/login' className='font-semibold hover:underline' >Login</Link>
          </ul>
          <ul className='text-left px-8 pt-4 grid gap-2'>
            <h1 className='text-2xl font-bold pb-4'>Contact Us</h1>
            <li>2395 Maldove Way, Chicago Illinois</li>
            <li>(629)-243-6827</li>
            <a href="mailto: info@littlelemon.com" target="blank">
              info@littlelemon.com
            </a>
          </ul>
          <ul className='text-center pt-4 pb-9 md:text-left'>
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
          </ul>
        </menu>*/