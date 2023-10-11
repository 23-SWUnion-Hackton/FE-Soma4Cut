import { atom } from "recoil";

export const frameAtom = atom({
  key: "frame",
  default: 0,
});

export const ImageTypeAtom = atom({
  key: "imagetype",
  default: "couple",
});
