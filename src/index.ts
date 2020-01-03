import './css/index.css';
import Route from './scripts/route';
import Router from './scripts/router';
import { about, home } from './scripts/pages';

const init = () => {
	const router = new Router([new Route('home', home, true), new Route('about', about, false)]);
};

init();
