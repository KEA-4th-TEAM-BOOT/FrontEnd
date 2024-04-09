import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Header";
import Player from "../components/Player";
import styled from "styled-components";
import Footer from "./Footer";

// 스타일 컴포넌트의 이름을 PascalCase로 변경
const ContentMain = styled.main`
  max-width: 1374px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 120px;
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
          {props.children}
      </HelmetProvider>
    </ContentMain>
  );
};

export default Main;
