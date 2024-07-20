import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub ,FaLinkedin,FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link';
import logo from './assets/Logo0.png'




function Footer() {
  return (
    <footer className="bg-[#070011]">
      <div className="container mx-auto text-white px-5 py-10 flex flex-col-reverse md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="flex flex-col items-center justify-between space-y-12 md:space-y-2 md:items-start">
          <div className="Block text-center mt-6 md:mt-0 md:hidden">
            Copyright &copy; 2023, All Rights Reserved

          </div>
          <div>
            <Image src={logo} alt='Logo' width={150} height={50} className='' />
          </div>

          <div className='flex space-x-4'>
            <div className="flex justify-end space-x-3 md:space-x-4 ">
              <Link className="text-white hover:text-_3Dark cursor-pointer" href={'https://www.facebook.com/Dark0Storm/'}><FaFacebook className=' w-4 h-4' /></Link>
              <Link className="text-white hover:text-_3Dark cursor-pointer" href={'https://github.com/Yossef-Diaa'}><FaGithub className=' w-4 h-4' /></Link>
              <Link className="text-white hover:text-_3Dark cursor-pointer" href={'https://www.linkedin.com/in/yoseef-diaa-b50288287/'}><FaLinkedin className=' w-4 h-4' /></Link>
              <Link className="text-white hover:text-_3Dark cursor-pointer" href={'https://www.instagram.com/17___m___6/?igsh=MzNlNGNkZWQ4Mg%3D%3D'}><FaInstagramSquare className=' w-4 h-4' /></Link>
            </div>
          </div>

        </div>


        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3">
            <Link href="/" className="hover:text-slate-300" >Home</Link>
            <Link href="#Projects" className="hover:text-slate-300">Projects</Link>
            <Link href="#Skills" className="hover:text-slate-300">Skills</Link>
          </div>
          <div className="flex flex-col space-y-3">
            <Link href="#Contacts" className="hover:text-slate-300">Contacts</Link>
            <Link href="" className="hover:text-slate-300">Privacy</Link>
            <Link href="" className="hover:text-slate-300">Credits</Link>
          </div>
        </div>

        <div className="flex flex-col justify-between ">
          <form action="">
            <div className="flex space-x-3 ">
              <input type="text" placeholder='Subscribe to Newlettern' className="flex-1 py-2 px-6 rounded-full" />
              <button className="bg-[#2F0F5D] py-2 px-4 rounded-full hover:bg-[#c49aff] hover:bg-opacity-15">Go</button>
            </div>
          </form>
          <div className="hidden md:block">
            Copyright &copy; Yossef Diaa 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
