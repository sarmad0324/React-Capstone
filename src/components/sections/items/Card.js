import { Link } from "react-router-dom"

const Card = (props) => {
    return (

        <div class="h-full  bg-gray-200  rounded-lg overflow-hidden shadow-2xl">
            <img class="h-56 sm:h-64 md:h-36 lg:h-44 xl:h-64  w-full object-cover object-center" src={props.img} alt="blog" />
            <div class="p-6">
                <h2 class="tracking-widest text-xl  title-font font-bold  mb-1">{props.title}</h2>
                <h1 class="title-font text-lg font-bold  mb-3">{props.price}</h1>
                <p class="text-base mb-7 font-sans text-justify">{props.detail}</p>
                <button className="bg-[#f4ce14] text-black font-semibold text-xl py-3 px-5 hover:bg-[#495e57] hover:border-white rounded-sm hover:border hover:text-white ">
                    <Link to="/order">Order for Delivery </Link>
                </button>
                
            </div>

        </div>


    )
}

export default Card
