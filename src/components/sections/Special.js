import Button from "./items/Button"
import Card from "./items/Card"
import data from './items/Data'

const Special = () => {

    const card = data.map(i => {
        return(
            <Card
            img = {i.img}
            title = {i.title}
            price = {i.price}
            detail={i.detail}
            />
        )
    } )

  return (
    <section className="py-16 pt-20 md:px-10 lg:px-20 animate-slideDownFad text-center md:text-left">
      <h1 className=" text-3xl py-6 font-bold font-serif">This Week Specials</h1>
      <Button text='Online Menu' link='/menu'/>
      <div className=" py-10 mx-5 grid gap-3 sm:mx-20 md:grid-cols-3 md:mx-0">
        {card}
      </div>
    </section>
  )
}

export default Special
