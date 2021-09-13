import ViewportWidthDetector from "./ViewportWidthDetector";
import VueNav from "./VueNav";

const viewportWidthDetector = new ViewportWidthDetector(window.innerWidth);

//STATE

const state = {
	isMenuActive: false,
};

//FUNCTIONS

const handleHamburgerClick = e => {
	state.isMenuActive ? (state.isMenuActive = false) : (state.isMenuActive = true);

	const hamburger = document.querySelector(".my-nav__menu-hamburger--active");
	const nav = document.querySelector(".my-nav");

	hamburger && state.isMenuActive
		? nav.classList.add("menu-is-active")
		: nav.classList.remove("menu-is-active");
};

//EVENT_LISTENERS

window.addEventListener("load", e => {
	viewportWidthDetector.setViewportWidth(window.innerWidth);

	const hamburger = document.querySelector(".my-nav__menu-hamburger--inactive");
	const list = document.querySelector(".my-nav__menu-list--inactive");

	hamburger.addEventListener("click", handleHamburgerClick);

	if (viewportWidthDetector.getViewportWidth() >= 768) {
		list && list.classList.replace("my-nav__menu-list--inactive", "my-nav__menu-list--active");
	}

	if (viewportWidthDetector.getViewportWidth() <= 768) {
		hamburger &&
			hamburger.classList.replace(
				"my-nav__menu-hamburger--inactive",
				"my-nav__menu-hamburger--active"
			);
	}
});

window.addEventListener("resize", e => {
	viewportWidthDetector.setViewportWidth(window.innerWidth);

	if (viewportWidthDetector.getViewportWidth() >= 768) {
		const hamburger = document.querySelector(".my-nav__menu-hamburger--active");
		const list = document.querySelector(".my-nav__menu-list--inactive");
		const nav = document.querySelector(".my-nav");

		if (hamburger) {
			hamburger.classList.replace(
				"my-nav__menu-hamburger--active",
				"my-nav__menu-hamburger--inactive"
			);

			state.isMenuActive && nav.classList.remove("menu-is-active");
		}

		list && list.classList.replace("my-nav__menu-list--inactive", "my-nav__menu-list--active");
	}

	if (viewportWidthDetector.getViewportWidth() <= 768) {
		const hamburger = document.querySelector(".my-nav__menu-hamburger--inactive");
		const list = document.querySelector(".my-nav__menu-list--active");

		if (hamburger) {
			hamburger.classList.replace(
				"my-nav__menu-hamburger--inactive",
				"my-nav__menu-hamburger--active"
			);
		}

		list && list.classList.replace("my-nav__menu-list--active", "my-nav__menu-list--inactive");
	}
});
