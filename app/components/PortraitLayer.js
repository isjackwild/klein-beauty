// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

import { toggleLayer } from '../state/actions';

const View = ({ name, isActive }) => {
	return (
		<div
			class={`portrait__layer portrait__layer--${name} portrait__layer--${isActive ? 'active' : 'inactive'}`}
			data-active={isActive}
		></div>
	);
};

const mapStateToProps = (state, { name }) => {
	return { name, isActive: state.layers[name] };
};

const LayerOption = connect(
	mapStateToProps,
)(View);

export default LayerOption;