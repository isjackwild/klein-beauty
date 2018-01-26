import {
	TOGGLE_LAYER,
	ON_LOADED,
	SET_BG_OFFSET,
	ON_LOAD_PROGRESS,
	TOGGLE_CREDITS,
} from './action-types';


const toggleLayer = (state, { value }) => {
	const newState = { ...state };

	if (newState.layers[value] !== undefined) {
		newState.layers[value] = !state.layers[value];
	}

	return newState;
};

const onLoadProgress = (state, { value }) => {
	return { ...state, loadProgress: value };
};

const onLoaded = (state) => {
	return { ...state, isLoaded: true };
};

const setBgOffset = (state, { value }) => {
	return { ...state, backgroundOffset: value };
};


const toggleCredits = (state) => {
	return { ...state, isCreditsVisible: !state.isCreditsVisible };
};

const REDUCERS = {};
REDUCERS[TOGGLE_LAYER] = toggleLayer;
REDUCERS[ON_LOADED] = onLoaded;
REDUCERS[SET_BG_OFFSET] = setBgOffset;
REDUCERS[ON_LOAD_PROGRESS] = onLoadProgress;
REDUCERS[TOGGLE_CREDITS] = toggleCredits;

export default REDUCERS;
