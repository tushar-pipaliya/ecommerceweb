import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';;

const LatestElecronic = () => {

 const SlickSlider = Slider.default || Slider;
  const settings = {
      dots: true,
      infinite: true,         
      slidesToShow: 4,        
      slidesToScroll: 3,      
      // autoplay: true,
    // autoplaySpeed: 100,    
    speed: 1000,              
      cssEase: "ease-in-out", 
      pauseOnHover: true      
    };


  const [data, setData] = useState([]); 
  const [electronics, setElectronics] = useState([]);   

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const jsonData = await res.json();
        setData(jsonData);

        const filtered = jsonData.filter(item => item.category === "electronics");
          setElectronics(filtered)
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);
  console.log(data, 'data')
  console.log(electronics, 'electronics')

  return (
  <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 ">Latest in Electronics</h2>

        <div className="slider-container">
          <SlickSlider {...settings}>
            {electronics.map((item) => (
              <div key={item.id} className="p-3">
                <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full">

                  {/* Image Container */}
                  <div className="relative bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      className="w-40 h-48 object-contain transform group-hover:scale-110 transition-transform duration-300"
                      alt={item.title}
                    />

                  </div>

                  {/* Content Section */}
                  <div className="p-5">

                    <h6 className="mt-2 text-gray-800 font-bold truncate ">
                      {item.title}
                    </h6>
                      <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <div className='flex items-center justify-between'>
                         <Rating
                        name="text-feedback"
                        value={item.rating.rate}
                        readOnly
                        precision={0.5}
                        size="small"
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />Count: ({item.rating.count})
                      </div>
   
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xl font-bold text-gray-900">₹{item.price}</p>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out mt-4 px-3 py-1 bg-blue-500 text-white rounded-full">
                        Add to Cart
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </div>
  );
};

export default LatestElecronic;