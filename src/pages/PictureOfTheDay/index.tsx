import styled from "styled-components";
import { API_URL_IMAGE_OF_THE_DAY } from "../../constants";
import { useLoaderData } from "react-router-dom";
import { PictureOfTheDayResponse } from "../../types";
import { myLongTask } from "../../utils/long-tasks";
import { useLayoutEffect } from "react";
import { ReactComponent as GlobeIcon } from "../../img/globe.svg";


const Text = styled.div`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 24px;
  margin-top: 24px;
`;

const Container = styled.div`
  padding: 24px;
`;

const Img = styled("img")`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 3;
`;

const Video = styled.iframe`
  min-height: 600px;
  width: 100%;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 36px;
  font-weight: 400;
  color: darkcyan;
  margin-bottom: 24px;
`;


const GlobeIconStyled = styled(GlobeIcon)`
  fill: darkcyan;
  width: 28px;
  margin-left: 12px;
`;

export const pictureOfTheDayLoader = () => {
  return fetch(API_URL_IMAGE_OF_THE_DAY);
};


const PictureOfTheDay = () => {
  const data = useLoaderData() as PictureOfTheDayResponse;

  useLayoutEffect(() => {
    myLongTask();
  }, []);

  return (
    <Container>
      <>
        <Title>
          {data.title} <GlobeIconStyled />
        </Title>
        <picture>
          <source srcSet="./img/nebula.webp" type="image/webp" />
          <Img src="./img/nebula.png" alt="nebula" />
        </picture>
        <Text>{data.explanation}</Text>
      </>
    </Container>
  );
};

export default PictureOfTheDay;
