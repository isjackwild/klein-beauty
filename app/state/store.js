import MobileDetect from 'mobile-detect';
import { createStore } from 'redux';
import REDUCERS from './reducers';
import './actions';

import { LAYERS } from '../CONSTANTS';

const md = new MobileDetect(window.navigator.userAgent);
const INITIAL = {
	layers: {},
	isPhone: md.phone() || false,
};

LAYERS.forEach(l => INITIAL.layers[l.name] = false);

const store = createStore((state, action) => (
	action && REDUCERS[action.type] ? REDUCERS[action.type](state, action) : state
), INITIAL, window.devToolsExtension && window.devToolsExtension());

window.store = store;
export default store;
