import React from "react";
import Image from 'next/image';
import HeroButton from "./HeroButton";

const Hero = () => {
    return (
        <div>
            <hr className=" w-auto mx-8 opacity-15" />
            <div className="mx-auto flex flex-col  md:flex-row px-6 md:space-x-6 items-center">
                <div className="md:w-1/2 mt-7 flex flex-col space-y-6 justify-center py-6  text-start text-_PrimeDark">
                <div>WELCOME TO MY WORLD</div>
                    <h1 className='font-bold text-5xl'>
                        Hi, I&apos;m  <span className="text-purple-500">Yossef Diaa</span>
                    </h1>
                    <p className=" ease-in-out  ">
                        I&apos;m a Front-end web Developer, I love to create beautiful and functional websites. My goal is to learn new things every day.
                    </p>
                    <div>

                        <HeroButton />
                    </div>
                </div>
                <div className="md:w-1/2 py-6 mt-12">
                    <Image
                        className='rounded-xl md:rounded-full w-full'
                        src="https://res.cloudinary.com/dxmudifi2/image/upload/v1720299450/Dark-Protofolio/bg_2_sze10f.png"
                        alt='Logo'
                        width={1000}
                        height={50}
                    />
                </div>
            </div>
            <hr className=" w-auto mx-8 mt-12  mb-8 opacity-15" />

        </div>
    );
}

export default Hero;
