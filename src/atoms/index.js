import { atom } from "recoil";

export const frameAtom = atom({
  key: "frame",
  default: 0,
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

export const CodeAtom = atom({
  key: "code",
  default: "",
});
