// NPM
import { h } from 'preact';
import { Provider } from 'preact-redux';

import store from './state/store';

import LayerSlector from './components/LayerSelector';
import Canvas from './components/Canvas';

const App = () => (
	<Provider store={store}>
		<main class="app">
			<Canvas />
			<LayerSlector />
		</main>
	</Provider>
);

export default App;
