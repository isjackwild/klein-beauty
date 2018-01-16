import _ from 'lodash';
import { LAYERS, OTHER_IMAGE_ASSETS } from './CONSTANTS';
import { onLoaded as onLoadedAction } from './state/actions';
import store from './state/store';

let toLoad = 0;

const onAllLoaded = () => {
	console.log('all loaded');
	store.dispatch(onLoadedAction());
};

const onLoaded = () => {
	toLoad--;
	if (toLoad === 0) onAllLoaded();
};

const loadImages = () => {
	const allImages = _.reduce(LAYERS, (result, l) => {
		const { iconSrc, iconActiveSrc, layerSrc } = l;
		result.push(iconSrc, iconActiveSrc, layerSrc);
		return result;
	}, []);
	allImages.push(...OTHER_IMAGE_ASSETS);

	toLoad = allImages.length;

	allImages.forEach(src => {
		const image = new Image();
		image.onload = onLoaded;
		image.onerror = onLoaded;
		image.src = src;
	});

	console.log(allImages);
};

export const init = () => {
	loadImages();
};