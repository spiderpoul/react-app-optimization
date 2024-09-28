import { useEffect } from "react";
import styled from "styled-components";
import "../../../shared/components/SolarSystem/solar-system"


const ELEMENT_ID = "solar-system"

export const SolarSystemPage = () => {
  useEffect(() => {
    const init = async () => {
      (window as any).showSolarSystem(ELEMENT_ID);
    }

    init()
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
