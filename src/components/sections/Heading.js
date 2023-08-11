

const Heading = (props) => {
    return (
        <header className="h-[400px] md:h-[600px] w-full m-auto flex justify-center bg-[#f4ce14] ">
            <h1 className="w-full m-auto flex justify-center text-4xl font-bold text-white">{props.title}</h1>
        </header>
    )
}

export default Heading
