import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { text } from "../style/text";
import { color } from "../style/color";
import { useRecoilState } from "recoil";
import { MyImageAtom } from "../atoms";
import { useNavigate } from "react-router-dom";
export const Camera = () => {
  const nav = useNavigate();
  const videoRef = useRef(null);
  const [screenImg, setScreenImg] = useRecoilState(MyImageAtom);
  const [screenShotTime, setScreenShotTime] = useState(1);

  const [time, setTime] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getSeconds = (time) => {
    const seconds = Number(time % 60);
    if (seconds === 0) {
      ScreenShot();
      setScreenShotTime((prev) => prev + 1);

      if (screenShotTime === 4) {
        nav("/frame");
      }
      setTime(10);
    }
    return String(seconds);
  };

  useEffect(() => {
    getWebCam((stream) => {
      videoRef.current.srcObject = stream;
    });
  }, []);

  const getWebCam = (callback) => {
    try {
      const constraints = {
        video: true,
        audio: false,
      };
      navigator.mediaDevices.getUserMedia(constraints).then(callback);
    } catch (err) {
      console.log(err);
      return undefined;
    }
  };

  const ScreenShot = () => {
    const videoCam = document.getElementById("videoCam");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 1024;
    canvas.height = 786;
    context.scale(-1, 1);
    context.translate(-1024, 0);
    context.drawImage(videoCam, 0, 0, 1024, 786);
    console.log(videoCam.videoWidth, videoCam.videoHeight);
    canvas.toBlob((blob) => {
      const blobUrl = URL.createObjectURL(blob);

      setScreenImg((prevImages) => [...prevImages, blobUrl]);
    }, "image/jpeg");
  };

  return (
    <Container>
      <Video ref={videoRef} autoPlay id="videoCam" />
      <ResultContainer>
        <Timer>
          <text.display.d3>{getSeconds(time)}</text.display.d3>
          <text.heading.h3>초 후 촬영</text.heading.h3>
        </Timer>
        <ImgContainer>
          {screenImg.map((src) => (
            <ImgBox src={src} />
          ))}
        </ImgContainer>
      </ResultContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  display: flex;
  padding: 25px 12vw;
  justify-content: center;
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
