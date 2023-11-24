import React from 'react';

import styled from 'styled-components';
import Collapse from '../Collapse';
import { collapseInfos } from '../../Data/collapseDatas';
import Plus from '../../assets/plus.png';
import Minus from '../../assets/minus.png';

const StyledColllapse = styled.section`
	height: 100vh;
	background-color: #231f20;
	color: #fff;
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;

	.wrapper {
		width: 100%;
	}
`;

function HomeCollapses() {
	return (
		<StyledColllapse>
			<div className="wrapper">
				{collapseInfos.map((data, index) => (
					<Collapse
						key={index}
						index={index}
						title={data.title}
						plus={Plus}
						minus={Minus}
						content={data.content}
					/>
				))}
			</div>
		</StyledColllapse>
	);
}

export default HomeCollapses;
