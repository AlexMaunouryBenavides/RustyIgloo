import React from 'react';
import styled from 'styled-components';
import Slider from '../Slider';

const StyledProject = styled.section`
	max-width: 100%;
	position: sticky;
	top: 0;
	background-color: #efeded;
	height: 100vh;
	h3 {
		color: #231f20;
		padding: 40px 100px;
		text-shadow: 3px 3px 0px #b4a2f8, 4px 4px 0 #231f20;
		font-family: 'wildWorld', sans-serif;
		font-size: 32px;
	}
	.slider {
		max-width: 100%;
		overflow: hidden;
	}
	.underline_wrapper {
		padding: 0px 80px;
	}
	.underline {
		background-color: #231f20;
		opacity: 30%;
		border-radius: 50%;
		height: 1px;

		margin: auto;
	}
	@media only screen and (max-width: 650px) {
		h3 {
			text-align: center;
			padding: 40px 0;
			text-shadow: 3px 3px 0px #b4a2f8, 4px 4px 0 #231f20;
			font-family: 'wildWorld', sans-serif;
			font-size: 32px;
		}
	}
`;

function HomeProject() {
	return (
		<StyledProject>
			<h3>Projects</h3>
			<div className="slider">
				<Slider />
			</div>
			<div className="underline_wrapper">
				<div className="underline"></div>
			</div>
		</StyledProject>
	);
}

export default HomeProject;
