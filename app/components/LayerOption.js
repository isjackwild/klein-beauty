// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

import { toggleLayer } from '../state/actions.js';

const View = ({ name, isActive, onClick }) => {
	return (
		<div
			class={`layer-option layer-option--${name} layer-option--${isActive ? 'active' : 'inactive'}`}
			data-layer={name}
			data-active={isActive}
			onClick={onClick}
		>
			{ name }
		</div>
	);
};

const mapStateToProps = (state, { name }) => {
	return { name, isActive: state.layers[name] };
};

const mapDispatchToProps = (dispatch, { name }) => {
	console.log(name);
	return {
		onClick: () => {
			dispatch(toggleLayer(name));
		},
	};
};

const LayerOption = connect(
	mapStateToProps,
	mapDispatchToProps,
)(View);

export default LayerOption;