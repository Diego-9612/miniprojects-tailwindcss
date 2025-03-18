import Image from '../assets/Imagenes/imageLogin.jpg'
import Facebook from '../assets/Imagenes/facebook.png'
import Google from '../assets/Imagenes/google.png'

export default function LoginModal() {
    return (

        <>
            <div className="min-h-screen flex items-center justify-center bg-rose-50">
                <main className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
                    <section className="p-6 md:p-20">
                        <h2 className="font-mono mb-4 text-2xl font-bold">Iniciar Sesión</h2>
                        <p className="max-w-sm mb-10 font-sans text-sm font-light text-gray-600">
                            Inicie sesión en su cuenta para cargar o descargar imágenes, vídeos o música.
                        </p>
                        <input
                            type="text"
                            className="py-3 px-2 w-full border border-gray-600 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-xs placeholder:text-center"
                            placeholder="Introduzca su dirección de correo electrónico"
                        />

                        {/* 🔍 Se reemplazó <span> por <div> */}
                        <div className="flex flex-col items-center justify-center mt-6 space-y-6 md:flex-row md:space-y-0 md:space-x-5">
                            <p className="font-thin text-cyan-700 text-xs">¿Has olvidado tu contraseña?</p>
                            <button className="flex text-sm md:px-10 font-semibold bg-cyan-700 text-white rounded-md py-3 w-full md:w-auto justify-center shadow-lg items-center space-x-2 transform duration-200 hover:scale-105 hover:opacity-90">
                                <p>Próximo</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#ffffff"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <line x1="13" y1="18" x2="19" y2="12" />
                                    <line x1="13" y1="6" x2="19" y2="12" />
                                </svg>
                            </button>
                        </div>
                        <div className='mt-8 border-b p-2 border-b-gray-300'>
                        </div>
                        <p className='text-center my-3 text-xs font-light text-gray-400'>o inicia sesión con</p>
                        <span className='flex flex-col md:flex-row justify-center space-x-0 space-y-5 md:space-x-4 md:space-y-0'>
                            <button className='rounded-lg flex space-x-3 justify-center items-center border border-gray-300 py-2 md:w-1/2 md:px-8 transform duration-200 hover:translate-x-0.5 hover:shadow-xl hover:bg-opacity-30'>
                                <img src={Facebook} alt="" className='w-7' />
                                <p>Facebook</p>
                            </button>
                            <button className='rounded-lg flex space-x-3 justify-center items-center border border-gray-300 py-2 md:w-1/2 md:px-8 transform duration-200 hover:translate-x-0.5 hover:shadow-xl hover:bg-opacity-30'>
                                <img src={Google} alt="" className='w-6' />
                                <p>Google</p>
                            </button>
                        </span>
                    </section>

                    {/* 🔍 Asegurar que Image esté importado correctamente */}
                    <img src={Image} alt="Imagen de inicio de sesión" className="w-[430px] hidden md:block" />
                    <div className='group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150"'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-black group-hover:text-gray-600"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>

                    </div>
                </main>
            </div>

        </>


    );
}