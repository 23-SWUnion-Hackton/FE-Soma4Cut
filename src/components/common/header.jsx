import styled from "styled-components";
import { color } from "../../style/color";
import { LogoIcon } from "../../assets/logoIcon";
import { Logo } from "../../assets/logo";
import { text } from "../../style/text";
import { Link } from "react-router-dom";

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
  gap: 5vw;
  align-items: center;
  box-shadow: 0px 0px 4px gray;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const LinkButton = styled(Link)`
  color: ${color.Basic.black};
  text-decoration: none;
`;
