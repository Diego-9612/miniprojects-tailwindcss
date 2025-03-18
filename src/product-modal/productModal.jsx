import HeadPhone from '../assets/Imagenes/headphone.png'
import Weight from '../assets/Imagenes/weight.png'
import Heart from '../assets/Imagenes/heart.png'

export default function ProductModal() {
    return (

        <>

            <div className="bg-gray-300 flex min-h-screen justify-center items-center ">
                <main className="flex flex-col bg-slate-50 p-6 m-4 space-y-10 rounded-xl shadow-2xl md:flex-row md:space-y-0 md: space-x-10 md:my-5 md:mx-0 md:p-16">
                    <span className="">
                        <img src={HeadPhone} className='mx-auto duration-200 w-60 hover:scale-105' />
                    </span>
                    <section className='flex flex-col space-y-6'>
                        <span className='flex flex-col mb-4 space-y-3 text-center md:text-left'>
                            <span>
                                <a className='inline-block px-3 py-1 text-sm text-white bg-black rounded-full'>
                                    Envio Gratis
                                </a>
                            </span>
                            <h2 className='max-w-sm text-2xl font-medium'>Auriculares para juegos Razer Kraken Kitty Edt de cuarzo</h2>
                            <span className='flex flex-col mb-4 space-y-3 text-center md:text-left'>
                                <p className='line-through'>$799</p>
                                <p className='text-5xl font-semibold'>$599</p>
                                <p className='text-sm font-light text-gray-400'>¡Esta oferta es válida hasta el 3 de abril o hasta agotar existencias!</p>
                            </span>
                            <span className='group'>
                                <button className='w-full transition-all duration-200 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-blue-700 group-hover:shadow-lg'>
                                    <p className='px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700'>Añadir al Carrito</p>
                                </button>
                            </span>
                            <span className='flex items-center space-x-3 group'>
                                <span className='w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping'></span>
                                <p className='font-normal text-sm'>Más de 50 piezas en stock</p>
                            </span>
                            <span className='flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row'>
                                <button className='flex items-center justify-center border-2 border-gray-300 py-3 space-x-3 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:translate-y-0.5 transition-all duration-200 md:px-3'>
                                    <img src={Weight} className='w-8' />
                                    <p>Añadir al Carrito</p>
                                </button>
                                <button className='flex items-center justify-center border-2 border-gray-300 py-3 space-x-3 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:translate-y-0.5 transition-all duration-200 md:px-3'>
                                    <img src={Heart} className='w-8' />
                                    <p>Añadir a Favoritos</p>
                                </button>
                            </span>
                        </span>

                    </section>





                </main>

            </div>



        </>




    );
}