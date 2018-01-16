// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

import { toggleLayer } from '../state/actions';

const View = ({ name, layerSrc, isActive }) => {
	return (
		<div
			class={`portrait__layer portrait__layer--${name} portrait__layer--${isActive ? 'active' : 'inactive'}`}
			data-active={isActive}
			style={{ backgroundImage: `url('${layerSrc}')`}}
		></div>
	);
};

const mapStateToProps = (state, { layer  }) => {
	return { ...layer, isActive: state.layers[layer.name] };
};

const LayerOption = connect(
	mapStateToProps,
)(View);

export default LayerOption;