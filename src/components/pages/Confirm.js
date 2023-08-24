
import Button from "../sections/items/Button";
export default function Confirm() {
  return (
    <header className="md:h-[300px] bg-gray-300">
      
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold">Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>

      <section className="md:flex md:justify-center md:gap-10 grid grid-cols-1 pb-10 gap-4 mx-10">
        <Button  link="/order" text='Order Online' />
        <Button text='Home Page' link="/"/>
      </section>
    </header>
  );
}
