import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { text } from "../style/text";
import { color } from "../style/color";
export const Camera = () => {
  const videoRef = useRef(null);
  const [screenImg, setScreenImg] = useState([]);

  // useEffect(() => {
  //   getWebCam((stream) => {
  //     videoRef.current.srcObject = stream;
  //   });
  // }, []);

  // const getWebCam = (callback) => {
  //   try {
  //     const constraints = {
  //       video: true,
  //       audio: false,
  //     };
  //     navigator.mediaDevices.getUserMedia(constraints).then(callback);
  //   } catch (err) {
  //     console.log(err);
  //     return undefined;
  //   }
  // };

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
          <text.display.d3>9</text.display.d3>
          <text.heading.h3>초 후 촬영</text.heading.h3>
        </Timer>
        <ImgContainer>
          <ImgBox />
          <ImgBox />
          <ImgBox />
          <ImgBox />
          <ImgBox />
          <ImgBox />
          <ImgBox />
          <ImgBox />
        </ImgContainer>
      </ResultContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: end;
  padding: 0px 12vw;
  justify-content: center;
  gap: 30px;
`;

const Video = styled.video`
  width: 47vw;
  transform: rotateY(180deg);
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Timer = styled.div`
  display: flex;
  align-items: end;
`;

const ImgBox = styled.div`
  background-color: ${color.Basic.black};
  width: 170px;
  height: 130px;
`;

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px 10px;
  /* :nth-child(2n) {
    margin-top: 10px;
  } */
`;
