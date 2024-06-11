import React from "react";
import styled from "styled-components";

import intro1 from "../assets/img/icons/intro1.svg";
import intro2 from "../assets/img/icons/intro2.svg";
import intro3 from "../assets/img/icons/intro3.svg";
import intro4 from "../assets/img/icons/intro4.svg";
import intro5 from "../assets/img/icons/intro5.svg";
import intro6 from "../assets/img/icons/intro6.svg";

const Intro = () => {
  return (
    <IntroContainer>
      <IntroImage src={intro1} alt="Intro 1" />
      <IntroImage src={intro2} alt="Intro 2" />
      <IntroImage src={intro3} alt="Intro 3" />
      <IntroImage src={intro4} alt="Intro 4" />
      <IntroImage src={intro5} alt="Intro 5" />
      <IntroImage src={intro6} alt="Intro 6" />
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 100px 50px;
`;

const IntroImage = styled.img`
  width: 50%;
  height: auto;
  margin: 80px auto;
  object-fit: contain;
`;
