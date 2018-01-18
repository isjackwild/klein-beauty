// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

import { toggleLayer } from '../state/actions';
import { PORTRAIT_SRC } from '../CONSTANTS.js';

const View = ({ name, layerType, layerSrc, isActive }) => {
	return (
		<div
			class={`portrait__layer portrait__layer--${name} portrait__layer--${isActive ? 'active' : 'inactive'}`}
			data-active={isActive}
		>
			{(() => {
				switch(layerType) {
					case 'image':
						return <img class="portrait__layer-image" src={layerSrc} />;
					case 'sprite':
						return (
							<div class="portrait__layer-sprite" style={{ backgroundImage: `url('${layerSrc}')` }}>
								<img class="portrait__layer-sprite-spacer" src={PORTRAIT_SRC} />;
							</div>
						);
					default:
						return null;
				}
			})()}
		</div>
	);
};

const mapStateToProps = (state, { layer  }) => {
	return { ...layer, isActive: state.layers[layer.name] };
};

const LayerOption = connect(
	mapStateToProps,
)(View);

export default LayerOption;