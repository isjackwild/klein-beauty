// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

const View = ({ isVisible, loadProgress }) => {
	return (
		<div class={`loader loader--${isVisible ? 'visible' : 'hidden'}`}>
			<div class={`loader__inner loader__inner--${isVisible ? 'visible' : 'hidden'}`}>
				<img class="loader__image" src="assets/images/ui/loading-klein.jpg" />
				<img class="loader__progress" src="assets/images/ui/loading-bar.jpg" />
			</div>
		</div>
	);
};

const mapStateToProps = ({ isLoaded, loadProgress}) => {
	return { isVisible: !isLoaded, loadProgress };
};

const Loader = connect(
	mapStateToProps,
)(View);

export default Loader;