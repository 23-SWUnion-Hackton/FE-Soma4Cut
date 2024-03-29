import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { text } from "../style/text";
import { color } from "../style/color";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AnotherImgAtom,
  ImageAlreadyAtom,
  MyImageAtom8,
  MyImageBlob8,
} from "../atoms";
import { useNavigate } from "react-router-dom";
export const Camera = () => {
  const nav = useNavigate();
  const videoRef = useRef(null);
  const [screenImg, setScreenImg] = useRecoilState(MyImageAtom8);
  const [screenShotTime, setScreenShotTime] = useState(1);
  const [showImg, setShowImg] = useState([]);

  const [time, setTime] = useState(7);

  const imageAlready = useRecoilValue(ImageAlreadyAtom);
  const anotherImage = useRecoilValue(AnotherImgAtom);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    getWebCam((stream) => {
      videoRef.current.srcObject = stream;
    });
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setShowImg(screenImg.slice(Math.max(0, screenImg.length - 3)));
  }, [screenImg]);

  const getSeconds = (time) => {
    const seconds = Number(time % 60);
    if (seconds === 0) {
      ScreenShot();
      setScreenShotTime((prev) => prev + 1);

      if (screenShotTime === 8) {
        nav("/select");
      }
      setTime(2);
    }
    return String(seconds);
  };

  const getWebCam = (callback) => {
    try {
      const constraints = {
        video: true,
        audio: false,
      };
      navigator.mediaDevices.getUserMedia(constraints).then(callback);
    } catch (err) {
      return undefined;
    }
  };

  const setmyBlob = useSetRecoilState(MyImageBlob8);

  const ScreenShot = () => {
    const videoCam = document.getElementById("videoCam");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 1024;
    canvas.height = 786;
    context.scale(-1, 1);
    context.translate(-1024, 0);
    context.drawImage(videoCam, 0, 0, 1024, 786);
    canvas.toBlob((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      setScreenImg((prevImages) => [...prevImages, blobUrl]);
      setmyBlob((prev) => [...prev, blob]);
    }, "image/jpeg");
  };

  return (
    <Container>
      <div>
        <VideoContainer>
          <Video ref={videoRef} autoPlay id="videoCam" />
          {imageAlready === "end" && (
            <AlreadyImg
              src={anotherImage[Math.floor((screenShotTime+1) / 2)-1]}
            />
          )}
        </VideoContainer>
        <ImgCount>
          <text.body.body1>{screenShotTime - 1} / 8</text.body.body1>
        </ImgCount>
      </div>
      <ResultContainer>
        <Timer>
          <text.display.d3>{getSeconds(time)}</text.display.d3>
          <text.heading.h3>초 후 촬영</text.heading.h3>
        </Timer>
        <ImgContainer>
          {showImg.map((src, index) => (
            <ImgBox src={src} key={index} />
          ))}
        </ImgContainer>
      </ResultContainer>
    </Container>
  );
};
const VideoContainer = styled.div`
  display: flex;
  position: relative;
`;
const AlreadyImg = styled.img`
  width: 47vw;
  height: 530px;
  left: 0;
  top: 80px;
  z-index: 20;
  position: absolute;
`;
const Container = styled.div`
  width: 100vw;
  display: flex;
  padding: 25px 16vw;
  justify-content: space-between;
  align-items: start;
  gap: 30px;
`;

const Video = styled.video`
  margin-top: 80px;
  width: 47vw;
  transform: rotateY(180deg);
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 230px;
`;
const Timer = styled.div`
  display: flex;
  align-items: end;
`;

const ImgBox = styled.img`
  background-color: ${color.Basic.black};
  width: 230px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 10px;
`;

const ImgCount = styled.div`
  display: flex;
  justify-content: end;
`;
