import React, { useState } from "react";
import styled from "styled-components";
import { Footer } from "../components/common/footer";
import { text } from "../style/text";
import { color } from "../style/color";
import CopyIcon from "../assets/copyIcon";
import { useRecoilValue } from "recoil";
import { ResultImgAtom, ResultBlobImg } from "../atoms";
import { Button } from "../style/button";
const ShowPictureCode = () => {
  const [code, setCode] = useState("");

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("클립보드에 복사되었습니다.");
    } catch (err) {
      alert("클립보드 복사에 실패했습니다.");
    }
  };
  const resultImg = useRecoilValue(ResultImgAtom);
  const resultBlobImg = useRecoilValue(ResultBlobImg);

  function createMultipartFormData(blob, fieldName) {
    const formData = new FormData();
    formData.append(fieldName, blob);
    return formData;
  }

  const formData = createMultipartFormData(resultBlobImg, "images");

  return (
    <Container>
      <Content>
        <Frame src={resultImg} />
        <CodeContainer>
          <Heading>당신만의 사진 코드가 출력되었어요!</Heading>
          <YourCode>
            <PictureCode>사진 코드</PictureCode>
            <Copy onClick={copyContent}>
              <Code>{code}</Code>
              <CopyIcon />
            </Copy>
          </YourCode>
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
