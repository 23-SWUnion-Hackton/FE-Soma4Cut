import styled from "styled-components";
import { useState } from "react";
import { color } from "../style/color";
import { Button } from "../style/button";
import { text } from "../style/text";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const nav = useNavigate();

  const loginOnclick = () => {
    nav("/isnew");
  };
  return (
    <Container>
      <Children>
        <text.heading.h3>소마네컷에 로그인</text.heading.h3>
        <InputContainer>
          <div>
            <text.body.body3>아이디</text.body.body3>
            <Input
              placeholder="아이디를 입력해주세요"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <text.body.body3>비밀번호</text.body.body3>
            <Input
              placeholder="비밀번호를 입력해주세요"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </div>
        </InputContainer>
        <ButtonContainer>
          <Button gray onClick={() => nav("/type")}>
            이전
          </Button>
          <Button onClick={loginOnclick}>로그인</Button>
        </ButtonContainer>
      </Children>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  padding: 120px 17vw;
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

const InputContainer = styled.div`
  display: flex;
    flex-direction: column;
    gap: 20px;
    color: ${color.Basic.gray700};
    > div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

`
const Input = styled.input`
  font-size: 20px;
  border: none;
  outline: none;
  padding: 20px 20px;
  background-color: ${color.Basic.gray50};
  border-radius: 5px;
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
