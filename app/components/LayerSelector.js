// NPM
import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import IScroll from 'iscroll/build/iscroll';

import { LAYERS } from '../CONSTANTS';
import LayerOption from './LayerOption';


class Comp extends Component {
	componentDidMount() {
		if (!this.props.isDesktop) return;
		const options = {
			click: false,
			scrollX: true,
			scrolY: false,
			bounceTime: 800,
			bounceEasing: 'quadratic',
			deceleration: 0.00035,
			eventPassthrough: false,
		};

		this.iScroll = new IScroll('.layer-selector__transform', options);

		window.addEventListener('resize', this.iScroll.refresh);
	}

	componentDidUpdate() {
		setTimeout(() => {
			this.iScroll.refresh();
		}, 0);
	}

	render({ isVisible, isDesktop }) {
		return (
			<div class={`layer-selector layer-selector--${isDesktop ? 'desktop' : 'mobile'}`}>
				<div
					class={`layer-selector__transform layer-selector__transform--${isVisible ? 'inactive' : 'active' } layer-selector__transform--${isDesktop ? 'desktop' : 'mobile' }`}
					ref={r => this.el = r}
				>
					<ul class={`layer-selector__scroller layer-selector__scroller--${isDesktop ? 'desktop' : 'mobile'}`}>
						{LAYERS.map(l => <LayerOption key={l.name} layer={l} />)}
					</ul>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ isLoaded, isDesktop }) => {
	return { isVisible: isLoaded, isDesktop };
};

const LayerSelector = connect(
	mapStateToProps,
)(Comp);

export default LayerSelector;
