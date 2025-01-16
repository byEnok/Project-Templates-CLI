import { ModeToggle } from './Mode-Toggle'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex items-center border-b-2 border-buttonBorder px-2 w-full'>
      <div className='flex justify-evenly items-center text-4xl w-full py-2'>
        <Link href='#' className='hover:text-textHover'>
          Home
        </Link>
        <Link href='#' className='hover:text-textHover'>
          About
        </Link>
        <Link href='#' className='hover:text-textHover'>
          <span className='material-symbols-outlined text-4xl'>login</span>
        </Link>
      </div>
      <ModeToggle />
    </div>
  )
}

export default Navbar
