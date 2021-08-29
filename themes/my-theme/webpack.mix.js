const mix = require("laravel-mix");

mix.js("src/js/app.js", "dist")
	.sourceMaps()
	.sass("src/scss/app.scss", "dist")
	.version()
	.options({
		processCssUrls: false,
	})
	.setPublicPath("./")
	.setResourceRoot("_resources/themes/my-theme/dist/");
