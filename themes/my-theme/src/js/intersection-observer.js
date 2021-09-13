export const createObserver = () => {
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 1.0,
	};

	const observer = new IntersectionObserver(handleIntersect, options);

	observer.observe(boxElement);
};
