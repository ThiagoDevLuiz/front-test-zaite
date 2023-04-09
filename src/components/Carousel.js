import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const images = [
  { src: require('../assets/Images/banner1.png'), alt: 'Imagem 1', caption: 'ZAITE CONSULTORIA'},
  { src: require('../assets/Images/banner2.png'), alt: 'Imagem 2', caption: 'ZAITE CONSULTORIA'},
  { src: require('../assets/Images/banner3.png'), alt: 'Imagem 3', caption: 'ZAITE CONSULTORIA'},
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleBallClick = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 400);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselWrapper>
      <ImageWrapper> 
        <Overlay>  
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            isTransitioning={isTransitioning}
          />
        </Overlay>
        <Caption>{images[currentImageIndex].caption}</Caption>
      </ImageWrapper>   
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
  padding-top: 50px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ isTransitioning }) => isTransitioning ? 0 : 1};
  filter: brightness(60%);
  object-fit: cover;
`;

const Overlay = styled.div`
  background-color: #007832b7;
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`

const Caption = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 5px;
`;

const BallList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Ball = styled.li`
  list-style: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  border: 2px solid ${({ isSelected }) => (isSelected ? '#007832' : '#9295a170')};
  background-color: ${({ isSelected }) => (isSelected ? '#007832' : '#fff')};
`;