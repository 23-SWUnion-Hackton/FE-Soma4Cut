import { Button } from "../style/button";
import { text } from "../style/text";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Container>
      <text.heading.h1>존재하지 않는 페이지입니다.</text.heading.h1>
      <Button
        onClick={() => {
          window.location.href = "/";
        }}
      >
        홈으로 돌아가기
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25vh 0;
  gap: 40px;
`;

export default NotFound;
