import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledError = styled.div`
	position: relative;
	color: #231f20;

	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 50px;
	h2 {
		font-size: 128px;
		font-family: 'wildWorld', sans-serif;
	}
	p {
		font-size: 34px;
		text-decoration: underline;
	}
	@media only screen and (max-width: 650px) {
		h2 {
			font-size: 40px;
		}
		p {
			font-size: 18px;
		}
	}
`;

function Error() {
	return (
		<StyledError>
			<h2>404</h2>
			<p>
				<Link to={'/'}> Retour sur le sentier</Link>
			</p>
		</StyledError>
	);
}

export default Error;
