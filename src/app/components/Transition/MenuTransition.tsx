/* eslint-disable react/jsx-key */
import { gsap } from "gsap";
export function open() {
	const tl = gsap.timeline();
	tl.call(function () {
		const cont: any = document.querySelector("html");
		cont.classList.add("menu");
	})
		.set(".menu-bg", {
			scaleX: 0,
			opacity: 1,
			transformOrigin: "right bottom",
		})
		.set(".overlay-menu", {
			opacity: 1,
		})
		.set(".menu-anim", {
			opacity: 0,
		})
		.to(".menu-bg", {
			scaleX: 1,
			duration: 0.75,
			ease: "power4.inOut",
			transformOrigin: "right bottom",
		})
		.to(
			".menu-anim",
			{
				opacity: 1,
				duration: 0.5,

				stagger: 0.05,
			},
			"-=.2"
		)
		.call(function () {
			const cont: any = document.querySelector("html");
			//cont.classList.remove("menu");
		});
}
export function close() {
	const tl = gsap.timeline();
	tl.to(".menu-anim", {
		opacity: 0,
		duration: 0.5,
	})
		.to(
			".menu-bg",
			{
				scaleX: 0,
				duration: 0.75,
				ease: "power4.inOut",
				transformOrigin: "right bottom",
			},
			"-=.3"
		)
		.set(".overlay-menu", {
			opacity: 0,
		})

		.call(function () {
			const cont: any = document.querySelector("html");
			cont.classList.remove("menu");
		});
}
export function menuClick(e: any) {
	close();
	gsap.to(window, {
		duration: 1,
		ease: "power4.out",
		scrollTo: {
			y: e.target.getAttribute("href"),
			autoKill: false,
		},
	});
}
