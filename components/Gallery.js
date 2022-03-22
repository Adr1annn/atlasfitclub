import Image from 'next/image'

const Gallery = ({ title, layout }) => {

  return  <section className='p-[20px]'>
            <p className="relative tracking-wider text-center text-4xl font-semibold mb-30px after:content-[''] after:absolute after:w-[60px] after:h-[2px] after:bg-[#2F0BC4] after:-bottom-[10px] after:left-0 after:right-0 after:mx-auto">{ title }</p>
            <p className='text-center text-gray mb-[70px] max-w-[700px] mx-auto tracking-widest'>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:h-[465px] mb-[20px]">
              <Image src="/Gallery_2.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
              <Image src="/Gallery_14.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
              <Image src="/Gallery_5.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
              <Image src="/Gallery_10.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
            </div>
            <div className="grid lg:grid-cols-3 gap-5 lg:h-[465px]">
              <Image src="/Gallery_8.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
              <Image src="/Gallery_7.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
              <Image src="/Gallery_1.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
            </div>
            {
              layout === 'all' ?
              <div className='py-[20px]'>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:h-[465px] mb-[20px]">
                  <Image src="/Gallery_13.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
                  <Image src="/Gallery_4.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
                  <Image src="/Gallery_15.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
                  <Image src="/Gallery_16.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
                </div>
                <div className="grid lg:grid-cols-3 gap-5 lg:h-[465px]">
                  <Image src="/Gallery_9.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
                  <Image src="/Gallery_11.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
                  <Image src="/Gallery_12.jpg" alt="Weight Lifting" layout='responsive' height="100%" width="100%" quality={100}/>
                </div>
              </div>

              : null
            }
          </section>
}

export default Gallery;