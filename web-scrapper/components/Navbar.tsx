import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (

    <header className="w-full">
        <nav className="nav"> 
        <Link href="/" className='flex items-center gap-1'>
        <Image src="/home/hemang/Desktop/SmartBuy/web-scrapper/public/assets/icons/logo.svg"  width={50} height={50} alt="logo"/>
        </Link>
            </nav >
    </header>
  )
}
//here this nav className ="nav" is a class name which is used in the TAILWIND.css file to style the navbar

export default Navbar