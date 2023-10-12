import styled from "styled-components";
import { color } from "../style/color";
import { text } from "../style/text";
import { Button } from "../style/button";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { AnotherImgAtom, CodeAtom } from "../atoms";
import { useEffect } from "react";
import axios from "axios";
import { AUTH_URL } from "../constants/config";
import { alertError } from "../utils/toastify";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiODhjNDQwYi03YWY1LTQ5ZjgtYjNjOS05MTliODg4ODg2YjAiLCJ0eXBlIjoiYWNjZXNzIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNjk3MDQzMTIzLCJleHAiOjE2OTcxNDMxMjN9.jyAl-AJCRRm0bYitdb5B-dVOGWt50Ildo8kwmJNUfbE";

export const Another = () => {
  const nav = useNavigate();
  const [anotherImages, setAnotherImage] = useRecoilState(AnotherImgAtom);
  const code = useRecoilValue(CodeAtom);

  useEffect(() => {
    axios
      .request({
        url: `${AUTH_URL}/user/image/${code}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAnotherImage(res.data.images);
      })
      .catch(() => {
        alertError("오류가 발생했습니다. 관리자에게 문의해주세요.");
        // nav('/')
      });
  }, []);

  return (
    <Container>
      <Children>
        <text.heading.h5>사진을 성공적으로 불러왔어요!</text.heading.h5>
        <ImgContainer>
          {anotherImages.map((src) => (
            <Img src={src} />
          ))}
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
const Img = styled.img`
  width: 48%;
  height: 150px;
  background-color: ${color.Basic.black};
`;
