"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";

const ELEMENT_ID = "solar-system";

const SolarSystemPage = () => {
  const isInitiated = useRef(false);
  useEffect(() => {
    const init = async () => {
      const { showSolarSystem } = await import(
        "../../../shared/components/SolarSystem/solar-system"
      );
      showSolarSystem(ELEMENT_ID);
      isInitiated.current = true;
    };

    if (!isInitiated.current) {
      init();
    }
  }, []);

  return <SolarStyled id={ELEMENT_ID} />;
};

const SolarStyled = styled.div`
  margin: 0 -24px;
`;

export default SolarSystemPage;
