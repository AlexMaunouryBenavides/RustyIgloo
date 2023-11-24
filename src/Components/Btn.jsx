import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.div`
	.btn {
		background: transparent;
		padding: 15px 80px;
		outline: none;
		border: 1px solid #b4a2f8;
		box-shadow: 3px 3px 0px #b4a2f8;
		color: #efeded;
		font-size: 24px;
		transition: 0.5s;
		&:hover {
			transform: translateX(2%);
			box-shadow: 0px 0px 0px #b4a2f8;
		}
	}
`;

function Btn({ title }) {
	return (
		<StyledBtn>
			<button className="btn" type="button">
				{title}
			</button>
		</StyledBtn>
	);
}

export default Btn;
