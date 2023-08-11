import { Link } from "react-router-dom"

const Button = (props) => {
  return (
    <button>
      <Link 
              className="bg-[#f4ce14] text-black font-semibold py-2 px-5  md:px-6 md:text-3xl text-2xl hover:bg-[#495e57] hover:border-white rounded-sm hover:border hover:text-white" 
              to={props.link}
              >
                {props.text} 
              </Link>
    </button>
  )
}

export default Button

