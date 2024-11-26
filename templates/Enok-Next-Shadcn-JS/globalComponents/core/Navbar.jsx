import React from 'react'
import { ModeToggle } from './Mode-Toggle'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="flex justify-center items-center w-screen p-5  bg-navBar border-b-2 border-buttonBorder">
      <div className="flex gap-24 text-2xl justify-center w-screen ">
        <Link href="#" className="hover:text-textHover">
          <h1>Home</h1>
        </Link>
        <Link href="#" className="hover:text-textHover">
          <h1>About</h1>
        </Link>
          <Link href="#" className="hover:text-textHover">
          <span className='material-symbols-outlined text-4xl'>login</span>
        </Link>
      </div>
      <ModeToggle />
    </div>
  )
}

export default Navbar
