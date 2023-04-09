import React, { useState } from 'react'
import styled from 'styled-components'
import CardNews from './CardNews'

const News = () => {
  const [data1] = useState('20/03/23')
  const [data2] = useState('22/03/23')
  const [data3] = useState('25/03/23')

  return (
    <NewsContainer>
      <Title>NOTÍCIAS</Title>
      <ListNews>
        <CardNews data={data1}/>
        <CardNews data={data2}/>
        <CardNews data={data3}/>
      </ListNews>
    </NewsContainer>
  )
}

export default News

const NewsContainer = styled.div`
  width: 100%;
`

const Title = styled.h2`
  color: #007832;
  margin-bottom: 40px;
  letter-spacing: 3px;
`

const ListNews = styled.div`
  display: flex;
  gap: 48px;
`