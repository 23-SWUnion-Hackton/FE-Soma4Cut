import styled, { css } from "styled-components";
import { frames } from "../assets/index";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AnotherSelectedImg,
  ImageAlreadyAtom,
  MyImageAtom,
  ResultBlobImg,
  ResultImgAtom,
  frameAtom,
} from "../atoms";
import { Button } from "../style/button";
import { color } from "../style/color";
import { useNavigate } from "react-router-dom";
import { alertError } from "../utils/toastify";

export const SelectFrame = () => {
  const [frame, setFrame] = useRecoilState(frameAtom);
  const screenImg = useRecoilValue(MyImageAtom);
  const nav = useNavigate();
  const setResultImg = useSetRecoilState(ResultImgAtom);
  const setResultBlogImg = useSetRecoilState(ResultBlobImg);
  const imageAlready = useRecoilValue(ImageAlreadyAtom);
  const anotherImg = useRecoilValue(AnotherSelectedImg);

  const makeImg = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 480;
    canvas.height = 1687.21;
    const context = canvas.getContext("2d");
    const newImage1 = new Image();
    newImage1.crossOrigin = "Anonymous";
    newImage1.src = screenImg[0];

    const newImage2 = new Image();
    newImage2.src = screenImg[1];

    const newImage3 = new Image();
    newImage3.src = screenImg[2];

    const newImage4 = new Image();
    newImage4.src = screenImg[3];

    const framesImg = new Image();
    framesImg.src = frames[frame];

    if (imageAlready === "end") {
      const anotherImg1 = new Image();
      anotherImg1.crossOrigin = "Anonymous";
      anotherImg1.src = anotherImg[0];
      const anotherImg2 = new Image();
      anotherImg2.crossOrigin = "Anonymous";
      anotherImg2.src = anotherImg[1];
      const anotherImg3 = new Image();
      anotherImg3.crossOrigin = "Anonymous";
      anotherImg3.src = anotherImg[2];
      const anotherImg4 = new Image();
      anotherImg4.crossOrigin = "Anonymous";
      anotherImg4.src = anotherImg[3];

      Promise.all([
        loadImage(newImage1),
        loadImage(newImage2),
        loadImage(newImage3),
        loadImage(newImage4),
        loadImage(framesImg),
        loadImage(anotherImg1),
        loadImage(anotherImg2),
        loadImage(anotherImg3),
        loadImage(anotherImg4),
      ])
        .then(() => {
          context.drawImage(newImage1, 17, 19, 445, 342);
          context.drawImage(newImage2, 17, 381, 445, 342);
          context.drawImage(newImage3, 17, 742, 445, 342);
          context.drawImage(newImage4, 17, 1103, 445, 342);
          context.drawImage(anotherImg1, 17, 19, 445, 342);
          context.drawImage(anotherImg2, 17, 381, 445, 342);
          context.drawImage(anotherImg3, 17, 742, 445, 342);
          context.drawImage(anotherImg4, 17, 1103, 445, 342);
          context.drawImage(framesImg, 0, 0, 480, 1687.21);
          setResultImg(canvas.toDataURL("image/jpeg"));
          canvas.toBlob((blob) => {
            setResultBlogImg(blob);
          }, "image/jpeg");
        })
        .catch(() => {
          alertError("error 발생");
        });
    } else {
      Promise.all([
        loadImage(newImage1),
        loadImage(newImage2),
        loadImage(newImage3),
        loadImage(newImage4),
        loadImage(framesImg),
      ]).then(() => {
        context.drawImage(newImage1, 17, 19, 445, 342);
        context.drawImage(newImage2, 17, 381, 445, 342);
        context.drawImage(newImage3, 17, 742, 445, 342);
        context.drawImage(newImage4, 17, 1103, 445, 342);
        context.drawImage(framesImg, 0, 0, 480, 1687.21);

        setResultImg(canvas.toDataURL("image/jpeg"));
        canvas.toBlob((blob) => {
          setResultBlogImg(blob);
        }, "image/jpeg");
      });
    }
  };

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
            <>
              <ScreenImg src={src} idx={index} />
              <AnotherImg src={anotherImg[index]} idx={index} />
            </>
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
  width: 200px;
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
  width: 187px;
  top: ${({ idx }) => 143 * idx + (idx + 1) * 7}px;
  left: 7px;
  z-index: -1;
`;

const AnotherImg = styled.img`
  position: absolute;
  width: 187px;
  top: ${({ idx }) => 143 * idx + (idx + 1) * 7}px;
  left: 7px;
  z-index: -1;
`;
