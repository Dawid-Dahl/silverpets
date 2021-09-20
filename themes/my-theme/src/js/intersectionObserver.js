const intersectionObserver = () => ({
	create(target, cb, options = {}) {
		if (!target) return null;

		const io = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				cb(entry);
			});
		}, options);

		io.observe(target);
	},
});

export default intersectionObserver;
