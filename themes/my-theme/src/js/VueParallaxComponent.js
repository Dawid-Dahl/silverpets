import intersectionObserver from "./intersectionObserver";
import ViewportHeightDetector from "./ViewportHeightDetector";

const parallaxHeightDetector = new ViewportHeightDetector();

const VueParallaxComponent = new Vue({
	el: "#vue-parallax-component",
	data() {
		return {
			parallaxComponentHeight: 0,
		};
	},

	methods: {
		handleScroll() {
			const parallaxComponent = document.querySelector(".parallax-component");
			const parallaxComponentBackground = document.querySelector(
				".parallax-component__background"
			);

			parallaxHeightDetector.setViewportHeight(parallaxComponent.getBoundingClientRect().y);

			this.parallaxComponentHeight = parallaxHeightDetector.getViewportHeight();

			parallaxComponentBackground.style.transform = `translateY(${
				(this.parallaxComponentHeight - parallaxComponent.offsetHeight * 2) / 5
			}px)`;
		},
	},
	mounted() {
		const parallaxComponent = document.querySelector(".parallax-component");

		const options = {
			rootMargin: "70px",
		};

		intersectionObserver().create(
			parallaxComponent,
			entry => {
				entry.isIntersecting
					? window.addEventListener("scroll", this.handleScroll)
					: window.removeEventListener("scroll", this.handleScroll);
			},
			options
		);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll);
	},
});

export default VueParallaxComponent;
