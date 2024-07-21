import Image from "next/image";
import AdditionalSkills from "../AdditionsalSkills/AdditionsalSkills";
import { Skilles } from './skills-config'
const Skills = () => {
    return (
        <div className=" mx-auto p-4 px-6 ">
            <h1 className=" dark:text-purple-100 text-black font-bold text-3xl md:text-5xl" id="skills">Skills</h1>
            <div className=" flex flex-wrap  p-6 justify-around  gap-3">
                {Skilles.map((skill, index) => (
                    <div key={index} className="  py-5 my-3 w-72 px-4 flex flex-col justify-around p-2 items-center gap-2">
                        <Image
                            src={skill.img}
                            alt={skill.title}
                            className="w-[7rem] object-cover"
                            width={1000}
                            height={100}
                        />
                        <h1 className=" text-lg font-semibold pt-2">{skill.title}</h1>
                    </div>
                )
                )}
            </div>
            <hr className=" w-auto mx-8 mt-12  mb-8 opacity-15" />
            <AdditionalSkills />
            <hr className=" w-auto mx-8 mt-12  mb-8 opacity-15" />

        </div>
    );
}

export default Skills;