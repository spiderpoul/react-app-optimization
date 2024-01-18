import React from "react";
import StackGrid, { transitions } from "react-stack-grid";
import styled from "styled-components";
import LibraryItem from "./LibraryItem";
import CardGridPlaceholder from "./CardGridPlaceholder";
import {  LibraryResponse } from "../types";

const { scaleDown } = transitions;

const ImageGridContainer = styled.div`
  padding: 50px 0px;
  margin: 0 -24px;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 36px;
`;

const PLACEHOLDER_COUNTS = 10;

const GridLoader = () => (
  <LoaderContainer>
    {[...Array(PLACEHOLDER_COUNTS)].map((x, index) => (
      <CardGridPlaceholder key={index} />
    ))}
  </LoaderContainer>
);

const CardGrid: React.FC<{ data: LibraryResponse }> = ({ data }) => {
  const { items } = data
  return (
    <ImageGridContainer>
      {!items ? (
        <GridLoader />
      ) : (
        <StackGrid
          key="StackGrid"
          columnWidth={370}
          gutterWidth={24}
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
        >
          {items?.length &&
            items?.slice(0, 10).map((item) => {
              return <LibraryItem item={item} key={item.href} />;
            })}
        </StackGrid>
      )}
    </ImageGridContainer>
  );
};

export default CardGrid;
