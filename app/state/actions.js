import {
	TOGGLE_LAYER,
	ON_LOADED,
	SET_BG_OFFSET,
} from './action-types';

export const toggleLayer = value => {
	return { type: TOGGLE_LAYER, value };
};

export const onLoaded = () => {
	return { type: ON_LOADED, value: true };
};

export const setBgOffset = value => {
	return { type: SET_BG_OFFSET, value };
};