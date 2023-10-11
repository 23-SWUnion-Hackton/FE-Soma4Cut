import styled, { css } from "styled-components";
import { frames } from "../assets/index";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ImageTypeAtom, MyImageAtom, ResultBlobImg, ResultImgAtom, frameAtom } from "../atoms";
import { Button } from "../style/button";
import { color } from "../style/color";
import { useNavigate } from "react-router-dom";

export const SelectFrame = () => {
  const [frame, setFrame] = useRecoilState(frameAtom);
  const screenImg = useRecoilValue(MyImageAtom);
  const nav = useNavigate();
  const setResultImg = useSetRecoilState(ResultImgAtom);
  const setResultBlogImg = useSetRecoilState(ResultBlobImg);

  // const makeImg = () => {
  //   const canvas = document.createElement("canvas");
  //   canvas.width = 240;
  //   canvas.height = 719;
  //   const context = canvas.getContext("2d");
  //   const newImage1 = new Image();
  //   newImage1.src = screenImg[0];
  //   const newImage2 = new Image();
  //   newImage1.src = screenImg[1];
  //   const newImage3 = new Image();
  //   newImage1.src = screenImg[2];
  //   const newImage4 = new Image();
  //   newImage1.src = screenImg[3];
  //   const framesImg = new Image();
  //   newImage1.src = screenImg[0];
  //   newImage1.onload = function () {
  //     context.drawImage(newImage1, 10, 6.7, 220, 146);
  //   };
  //   newImage2.onload = function () {
  //     context.drawImage(newImage2, 10, 159.4, 220, 146);
  //   };
  //   newImage3.onload = function () {
  //     context.drawImage(newImage3, 10, 312.1, 220, 146);
  //   };
  //   newImage4.onload = function () {
  //     context.drawImage(newImage4, 10, 464.8, 220, 146);
  //   };
  //   framesImg.onload = function () {
  //     context.drawImage(framesImg, 0, 0);
  //   };

  //   // canvas.toBlob((blob) => {
  //   //   const blobUrl = URL.createObjectURL(blob);

  //   setResultImg(canvas.toDataURL("image/jpeg"));
  //   // }, "image/jpeg");
  // };

  const makeImg = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 240;
    canvas.height = 719;
    const context = canvas.getContext("2d");

    const newImage1 = new Image();
    newImage1.src = screenImg[0];

    const newImage2 = new Image();
    newImage2.src = screenImg[1];

    const newImage3 = new Image();
    newImage3.src = screenImg[2];

    const newImage4 = new Image();
    newImage4.src = screenImg[3];

    const framesImg = new Image();
    framesImg.src = frames[frame];

    // 모든 이미지 로드 완료 시에만 그리기
    Promise.all([
      loadImage(newImage1),
      loadImage(newImage2),
      loadImage(newImage3),
      loadImage(newImage4),
      loadImage(framesImg),
    ]).then(() => {
      context.drawImage(newImage1, 10, 6.7, 220, 146);
      context.drawImage(newImage2, 10, 159.4, 220, 146);
      context.drawImage(newImage3, 10, 312.1, 220, 146);
      context.drawImage(newImage4, 10, 464.8, 220, 146);
      context.drawImage(framesImg, 0, 0, 240, 716);

      setResultImg(canvas.toDataURL("image/jpeg"));
      canvas.toBlob((blob) => {
        setResultBlogImg(blob);
        console.log(blob);
      }, "image/jpeg");
    });
  };

  // 이미지 로드를 Promise로 감싸주는 함수
  const loadImage = (image) => {
    return new Promise((resolve) => {
      image.onload = () => resolve();
    });
  };

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
          <Button
            small
            onClick={() => {
              makeImg();
              nav("/showCode");
            }}
          >
            선택하기
          </Button>
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
