import Imagen1 from '../assets/Imagenes/image1.jpg'
import Imagen2 from '../assets/Imagenes/image2.jpg'
import Imagen3 from '../assets/Imagenes/image3.jpg'
import Imagen4 from '../assets/Imagenes/image4.jpg'
import Imagen5 from '../assets/Imagenes/image5.jpg'
import Imagen6 from '../assets/Imagenes/image6.jpg'
import Bookmark from '../assets/Imagenes/bookmark.svg'


export default function ImageGallery() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-cyan-50">
                <main className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40 md:m-5">
                    <section className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
                        <span className="group relative inline-block">
                            <a href="#" className="relative z-10 text-black">Vector</a>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                        </span>
                        <span className="group relative inline-block">
                            <a href="#" className="relative z-10 text-black">Ilustraciones</a>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                        </span>
                        <span className="group relative inline-block">
                            <a href="#" className="relative z-10 text-black">Imágenes</a>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                        </span>
                        <span className="group relative inline-block">
                            <a href="#" className="relative z-10 text-black">Iconos</a>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                        </span>
                    </section>

                    <section className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
                        <span className="flex justify-center border-b">
                            <input className='ml-6 border-none md:w-80 placeholder:font-thin placeholder:text-sm focus:outline-none' placeholder="Buscar" />
                            <button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 text-gray-300 duration-200 hover:scale-110"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="10" cy="10" r="7" />
                                    <line x1="21" y1="21" x2="15" y2="15" />
                                </svg>
                            </button>
                        </span>
                        <button className="bg-black text-white py-3 px-14 rounded-md text-base font-normal border border-black shadow-2xl duration-200 hover:bg-white hover:text-black">
                            Buscar
                        </button>
                    </section>
                    <section className="grid gap-4 md:grid-cols-4">
                        <span className="relative group">
                            <img src={Imagen1} className="w-72" />
                            <span className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
                                <span className='flex justify-between w-full'>
                                    <span className='font-normal'>
                                        <p className='text-sm'>Pintura abstracta </p>
                                        <p className='text-xs'>245 Me gusta - 35 compartidos</p>
                                    </span>
                                    <span className='flex items-center'>
                                        <img src={Bookmark} alt="bookmark" />
                                    </span>
                                </span>
                            </span>
                        </span>
                        <span className="relative group">
                            <img src={Imagen2} className="w-72" />
                            <span className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
                                <span className='flex justify-between w-full'>
                                    <span className='font-normal'>
                                        <p className='text-sm'>Pintura abstracta </p>
                                        <p className='text-xs'>245 Me gusta - 35 compartidos</p>
                                    </span>
                                    <span className='flex items-center'>
                                        <img src={Bookmark} alt="bookmark" />
                                    </span>
                                </span>
                            </span>
                        </span>
                        <span className="relative group">
                            <img src={Imagen3} className="w-72" />
                            <span className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
                                <span className='flex justify-between w-full'>
                                    <span className='font-normal'>
                                        <p className='text-sm'>Pintura abstracta </p>
                                        <p className='text-xs'>245 Me gusta - 35 compartidos</p>
                                    </span>
                                    <span className='flex items-center'>
                                        <img src={Bookmark} alt="bookmark" />
                                    </span>
                                </span>
                            </span>
                        </span>
                        <span className="relative group">
                            <img src={Imagen4} className="w-72" />
                            <span className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
                                <span className='flex justify-between w-full'>
                                    <span className='font-normal'>
                                        <p className='text-sm'>Pintura abstracta </p>
                                        <p className='text-xs'>245 Me gusta - 35 compartidos</p>
                                    </span>
                                    <span className='flex items-center'>
                                        <img src={Bookmark} alt="bookmark" />
                                    </span>
                                </span>
                            </span>
                        </span>
                        <span className="relative group">
                            <img src={Imagen5} className="w-72" />
                            <span className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
                                <span className='flex justify-between w-full'>
                                    <span className='font-normal'>
                                        <p className='text-sm'>Pintura abstracta </p>
                                        <p className='text-xs'>245 Me gusta - 35 compartidos</p>
                                    </span>
                                    <span className='flex items-center'>
                                        <img src={Bookmark} alt="bookmark" />
                                    </span>
                                </span>
                            </span>
                        </span>
                        <span className="relative group">
                            <img src={Imagen6} className="w-72" />
                            <span className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
                                <span className='flex justify-between w-full'>
                                    <span className='font-normal'>
                                        <p className='text-sm'>Pintura abstracta </p>
                                        <p className='text-xs'>245 Me gusta - 35 compartidos</p>
                                    </span>
                                    <span className='flex items-center'>
                                        <img src={Bookmark} alt="bookmark" />
                                    </span>
                                </span>
                            </span>
                        </span>
                    </section>
                </main>
            </div>
        </>
    );
}
