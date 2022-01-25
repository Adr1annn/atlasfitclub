import Image from 'next/image'
import Link from 'next/link';

const Header = () => {

  return  <header className='container mx-auto h-100px'>
            <ul className='flex items-center justify-center h-full'>
              <li className='mr-10'>
                <Link href="/" >
                  <a className="font-semibold">Acasa</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="font-semibold">Galerie</a>
                </Link>
              </li>
              <li className='mx-10 w-[18rem] relative flex justify-center'>
                <div className='absolute bg-white p-20px rounded-full -top-12'>
                  <Image src="/logo-small.png" alt="Vercel Logo" height="100" width="220"/>
                </div>
              </li>
              <li>
                <Link href="/">
                  <a className="font-semibold">Despre noi</a>
                </Link>
              </li>
              <li className='ml-10'>
                <Link href="/about">
                  <a className="font-semibold">Contact</a>
                </Link>
              </li>
            </ul>
         
          </header>
}

export default Header