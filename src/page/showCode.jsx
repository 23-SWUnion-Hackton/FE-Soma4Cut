import styled from "styled-components";
import { color } from "../style/color";
import { text } from "../style/text";
import { Button } from "../style/button";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { AccessTokenAtom, MyImageAtom, MySelectImageBlob } from "../atoms";
import { useEffect, useState } from "react";
import CopyIcon from "../assets/copyIcon";
import { alertError, alertSuccess } from "../utils/toastify";
import axios from "axios";
import { AUTH_URL } from "../constants/config";

export const ShowCode = () => {
  const MyImg = useRecoilValue(MySelectImageBlob);
  const token = useRecoilValue(AccessTokenAtom);
  const MyImgUrl = useRecoilValue(MyImageAtom);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const [count, setCount] = useState(0);

  setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alertSuccess("클립보드에 복사되었습니다.");
    } catch (err) {
      alertError("클립보드 복사에 실패했습니다.");
    }
  };

  const serverAxios = () => {
    setLoading(true);

    const form = new FormData();

    const image1 = new File([MyImg[0]], "image1.jpeg", { type: "image/jpeg" });
    const image2 = new File([MyImg[1]], "image2.jpeg", { type: "image/jpeg" });
    const image3 = new File([MyImg[2]], "image3.jpeg", { type: "image/jpeg" });
    const image4 = new File([MyImg[3]], "image4.jpeg", { type: "image/jpeg" });

    form.append("image1", image1);
    form.append("image2", image2);
    form.append("image3", image3);
    form.append("image4", image4);

    axios
      .request({
        url: `${AUTH_URL}/user/image`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        method: "post",
        data: form,
      })
      .then((res) => {
        setLoading(false);
        setCode(res.data.code);
      })
      .catch((err) => {
        alertError("오류가 발생하였습니다. 관리자에게 문의해주세요");
        setLoading(false);
        // window.location.href = "/";
      });
  };

  useEffect(() => {
    serverAxios();
  }, []);

  return (
    <Container>
      <Children>
        {loading ? (
          <text.body.body1>
            {`코드 생성중, 잠시만 기다려 주세요${".".repeat((count % 3) + 1)}`}
          </text.body.body1>
        ) : (
          <HeaderContainer>
            <text.heading.h5>코드를 친구에게 공유해주세요!</text.heading.h5>
            <Copy onClick={copyContent}>
              <Code>{code}</Code>
              <CopyIcon />
            </Copy>
          </HeaderContainer>
        )}
        <ImgContainer>
          {MyImgUrl.map((src) => (
            <Img src={src} />
          ))}
        </ImgContainer>
        <ButtonContainer>
          {!loading && (
            <Button
              onClick={() => {
                window.location.href = "/";
              }}
            >
              감사합니다.
            </Button>
          )}
        </ButtonContainer>
      </Children>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  padding: 50px 17vw;
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

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: row;

  > button {
    width: 100%;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 12px;
  width: 100%;
`;
const Img = styled.img`
  width: 48%;
  background-color: ${color.Basic.black};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Copy = styled.div`
  padding: 12px 16px;
  border-radius: 4px;
  display: flex;
  width: 100%;
  background: ${color.Basic.gray50};
  display: flex;
  justify-content: space-between;
`;

const Code = styled(text.paragraph.p1)``;
