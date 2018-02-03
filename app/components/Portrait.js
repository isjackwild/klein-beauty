// NPM
import { h } from 'preact';
import { connect } from 'preact-redux';
import _ from 'lodash';

import { LAYERS, PORTRAIT_SRC, BG_SPRITE_SRC } from '../CONSTANTS';
import PortraitLayer from './PortraitLayer';


const View = ({ isCreditsVisible, allLayersVisible }) => {
	return (
		<div class="portrait">
			<div class="portrait__layer portrait__layer--bg portrait__layer--active" data-active>
				<div class="portrait__background">
					<img
						class={`portrait__background-image portrait__background-image--${allLayersVisible ? 'playing' : 'paused'}`}
						src={BG_SPRITE_SRC}
					/>
					<img class="portrait__background-spacer" src={PORTRAIT_SRC} />
				</div>
			</div>
			<img class="portrait__layer-image" src={PORTRAIT_SRC} />
			{ LAYERS.map(l => <PortraitLayer key={l.name} layer={l} />) }
		</div>
	);
};

const mapStateToProps = ({ isCreditsVisible, layers }) => {
	const allLayersVisible = _.filter(layers, l => !l).length === 0;
	return { isCreditsVisible, allLayersVisible };
};

const Portrait = connect(
	mapStateToProps,
)(View);


export default Portrait;
