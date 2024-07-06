import Image from 'next/image'
import React from 'react'
import Navbarconfig from './Navbar-config';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa6";
import { FaGithub ,FaLinkedin,FaInstagramSquare } from "react-icons/fa";


const Navbar = () => {
    return (
        <div>
            <div className="mx-auto px-10">
                <div className="flex  items-center justify-between">
                    <a href={'/'} className='w-1/3'> 
                        <Image
                            className=''
                            src={"https://res.cloudinary.com/dxmudifi2/image/upload/v1720266957/Dark-Protofolio/Logo0_wuejyp.png"}
                            alt='Logo'
                            width={150}
                            height={50}
                        />

                    </a>
                    <div className=" md:flex items-center space-x-6 w-1/3 justify-center">
                        <div className="hidden md:flex items-center space-x-6 w-1/2 ">
                        <Link className="text-_PrimeDark hover:text-_3Dark cursor-pointer" href={'/'}>Home</Link>
                        <Link className="text-_PrimeDark hover:text-_3Dark cursor-pointer" href={'#Projects'}>Projects</Link>
                        <Link className="text-_PrimeDark hover:text-_3Dark cursor-pointer" href={'#skills'}>Skills</Link>
                        <Link className="text-_PrimeDark hover:text-_3Dark cursor-pointer" href={'#Contacts'}>Contacts</Link>
                        </div>

                    </div>
                        <div className="flex justify-end space-x-3 md:space-x-4 w-1/3">
                        <Link className="text-white hover:text-_3Dark cursor-pointer" href={'https://www.facebook.com/Dark0Storm/'}><FaFacebook className=' w-4 h-4'/></Link>
                        <Link className="text-white hover:text-_3Dark cursor-pointer" href={'https://github.com/Yossef-Diaa'}><FaGithub  className=' w-4 h-4'/></Link>
                        <Link className="text-white hover:text-_3Dark cursor-pointer" href={'https://www.linkedin.com/in/yoseef-diaa-b50288287/'}><FaLinkedin  className=' w-4 h-4'/></Link>
                        <Link className="text-white hover:text-_3Dark cursor-pointer" href={'https://www.instagram.com/17___m___6/?igsh=MzNlNGNkZWQ4Mg%3D%3D'}><FaInstagramSquare className=' w-4 h-4'/></Link>
                        </div>
                    <div className="md:hidden text-3xl  pl-6">
                        <Navbarconfig/>

                    </div>
                </div>
                
             

            </div>
        </div>
    )
}

export default Navbar
