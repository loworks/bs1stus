import { TransitionFade } from ".";
import { Transition } from "./types";

let activeTransition: Transition = TransitionFade;

export function setTransition(transition: Transition) {
	activeTransition = transition;
}
export function getTransition(): Transition {
	return activeTransition;
}
