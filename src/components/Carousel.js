import React, { useState } from 'react'
import styled from 'styled-components'

import FirstImg from '../../src/assets/Images/banner1.png'
import SecondImg from '../assets/Images/banner2.png'


const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: {FirstImg}, alt: 'Imagem 1' },
    { src: {SecondImg}, alt: 'Imagem 2' },
    { src: 'https://example.com/image3.jpg', alt: 'Imagem 3' },
  ];

  const handleBallClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <CarouselWrapper>
      <Image src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
      <BallList>
        {images.map((image, index) => (
          <Ball
            key={index}
            isSelected={index === currentImageIndex}
            onClick={() => handleBallClick(index)}
          />
        ))}
      </BallList>
    </CarouselWrapper>
  );
};

export default Carousel;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
`;

const BallList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Ball = styled.li`
  list-style: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${({ isSelected }) => isSelected ? 'red' : 'gray'};
`;