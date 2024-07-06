"use client"
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";

const Navbarconfig = () => {
    const [active, setactive] = useState("hidden")
    const Handleactive=()=>{
        setactive(active === "hidden" ? "" : "hidden");
    }
    return (
        <div>
            <div className="md:hidden text-3xl">
                <IoMenu onClick={Handleactive}/>
               
            </div>
            <div className="md:hidden mx-auto  ">

            <div className={`flex flex-col absolute  ${active} space-y-3 items-center drop-shadow-2xl border border-purple-100 bg-black rounded-xl left-6 right-6 py-6`}>
                        <a className="text-_PrimeDark hover:text-_3Dark cursor-pointer ">Home</a>
                        <a className="text-_PrimeDark hover:text-_3Dark cursor-pointer ">Projects</a>
                        <a className="text-_PrimeDark hover:text-_3Dark cursor-pointer ">Skills</a>
                        <a className="text-_PrimeDark hover:text-_3Dark cursor-pointer ">Contacts</a>
                        <button className="text-purple-400 bg-_PrimeDark py-2 px-6 rounded-full hover:bg-purple-300">Login</button>
                </div>
            </div>


        </div>
    )
}

export default Navbarconfig
