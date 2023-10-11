import styled from "styled-components";
import { color } from "../style/color";
import { text } from "../style/text";
import { useRecoilState, useRecoilValue } from "recoil";
import { CodeAtom, PrintAtom } from "../atoms";
import { Button } from "../style/button";
import { useNavigate } from "react-router-dom";
export const InputCode = () => {
  const [code, setCode] = useRecoilState(CodeAtom);
  const nav = useNavigate();
  const print = useRecoilValue(PrintAtom);
console.log(print)
  return (
    <Container>
      <Children>
        <InputContainer>
          <div>
            <text.body.body3>코드</text.body.body3>
            <Input
              placeholder="코드를 입력해주세요"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <text.paragraph.p1>
              친구가 알려준 코드를 입력해주세요
            </text.paragraph.p1>
          </div>
        </InputContainer>
        <ButtonContainer>
          <Button
            gray
            onClick={() => {
              if (print === "screenshot") {
                nav("/isnew");
              } else {
                window.location.href = "/";
              }
            }}
          >
            이전
          </Button>
          <Button
            onClick={() => {
              if (print === "screenshot") {
                nav("/watch");
              } else {
                nav('/loading')
              }
            }}
          >
            다음
          </Button>
        </ButtonContainer>
      </Children>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  padding: 250px 17vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Children = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${color.Basic.gray700};
  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
const Input = styled.input`
  font-size: 20px;
  border: none;
  outline: none;
  padding: 20px 20px;
  background-color: ${color.Basic.gray50};
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: row;

  > button {
    width: 100%;
  }
`;
