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
							<div class="portrait__layer-sprite">
								<img class="portrait__layer-sprite-image" src={layerSrc} />
								<img class="portrait__layer-sprite-spacer" src={PORTRAIT_SRC} />
							</div>
						);
					case 'sprite-vertical':
						return (
							<div class="portrait__layer-sprite portrait__layer-sprite--vertical">
								<img class="portrait__layer-sprite-image portrait__layer-sprite-image--vertical" src={layerSrc} />
								<img class="portrait__layer-sprite-spacer portrait__layer-sprite-spacer--vertical" src={PORTRAIT_SRC} />
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