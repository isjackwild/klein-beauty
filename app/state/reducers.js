import {
	TOGGLE_LAYER,
	ON_LOADED,
} from './action-types';


const toggleLayer = (state, { value }) => {
	const newState = { ...state };

	if (newState.layers[value] !== undefined) {
		newState.layers[value] = !state.layers[value];
	}

	return newState;
};

const onLoaded = (state) => {
	return { ...state, isLoaded: true };
};


const REDUCERS = {};
REDUCERS[TOGGLE_LAYER] = toggleLayer;
REDUCERS[ON_LOADED] = onLoaded;

export default REDUCERS;
