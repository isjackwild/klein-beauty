import {
	TOGGLE_LAYER,
} from './action-types.js';


const toggleLayer = (state, { value }) => {
	const newState = { ...state };

	if (newState.layers[value] !== undefined) {
		newState.layers[value] = !state.layers[value];
	}

	return newState;
};

const REDUCERS = {};
REDUCERS[TOGGLE_LAYER] = toggleLayer;

export default REDUCERS;
