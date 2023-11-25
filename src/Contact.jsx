import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
	position: relative;
	color: #efeded;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	margin: auto;
	text-align: center;
	gap: 50px;
	background-color: #231f20;
	.title_contact {
		font-family: 'wildWorld', sans-serif;
		font-size: 64px;

		text-transform: uppercase;
	}
	.content {
		h4 {
			font-size: 24px;
			padding-bottom: 20px;
		}
		p {
			font-size: 24px;
			font-family: 'GeistMono-Thin';
		}
	}
	@media only screen and (max-width: 650px) {
		padding: 0 10px;
		.title_contact {
			font-size: 20px;

			text-transform: uppercase;
		}
		.content {
			h4 {
				font-size: 12px;
				padding-bottom: 20px;
			}
			p {
				font-size: 12px;
			}
		}
	}
`;

function Contact() {
	return (
		<StyledContact>
			<h2 className="title_contact"> Realisons votre projet ensemble </h2>
			<div className="content">
				<h4>Pour toute demandes de renseignements, ou juste pour dire bonjour, contactez-nous.</h4>
				<p>E-mail : alexandremaunoury@yahoo.fr</p>
				<p>Téléphone : 07.68.21.37.87</p>
			</div>
		</StyledContact>
	);
}

export default Contact;
