"use client";

import styled from "styled-components";
import { API_URL_IMAGE_OF_THE_DAY } from "../constants";
import GlobeIcon from "../img/globe.svg";
import { BaseLayout } from "../components/BaseLayout";
import { PictureOfTheDayResponse } from "../types";
import { useEffect, useState } from "react";
import Image from "next/image";
import nebula from "../img/nebula.webp";

const Text = styled.div`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 24px;
  margin-top: 24px;
`;

const Container = styled.div`
  padding: 24px;
`;

const Img = styled(Image)`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 3;
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

async function getData(): Promise<PictureOfTheDayResponse> {
  const res = await fetch(API_URL_IMAGE_OF_THE_DAY, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PictureOfTheDay = () => {
  const [data, setData] = useState({} as PictureOfTheDayResponse);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <BaseLayout>
      <Container>
        <>
          <Title>
            {data.title} <GlobeIconStyled />
          </Title>
          <Img
            src={nebula}
            width={1176}
            height={882}
            quality={80}
            alt="nebula"
          />
          <Text>{data.explanation}</Text>
        </>
      </Container>
    </BaseLayout>
  );
};

export default PictureOfTheDay;
