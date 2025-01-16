import Image from "next/image"
import Link from "next/link"

function Footer() {

  return (
    <main className="border-t-theme-light-blue border-t-2 text-dark-grey">
    <div className="footer flex flex-col items-center m-auto p-2 gap-2 bg-blue-pink-merged"> {/* mt-auto */}
        {/* <Link href="#" className="footer flex flex-col justify-center items-center bg-login-page-bg min-h-full"> */}
        {/* <h1 className="text-xl">contact@gmail.com</h1> */}
        <a id="emailFooter"  className="text-lg underline" href="mailto:enoksenn@gmail.com">enoksenn@gmail.com</a>
          {/* <h2 className="text-xs">Created by Simon Enoksen</h2> */}
        {/* </Link> */}
        {/* <Image src="#" alt=""/> */}
    </div>
    </main>
  )
}

export default Footer