import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import Modal from './Modal';

import {
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const Offers = () => {

  const [isHoveringOne, setIsHoveredOne] = useState(false);
  const [isHoveringTwo, setIsHoveredTwo] = useState(false);
  const [isHoveringThree, setIsHoveredThree] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return  <section className="bg-light-gray lg:pb-30px pt-20px lg:pt-0">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
                <div className='bg-white p-25px mb-20px lg:mb-0 lg:-translate-y-[70px] rounded'>
                  <div className='flex justify-center mb-25px'>
                    <Image src="/dumbbell.svg" alt="Weight Lifting" height="60px" width="60px"/>
                  </div>
                  <h3 className="relative tracking-wider text-center font-semibold mb-20px after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-[#2F0BC4] after:-bottom-[10px] after:left-0 after:right-0 after:mx-auto">RIDICARE DE GREUTATI</h3>
                  <p className="text-center text-gray text-base">Atlas FitClub pune la dispoziție aparete de ultimă generație, precum și diferite tipuri de greutăți pentru a facilita dezvoltarea masei muscalare.</p>
                  <button 
                    className='block mx-auto my-20px px-20px py-[7px] border-2 border-primary rounded-full text-primary font-semibold transition ease-in-out duration-300 hover:bg-[#2F0BC4] hover:text-white'
                    onMouseEnter={() => setIsHoveredOne(true)}
                    onMouseLeave={() => setIsHoveredOne(false)}
                    onClick={() => setShowModal(true)}
                  >
                    More
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ fontSize: 14, color: isHoveringOne ? 'white' : "#2F0BC4", marginLeft: 10, transform: isHoveringOne ? `translateX(10px)` : ``,  transition: 'transform 0.35s ease-in-out', }}
                    />
                  </button>
                </div>
                <div className='bg-white p-25px mb-20px lg:mb-0 lg:-translate-y-[70px] rounded'>
                  <div className='flex justify-center mb-25px'>
                    <Image src="/exercise.svg" alt="Running" height="60px" width="60px"/>
                  </div>
                  <h3 className="relative tracking-wider text-center font-semibold mb-20px after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-[#2F0BC4] after:-bottom-[10px] after:left-0 after:right-0 after:mx-auto">ALERGARE</h3>
                  <p className="text-center text-gray">Atlas FitClub oferă clienților benzi de alergat moderne, dar și aparate Cardio unde iși pot depăși limitele.</p>
                  <button 
                    className='block mx-auto my-20px px-20px py-[7px] border-2 border-primary rounded-full text-primary font-semibold transition ease-in-out duration-300 hover:bg-[#2F0BC4] hover:text-white'
                    onMouseEnter={() => setIsHoveredTwo(true)}
                    onMouseLeave={() => setIsHoveredTwo(false)}
                    onClick={() => setShowModal(true)}
                  >
                    More
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ fontSize: 14, color: isHoveringTwo ? 'white' : "#2F0BC4", marginLeft: 10, transform: isHoveringTwo ? `translateX(10px)` : ``,  transition: 'transform 0.35s ease-in-out', }}
                    />
                  </button>
                </div>
                <div className='bg-white p-25px mb-20px lg:mb-0 lg:-translate-y-[70px] rounded'>
                  <div className='flex justify-center mb-25px'>
                    <Image src="/yoga-carpet.svg" alt="Yoga" height="60px" width="60px"/>
                  </div>
                  <h3 className="relative tracking-wider text-center font-semibold mb-20px after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-[#2F0BC4] after:-bottom-[10px] after:left-0 after:right-0 after:mx-auto">ZUMBA</h3>
                  <p className="text-center text-gray">Pentru noi, e o onoare să ne bucurăm de clasele de Zumba, ținute cu atâta suflet și profesionalism de Andrei Podariu Zumba</p>
                  <button 
                    className='block mx-auto my-20px px-20px py-[7px] border-2 border-primary rounded-full text-primary font-semibold transition ease-in-out duration-300 hover:bg-[#2F0BC4] hover:text-white'
                    onMouseEnter={() => setIsHoveredThree(true)}
                    onMouseLeave={() => setIsHoveredThree(false)}
                    onClick={() => setShowModal(true)}
                  >
                    More
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ fontSize: 14, color: isHoveringThree ? 'white' : "#2F0BC4", marginLeft: 10, transform: isHoveringThree ? `translateX(10px)` : ``,  transition: 'transform 0.35s ease-in-out', }}
                    />
                  </button>
                </div>
              </div>
            </div>

            { showModal ? <Modal closeModal={() => setShowModal(false)}/> : null }
          </section>
}

export default Offers;