// NPM
import { h } from 'preact';

import { LAYERS } from '../CONSTANTS';
import LayerOption from './LayerOption';


const LayerSelector = () => (
	<div class="layer-selector">
		{
			LAYERS.map(l => <LayerOption key={l.name} name={l.name} />)
		}
	</div>
);

export default LayerSelector;
