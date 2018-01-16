// NPM
import { h } from 'preact';

import { LAYERS } from '../CONSTANTS';
import LayerOption from './LayerOption';


const LayerSelector = () => (
	<div class="layer-selector">
		<ul class="layer-selector__scroller">
			{
				LAYERS.map(l => <LayerOption key={l.name} layer={l} />)
			}
		</ul>
	</div>
);

export default LayerSelector;
