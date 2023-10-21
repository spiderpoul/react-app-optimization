import styled from "styled-components";
import { API_URL_IMAGE_OF_THE_DAY } from "../../constants";
import { useLoaderData } from "react-router-dom";
import { PictureOfTheDayResponse } from "../../types";

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
  font-size: 36px;
  font-weight: bold;
  color: darkcyan;
  margin-bottom: 24px;
`;

export const pictureOfTheDayLoader = () => {
  return fetch(API_URL_IMAGE_OF_THE_DAY);
};

const PictureOfTheDay = () => {
  const data = useLoaderData() as PictureOfTheDayResponse;

  return (
    <Container>
      <>
        <Title>
          {data.title} <i className="fa fa-globe" aria-hidden="true"></i>
        </Title>
        {data.media_type === "video" ? (
          <Video frameBorder="0" src={`${data.url}`} />
        ) : (
          <Image src={data.hdurl} />
        )}
        <Text>{data.explanation}</Text>
      </>
    </Container>
  );
};

export default PictureOfTheDay;
