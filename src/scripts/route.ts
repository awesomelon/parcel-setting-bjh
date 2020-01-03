export default class Route {
	name: string;
	pageStr: string;
	default: Boolean;
	constructor(name: string, pageStr: string, defaultRoute: Boolean) {
		this.name = name;
		this.pageStr = pageStr;
		this.default = defaultRoute;
	}

	isActiveRoute(hashedPath: string) {
		return hashedPath.replace('#', '') === this.name;
	}
}
