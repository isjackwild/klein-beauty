// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

import { LAYERS, PORTRAIT_SRC } from '../CONSTANTS';
import PortraitLayer from './PortraitLayer';


const LayerSelector = () => (
	<div class="portrait">
		<img class="portrait__layer-image" src={PORTRAIT_SRC} />
		{ LAYERS.map(l => <PortraitLayer key={l.name} layer={l} />) }
	</div>
);

export default LayerSelector;
