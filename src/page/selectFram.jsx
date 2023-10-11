import styled, { css } from "styled-components";
import { frames } from "../assets/index";
import { useRecoilState, useRecoilValue } from "recoil";
import { MyImageAtom, frameAtom } from "../atoms";
import { Button } from "../style/button";
import { color } from "../style/color";

export const SelectFrame = () => {
  const [frame, setFrame] = useRecoilState(frameAtom);
  const screenImg = useRecoilValue(MyImageAtom);

  return (
    <Container>
      <div>
        <ImgContainer>
          <SelectedFrame src={frames[frame]} />
          {screenImg.map((src, index) => (
            <ScreenImg src={src} idx={index} />
          ))}
        </ImgContainer>
      </div>
      <div>
        <FrameContainer>
          {frames.map((src, index) => (
            <Frame
              src={src}
              select={frame === index}
              onClick={() => setFrame(index)}
            />
          ))}
        </FrameContainer>
        <HeadContainer>
          <Button small>선택하기</Button>
        </HeadContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  padding: 20px 17vw;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  > div {
    display: flex;
  }
`;
const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const SelectedFrame = styled.img`
  width: 240px;
  top: 0;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: 700px;
  width: 500px;
`;

const Frame = styled.img`
  height: 350px;
  cursor: pointer;
  ${({ select }) =>
    select &&
    css`
      box-shadow: 0px 2px 4px black;
      margin-top: 0px;
      background-color: ${color.Basic.gray100};
      border-radius: 2px;
    `}
`;

const ImgContainer = styled.div`
  position: absolute;
`;

const ScreenImg = styled.img`
  position: absolute;
  background-color: red;
  width: 220px;
  height: 146px;
  top: ${({ idx }) => 146 * idx + (idx + 1) * 6.7}px;
  left: 10px;
  z-index: -1;
`;
