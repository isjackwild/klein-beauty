// NPM
import { h } from 'preact';

import { LAYERS } from '../CONSTANTS.js';
import LayerOption from './LayerOption.js';


const LayerSelector = () => (
	<div class="layer-selector">
		{
			LAYERS.map(l => <LayerOption key={l} name={l} />)
		}
	</div>
);

export default LayerSelector;