// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

import LayerSelector from './components/LayerSelector';
import Portrait from './components/Portrait';
import Loader from './components/Loader';
import Background from './components/Background';

// TODO: Slight paralax on phone and background
// Animated loader (sparkle sprite??)
const View = ({ isPhone, backgroundOffset }) => (
	<div class="wrapper">
		{!isPhone ?
			<Background />
		: null}
		<main
			class={`app app--${isPhone ? 'phone' : 'desktop'}`}
			style={{ transform: `translateX(${backgroundOffset * 9}px)` }}
		>
			<Portrait />
			<LayerSelector />
		</main>
		<Loader />
	</div>
);

const mapStateToProps = ({ isPhone, backgroundOffset }) => {
	return { isPhone, backgroundOffset };
};

const App = connect(
	mapStateToProps,
)(View);

export default App;
