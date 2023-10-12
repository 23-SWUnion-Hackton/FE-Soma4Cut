import styled, { css } from "styled-components";
import { color } from "../style/color";
import { Button } from "../style/button";
import { useRecoilState, useRecoilValue } from "recoil";
import { MyImageAtom, MyImageAtom8 } from "../atoms";
import { text } from "../style/text";
import { alertWarning } from "../utils/toastify";
import { useNavigate } from "react-router-dom";
export const Select = () => {
  const nav = useNavigate();
  const noneSelectedImage = useRecoilValue(MyImageAtom8);
  const [selectImg, setSelectImg] = useRecoilState(MyImageAtom);
  const onChooseImg = (e) => {
    if (selectImg.length < 4) {
      if (!selectImg.includes(noneSelectedImage[e])) {
        setSelectImg(selectImg.concat([noneSelectedImage[e]]));
      } else {
        setSelectImg(selectImg.filter((v) => noneSelectedImage[e] !== v));
      }
    } else if (selectImg.includes(noneSelectedImage[e])) {
      setSelectImg(selectImg.filter((v) => noneSelectedImage[e] !== v));
    }
  };

  const CheckOnClick = () => {
    if(selectImg.length !==4){
      alertWarning("사진 4장을 선택해주세요")
    }else{
      nav('/frame')
    }
  }
  return (
    <Container>
      <SelectedImgContaienr>
        {selectImg.map((src) => (
          <BlackImg src={src} alt={src} />
        ))}
        {Array(4 - selectImg.length)
          .fill("")
          .map(() => (
            <BlackDiv />
          ))}
      </SelectedImgContaienr>
      <ExplatinContainer>
        <NoneSelectedContainer>
          {noneSelectedImage.map((src, index) => (
            <div>
              <SelectedImgContainer>
                <NoneSelectedImg
                  blur={selectImg.includes(noneSelectedImage[index])}
                  src={src}
                  alt={src}
                  onClick={() => onChooseImg(index)}
                />
                {selectImg.includes(noneSelectedImage[index]) && (
                  <BlurContainer onClick={() => onChooseImg(index)}>
                    <Button small>
                      {selectImg.indexOf(noneSelectedImage[index]) + 1}
                    </Button>
                  </BlurContainer>
                )}
              </SelectedImgContainer>
            </div>
          ))}
        </NoneSelectedContainer>
        <text.paragraph.p1>사진 4장을 선택해주세요</text.paragraph.p1>
      </ExplatinContainer>
      <Button onClick={CheckOnClick}>선택 완료</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 80px 16vw;
`;

const SelectedImgContaienr = styled.div`
  display: flex;
  gap: 20px;
`;

const BlackImg = styled.img`
  /* background-color: ${color.Basic.black}; */
  width: 222.5px;
  height: 171px;
`;
const BlackDiv = styled.div`
  background-color: ${color.Basic.black};
  width: 222.5px;
  height: 171px;
`;
const NoneSelectedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
  > div {
    width: 180px;
    height: 140px;
  }
`;
const NoneSelectedImg = styled.img`
  /* background-color: ${color.Basic.black}; */
  width: 180px;
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const SelectedImgContainer = styled.div`
  position: absolute;
`;

const BlurContainer = styled.div`
  cursor: pointer;
  width: 180px;
  height: 140px;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
  top: -140px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > button {
    border-radius: 50%;
  }
`;

const ExplatinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
