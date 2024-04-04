import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Header";
import Player from "./Player";
import styled from "styled-components";

// 스타일 컴포넌트의 이름을 PascalCase로 변경
const ContentMain = styled.main`
  max-width: 2000px;
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 165px;
`;

const Main = (props) => {
  return (
    <ContentMain>
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Auda : 글이 내게로 오다"
        defaultTitle="Auda : 글이 내게로 오다"
        defer={false}
      >
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>

      <Header />
      <ContentMain id="main" role="main">
        {props.children}
      </ContentMain>
      <Player />
    </HelmetProvider>
    </ContentMain>
  );
};

export default Main;
