import _ from 'lodash';
import { LAYERS } from './CONSTANTS';

import store from './state/store';

window.AudioContext = window.webkitAudioContext || window.mozAudioContext || window.msAudioContext || window.AudioContext;
const tracks = [];
let audioContext;

const unlockAudio = () => {
	console.log('unlockAudio');
	window.removeEventListener('touchstart', unlockAudio);
	const buffer = context.createBuffer(1, 1, 22050);
	const source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(context.destination);
	source.start();
};

const onUpdateStore = () => {
	const layerStates = store.getState().layers;
	_.map(layerStates, (l, key) => {
		if (tracks[key] === undefined) return null;
		if (l === true) return tracks[key].gainNode.gain.value = 1;
		return tracks[key].gainNode.gain.value = 0;
	});
};

const createAudioPannerNode = (buffer) => {
	const sourceNode = audioContext.createBufferSource();
	const gainNode = audioContext.createGain();

	sourceNode.connect(gainNode);
	gainNode.connect(audioContext.destination);

	sourceNode.buffer = buffer;
	return { sourceNode, gainNode };
};


const loadAudio = (audioSrc) => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.open('GET', audioSrc, true);
		request.responseType = 'arraybuffer';
		request.onload = (e) => {
			if (e.target.readyState === 4 && e.target.status === 200) {
				audioContext.decodeAudioData(e.target.response, buffer => {
					const track = createAudioPannerNode(buffer);
					resolve(track);
				}, error => {
					reject(error);
				});
			} else if (e.target.readyState === 4) {
				reject('Error: Sound probably missing');
			}
		};
		request.send();
	});
};



// TODO refactor using promises or async
export const init = () => {
	window.addEventListener('touchstart', unlockAudio);
	audioContext = new window.AudioContext();

	const promises = LAYERS.reduce((arr, { audioSrc }) => {
		arr.push(loadAudio(audioSrc));
		return arr;
	}, []);

	console.log(promises);

	Promise.all(promises).then((result) => {
		result.forEach((track, i) => {
			tracks[LAYERS[i].name] = track;
			track.sourceNode.start(0);
		});
		console.log(tracks);
	}).catch(err => console.error(err));

	store.subscribe(onUpdateStore);
	console.log('init audio');
};
