interface IRoutes {
	default: Boolean;
	pageStr: string;
	isActiveRoute(hash: string): Boolean;
}

export default class Router {
	routes: Array<IRoutes>;
	rootElem: HTMLElement;

	constructor(routes: Array<IRoutes>) {
		this.routes = routes;
		this.rootElem = document.querySelector('#app');

		this.init();
	}

	init = () => {
		const r: Array<IRoutes> = this.routes;
		window.addEventListener('hashchange', () => {
			this.hasChanged(r);
		});
		this.hasChanged(r);
	};

	hasChanged = (r: Array<IRoutes>) => {
		r.filter(route => {
			return window.location.hash.length > 0
				? route.isActiveRoute(window.location.hash.substr(1)) == true
				: route.default == true;
		}).map(route => {
			this.goToRoute(route.pageStr);
		});
	};

	goToRoute(pageStr: string) {
		this.rootElem.innerHTML = pageStr;
	}
}
