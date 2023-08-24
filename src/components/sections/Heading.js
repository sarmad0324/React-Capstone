

const Heading = (props) => {
    return (
        <header className="h-[300px] md:h-[400px] w-full m-auto flex justify-center bg-[#f4ce14] ">
            <div className="w-96 m-auto bg-[#495e57] ">
                <h1 className="w-full m-auto flex justify-center text-4xl font-bold text-white py-5">{props.title}</h1>
            </div>   
        </header>
    )
}

export default Heading
