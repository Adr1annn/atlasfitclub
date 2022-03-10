import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);

  return  <header className='container md:h-100px'>

            {/* MOBILE SECTION */}
            <div className={"transform transition-all ease-in-out header fixed w-full h-full bg-black bg-opacity-40 mobile-menu z-50 " + (mobileMenu ? '-translate-x-0 -ml-[20px]' : '-translate-x-full -ml-[20px]') + ' md:hidden'}>
              <div className="absolute z-max bg-primary h-full w-full py-14">
                <button onClick={() => setMobileMenu(false)}>
                  <span className="absolute top-5 right-5 close-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                  </span>
                </button>
                <ul className='h-full px-[20px]'>
                  <li>
                    <Link href="/" >
                      <a className={"text-white transition ease-in-out duration-300 " + (router.pathname == "/" ? "underline underline-offset-2" : "")}>Acasa</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text-white ease-in-out duration-300">Galerie</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text-white ease-in-out duration-300">Despre noi</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text-white ease-in-out duration-300">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* DESKTOP SECTION */}
            <ul className='items-center justify-center h-full hidden md:flex'>
              <li className='mr-10'>
                <Link href="/" >
                  <a className={"font-semibold transition ease-in-out duration-300 hover:text-primary " + (router.pathname == "/" ? "text-primary" : "")}>Acasa</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="font-semibold ease-in-out duration-300 hover:text-primary">Galerie</a>
                </Link>
              </li>
              <li className='mx-10 w-[18rem] relative flex justify-center'>
                <div className='absolute bg-white py-15px px-35px rounded-full -top-12'>
                  <Image src="/logo-small.png" alt="Vercel Logo" height="100" width="220"/>
                </div>
              </li>
              <li>
                <Link href="/">
                  <a className="font-semibold ease-in-out duration-300 hover:text-primary">Despre noi</a>
                </Link>
              </li>
              <li className='ml-10'>
                <Link href="/">
                  <a className="font-semibold ease-in-out duration-300 hover:text-primary">Contact</a>
                </Link>
              </li>
            </ul>

            <div className='flex py-3 justify-between items-center md:hidden'>
              <Image src="/logo-small.png" alt="Vercel Logo" height="100" width="220"/>

              <button onClick={() => setMobileMenu(true)}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
                </span>
              </button>
            </div>
            
         
          </header>
}

export default Header