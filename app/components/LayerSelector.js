// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

import { LAYERS } from '../CONSTANTS';
import LayerOption from './LayerOption';


const View = ({ isVisible }) => (
	<div class="layer-selector">
		<div class={`layer-selector__transform layer-selector__transform--${isVisible ? 'inactive' : 'active' }`}>
			<ul class="layer-selector__scroller">
				{LAYERS.map(l => <LayerOption key={l.name} layer={l} />)}
			</ul>
		</div>
	</div>
);

const mapStateToProps = (state) => {
	return { isVisible: state.isLoaded };
};

const LayerSelector = connect(
	mapStateToProps,
)(View);

export default LayerSelector;
