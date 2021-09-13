export default class ViewportWidthDetector {
	#viewportWidth;

	constructor(viewportWidth) {
		this.#viewportWidth = viewportWidth;
	}

	setViewportWidth(viewportWidth) {
		this.#viewportWidth = viewportWidth;
	}

	getViewportWidth() {
		return this.#viewportWidth;
	}
}
