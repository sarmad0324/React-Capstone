import Button from './items/Button'

const Hero = () => {
  return (
    <header >
      <article className="bg-[#495e57] text-white w-full flex md:flex-row flex-col items-center ">
        <section className="pl-10 py-10  md:pr-0 md:w-[40%] md:pl-20">
          <h1 className='text-4xl font-serif'>Little Lemon</h1>
          <h2 className='text-3xl font-serif'>Chicago</h2>
          <p className="text-start py-3 ">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
            on traditional recipes served with a modern twist.</p>
          <br></br>
          <Button text='Reserve a table'  link='/reservation'/>
        </section>
        <section className="hidden md:block md:w-1/2  mx-auto md:-mb-72 ">
            <img src={require('../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine" 
            className='h-[400px]  md:w-[320px] mx-auto transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110  duration-300'/>
        </section>

      </article>
    </header>
  )
}

export default Hero
/*<*/