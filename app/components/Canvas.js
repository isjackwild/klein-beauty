import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import _ from 'lodash';

class Comp extends Component {
	componentDidUpdate(lastProps) {
		this.draw();
	}

	draw() {
		console.log('clear canvas');
		_.map(this.props.layers, (l, key) => {
			if (l) {
				console.log('draw layer', key);
			};
		});
	}

	render() {
		return <canvas></canvas>;
	}
}

const mapStateToProps = (state) => {
	return { layers: { ...state.layers } };
};

const Canvas = connect(
	mapStateToProps,
)(Comp);

export default Canvas;