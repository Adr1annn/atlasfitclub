import Image from 'next/image'

const Hero = () => {

  return  <section className="bg-[url('/hero-1.jpg')] h-[540px] lg:h-[calc(100vh-100px)] bg-no-repeat bg-cover bg-top">
            <div className='pt-[80px] lg:pt-[220px] text-shadow-lg'>
              <h5 className='text-white text-center text-2xl lg:text-3xl'>EAT CLEAN - TRAIN DIRTY</h5>
              <h1 className='text-white text-center text-7xl lg:text-8xl'>Atlas FitClub</h1>
              <p className='max-w-[600px] px-10px mx-auto text-center text-white mt-[10px]'>Atlas Fit Club este o sală la cele mai înalte standarde, cu aparate noi, de top cu ajutorul cărora poti să îți atingi potențialul maxim. În sala de aerobic se țin clase variate, cu antrenori bine pregătiți.</p>
              <button 
                className='block bg-[#2F0BC4] mx-auto my-20px px-20px py-[7px] border-2 border-primary rounded-full text-white font-semibold transition ease-in-out duration-300 hover:shadow-2xl'
                data-modal-toggle="popup-modal"
              >
                Vezi Video-ul Nostru
              </button>
            </div>
          </section>
}

export default Hero;