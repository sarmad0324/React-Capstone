

const Abtsite = () => {
    return (
        <section class="bg-[#f4ce14] body-font">
            <div class="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0  text-left">
                    <h1 class="text-left sm:text-4xl text-3xl mb-4 font-bold">Little Lemon
                        <br class="inline-block" />Chicago
                    </h1>
                    <p class="mb-8 leading-relaxed">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                    
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src={require('../../assets/food/food2.jpeg')} />
                </div>
            </div>
        </section>
    )
}

export default Abtsite
