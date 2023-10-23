import styled from "styled-components";
import { API_URL_IMAGE_OF_THE_DAY } from "../../constants";
import { useLoaderData } from "react-router-dom";
import { PictureOfTheDayResponse } from "../../types";
import { useEffect, useLayoutEffect } from "react";
import { myLongTask } from "../../utils/long-tasks";
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
  font-weight: bold;
  color: darkcyan;
  margin-bottom: 24px;
`;

const GlobeIconStyled = styled(GlobeIcon)`
  fill: darkcyan;
  width: 28px;
  margin-left: 12px;
`;

const PICTURE_URL =
  "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000743/GSFC_20171208_Archive_e000743~orig.png";

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
        {data.media_type === "video" ? (
          <Video frameBorder="0" src={`${data.url}`} />
        ) : (
          <Image src={PICTURE_URL} />
        )}
        <Text>{data.explanation}</Text>
      </>
    </Container>
  );
};

export default PictureOfTheDay;
