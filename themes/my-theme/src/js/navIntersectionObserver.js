const navIntersectionObserver = () => ({
	create(target, cb, options = {}) {
		if (!target) return null;

		const io = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.target.className === "hero__slogan") {
					cb(entry);
				}
			});
		}, options);

		io.observe(target);
	},
});

export default navIntersectionObserver;
