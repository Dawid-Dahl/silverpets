export default class ViewportHeightDetector {
	#viewportHeight;

	constructor(viewportHeight) {
		this.#viewportHeight = viewportHeight;
	}

	setViewportHeight(viewportHeight) {
		this.#viewportHeight = viewportHeight;
	}

	getViewportHeight() {
		return this.#viewportHeight;
	}
}
