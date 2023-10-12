import styled from "styled-components";
import { color } from "../style/color";
import { text } from "../style/text";
import { Button } from "../style/button";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { MyImageAtom } from "../atoms";
import { useEffect, useState } from "react";
import CopyIcon from "../assets/copyIcon";
import { alertError, alertSuccess } from "../utils/toastify";

export const ShowCode = () => {
  const nav = useNavigate();
  const MyImg = useRecoilValue(MyImageAtom);
  const [code, setCode] = useState("");
  const formData = new FormData();

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alertSuccess("클립보드에 복사되었습니다.");
    } catch (err) {
      alertError("클립보드 복사에 실패했습니다.");
    }
  };

/// form 데이터 리스트 물어보기

  return (
    <Container>
      <Children>
        <HeaderContainer>
          <text.heading.h5>코드를 친구에게 공유해주세요!</text.heading.h5>
          <Copy onClick={copyContent}>
            <Code>{code}</Code>
            <CopyIcon />
          </Copy>
        </HeaderContainer>
        <ImgContainer>
          {MyImg.map((src) => (
            <Img src={src} />
          ))}
        </ImgContainer>
        <ButtonContainer>
          <Button
            onClick={() => {
              window.location.href = "/";
            }}
          >
            감사합니다.
          </Button>
        </ButtonContainer>
      </Children>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  padding: 50px 17vw;
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
const Img = styled.img`
  width: 48%;
  background-color: ${color.Basic.black};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Copy = styled.div`
  padding: 12px 16px;
  border-radius: 4px;
  display: flex;
  width: 100%;
  background: ${color.Basic.gray50};
  display: flex;
  justify-content: space-between;
`;

const Code = styled(text.paragraph.p1)``;
