"use client";

/* eslint-disable react/no-children-prop */

import React, { FC } from "react";
export interface State {
	displaySidebar: boolean;
	closeSidebar?: any;
	openSidebar?: any;
}
const initialState = {
	displaySidebar: false,
};

export const UIContext = React.createContext<State>(initialState);

UIContext.displayName = "UIContext";

export const UIProvider: FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [state, setState] = React.useState({
		...initialState,
	});

	const openSidebar = () => setState(() => ({ displaySidebar: true }));
	const closeSidebar = () => setState(() => ({ displaySidebar: false }));

	const value = {
		...state,

		openSidebar,
		closeSidebar,
	};

	return <UIContext.Provider value={value} children={children} />;
};
UIContext.displayName = "UIContext";
export const useUI = () => {
	const context = React.useContext(UIContext);

	if (context === undefined) {
		throw new Error(`useUI must be used within a UIProvider`);
	}
	return context;
};

export const ManagedUIContext: FC<{
	children: React.ReactNode;
}> = ({ children }) => <UIProvider>{children}</UIProvider>;
