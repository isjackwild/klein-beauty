import { h, render } from 'preact';
import { Provider } from 'preact-redux';

import store from './state/store';

import App from './App.js';

const kickIt = () => {
	render((
		<Provider store={store}>
			<App />
		</Provider>
	), document.body);
};


document.addEventListener('DOMContentLoaded', kickIt);