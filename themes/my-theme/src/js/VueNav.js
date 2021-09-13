import ViewportWidthDetector from "./ViewportWidthDetector";

const viewportWidthDetector = new ViewportWidthDetector(window.innerWidth);

const VueNav = new Vue({
	el: "#my-vue-nav",
	data() {
		return {
			isNavMenuActive: false,
			windowHeight: null,
		};
	},
	computed: {
		activeNavStyles() {
			return `
				display: ${this.isNavMenuActive && this.windowHeight <= 768 ? "flex" : "none"};
				flex-direction: ${this.isNavMenuActive && this.windowHeight <= 768 ? "column" : "row"};
			`;
		},
	},
	methods: {
		handleWindowResize() {
			viewportWidthDetector.setViewportWidth(window.innerWidth);

			this.windowHeight = viewportWidthDetector.getViewportWidth();
		},
		handleHamburgerClick() {
			this.isNavMenuActive = !this.isNavMenuActive;
		},
	},
	created() {
		viewportWidthDetector.setViewportWidth(window.innerWidth);

		this.windowHeight = viewportWidthDetector.getViewportWidth();

		window.addEventListener("resize", this.handleWindowResize);
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.handleWindowResize);
	},
});

export default VueNav;
