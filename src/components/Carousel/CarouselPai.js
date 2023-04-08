import React, { useState } from 'react'
// import styled from 'styled-components';
import Carousel from 'react-elastic-carousel'
import './Item'

const CarouselPai = () => { 
  const breakPoints = [
    { width: 1, itemToShow: 1 },
    { width: 550, itemToShow: 2, itemToScroll: 2 },
    { width: 768, itemToShow: 3 },
    { width: 1200, itemToShow: 4 },
  ]

  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8])

  const addItem = () => {
    const nextItem = Math.max(1, items.length + 1)
    setItems([...items, nextItem])
  }

  const removeItem = () => {
    
  }

  return (
    <div className="container">
      <div className="controls-wrapper">

      </div>
      <hr className="separator" />
      <div className="carousel-wrapper">

      </div>
    </div>
    
    
    // <Container>
    //   <ControlsWrapper>

    //   </ControlsWrapper>
    //   <Separator />
    //   <CarouselWrapper>

    //   </CarouselWrapper>
    // </Container>
  )
}

export default CarouselPai

// const Container = styled.div`

// `

// const ControlsWrapper = styled.div`

// `

// const Separator = styled.hr`

// `

// const CarouselWrapper = styled.div`

// `