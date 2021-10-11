let vueNav = null;
let vueParallaxComponent = null;

if (location.pathname === "/silverpets/" || location.pathname === "/") {
	vueNav = require("./VueNav");
	vueParallaxComponent = require("./VueParallaxComponent");
}
