import {
	TOGGLE_LAYER,
	ON_LOADED,
	SET_BG_OFFSET,
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

const setBgOffset = (state, { value }) => {
	return { ...state, backgroundOffset: value };
};

const REDUCERS = {};
REDUCERS[TOGGLE_LAYER] = toggleLayer;
REDUCERS[ON_LOADED] = onLoaded;
REDUCERS[SET_BG_OFFSET] = setBgOffset;

export default REDUCERS;
