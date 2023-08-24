import Hero from '../sections/Hero'
import Special from '../sections/Special'
import Testimonial from '../sections/Testimonial'
import Abtsite from '../sections/Abtsite'

const Home = () => {
  return (
    <div className='scroll-auto'>
      <Hero/>
      <main>
        <Special />
        <Testimonial/>
        <Abtsite/>
      </main>
    </div>
  )
}

export default Home
