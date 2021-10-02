import React from 'react'

import { sliderImages } from '../utils/constants'

import '../assets/styles/Slider.css'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

export const Slider = () => {
  return (
    <Carousel
      className="slider"
      infiniteLoop={true}
      showThumbs={false}
      swipeable={true}
      autoPlay={true}
    >
      {sliderImages.map((movie) => (
        <div className="sliderImage" key={movie.id}>
          <img src={movie.image} alt="" />
        </div>
      ))}
    </Carousel>
  )
}
