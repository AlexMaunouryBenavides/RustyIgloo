import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.section`
	height: 86vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: sticky;
	top: 0;

	.container {
	}

	.hero_content {
		font-size: 32px;
		max-width: 1450px;
		margin: auto;
		width: 100%;
	}
	.hero_content_design {
		text-align: left;
		animation: text 3s linear infinite;
		-webkit-box-reflect: below -10px linear-gradient(transparent, rgba(35, 31, 32, 0.02), rgba(35, 31, 32, 0.05), rgba(35, 31, 32, 0.1), rgba(35, 31, 32, 0.2));
	}
	.hero_content_dev {
		text-align: right;
		padding-top: 50px;
		animation: text 5s linear infinite;
		-webkit-box-reflect: below -10px linear-gradient(transparent, rgba(35, 31, 32, 0.02), rgba(35, 31, 32, 0.05), rgba(35, 31, 32, 0.1), rgba(35, 31, 32, 0.2));
	}
	.g {
		animation: text 6s linear infinite;
	}
	@keyframes text {
		0%,
		18%,
		20%,
		50.1%,
		60%,
		65.1%,
		80%,
		90%,
		92%,
		100% {
			color: #efeded;
		}
		18.1%,
		20.1%,
		30%,
		50%,
		60.1%,
		65%,
		80.1%,
		90%,
		92.1%,
		100% {
			color: #231f20;
		}
	}

	.title-container {
		position: relative;
	}
	.title {
		font-size: 128px;
		font-family: 'wildWorld', sans-serif;
		color: #231f20;
		text-shadow: 3px 3px 0px #b4a2f8, 4px 4px 0 #231f20;
		-webkit-box-reflect: below 1px
			linear-gradient(
				transparent,
				rgba(35, 31, 32, 0.02),
				rgba(35, 31, 32, 0.05),
				rgba(35, 31, 32, 0.1),
				rgba(35, 31, 32, 0.2)
			);
	}
	.arrow {
		position: absolute;
		bottom: 50px;
		right: 80px;
	}
	.mouse {
		width: 26px;
		height: 42px;
		border: 2px solid #231f20;
		border-radius: 24px;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, -50%);
		cursor: pointer;
	}
	.mouse:after {
		content: '';
		position: absolute;
		top: 5px;
		left: 50%;
		margin-left: -2px;
		background-color: #231f20;
		border-radius: 100%;
		width: 4px;
		height: 4px;
		opacity: 1;
		-webkit-transform: translateY(0px) scaleY(1) scaleX(1) translateZ(0px);
		transform: translateY(0px) scaleY(1) scaleX(1) translateZ(0px);
		-webkit-animation: scroll 1.5s -1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
		animation: scroll 1.5s -1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
	}

	@-webkit-keyframes scroll {
		0%,
		20% {
			-webkit-transform: translateY(0px) scaleY(1) scaleX(1) translateZ(0px);
			transform: translateY(0px) scaleY(1) scaleX(1) translateZ(0px);
		}
		10% {
			-webkit-transform: translateY(0px) scaleY(1.2) scaleX(1.2) translateZ(0px);
			transform: translateY(0px) scaleY(1.2) scaleX(1.2) translateZ(0px);
			opacity: 1;
		}
		100% {
			-webkit-transform: translateY(20px) scaleY(2.5) scaleX(0.5) translateZ(0px);
			transform: translateY(20px) scaleY(2.5) scaleX(0.5) translateZ(0px);
			opacity: 0.01;
		}
	}
	@keyframes scroll {
		0%,
		20% {
			-webkit-transform: translateY(0px) scaleY(1) scaleX(1) translateZ(0px);
			transform: translateY(0px) scaleY(1) scaleX(1) translateZ(0px);
		}
		10% {
			-webkit-transform: translateY(0px) scaleY(1.2) scaleX(1.2) translateZ(0px);
			transform: translateY(0px) scaleY(1.2) scaleX(1.2) translateZ(0px);
			opacity: 1;
		}
		100% {
			-webkit-transform: translateY(20px) scaleY(2.5) scaleX(0.5) translateZ(0px);
			transform: translateY(20px) scaleY(2.5) scaleX(0.5) translateZ(0px);
			opacity: 0.01;
		}
	}
	@media only screen and (max-width: 680px) {
		.hero_content {
			font-size: 18px;
			padding: 0 10px;
		}
		.title {
			font-size: 50px;
			text-align: center;
		}
	}
`;

function HomeHero() {
	return (
		<StyledHero>
			<div className="container">
				<div className="hero_content">
					<p className="hero_content_design">Design</p>
					<p className="hero_content_dev">& Développement</p>
				</div>

				<div className="hero-wrapper">
					<div className="title-container">
						<h1 className="title">
							RUSTY I<span className="g">G</span>LOO
						</h1>
					</div>
				</div>
				<div className="mouse"></div>
			</div>
		</StyledHero>
	);
}

export default HomeHero;
