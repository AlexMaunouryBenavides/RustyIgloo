import React from 'react';
import styled from 'styled-components';

const StyledHServices = styled.section`
	height: 100vh;
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;
	background-color: #efeded;
	color: #231f20;
	.services_container {
		display: flex;

		gap: 50px;
	}

	h3 {
		color: #231f20;
		font-family: 'wildWorld', sans-serif;
		font-size: 32px;
		padding: 0 80px;
		text-shadow: 3px 3px 0px #b4a2f8, 4px 4px 0 #231f20;
	}
	.text_wrapper {
		h4 {
			font-size: 36px;
		}
		p {
			font-size: 24px;
		}
	}
	.tags {
		display: flex;
		p {
			border: 1px solid #231f20;
			margin: 60px 50px 60px 0;
			padding: 5px;
		}
	}
	@media only screen and (max-width: 650px) {
		.services_container {
			max-width: 100%;
			padding: 0px 10px;
			flex-direction: column;
			h3 {
				font-size: 20px;

				text-align: center;
				padding-bottom: 40px;
			}
		}
		.text_wrapper {
			h4 {
				font-size: 18px;
			}
			p {
				font-size: 12px;
			}
		}
		.tags {
			padding: 0 10px;
			display: block;
			margin-top: 20px;
			p {
				border: 1px solid #231f20;
				margin: 20px 0px 0px 0;
				padding: 5px;
			}
		}
	}
`;

function HomeServices() {
	return (
		<StyledHServices>
			<div className="services_container">
				<h3>SERVICES</h3>
				<div className="text_wrapper">
					<h4>
						Nous collaborons avec vous pour résoudre vos challenges et construire votre présence digital.
					</h4>
					<p>Des designs créatifs et unique pour exprimer votre vision de votre projet.</p>
					<div className="tags">
						<p>Experience utilisateur</p>
						<p>Web design</p>
						<p>Responsive design</p>
					</div>
				</div>
			</div>
		</StyledHServices>
	);
}

export default HomeServices;
