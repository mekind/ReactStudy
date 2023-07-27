import { atom } from "recoil";

export const BackgroundUrl = atom({
  key: 'url', // unique ID (with respect to other atoms/selectors)
  default: 'home', // default value (aka initial value)
});
