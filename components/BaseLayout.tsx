import React from "react";
import styled from "styled-components";
import Content from "./Content";
import { Header } from "./Header";
import MobileMenu from "./MobileMenu";

export const BaseLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Layout>
      <MobileMenu />
      <Header />
      <Content>
        {children}
      </Content>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Content;
