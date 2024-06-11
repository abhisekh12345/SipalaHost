"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    <div className='w-full mt-[30px] overflow-hidden'>
    <Slider {...settings} >
      {images.map((image, index) => (
        <div key={index} className="max-h-[600px]">
          <Image src={image} alt={`Slide ${index}`}
            width={1600}
            height={900}
           className="h-auto object-cover" />
        </div>
      ))}
    </Slider>
    </div>
    </>
  );
};

export default ImageSlider;
