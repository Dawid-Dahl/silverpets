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
	watch: {
		windowHeight: function () {
			this.windowHeight >= 768 && (this.isNavMenuActive = false);
		},
	},
	computed: {
		activeNavMenuStyles() {
			return `
				max-height: ${this.isNavMenuActive && this.windowHeight <= 768 ? "300px" : "0px"};
			`;
		},
		activeHamburgerIconStyles() {
			return `
				opacity: ${this.isNavMenuActive && this.windowHeight <= 768 ? "0" : "1"};
				transform: ${this.isNavMenuActive && this.windowHeight <= 768 ? "rotate(90deg)" : "rotate(0deg)"};
			`;
		},
		activeTimesIconStyles() {
			return `
				opacity: ${this.isNavMenuActive && this.windowHeight <= 768 ? "1" : "0"};
				transform: ${this.isNavMenuActive && this.windowHeight <= 768 ? "rotate(90deg)" : "rotate(0deg)"};
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
