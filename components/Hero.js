import Image from 'next/image'

const Hero = () => {

  return  <section className="bg-[url('/hero-1.jpg')] h-[calc(100vh-100px)] bg-no-repeat bg-cover bg-top">
            <div className='pt-[260px] text-shadow-lg'>
              <h5 className='text-white text-center text-3xl'>EAT CLEAN - TRAIN DIRTY</h5>
              <h1 className='text-white text-center text-8xl'>Atlas FitClub</h1>
            </div>
          </section>
}

export default Hero;