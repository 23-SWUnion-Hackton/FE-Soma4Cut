import styled from "styled-components";
import { text } from "../style/text";
import { color } from "../style/color";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { ImageAlreadyAtom } from "../atoms";

export const SelectIsNew = () => {
  const nav = useNavigate();
  const setImageAlready = useSetRecoilState(ImageAlreadyAtom);

  return (
    <Container>
      <SelectCouple
        onClick={() => {
          nav("/camera");
          setImageAlready("start");
        }}
      >
        <text.heading.h1>
          처음 찍어요
        </text.heading.h1>
      </SelectCouple>
      <SelectAlone
        onClick={() => {
          nav("/codeinput");
          setImageAlready("end");
        }}
      >
        <text.heading.h1>
          친구가<br/>이미 찍었어요!
        </text.heading.h1>
      </SelectAlone>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 40px 17vw;
  justify-content: space-between;
  > div {
    cursor: pointer;
  }
`;
const SelectCouple = styled.div`
  width: 45%;
  height: 80vh;
  background-color: ${color.Brand.primary};
  color: ${color.Basic.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  > p {
    text-align: center;
    font-weight: bold;
  }
`;

const SelectAlone = styled.div`
  width: 45%;
  height: 80vh;
  background-color: ${color.Basic.gray400};
  color: ${color.Basic.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  > p {
    text-align: center;
    font-weight: bold;
  }
`;
