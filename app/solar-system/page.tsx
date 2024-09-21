"use client"

import { useEffect, useRef } from "react";
import styled from "styled-components"
import { BaseLayout } from "../../components/BaseLayout";

const ELEMENT_ID = "solar-system"

const SolarSystemPage = () => {
  const isInitiated = useRef(false)
  useEffect(() => {
    const init = async () => {
      const { showSolarSystem } = await import("../../components/SolarSystem/solar-system")
      showSolarSystem(ELEMENT_ID);
      isInitiated.current = true
    }

    if (!isInitiated.current) {
      init()
    }
  }, []);

  return (
    <BaseLayout>
      <SolarStyled id={ELEMENT_ID} />
    </BaseLayout>
  );
};

const SolarStyled = styled.div`
  margin: 0 -24px;
`;

export default SolarSystemPage