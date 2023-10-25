import styled from "styled-components";
import defaultBgFallback from "../img/default-bg.jpg";

const HeaderContainer = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  background-color: #000;
  overflow: hidden;
`;

const HeaderImage = styled("div")<{ bgImage: string }>`
  background-image: url(${({ bgImage }) => bgImage});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
`;

const DEFAULT_BG = "/img/default-bg.webp";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage bgImage={DEFAULT_BG} />
    </HeaderContainer>
  );
};
