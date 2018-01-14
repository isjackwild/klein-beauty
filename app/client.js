import { h, render } from 'preact';
import App from './App.js';

import { init as initAudio } from './audio-controller';

const kickIt = () => {
	render((
		<App />
	), document.body);

	initAudio();
};


document.addEventListener('DOMContentLoaded', kickIt);