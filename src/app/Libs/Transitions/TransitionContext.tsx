"use client";

import React from "react";

type TransitionState = {
  transitionState: string;
};
type ReducerAction = {
  type: string;
};

type transitionContext = {
  state: TransitionState;
  // dispatchの引数オブジェクトの型を、React.Dispatch<XXXXX> に定義する。
  dispatch: React.Dispatch<ReducerAction>;
};
const initialState: TransitionState = {
  transitionState: "wait",
};
const reducer = (state: TransitionState, action: ReducerAction) => {
  switch (action.type) {
    case "TransitionExitStart":
      return {
        ...state,
        transitionState: "exsitStart",
      };

    case "TransitionExitComplete":
      return {
        ...state,
        transitionState: "exitComplete",
      };

    case "TransitionEntryComplete":
      return {
        ...state,
        transitionState: "entryComplete",
      };
    case "TransitionEntryStart":
      return {
        ...state,
        transitionState: "entryStart",
      };
    case "TransitionMenuOpen":
      return {
        ...state,
        transitionState: "TransitionMenuOpen",
      };
    case "TransitionMenuClose":
      return {
        ...state,
        transitionState: "TransitionMenuClose",
      };
    default:
      return state;
  }
};
const transitionContext = React.createContext({} as transitionContext);

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <transitionContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </transitionContext.Provider>
  );
}

export function useTransition() {
  const context = React.useContext(transitionContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a TransitionProvider");
  }
  return context;
}
