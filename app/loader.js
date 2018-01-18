import _ from 'lodash';
import { LAYERS, OTHER_IMAGE_ASSETS, MIN_LOAD_TIME } from './CONSTANTS';
import { onLoaded as onLoadedAction, onLoadProgress } from './state/actions';
import store from './state/store';

let toLoad = 0;
let numLoaded = 0;
let allLoaded = false;
let minLoadTimeReached = false;
let loadCompleted = false;

const onAllLoaded = () => {
	allLoaded = true;
	if (minLoadTimeReached && !loadCompleted) {
		loadCompleted = true;
		store.dispatch(onLoadedAction());
	}
};

export const onLoaded = () => {
	numLoaded++;
	if (toLoad !== 0) store.dispatch(onLoadProgress(numLoaded / toLoad));
	if (numLoaded === toLoad) onAllLoaded();
};

const startMinLoadTimeTimer = () => {
	setTimeout(() => {
		minLoadTimeReached = true;
		if (allLoaded && !loadCompleted) {
			loadCompleted = true;
			store.dispatch(onLoadedAction());
		}
	}, MIN_LOAD_TIME);
};

const loadImages = () => {
	startMinLoadTimeTimer();

	const allImages = _.reduce(LAYERS, (result, l) => {
		const { iconSrc, iconActiveSrc, layerSrc } = l;
		result.push(iconSrc, iconActiveSrc, layerSrc);
		return result;
	}, []);
	allImages.push(...OTHER_IMAGE_ASSETS);

	toLoad += allImages.length;

	allImages.forEach(src => {
		const image = new Image();
		image.onload = onLoaded;
		image.onerror = onLoaded;
		image.src = src;
	});
};

export const addAudioAssets = (count) => {
	toLoad += count;
};

export const init = () => {
	loadImages();
};