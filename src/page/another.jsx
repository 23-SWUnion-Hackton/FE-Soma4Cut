import styled from "styled-components";
import { color } from "../style/color";
import { text } from "../style/text";
import { Button } from "../style/button";
import { useNavigate } from "react-router-dom";

export const Another = () => {
  const nav = useNavigate();

  return (
    <Container>
      <Children>
        <text.heading.h5>사진을 성공적으로 불러왔어요!</text.heading.h5>
        <ImgContainer>
          <Img />
          <Img />
          <Img />
          <Img />
        </ImgContainer>
        <ButtonContainer>
          <Button
            gray
            onClick={() => {
              nav("/codeinput");
            }}
          >
            이전
          </Button>
          <Button
            onClick={() => {
              nav("/camera");
            }}
          >
            촬영하러 가기
          </Button>
        </ButtonContainer>
      </Children>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  padding: 100px 17vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Children = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: row;

  > button {
    width: 100%;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 12px;
  width: 100%;
`;
const Img = styled.div`
  width: 48%;
  height: 150px;
  background-color: ${color.Basic.black};
`;
