import styled from "styled-components";
import { API_URL_IMAGE_OF_THE_DAY } from "../../constants";
import { useLoaderData } from "react-router-dom";
import { PictureOfTheDayResponse } from "../../types";
import { myLongTask } from "../../utils/long-tasks";
import { useLayoutEffect } from "react";

const Text = styled.div`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 24px;
  margin-top: 24px;
`;

const Container = styled.div`
  padding: 24px;
`;

const Image = styled("img")`
  max-width: 100%;
  height: auto;
  width: 100%;
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

export const pictureOfTheDayLoader = () => {
  return fetch(API_URL_IMAGE_OF_THE_DAY);
};

const PICTURE_URL = "./img/nebula.png";

const PictureOfTheDay = () => {
  const data = useLoaderData() as PictureOfTheDayResponse;

  useLayoutEffect(() => {
    myLongTask();
  }, []);

  return (
    <Container>
      <>
        <Title>
          {data.title} <i className="fa fa-globe" aria-hidden="true"></i>
        </Title>
        <Image src={PICTURE_URL} />
        <Text>{data.explanation}</Text>
      </>
    </Container>
  );
};

export default PictureOfTheDay;
