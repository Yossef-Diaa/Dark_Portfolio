import Image from "next/image";
import { AdditionalSkilles } from "./additional-config";

const AdditionalSkills = () => {
    return (
        <>
            <h1 className=" text-purple-100 font-bold text-3xl md:text-5xl">Additional skills</h1>
            <div className=" flex flex-wrap  p-6 justify-around  gap-3">
            {AdditionalSkilles.map((skill, index) => (
                    <div key={index} className=" my-3 w-72 px-4 flex justify-center gap-3 items-center flex-col py-5">
                        <Image
                            src={skill.img}
                            alt={skill.title}
                            className="w-[7rem] "
                            width={1000}
                            height={100}
                        />
                        <h1 className=" text-lg font-semibold pt-2">{skill.title}</h1>
                    </div>
                )
                )}
            </div>
        </>

    );
}

export default AdditionalSkills;