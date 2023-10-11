import styled from "styled-components";
import { color } from "../../style/color";
import { text } from "../../style/text";
import { Github } from "../../assets/github";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <text.body.body3>팀 스태커4와퍼</text.body.body3>
        <A>2023 SW마이스터고 연합해커톤</A>
      </LogoContainer>
      <GithubIcon to="https://github.com/23-SWUnion-Hackton">
        <Github />
      </GithubIcon>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 60px;
  background-color: ${color.Basic.gray100};
  padding: 25px 12vw;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const A = styled(text.paragraph.p2)`
  color: ${color.Basic.gray700};
`;

const GithubIcon = styled(Link)`
  > svg {
    width: 40px;
    cursor: pointer;
  }
`;
