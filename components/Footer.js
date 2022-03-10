import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebook,
  faTwitter,
  faGoogle
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  return  <footer className="bg-primary py-60px lg:py-[100px]">

            <div className="container mx-auto">
              <p className="text-light-gray text-center">© 2022 Atlas FitClub. All Rights Reserved.</p>

              <div className='flex justify-center mt-[10px]'>
                <Link href="/">
                  <a className='transition ease-in-out duration-300 hover:scale-150'>
                    <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }} color="#e9ecf5"/>
                  </a>
                </Link>
                <Link href="/">
                  <a className='transition ease-in-out duration-300 hover:scale-150'>
                    <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }} color="#e9ecf5"/>
                  </a>
                </Link>
                <Link href="/">
                  <a className='transition ease-in-out duration-300 hover:scale-150'>
                    <FontAwesomeIcon icon={faGoogle} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }} color="#e9ecf5"/>
                  </a>
                </Link>
              </div>
            </div>

          </footer>
}

export default Footer;