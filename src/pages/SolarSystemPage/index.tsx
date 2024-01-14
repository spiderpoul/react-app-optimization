import { useEffect } from "react";
import styled from "styled-components";


const ELEMENT_ID = "solar-system"

export const SolarSystemPage = () => {
  useEffect(() => {
    const init = async () => {
      const { showSolarSystem } = await import("./solar-system")
      showSolarSystem(ELEMENT_ID);
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
