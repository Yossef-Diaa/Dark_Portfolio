'use client'
import Image from "next/image";
import {Projects} from './projesct-config';
import { useRouter } from "next/navigation";

const Projescts = () => {
    const router = useRouter()
    return (
        <div className=" mx-auto p-4 ">
            <h1 className=" text-purple-100 font-bold text-3xl md:text-5xl" id="Projects">Projects</h1>
            <div className=" flex flex-wrap pt-8 gap-2 mx-auto justify-around col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 items-center">
                {
                    Projects.map((project, index)=>(
                <div className=" flex flex-col items-center gap-3 mt-3  border border-_PrimeDark   rounded-xl p-4 hover:scale-[103%] hover:bg-zinc-600 hover:bg-opacity-5 " key={index}>
                    <Image
                        src={project.img}
                        alt={project.title}
                        className=" w-[19rem] h-56 object-contain max-w-full"
                        width={2000}
                        height={2000}
                    />
                    <h1 className=" text-xl pt-4 font-bold text-_PrimeDark">{project.title}</h1>
                    <p className=" pt-1 text-purple-200 font-semibold"> {project.desc}</p>
                    <div className=" pt-4">
                        <button className="text-purple-950 bg-_PrimeDark py-2 px-6 rounded-full self-center md:self-start hover:bg-purple-300" onClick={()=>router.push('https://yossef-diaa.github.io/Dark-Project/')}>live Preview</button>
                    </div>
                </div>
                    ))
                }
            </div>

            <div className=" flex justify-center items-center  mt-20">
            <button className=" text-_PrimeDark text-lg bg-purple-950 py-2 px-6 rounded-full self-center md:self-start hover:bg-purple-300 hover:bg-opacity-50" onClick={()=>router.push('https://github.com/Yossef-Diaa/')}>See More</button>
            </div>


        </div>
    );
}

export default Projescts;