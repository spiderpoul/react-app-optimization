import { useEffect } from "react";
import styled from "styled-components";
import { showSolarSystem } from "./solar-system";

const ELEMENT_ID = "solar-system"

export const SolarSystemPage = () => {
  useEffect(() => {
    showSolarSystem(ELEMENT_ID);
  }, []);
  return (
    <>
      <SolarStyled id={ELEMENT_ID} />
    </>
  );
};

const SolarStyled = styled.div`
  margin: 0 -24px;
`;
