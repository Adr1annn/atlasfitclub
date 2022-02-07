import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return  <header className='container h-100px'>
            <ul className='flex items-center justify-center h-full'>
              <li className='mr-10'>
                <Link href="/" >
                  <a className={"font-semibold transition ease-in-out duration-300 hover:text-primary " + (router.pathname == "/" ? "text-primary" : "")}>Acasa</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="font-semibold ease-in-out duration-300 hover:text-primary">Galerie</a>
                </Link>
              </li>
              <li className='mx-10 w-[18rem] relative flex justify-center'>
                <div className='absolute bg-white p-15px rounded -top-12'>
                  <Image src="/logo-small.png" alt="Vercel Logo" height="100" width="220"/>
                </div>
              </li>
              <li>
                <Link href="/">
                  <a className="font-semibold ease-in-out duration-300 hover:text-primary">Despre noi</a>
                </Link>
              </li>
              <li className='ml-10'>
                <Link href="/about">
                  <a className="font-semibold ease-in-out duration-300 hover:text-primary">Contact</a>
                </Link>
              </li>
            </ul>
         
          </header>
}

export default Header