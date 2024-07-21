import Image from 'next/image';
import React from 'react';
import Navbarconfig from './Navbar-config';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import logo from './assets/Logo0.png';
import { ModeToggle } from './ThemeToggle';
import { Redressed } from "next/font/google";


const redressed = Redressed({subsets: ["latin"] , weight:['400']})
const Navbar = () => {

  return (
    <div className="mx-auto px-10">
      <div className="flex items-center justify-between">
        <Link href={'/'} className={`${redressed.className} font-bold text-2xl w-1/3`} >Dark-shop</Link>
        <div className="hidden md:flex items-center space-x-6 w-1/3 justify-center">
          <Link className="dark:text-_PrimeDark  text-black hover:text-_3Dark cursor-pointer" href="/">
            Home
          </Link>
          <Link className="dark:text-_PrimeDark  text-black hover:text-_3Dark cursor-pointer" href="#Projects">
            Projects
          </Link>
          <Link className="dark:text-_PrimeDark  text-black hover:text-_3Dark cursor-pointer" href="#skills">
            Skills
          </Link>
          <Link className="dark:text-_PrimeDark  text-black hover:text-_3Dark cursor-pointer" href="#Contacts">
            Contacts
          </Link>
        </div>
        <div className=" justify-end items-center hidden md:flex md:space-x-4 w-1/3">
          <div className='md:pr-5'>
          <ModeToggle />
          </div>
          <Link className="dark:text-white text-black hover:text-_3Dark cursor-pointer" href="https://www.facebook.com/Dark0Storm/">
            <FaFacebook className="w-4 h-4" />
          </Link>
          <Link className="dark:text-white text-black hover:text-_3Dark cursor-pointer" href="https://github.com/Yossef-Diaa">
            <FaGithub className="w-4 h-4" />
          </Link>
          <Link className="dark:text-white text-black hover:text-_3Dark cursor-pointer" href="https://www.linkedin.com/in/yoseef-diaa-b50288287/">
            <FaLinkedin className="w-4 h-4" />
          </Link>
          <Link className="dark:text-white text-black hover:text-_3Dark cursor-pointer" href="https://www.instagram.com/17___m___6/?igsh=MzNlNGNkZWQ4Mg%3D%3D">
            <FaInstagramSquare className="w-4 h-4" />
          </Link>

        </div>
        <div className="md:hidden text-3xl pl-6 flex items-center">
          <div className='pr-5'>
          <ModeToggle />
          </div>
          <Navbarconfig />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
