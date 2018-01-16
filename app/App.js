// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

import LayerSelector from './components/LayerSelector';
import Portrait from './components/Portrait';

const View = ({ isPhone }) => (
	<div class={`wrapper-background wrapper-background--${isPhone ? 'hidden' : 'visible'}`}>
		<main class={`app app--${isPhone ? 'phone' : 'desktop'}`}>
			<Portrait />
			<LayerSelector />
		</main>
	</div>
);

const mapStateToProps = ({ isPhone }) => {
	return { isPhone };
};

const App = connect(
	mapStateToProps,
)(View);

export default App;
