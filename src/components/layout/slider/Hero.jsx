import React from 'react';
import Slider from 'react-slick';

// CSS Files Import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const SlickSlider = Slider.default || Slider;
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  const heroData = [
    {
      title: "Women's Fashion Redefined",
      subtitle: 'Style that speaks for itself.',
      button: 'View Collection',
      src: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: "Discover Our Latest Collection",
      subtitle: 'Unbeatable Prices on the Latest Trends.',
      button: "Shop Now",
      src: 'https://t4.ftcdn.net/jpg/06/75/00/45/240_F_675004570_USEFB3NJp7H43v1aFrDBdvnh1q61nJiP.jpg'
    },
    {
      title: "Top Electronics, Best Deals",
      subtitle: 'Upgrade your tech with our exclusive offers.',
      button: "Explore Electronics",
      src: 'https://t4.ftcdn.net/jpg/13/23/39/23/240_F_1323392330_BS2Jbuc6KNbSyUD6OSxe5eko8WF4F6iU.jpg'
    }
  ];

  return (
    <div className="w-full px-10 mt-8 overflow-hidden ">
      <SlickSlider {...settings}>
        {heroData.map((item, index) => (
          <div key={index} className="outline-none w-[200] overflow-hidden rounded-2xl">
            {/* Background Image mate inline style ane baki badhu Tailwind mathi */}
            <div 
              className="h-[400px] md:h-[400px] w-full overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white"
              style={{ backgroundImage: `url(${item.src})` }}
            >
              {/* Content Box with Overlay for readability */}
              <div className=" p-8 rounded-lg text-center ">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{item.title}</h1>
                <p className="text-lg md:text-xl mb-6">{item.subtitle}</p>
                <button className="bg-white text-black px-8 py-3 font-semibold rounded-full hover:bg-gray-200 transition-all">
                  {item.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
}

export default Hero;