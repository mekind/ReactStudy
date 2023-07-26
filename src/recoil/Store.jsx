import { atom } from "recoil";
import home from '/assets/home/background-home-desktop.jpg';


export const BackgroundUrl = atom({
  key: 'url', // unique ID (with respect to other atoms/selectors)
  default: home, // default value (aka initial value)
});
