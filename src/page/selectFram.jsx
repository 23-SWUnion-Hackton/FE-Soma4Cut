import styled, { css } from "styled-components";
import { frames } from "../assets/index";
import { text } from "../style/text";
import { useRecoilState } from "recoil";
import { frameAtom } from "../atoms";
import { Button } from "../style/button";
import { color } from "../style/color";

export const SelectFrame = () => {
  const [frame, setFrame] = useRecoilState(frameAtom);

  return (
    <Container>
      <SelectedFrame src={frames[frame]} />
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
