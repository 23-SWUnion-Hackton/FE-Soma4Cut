import styled from "styled-components";
import { color } from "../../style/color";
import { LogoIcon } from "../../assets/logoIcon";
import { Logo } from "../../assets/logo";

export const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoIcon />
        <Logo />
      </LogoContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 60px;
  background-color: ${color.Basic.white};
  padding: 10px 12vw;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
