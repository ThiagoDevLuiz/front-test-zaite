import React from 'react';
import styled from 'styled-components';
import CardNews from './CardNews';
import { descNews1, descNews2, descNews3, image2, image3 } from '../constants/mock';

import image1 from '../assets/Images/noticia.jpg';

const News = () => {
  return (
    <NewsContainer>
      <Title>NOTÍCIAS</Title>
      <ListNews>
        <CardNews date="20/03/23" desc={descNews1} image={image1} />
        <CardNews date="22/03/23" desc={descNews2} image={image2} />
        <CardNews date="25/03/23" desc={descNews3} image={image3} />
      </ListNews>
    </NewsContainer>
  );
};

export default News;

const NewsContainer = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  color: #007832;
  margin-bottom: 40px;
  letter-spacing: 3px;
`;

const ListNews = styled.div`
  display: flex;
  gap: 48px;
`;