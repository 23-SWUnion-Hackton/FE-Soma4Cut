import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Footer } from "../components/common/footer";
import { text } from "../style/text";
import { color } from "../style/color";
import CopyIcon from "../assets/copyIcon";
import { useRecoilValue } from "recoil";
import { ResultImgAtom, ResultBlobImg } from "../atoms";
import { Button } from "../style/button";
import { alertError, alertSuccess } from "../utils/toastify";
import axios from "axios";
import { AUTH_URL } from "../constants/config";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxODVkMmU0Ni0yYWM1LTQ3MzItODJiOC01ZTc0NWJiNDgwOGUiLCJ0eXBlIjoiYWNjZXNzIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNjk3MDk1NjAyLCJleHAiOjE2OTcwOTYyMDJ9.8HwAod50JstC2z6uz0sVcBbPRpKm6pVgY04kz-4J3cE";

const ShowPictureCode = () => {
  const [code, setCode] = useState("");

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alertSuccess("클립보드에 복사되었습니다.");
    } catch (err) {
      alertError("클립보드 복사에 실패했습니다.");
    }
  };
  const resultImg = useRecoilValue(ResultImgAtom);
  const resultBlobImg = useRecoilValue(ResultBlobImg);

  const formData = new FormData();
  const [loading, setLoading] = useState(false);

  const serverAxios = async () => {
    const image = new File([resultBlobImg], "image.jpeg");
    formData.append("image", image);
    setLoading(true);

    axios
      .request({
        url: `${AUTH_URL}/user/image/complete`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        method: "post",
        data: formData,
        responseType: "blob",
      })
      .then((res) => {
        setLoading(false);
        setCode(res.data.code);
      })
      .catch((err) => {
        alertError("오류가 발생하였습니다. 관리자에게 문의해주세요");
        setLoading(false);
        window.location.href = "/";
      });
  };

  useEffect(() => {
    serverAxios();
  }, []);

  return (
    <Container>
      <Content>
        <Frame src={resultImg} />
        <CodeContainer>
          <Heading>당신만의 사진 코드가 출력되었어요!</Heading>
          {loading ? (
            <text.heading.h2>사진 코드를 생성중입니다.</text.heading.h2>
          ) : (
            <YourCode>
              <PictureCode>사진 코드</PictureCode>
              <Copy onClick={copyContent}>
                <Code>{code}</Code>
                <CopyIcon />
              </Copy>
            </YourCode>
          )}
          <Button onClick={() => (window.location.href = "/")}>홈으로</Button>
        </CodeContainer>
      </Content>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 60vh;
`;

const Frame = styled.img`
  width: 180px;
`;

const Content = styled.div`
  margin: 60px 20vw;
  display: flex;
  gap: 60px;
  justify-content: center;
`;

const Heading = styled(text.heading.h5)``;

const PictureCode = styled(text.body.body3)``;

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

const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
`;

const YourCode = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default ShowPictureCode;
