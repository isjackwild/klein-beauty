import { h, Component } from 'preact';
import { connect } from 'preact-redux';


const View = ({ backgroundOffset }) => (
	<div class="background">
		<div class="background__desert" style={{ transform: `translateX(${backgroundOffset * -30}px)` }}></div>
		<div class="background__surround" style={{ transform: `translateX(${backgroundOffset * 9}px)` }}></div>
	</div>
);

const mapStateToProps = ({ backgroundOffset }) => {
	return { backgroundOffset };
};

const Background = connect(
	mapStateToProps,
)(View);

export default Background;

