import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

import Modal from './Modal';

const AboutUs = () => {
  const [isHovering, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return  <section className='container mx-auto py-[60px]'>
            <p className="relative tracking-wider text-center text-4xl font-semibold mb-30px after:content-[''] after:absolute after:w-[60px] after:h-[2px] after:bg-[#2F0BC4] after:-bottom-[10px] after:left-0 after:right-0 after:mx-auto">DESPRE NOI</p>
            <p className='text-center text-gray mb-[70px] max-w-[700px] mx-auto tracking-widest'>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 lg:h-[465px]'>
              <div className="relative h-full w-full bg-light-gray lg:mb-0">
                <div className="bg-[url('/Florin_Donisan.jpg')] h-[465px] lg:h-full w-[85%] bg-no-repeat bg-cover bg-top"/>
                <div className='absolute left-0 bottom-0 bg-white p-[8px] w-[70%] flex justify-center'>
                  <Link href="/">
                    <a className='transition ease-in-out duration-300 hover:scale-150'>
                      <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }}/>
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/florin.donisan">
                    <a className='transition ease-in-out duration-300 hover:scale-150' target="_blank">
                      <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }}/>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className='transition ease-in-out duration-300 hover:scale-150'>
                      <FontAwesomeIcon icon={faGoogle} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }}/>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className='transition ease-in-out duration-300 hover:scale-150'>
                      <FontAwesomeIcon icon={faPhone} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }}/> 
                    </a>
                  </Link>
                </div>
                <div className='absolute -rotate-90 bottom-[60%] left-[42%] w-full'>
                  <p className='font-semibold tracking-widest'>FLORIN DONISAN</p>
                  <p className='text-xs text-gray tracking-wider'>FORMATOR / ANTRENOR FITNESS</p>
                </div>
              </div>

              <div className="relative h-full w-full bg-light-gray">
                <div className="bg-[url('/Dana_Donisan.jpg')] h-[465px] lg:h-full w-[85%] bg-no-repeat bg-cover bg-top"/>
                <div className='absolute left-0 bottom-0 bg-white p-[8px] w-[70%] flex justify-center'>
                  <Link href="/">
                    <a className='transition ease-in-out duration-300 hover:scale-150'>
                      <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }}/>
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/e.dana.bubu">
                    <a className='transition ease-in-out duration-300 hover:scale-150' target="_blank">
                      <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }}/>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className='transition ease-in-out duration-300 hover:scale-150'>
                      <FontAwesomeIcon icon={faGoogle} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }}/>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className='transition ease-in-out duration-300 hover:scale-150'>
                      <FontAwesomeIcon icon={faPhone} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }}/> 
                    </a>
                  </Link>
                </div>
                <div className='absolute -rotate-90 bottom-[60%] left-[42%] w-full'>
                  <p className='font-semibold tracking-widest'>DANA DONISAN</p>
                  <p className='text-xs text-gray tracking-wider'>INSTRUCTOR FITNESS - AEROBIC</p>
                </div>
              </div>

              <div className="relative h-full w-full bg-light-gray">
                <div className="bg-[url('/Maria_Savu.jpg')] h-[465px] lg:h-full w-[85%] bg-no-repeat bg-cover bg-top"/>
                <div className='absolute left-0 bottom-0 bg-white p-[8px] w-[70%] flex justify-center'>
                  <Link href="/">
                    <a className='transition ease-in-out duration-300 hover:scale-150'>
                      <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }}/>
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/savu.maria.79">
                    <a className='transition ease-in-out duration-300 hover:scale-150' target="_blank">
                      <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }}/>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className='transition ease-in-out duration-300 hover:scale-150'>
                      <FontAwesomeIcon icon={faGoogle} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }}/>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className='transition ease-in-out duration-300 hover:scale-150'>
                      <FontAwesomeIcon icon={faPhone} style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }}/> 
                    </a>
                  </Link>
                </div>
                <div className='absolute -rotate-90 bottom-[60%] left-[42%] w-full'>
                  <p className='font-semibold tracking-widest'>MARIA SAVU</p>
                  <p className='text-xs text-gray tracking-wider'>INSTRUCTOR FITNESS</p>
                </div>
              </div>
            </div>

            <button 
              className='block mx-auto mt-40px px-20px py-[7px] border-2 border-primary rounded-full text-primary font-semibold transition ease-in-out duration-300 hover:bg-[#2F0BC4] hover:text-white'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setShowModal(true)}
            >
              Vezi Toata Echipa
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ fontSize: 14, color: isHovering ? 'white' : "#2F0BC4", marginLeft: 10, transform: isHovering ? `translateX(10px)` : ``,  transition: 'transform 0.35s ease-in-out', }}
              />
            </button>

            { showModal ? <Modal closeModal={() => setShowModal(false)}/> : null }
          </section>
}

export default AboutUs

470
700