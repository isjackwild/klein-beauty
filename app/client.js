import { h, render } from 'preact';
import { Provider } from 'preact-redux';

import store from './state/store';

import App from './App.js';
import { init as initAudio } from './audio-controller';

const kickIt = () => {
	render((
		<Provider store={store}>
			<App />
		</Provider>
	), document.body);

	initAudio();
};


document.addEventListener('DOMContentLoaded', kickIt);