import React from 'react';
import styled from 'styled-components';
import Btn from '../Btn';

const StyledAbout = styled.section`
	height: 100vh;
	background-color: #231f20;
	color: #efeded;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 80px;
	position: sticky;
	top: 0;
	.title {
		width: 50%;
		font-family: 'wildWorld', sans-serif;
		font-size: 32px;
	}
	.content {
		width: 50%;
	}
	.text {
		font-size: 24px;
		padding-bottom: 24px;
		max-width: 750px;
	}
	@media only screen and (max-width: 650px) {
		display: flex;
		flex-direction: column;
		padding: 20px 10px;
		text-align: center;
		.title {
			width: auto;
			font-family: 'wildWorld', sans-serif;
			font-size: 24px;
		}
		.content {
			width: auto;
		}
		.text {
			font-size: 18px;
			padding-bottom: 10px;
			max-width: 750px;
		}
	}
`;

function HomeAbout() {
	return (
		<StyledAbout>
			<div className="title">A PROPOS DE NOUS</div>
			<div className="content">
				<div className="text">
					<p>
						<span>Rusty Igloo</span> est une agence independante base en France spécialiser dans le Web
						design et le déploiement de site Web, nous accordons une importance particulière a la qualité.
					</p>
					<br />
					<p>
						Toujours a la recherche de nouveau projet ou clients avec qui collaborer et créer de
						fantastique projet.
					</p>
				</div>

				<Btn title={'Contact'} />
			</div>
		</StyledAbout>
	);
}

export default HomeAbout;
