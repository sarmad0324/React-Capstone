import Testcard from './items/Testcard'

const Testimonial = () => {
  const testData =[
    {
      name: "Micheal Caldwell",
      comment:"Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."
  },
  {
      name: "John Rosenblum",
      comment:"Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."
  },
  {
      name: "Casey Lau",
      comment:"Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."
  },
  {
      name: "Alan Chen",
      comment:"Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."
  },
  {
      name: "Jim Reynor",
      comment:"The food here really refreshed me after a late night shift at the local supply depot."
  },
  {
      name: "Brian Dean",
      comment:"The food here really refreshed me after a late night shift at the local supply depot."
  },
  {
      name: "Tyler Tohmine",
      comment:"The food here really refreshed me after a late night shift at the local supply depot."
  },
  {
      name: "Jack Hu  ",
      comment:"The food here really refreshed me after a late night shift at the local supply depot."
  }
  ]

  const test = testData.map(i => {
    return(
        <Testcard
        name = {i.name}
        comment = {i.comment}
        />
    )
  })

  return (
    <section className='md:px-10 lg:px-20 pb-10'>
      <h1 class="text-3xl pb-6 font-bold font-serif text-center">Testimonials</h1>
      <div className='grid gap-1 sm:grid-cols-2 sm:px-3 md:grid-cols-4 md:gap-0 md:px-0'>
        {test}
      </div>
    </section>
  )
}

export default Testimonial
