// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';
import { KLEIN_WORDMARK_B64, LOADER_SURROUND_b64 } from '../CONSTANTS';

const View = ({ isVisible, loadProgress }) => {
	return (
		<div class={`loader loader--${isVisible ? 'visible' : 'hidden'}`}>
			<div class={`loader__inner loader__inner--${isVisible ? 'visible' : 'hidden'}`}>
				<img class="loader__image" src={`data:image/png;base64, ${KLEIN_WORDMARK_B64}`} />
				<div class="loader__progress">
					<div class="loader__progress-bar" style={{ width: `${loadProgress * 100}%` }}></div>
					<img class="loader__progress-surround" src={`data:image/png;base64, ${LOADER_SURROUND_b64}`} />
				</div>
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