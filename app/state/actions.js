import {
	TOGGLE_LAYER,
	ON_LOADED,
} from './action-types';

export const toggleLayer = value => {
	return { type: TOGGLE_LAYER, value };
};

export const onLoaded = () => {
	return { type: ON_LOADED, value: true };
};