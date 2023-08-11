import Hero from '../sections/Hero'
import Special from '../sections/Special'
import Testimonial from '../sections/Testimonial'
import Abtsite from '../sections/Abtsite'

const Home = () => {
  return (
    <>
      <Hero/>
      <main>
        <Special />
        <Testimonial/>
        <Abtsite/>
      </main>
    </>
  )
}

export default Home
