// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

import { toggleLayer } from '../state/actions';

const View = ({ name, iconSrc, iconActiveSrc, iconFormat, isActive, onClick, iscroll }) => {
	console.log(iscroll);
	return (
		<li
			class={`layer-option layer-option--${name} layer-option--${isActive ? 'active' : 'inactive'} layer-option--format-${iconFormat}`}
			data-layer={name}
			onClick={() => (iscroll && iscroll.moved) ? null : onClick()}
		>
			<img class="layer-option__image layer-option__image--active" src={iconActiveSrc} />
			<img class="layer-option__image layer-option__image--inactive" src={iconSrc} />
		</li>
	);
};

const mapStateToProps = (state, { layer }) => {
	return { ...layer, isActive: state.layers[layer.name] };
};

const mapDispatchToProps = (dispatch, { layer }) => {
	return {
		onClick: () => {
			console.log('on click', layer.name);
			dispatch(toggleLayer(layer.name));
		},
	};
};

const LayerOption = connect(
	mapStateToProps,
	mapDispatchToProps,
)(View);

export default LayerOption;