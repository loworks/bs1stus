"use client";

import { TransitionLink } from "@/Libs/Transitions";

export default function TransitionElement({
	className,
	path,
}: {
	className: string;
	path: string;
}) {
	return (
		<TransitionLink
			href={`${path}`}
			className={`${className} fixed z-[100000]`}
		>
			<div className={`${className} bg-red-500 w-[200px] h-[200px] `}></div>
		</TransitionLink>
	);
}
