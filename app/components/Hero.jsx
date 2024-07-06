import react from "react";
import Image from 'next/image'

const Hero = () => {
    return (
        <div className=" mx-auto flex flex-col-reverse md:flex-row md:px-6 md:space-x-6  items-center">
            <div className="w-1/2 flex flex-col space-y-6 justify-center py-6 text-center md:text-start text-_PrimeDark ">
                <h1 className='font-bold text-3xl md:text-5xl '>
                I m Yossef Diaa
                </h1>
                <p>
                I m a Front-end web Developer, I love to create beautiful and functional websites. my goal is to learn new thing every day.
                </p>
                <button className="text-purple-950 bg-_PrimeDark py-2 px-6 rounded-full self-center md:self-start hover:bg-purple-300">Download CV</button>

            </div>
            <div className="md:w-1/2 py-6 ">
                <Image
                    className=' rounded-xl md:rounded-full w-full '
                    src={"/assets/bg.png"}
                    alt='Logo'
                    width={1000}
                    height={50}
                />
            </div>
        </div>
    )
}
export default Hero;