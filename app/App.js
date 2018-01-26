// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

import { toggleCredits } from './state/actions';

import LayerSelector from './components/LayerSelector';
import Portrait from './components/Portrait';
import Loader from './components/Loader';
import Background from './components/Background';

import { KLEIN_WORDMARK_B64} from './CONSTANTS';
// TODO: Slight paralax on phone and background
// Animated loader (sparkle sprite??)
const View = ({ isPhone, isCreditsVisible, backgroundOffset, onClick }) => (
	<div class="wrapper">
		{!isPhone ?
			<Background />
		: null}
		<main
			class={`app app--${isPhone ? 'phone' : 'desktop'}`}
			style={{ transform: `translateX(${backgroundOffset * 9}px)` }}
		>	
			<div class={`flipper ${isCreditsVisible ? 'flipper--flipped' : ''}`}>
				<Portrait />
				<div class="credits">
					<img class="credits__image" src={`data:image/png;base64, ${KLEIN_WORDMARK_B64}`} />
					<div class="credits__credit">
						<h3 class="credits__role">Model + Sound</h3>
						<h2 class="credits__name">KLEIN</h2>
					</div>
					<div class="credits__credit">
						<h3 class="credits__role">Photography</h3>
						<h2 class="credits__name">(R+D) Reece and Dean</h2>
					</div>
					<div class="credits__credit">
						<h3 class="credits__role">Digital Direction + Code</h3>
						<h2 class="credits__name">Jack Wild</h2>
					</div>
					<div class="credits__credit">
						<h3 class="credits__role">Art Direction</h3>
						<h2 class="credits__name">Superficial</h2>
					</div>
					<div class="credits__credit">
						<h3 class="credits__role">Creative Direction</h3>
						<h2 class="credits__name">Louby Mcloughlin</h2>
					</div>
					<div class="credits__credit">
						<h3 class="credits__role">Styling</h3>
						<h2 class="credits__name">Zaina Muiccia</h2>
					</div>
					<div class="credits__credit">
						<h3 class="credits__role">Make up</h3>
						<h2 class="credits__name">Mattie White</h2>
					</div>
					<div class="credits__credit">
						<h3 class="credits__role">Hair</h3>
						<h2 class="credits__name">Virginie Moreira</h2>
					</div>
					<div class="credits__credit">
						<h3 class="credits__role">Fashion Assistant</h3>
						<h2 class="credits__name">Lillian Rose</h2>
					</div>
				</div>
			</div>
			<LayerSelector />
			<div class={`credits-button credits-button--${isCreditsVisible ? 'back' : 'hamburger'}`} onClick={onClick}>
				<div class="credits-button__icon credits-button__icon--hamburger"></div>
				<div class="credits-button__icon credits-button__icon--back"></div>
			</div>
		</main>
		<Loader />
	</div>
);

const mapStateToProps = ({ isPhone, backgroundOffset, isCreditsVisible }) => {
	return { isPhone, backgroundOffset, isCreditsVisible };
};

const mapDispatchToProps = (dispatch, { layer }) => {
	return {
		onClick: () => {
			dispatch(toggleCredits());
		},
	};
};

const App = connect(
	mapStateToProps,
	mapDispatchToProps,
)(View);

export default App;
