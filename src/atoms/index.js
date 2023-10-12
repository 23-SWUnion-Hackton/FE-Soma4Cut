import { atom } from "recoil";

export const frameAtom = atom({
  key: "frame",
  default: 0,
});

/** 사진 촬영? 출력? print, screenshot */
export const PrintAtom = atom({
  key: "print",
  default: "screenshot",
});
/** 혼자? 멀리있는 친구랑?  alone, couple */
export const ImageTypeAtom = atom({
  key: "imagetype",
  default: "couple",
});

/** 이미 찍은 사람있음? start, end */
export const ImageAlreadyAtom = atom({
  key: "imagealready",
  default: "start",
});

/** 사용자 코드 */
export const CodeAtom = atom({
  key: "code",
  default: "",
});

/** 다른 사람 사진 */
export const AnotherImgAtom = atom({
  key: "anotherimg",
  default: [],
});

export const ResultImgAtom = atom({
  key: "resultimg",
  default: "",
});

/** 내 사진 */
export const MyImageAtom = atom({
  key: "myimg",
  default: [],
});

/** 내 사진  결과 blob */
export const ResultBlobImg = atom({
  key: "blobResult",
  default: "",
});

export const AccessTokenAtom = atom({
  key: "accessToken",
  default: "",
});

/** 내 사진 8장 */
export const MyImageAtom8 = atom({
  key: "myimg8",
  default: [],
});

/** 내 사진 8장 blob */
export const MyImageBlob8 = atom({
  key: "myimgblob8",
  default: [],
});

export const MySelectImageBlob = atom({
  key: "myimgblob",
  default: [],
});

/**다른 사람 사진 */
export const AnotherSelectedImg = atom({
  key: "anotherSelectImg",
  default: [],
});
