// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

import { LAYERS } from '../CONSTANTS';
import PortraitLayer from './PortraitLayer';


const LayerSelector = () => (
	<div class="portrait">
		{
			LAYERS.map(l => <PortraitLayer key={l.name} name={l.name} />)
		}
	</div>
);

export default LayerSelector;
