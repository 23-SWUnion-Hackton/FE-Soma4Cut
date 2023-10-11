import React from "react";
import styled from "styled-components";
import { Footer } from "../components/common/footer";
import { text } from "../style/text";
import SuccessIcon from "../assets/successIcon";

const Loading = () => {
  const [count, setCount] = React.useState(0);

  setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <Container>
      <Text>
        <Status>
          {count < 10
            ? "당신의 사진이 출력되고 있어요!"
            : "사진이 성공적으로 출력되었어요!"}
        </Status>
        <WaitPlease>
          {count < 10
            ? `잠시만 기다려 주세요 ${".".repeat((count % 3) + 1)}`
            : "아래에 출력된 사진을 꼭 챙겨주세요."}
        </WaitPlease>
        {count < 10 ? "" : <SuccessIcon />}
      </Text>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  height: calc(50vh - 144px);
  width: 100%;
`;

const Status = styled(text.heading.h3)`
  font-weight: 600;
`;

const WaitPlease = styled(text.body.body1)`
  margin-bottom: 24px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-direction: column;
  margin: 25vh 0;
`;

export default Loading;
