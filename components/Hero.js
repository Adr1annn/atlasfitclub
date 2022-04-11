import { useState } from 'react'
import Image from 'next/image'
import Modal from './Modal';

const Hero = ({ layout, page, title }) => {
  const [showModal, setShowModal] = useState(false);

  return  <section className={`${ page === "home" ? "bg-[url('/hero-2.webp')]" : "bg-[url('/Gallery_Hero.jpg')]" } h-400px md:h-[540px] w-full lg:h-[calc(100vh-100px)] bg-no-repeat bg-cover bg-top`}>
            <div className='pt-20px md:pt-80px lg:pt-150px text-shadow-lg'>
              {
                page === 'home' ?
                  <h5 className='text-white text-center text-xl lg:text-3xl'>EAT CLEAN - TRAIN DIRTY 🏋🏻‍♀️🏋🏻‍♀️🏋🏻‍♀️</h5>
                : null
              }
              <h1 className='text-primary text-center pt-30px md:pt-10px text-6xl md:text-7xl lg:text-8xl'>{ title }</h1>
              <p className='max-w-[600px] px-10px mx-auto text-center text-white mt-[10px] text-md lg:text-xl'>
                {
                  page === 'home' ? 
                    "Atlas Fit Club este o sală la cele mai înalte standarde, cu aparate noi, de top cu ajutorul cărora poti să îți atingi potențialul maxim. În sala de aerobic se țin clase variate, cu antrenori bine pregătiți."
                  : page === 'gallery' ? 
                    "Dacă începi astăzi, vei vedea rezultate cu o zi mai devreme decât dacă aștepți până mâine. Începe astăzi!"
                  : null
                }
              </p>
              {/* {
                page === 'home' ?
                  <button 
                    className='block bg-[#2F0BC4] mx-auto my-20px px-20px py-[7px] border-2 border-primary rounded-full text-white font-semibold transition ease-in-out duration-300 hover:shadow-2xl'
                    data-modal-toggle="popup-modal"
                    onClick={() => setShowModal(true)}
                  >
                    Vezi Video-ul Nostru
                  </button>
                : null
              } */}
            </div>

            { showModal ? <Modal closeModal={() => setShowModal(false)}/> : null }
          </section>
}

export default Hero;