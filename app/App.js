// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

import LayerSlector from './components/LayerSelector.js';
import Canvas from './components/Canvas.js';

const App = () => (
	<main class="app">
		<Canvas />
		<LayerSlector />
	</main>
);

// const mapStateToProps = state => { return { ... state.site }; };

// const App = connect(
// 	mapStateToProps,
// )(View);

export default App;
