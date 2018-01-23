import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import _ from 'lodash';

import store from './state/store';
import { setBgOffset } from './state/actions';

import App from './App.js';
import { init as initLoader } from './loader.js';

let then, isFocused = true;
let offsetTarget = 0, offsetCurrent = 0;

const animate = () => {
	const now = new Date().getTime();
	const correction = then ? (now - then) / 16.66 : 1;

	if (isFocused) {
		offsetCurrent += ((offsetTarget - offsetCurrent) * (0.05 * correction));
		then = now;
		store.dispatch(setBgOffset(offsetCurrent));
	}
	requestAnimationFrame(animate);
};

const onMouseMove = _.throttle((e) => {
	offsetTarget = (e.clientX - (window.innerWidth * 0.5)) / (window.innerWidth * 0.5);
}, 16.66);

const onFocus = () => {
	then = undefined;
	isFocused = true;
};

const onBlur = () => {
	then = undefined;
	isFocused = false;
};

const kickIt = () => {
	console.log("MINIFY ASSETS");
	render((
		<Provider store={store}>
			<App />
		</Provider>
	), document.body);

	initLoader();

	if (store.getState().isDesktop) {
		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('focus', onFocus);
		window.addEventListener('blur', onBlur);
		animate();
	}
};


document.addEventListener('DOMContentLoaded', kickIt);