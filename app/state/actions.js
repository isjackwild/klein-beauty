import {
	TOGGLE_LAYER,
	ON_LOADED,
	SET_BG_OFFSET,
	ON_LOAD_PROGRESS,
	TOGGLE_CREDITS,
} from './action-types';

export const toggleLayer = value => {
	return { type: TOGGLE_LAYER, value };
};

export const onLoadProgress = value => {
	return { type: ON_LOAD_PROGRESS, value };
};

export const onLoaded = () => {
	return { type: ON_LOADED, value: true };
};

export const setBgOffset = value => {
	return { type: SET_BG_OFFSET, value };
};

export const toggleCredits = () => {
	return { type: TOGGLE_CREDITS };
};