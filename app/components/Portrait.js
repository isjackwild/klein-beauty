// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';

import { LAYERS, PORTRAIT_SRC, BG_SPRITE_SRC } from '../CONSTANTS';
import PortraitLayer from './PortraitLayer';


const View = ({ isCreditsVisible }) => (
	<div class="portrait">
		<div class="portrait__layer portrait__layer--bg portrait__layer--active" data-active>
			<div class="portrait__layer-sprite">
				<img class="portrait__layer-sprite-image" src={BG_SPRITE_SRC} />
				<img class="portrait__layer-sprite-spacer" src={PORTRAIT_SRC} />
			</div>
		</div>
		<img class="portrait__layer-image" src={PORTRAIT_SRC} />
		{ LAYERS.map(l => <PortraitLayer key={l.name} layer={l} />) }
	</div>
);

const mapStateToProps = ({ isCreditsVisible }) => {
	return { isCreditsVisible };
};

const Portrait = connect(
	mapStateToProps,
)(View);


export default Portrait;
