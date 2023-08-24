import { Link } from "react-router-dom"

const Button = (props) => {
  return (
    <button 
      className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150
      bg-[#f4ce14] text-black font-semibold py-2 px-5 hover:border-black hover:border md:px-6 md:text-3xl text-2xl   rounded-sm  
    " type="submit">
      <Link 
              className="" 
              to={props.link}
              >
                {props.text} 
              </Link>
    </button>
  )
}

export default Button

