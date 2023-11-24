import React from 'react';
import styled from 'styled-components';

import { SliderInfos } from './Data/sliderDatas';

const StyledProjectsPage = styled.div`
	position: relative;
	color: black;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding: 40px 80px;

	.card {
		height: 700px;
		width: 550px;
		background-color: black;
		padding: 1px;
		box-shadow: 3px 3px 0px #b4a2f8, 4px 4px 0 #231f20;
		transition: all 0.3s;
		&:hover {
			box-shadow: 0px 0px 0px #b4a2f8, 0px 0px 0 #231f20;
		}

		img {
			height: 70%;
			width: 100%;
			object-fit: cover;
		}
		h4 {
			color: #efeded;
			padding: 20px;
			font-size: 20px;
		}
		p {
			color: #efeded;

			padding: 20px;
		}
	}
	@media only screen and (max-width: 650px) {
		padding: 10px;
		gap: 20px;
		.card {
			height: 500px;
			width: 90%;
			margin: auto;
		}
	}
`;

function Projects() {
	return (
		<StyledProjectsPage>
			{SliderInfos.map((item, index) => (
				<div key={index} className="container">
					<a target="_blank" href={item.link}>
						<div className="card">
							<img src={item.image} alt="" />
							<h4>{item.title}</h4>
							<p>{item.description} </p>
						</div>
					</a>
				</div>
			))}
		</StyledProjectsPage>
	);
}

export default Projects;
