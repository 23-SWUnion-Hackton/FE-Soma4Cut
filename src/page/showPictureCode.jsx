import React from "react";
import styled from "styled-components";
import Frame1 from "../assets/frame/frame1.png";
import { Footer } from "../components/common/footer";
import { text } from "../style/text";
import { color } from "../style/color";
import CopyIcon from "../assets/copyIcon";

const ShowPictureCode = () => {
  const ref = React.useRef(null);
  const copyContent = async () => {
    try {
      const text = ref.current.textContent;
      await navigator.clipboard.writeText(text);
      alert("클립보드에 복사되었습니다.");
    } catch (err) {
      alert("클립보드 복사에 실패했습니다.");
    }
  };

  return (
    <Container>
      <Content>
        <Frame src={Frame1} />
        <CodeContainer>
          <Heading>당신만의 사진 코드가 출력되었어요!</Heading>
          <YourCode>
            <PictureCode>사진 코드 :</PictureCode>
            <Copy onClick={copyContent}>
              <Code ref={ref}>abcd-1234</Code>
              <CopyIcon />
            </Copy>
          </YourCode>
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
  width: 200px;
`;

const Content = styled.div`
  margin: 10vh 20vw;
  display: flex;
  gap: 24px;
  justify-content: center;
`;

const Heading = styled(text.heading.h5)``;

const PictureCode = styled(text.body.body3)``;

const Copy = styled.div`
  padding: 12px 16px;
  border-radius: 4px;
  display: flex;
  width: 15vw;
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
