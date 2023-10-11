import { Header } from "../components/common/header";
import { Footer } from "../components/common/footer";
import styled from "styled-components";
import camera from "../assets/camera.png";
import { text } from "../style/text";
import { color } from "../style/color";
import { Button } from "../style/button";

const MainPage = () => {
  return (
    <Container>
      <Header />
      <Box>
        <Image src={camera} />
        <Main>
          <Text>
            <div>
              <Heading>나를 표현하는 독특한 네컷</Heading>
              <Heading>이제는 AI와 함께</Heading>
            </div>
            <div>
              <Description>
                AI에게 당신이 원하는 배경을 요청해 보세요.
              </Description>
              <Description>
                당신만의 독창적인 네컷이 탄생 할 거에요!
              </Description>
            </div>
          </Text>
          <Button>지금 사진 찍으러 가기</Button>
        </Main>
      </Box>
      <Footer />
    </Container>
  );
};

const Image = styled.img`
  width: 548px;
  height: 548px;
  position: absolute;
  right: 15vw;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Box = styled.div`
  margin: 10vh 20vw;
  height: calc(80vh - 120px);
`;

const Main = styled.div`
  padding-top: 10vh;
`;
const Heading = styled(text.display.d3)`
  color: ${color.Basic.black};
`;
const Description = styled(text.paragraph.p1)`
  color: ${color.Basic.gray600};
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 48px;
`;

export default MainPage;
