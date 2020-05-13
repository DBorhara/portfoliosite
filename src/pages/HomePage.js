import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import ImageCarousel from '../components/ImageCarousel';

function HomePage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carousel />
      <span></span>

      <ImageCarousel />
    </div>
  );
}

export default HomePage;
