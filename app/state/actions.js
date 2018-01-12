import {
	TOGGLE_LAYER,
} from './action-types.js';

export const toggleLayer = value => {
	return { type: TOGGLE_LAYER, value };
};