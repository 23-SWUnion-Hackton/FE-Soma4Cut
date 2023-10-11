import React, { useState } from "react";
import styled from "styled-components";
import { Footer } from "../components/common/footer";
import { text } from "../style/text";
import { Button } from "../style/button";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const [count, setCount] = React.useState(0);

  const nav = useNavigate();

  const [time, setTime] = useState(0);
  setTimeout(() => {
    setCount(count + 1);
  }, 1000);
  useState(() => {
    setTime(Math.floor(Math.random() * 10 + 1));
  }, []);

  return (
    <>
      <Container>
        <Text>
          <Status>
            {count < time
              ? "당신의 사진이 출력되고 있어요!"
              : "사진이 성공적으로 출력되었어요!"}
          </Status>
          <WaitPlease>
            {count < time
              ? `잠시만 기다려 주세요 ${".".repeat((count % 3) + 1)}`
              : "아래에 출력된 사진을 꼭 챙겨주세요."}
          </WaitPlease>
          {count < time ? (
            ""
          ) : (
            <Check>
              <Button onClick={() => window.location.href =  '/'}>홈으로</Button>
            </Check>
          )}
        </Text>
      </Container>
      <Footer />
    </>
  );
};
const Check = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  > button {
    width: 300px;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 200px 17vw;
  display: flex;
  flex-direction: column;
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
`;

export default Loading;
