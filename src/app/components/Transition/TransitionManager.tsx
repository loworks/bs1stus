import * as Transitions from "@/Libs/Transitions";
import { InitTransition } from "../Transition";
let loadPageData: boolean = false;
let dataLoadChecker: boolean = false;
let dispatch = null;

export const setDispatch = (value: any) => {
  if (!dispatch) dispatch = value;
};
export const excuteAppearAction = (type: string): void => {
  console.log(type);
  const isInit = !document
    .querySelector("html")
    .classList.contains("init-loaded");
  if (type === "page") {
    if (dataLoadChecker) {
      isInit
        ? InitTransition.Apper()
        : Transitions.Transition.getTransition().Enter(dispatch);
      dataLoadChecker = false;
    } else {
      loadPageData = true;
    }
  } else {
    if (loadPageData) {
      isInit
        ? InitTransition.Apper()
        : Transitions.Transition.getTransition().Enter(dispatch);
    } else {
      dataLoadChecker = true;
    }
  }
};
