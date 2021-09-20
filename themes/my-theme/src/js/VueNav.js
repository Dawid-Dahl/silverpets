import ViewportWidthDetector from "./ViewportWidthDetector";
import navIntersectionObserver from "./navIntersectionObserver";

const viewportWidthDetector = new ViewportWidthDetector(window.innerWidth);

const VueNav = new Vue({
	el: "#my-vue-nav",
	data() {
		return {
			isNavMenuActive: false,
			isAtTopOfPage: true,
			windowWidth: null,
		};
	},
	watch: {
		windowWidth: function () {
			const logo = document.querySelector(".my-nav__logo");

			if (this.windowWidth >= 768 && this.isAtTopOfPage) {
				this.isNavMenuActive = false;
				logo.setAttribute("src", "_resources/themes/my-theme/images/pet-logo_white.png");
				logo.style.height = "100px";
			} else if (this.windowWidth <= 768 && this.isAtTopOfPage) {
				logo.setAttribute("src", "_resources/themes/my-theme/images/pet-logo_white.png");
				logo.style.height = "100px";
			} else {
				logo.setAttribute("src", "_resources/themes/my-theme/images/pet-logo_black.png");
				logo.style.height = "70px";
			}
		},
		isAtTopOfPage: function () {
			const logo = document.querySelector(".my-nav__logo");

			if (this.windowWidth >= 768) {
				this.isAtTopOfPage
					? (logo.setAttribute(
							"src",
							"_resources/themes/my-theme/images/pet-logo_white.png"
					  ),
					  (logo.style.height = "100px"))
					: (logo.setAttribute(
							"src",
							"_resources/themes/my-theme/images/pet-logo_black.png"
					  ),
					  (logo.style.height = "70px"));
			} else {
				logo.setAttribute("src", "_resources/themes/my-theme/images/pet-logo_white.png");
				logo.style.height = "100px";
			}
		},
	},
	computed: {
		scrolledNavMenuItemStyles() {
			if (this.windowWidth >= 768) {
				return `
					color: ${this.isAtTopOfPage && this.windowWidth >= 768 ? "white" : "var(--gray-dark)"};
				`;
			}
		},
		scrolledNavStyles() {
			if (this.windowWidth >= 768) {
				return `
					background-color: ${this.isAtTopOfPage ? "transparent" : "white"};
					height: ${this.isAtTopOfPage ? "6.3rem" : "calc(6.3rem / 1.7)"};
					box-shadow: ${this.isAtTopOfPage ? "none" : "rgba(0, 0, 0, 0.14) 0px 3px 8px;"};
				`;
			}
		},
		activeNavMenuStyles() {
			return `
				max-height: ${this.isNavMenuActive && this.windowWidth <= 768 ? "300px" : "0px"};
			`;
		},
		activeHamburgerIconStyles() {
			return `
				opacity: ${this.isNavMenuActive && this.windowWidth <= 768 ? "0" : "1"};
				transform: ${this.isNavMenuActive && this.windowWidth <= 768 ? "rotate(90deg)" : "rotate(0deg)"};
			`;
		},
		activeTimesIconStyles() {
			return `
				opacity: ${this.isNavMenuActive && this.windowWidth <= 768 ? "1" : "0"};
				transform: ${this.isNavMenuActive && this.windowWidth <= 768 ? "rotate(90deg)" : "rotate(0deg)"};
			`;
		},
	},
	methods: {
		handleWindowResize() {
			viewportWidthDetector.setViewportWidth(window.innerWidth);

			this.windowWidth = viewportWidthDetector.getViewportWidth();
		},
		handleHamburgerClick() {
			this.isNavMenuActive = !this.isNavMenuActive;
		},
	},
	created() {
		//Handle Viewport Width

		viewportWidthDetector.setViewportWidth(window.innerWidth);

		this.windowWidth = viewportWidthDetector.getViewportWidth();

		window.addEventListener("resize", this.handleWindowResize);

		//Handle Viewport Height

		const heroSlogan = document.querySelector(".hero__slogan");

		const options = {
			rootMargin: "-135px",
		};

		navIntersectionObserver().create(
			heroSlogan,
			entry => {
				entry.isIntersecting ? (this.isAtTopOfPage = true) : (this.isAtTopOfPage = false);
			},
			options
		);
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.handleWindowResize);
	},
});

export default VueNav;
