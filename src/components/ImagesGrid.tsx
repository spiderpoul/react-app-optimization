import React, { Suspense } from "react";
import StackGrid, { transitions } from "react-stack-grid";
import styled from "styled-components";
import LibraryItem from "./LibraryItem";
import CardGridPlaceholder from "./CardGridPlaceholder";
import { Await } from "react-router-dom";
import { LibraryItemModel, LibraryResponse } from "../types";

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

const CardGrid: React.FC<{ data: Promise<LibraryResponse> }> = ({ data }) => {
  return (
    <ImageGridContainer>
      <Suspense fallback={<GridLoader />}>
        <Await resolve={data}>
          {({ collection: { items: data } }) => (
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
              {data?.length &&
                data?.slice(0, 10).map((item) => {
                  return <LibraryItem item={item} key={item.href} />;
                })}
            </StackGrid>
          )}
        </Await>
      </Suspense>
    </ImageGridContainer>
  );
};

export default CardGrid;
