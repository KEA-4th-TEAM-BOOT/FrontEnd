// recoil/playerState.js
import { atom } from "recoil";
import playericon from "../assets/img/icons/audioplayicon.svg";
export const currentTrackState = atom({
  key: "currentTrackState",
  default: {
    id: null,
    thumbnailImage: playericon,
    username: "",
    title: "재생되고 있는 오디오가 없습니다.",
    audioSrc: "",
  },
});
