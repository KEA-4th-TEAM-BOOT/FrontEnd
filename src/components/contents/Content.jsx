import React from 'react'
import styled from 'styled-components'
import ContentSlider from './ContentSlider';

const ContentWrapper = styled.div`
width:1374px;
height:547px;
padding:30px;
`;

const ContentTitle = styled.h1`
font-size: 30px;
`


const Content = () => {
  return (
    <ContentWrapper>
      <ContentTitle>
      콘텐츠
      <button>1</button> <button>2</button>
      </ContentTitle>
      <ContentSlider></ContentSlider>
      
      </ContentWrapper>
  )
}

export default Content