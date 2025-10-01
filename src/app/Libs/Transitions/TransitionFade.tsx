"use client";

import gsap from "gsap/dist/gsap";
let dispatch: any;
let props: any;
export function Execute(
	href: string,
	router: any,
	dispatch?: any,
	props?: object
) {
	props = props;
	dispatch = dispatch;

	const exitTl = gsap.timeline({
		paused: true,
	});

	exitTl
		.to("main", 0.5, {
			opacity: 0,
			ease: "sine.inOut",
		})
		.call(function () {
			router.push(href);
			dispatch({ type: "TransitionExitComplete" });
		});
	exitTl.restart();
	dispatch({ type: "TransitionExitStart" });
}
export function Enter(dispatch?: any): any {
	const ctx: any = gsap.context(() => {
		gsap
			.timeline({
				onComplete: function () {
					ctx.revert();
				},
			})
			.set("main", { opacity: 0 })

			.to({}, 0.1, {})

			.to("main", 1, {
				opacity: 1,
				ease: "sine.inOut",
			})
			.call(function () {
				dispatch({ type: "TransitionEntryComplete" });

				//IndexScrollTrigger.IndexInitScrollTrigger();
			});
	});
	return ctx;
}
