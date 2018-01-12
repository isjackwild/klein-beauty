import { createStore } from 'redux';
import REDUCERS from './reducers.js';
import './actions';

import { LAYERS } from '../CONSTANTS.js';

const INITIAL = {
	layers: {},
};

LAYERS.forEach(l => INITIAL.layers[l] = false);

const store = createStore((state, action) => (
	action && REDUCERS[action.type] ? REDUCERS[action.type](state, action) : state
), INITIAL, window.devToolsExtension && window.devToolsExtension());

window.store = store;
export default store;
