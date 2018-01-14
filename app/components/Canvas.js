import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import _ from 'lodash';

class Comp extends Component {
	componentDidMount() {
		console.log(this.canvas);
		this.ctx = this.canvas.getContext('2d');
		this.draw();
	}

	componentDidUpdate() {
		this.draw();
	}

	draw() {
		_.map(this.props.layers, (l, key) => {
			if (l) {
				console.log('draw layer', key);
			};
		});
	}

	render() {
		return <canvas class="canvas" ref={ref => this.canvas = ref}></canvas>;
	}
}

const mapStateToProps = (state) => {
	return { layers: { ...state.layers } };
};

const Canvas = connect(
	mapStateToProps,
)(Comp);

export default Canvas;
