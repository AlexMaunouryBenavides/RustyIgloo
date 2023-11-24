import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1700303710555.json';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
	padding: 40px 80px 0 80px;
	height: 100vh;
	.top_footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		h3 {
			color: #b4a2f8;
			font-size: 80px;
			font-family: 'wildWorld', sans-serif;
			text-shadow: 1px 1px 0 #231f20;
		}
		h4 {
			color: #231f20;
			font-size: 34px;
			font-family: 'wildWorld', sans-serif;
		}
	}
	.animation {
		height: 600px;
		width: auto;
	}

	.content_footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.socials {
			ul {
				list-style: none;
				li {
					color: #b4a2f8;
					font-size: 34px;
					font-family: 'wildWorld', sans-serif;
					text-shadow: 1px 1px 0 #231f20;
					transition: 0.2s;
					a {
						text-decoration: none;
						color: #b4a2f8;
					}
				}
				li:hover {
					transform: translateX(2%);
				}
			}
		}

		h5 {
			color: #231f20;
			font-size: 34px;
			font-family: 'wildWorld', sans-serif;
			border-bottom: 1px solid #231f20;
			padding: 15px 0;
			max-width: 250px;
		}
	}
	.bottom_footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 40px;
		color: #231f20;
	}
	@media only screen and (max-width: 650px) {
		padding: 20px 10px 0 10px;
		height: 100%;
		.top_footer {
			h3 {
				font-size: 40px;
			}
			h4 {
				font-size: 20px;
			}
		}
		.animation {
			height: 300px;
			width: auto;
		}
		.content_footer {
			display: flex;
			flex-wrap: wrap;
			gap: 20px;
			align-items: center;
			justify-content: space-between;
			.socials {
				ul {
					li {
						font-size: 18px;
					}
				}
			}

			h5 {
				font-size: 20px;

				padding: 0;
				max-width: 250px;
			}
		}
		.bottom_footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20px 10px;
		}
	}
`;

function Footer() {
	return (
		<StyledFooter>
			<div className="top_footer">
				<h4>Parlons de votre projet</h4>
				<h3>RI.</h3>
			</div>
			<div className="img">
				<Lottie className="animation" animationData={animationData} />
			</div>
			<div className="content_footer">
				<div className="socials">
					<ul>
						<li>
							<a target="blank" href="https://www.instagram.com/alejandro_mb93/">
								Instagram
							</a>
						</li>
						<li>
							<a target="blank" href="https://www.linkedin.com/in/alexandre-maunoury-06837319a/">
								Linkedin
							</a>
						</li>
						<li>
							<a target="blank" href="https://github.com/AlexMaunouryBenavides">
								Github
							</a>
						</li>
					</ul>
				</div>
				<h5>A propos de moi</h5>
			</div>
			<div className="bottom_footer">
				<p>© 2023 Copyright Alex</p>
				<p>Build in React.js</p>
			</div>
		</StyledFooter>
	);
}

export default Footer;
