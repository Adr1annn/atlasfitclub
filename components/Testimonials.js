import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return  <section className="bg-light-gray py-[60px]">
            <div className="container">
              <p className="relative tracking-wider text-center text-4xl font-semibold mb-60px after:content-[''] after:absolute after:w-[60px] after:h-[2px] after:bg-[#2F0BC4] after:-bottom-[10px] after:left-0 after:right-0 after:mx-auto">CLIENTI FERICITI</p>
              <Slider {...settings}>
                <div className="flex justify-center">
                  <div className="h-[100px] w-[100px] mb-[10px] bg-primary mx-auto rounded-full">

                  </div>
                  <h6 className="text-center uppercase tracking-wider mb-[30px] font-bold">Anna Maria</h6>
                  <p className="text-center mb-10 text-gray max-w-[700px] mx-auto">Super!!! Oameni dedicați și pasionați de ceea ce fac!! 10+ pentru Florin și Dana!!!🥇🏆</p>
                </div>
                <div className="flex justify-center">
                  <div className="h-[100px] w-[100px] mb-[10px] bg-primary mx-auto rounded-full">

                  </div>
                  <h6 className="text-center uppercase tracking-wider mb-[30px] font-bold">Andrei Mehedeniuc</h6>
                  <p className="text-center mb-10 text-gray max-w-[700px] mx-auto">O sala foarte curată, aparate noi, pret accesibil și un personal perfect.</p>
                </div>
                <div className="flex justify-center">
                  <div className="h-[100px] w-[100px] mb-[10px] bg-primary mx-auto rounded-full">

                  </div>
                  <h6 className="text-center uppercase tracking-wider mb-[30px] font-bold">Ciprian Lupascu</h6>
                  <p className="text-center mb-10 text-gray max-w-[700px] mx-auto">O sală Modernă și niste Oameni deosebiți gata să ajute mai ales începători ,Recomand cu incredere!☺🏋️‍♂️🏋️‍♂️🤸‍♂️</p>
                </div>
                <div className="flex justify-center">
                  <div className="h-[100px] w-[100px] mb-[10px] bg-primary mx-auto rounded-full">

                  </div>
                  <h6 className="text-center uppercase tracking-wider mb-[30px] font-bold">Ionut Liviu Burciu</h6>
                  <p className="text-center mb-10 text-gray max-w-[700px] mx-auto">Sala cea mai bună din oraș, cu apărate profesionale și cu antrenori foarte bine pregătiți pe domneiul fitness & bodybuilding dar și pe corectarea posturii sau chiar recuperare! 🙂</p>
                </div>
                <div className="flex justify-center">
                  <div className="h-[100px] w-[100px] mb-[10px] bg-primary mx-auto rounded-full">

                  </div>
                  <h6 className="text-center uppercase tracking-wider mb-[30px] font-bold">Laura Elenea</h6>
                  <p className="text-center mb-10 text-gray max-w-[700px] mx-auto">Clasele voastre?hm🤔 ...sunt pline de dragoste și căldură😎 devotament, implicare și ambiție! Pline de îmbrățișări, zâmbete și voie bună... de rezultate și &quot;divastyle&quot;😎😅</p>
                </div>
                <div className="flex justify-center">
                  <div className="h-[100px] w-[100px] mb-[10px] bg-primary mx-auto rounded-full">

                  </div>
                  <h6 className="text-center uppercase tracking-wider mb-[30px] font-bold">Andreea Lupastean</h6>
                  <p className="text-center mb-10 text-gray max-w-[700px] mx-auto">Locul ideal pentru un antrenament de CALITATE ,la aparate cat si la clase, cu oameni MINUNATI! Si cu normele de igiena RESPECTATE!👊</p>
                </div>
              </Slider>
            </div>
          </section>
}

export default Testimonials;