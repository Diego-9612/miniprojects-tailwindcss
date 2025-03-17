import imagen from "../assets/Imagenes/image.jpg";

export default function EmailSubscribe() {
    return (
        <>
            <div className="h-screen flex justify-center items-center bg-zinc-600 ">

                <figure className="flex p-2 mx-4 rounded-2xl bg-zinc-800">

                    <main className="flex flex-col md:flex-row rounded-l-2xl">
                        
                        <img
                            src={imagen}
                            alt=""
                            className="object-fit rounded-2xl h-80 md:h-60  md:rounded-r-none transform hover:scale-105 hover:rounded-2xl duration-200"
                        />

                        <section className="p-6 md:p-12">
                            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
                                Get diet and fitness tips in your inbox
                            </h2>
                            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-lef">
                                Eat Better and exercise better. Sing ip for the Diet y Fitness
                            </p>
                            <span className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                                <input
                                type="text"
                                name="Email"
                                placeholder="Enter your email address"
                                className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none" />
                                <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">Submit</button>
                            </span>
                        </section>

                    </main>

                </figure>

            </div>
        </>
    );
}
