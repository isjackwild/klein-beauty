import {
	TOGGLE_LAYER,
} from './action-types';

export const toggleLayer = value => {
	return { type: TOGGLE_LAYER, value };
};