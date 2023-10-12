import styled from "styled-components";
import { useState } from "react";
import { color } from "../style/color";
import { Button } from "../style/button";
import { text } from "../style/text";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AUTH_URL } from "../constants/config";
import { useSetRecoilState } from "recoil";
import { AccessTokenAtom } from "../atoms";
import { alertError, alertWarning } from "../utils/toastify";
const pattern1 = /^(?=.*[a-zA-Z]).{1,10}$/;
const pattern2 = /^(?=.*[a-zA-Z])(?=.*[\W_]).{8,16}$/;

export const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const nav = useNavigate();
  const setAccessToken = useSetRecoilState(AccessTokenAtom);

  const loginOnclick = () => {
    if (pattern1.test(id)) {
      if (pattern2.test(pw)) {
        // axios
        //   .request({
        //     url: `${AUTH_URL}/user`,
        //     method: "post",
        //     data: {
        //       name: id,
        //       password: pw,
        //     },
        //   })
        //   .then((res) => {
        //     const { accessToken } = res.data;
        //     setAccessToken(accessToken);
        //     setTimeout(function () {
        //       nav("/isnew");
        //     }, 500);
        //     nav("/isnew");
        //   })
        //   .catch((err) => {
        //     // alertError("로그인에 실패하였습니다.");
        //     nav("/isnew");
        //   });
        setTimeout(function () {
          nav("/isnew");
        }, 500);
      } else {
        alertWarning(
          "비밀번호 형식은 8~16자 사이의 영문 + 특수문자 1개 이상 형식입니다."
        );
      }
    } else {
      alertWarning("닉네임 형식은 1~10자 사이의 영문 형식입니다.");
    }
  };

  return (
    <Container>
      <Children>
        <text.heading.h3>소마네컷에 로그인</text.heading.h3>
        <InputContainer>
          <div>
            <text.body.body3>닉네임</text.body.body3>
            <Input
              placeholder="닉네임을 입력해주세요"
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
`;
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
