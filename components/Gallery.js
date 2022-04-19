import Image from 'next/image'

const Gallery = ({ title, layout }) => {

  return  <section className='p-[20px]'>
            <p className="relative tracking-wider text-center text-4xl font-semibold mb-30px after:content-[''] after:absolute after:w-[60px] after:h-[2px] after:bg-[#2F0BC4] after:-bottom-[10px] after:left-0 after:right-0 after:mx-auto">{ title }</p>
            <p className='text-center text-gray mb-40px max-w-[700px] mx-auto tracking-widest'>Atlas FitClub este locul în care cu siguranță vei găsi o formă de antrenament pe gustul tău, alături de echipa noastră de antrenori ce vor face experiența ta completă.</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 h-400px gap-5 mb-[20px]">
              <div className='relative'>
                <Image src='/Gallery/Gallery_18.jpeg' layout='fill' objectFit='cover'/>
              </div>
              <div className='relative'>
                <Image src='/Gallery/Gallery_19.jpeg' layout='fill' objectFit='cover'/>
              </div>
              <div className='relative'>
                <Image src='/Gallery/Gallery_17.jpeg' layout='fill' objectFit='cover'/>
              </div>
              <div className='relative'>
                <Image src='/Gallery/Gallery_10.jpg' layout='fill' objectFit='cover'/>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 h-400px">
              <div className='relative'>
                <Image src='/Gallery/Gallery_20.jpeg' layout='fill' objectFit='cover'/>
              </div>
              <div className='relative'>
                <Image src='/Gallery/Gallery_21.jpeg' layout='fill' objectFit='cover'/>
              </div>
            </div>
            {
              layout === 'all' ?
              <div className='py-[20px]'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 h-400px mb-[20px]">
                  <div className='relative'>
                    <Image src='/Gallery/Gallery_22.jpeg' layout='fill' objectFit='cover'/>
                  </div>
                  <div className='relative'>
                    <Image src='/Gallery/Gallery_9.jpg' layout='fill' objectFit='cover'/>
                  </div>
                  <div className='relative'>
                    <Image src='/Gallery/Gallery_24.jpeg' layout='fill' objectFit='cover'/>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-5 lg:h-400px">
                  <div className='relative'>
                    <Image src='/Gallery/Gallery_23.jpeg' layout='fill' objectFit='cover'/>
                  </div>
                  <div className='relative'>
                    <Image src='/Gallery/Gallery_11.jpg' layout='fill' objectFit='cover'/>
                  </div>
                </div>
              </div>

              : null
            }
          </section>
}

export default Gallery;