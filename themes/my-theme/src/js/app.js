import _VueNav from "./VueNav";
import intersectionObserver from "./intersectionObserver";
/* import ViewportHeightDetector from "./ViewportHeightDetector"; */

const parallaxComponentBackground = document.querySelector(".parallax-component__background");

const options = {
	rootMargin: "70px",
};

intersectionObserver().create(
	parallaxComponentBackground,
	entry => {
		entry.isIntersecting ? console.log("IS INTERSECTING") : console.log("IS NOT INTERSECTING");
	},
	options
);

/* const viewportHeightDetector = new ViewportHeightDetector();

const handleScroll = e => {
	viewportHeightDetector.setViewportHeight(window.pageYOffset);
};

window.addEventListener("scroll", handleScroll); */
