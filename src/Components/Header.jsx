import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
	padding: 40px 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: 'wildWorld', sans-serif;
	font-size: 32px;
	h2 {
		color: #231f20;
		a {
			text-decoration: none;
			color: #231f20;
		}
	}
	.menu-container {
		position: fixed;
		top: 40px;
		right: 80px;
		cursor: pointer;
		z-index: 200;
	}
	.menu {
		color: #231f20;
		text-shadow: 3px 3px 0px #b4a2f8, 4px 4px 0 #231f20;
		transition: all 0.5s;
		&:hover {
			color: #b4a2f8;
		}
	}
	.menu_light {
		color: #efeded;
		text-shadow: 3px 3px 0px #b4a2f8, 4px 4px 0 #231f20;
		transition: all 0.5s;
	}
	.menu_container {
	}
	.menu_container ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 50px;
		padding-top: 80px;
		font-size: 120px;
		justify-content: center;
		align-items: center;
		li a {
			text-decoration: none;
			color: #b4a2f8;
			transition: all 0.3s;
			&:hover {
				color: #efeded;
			}
		}
	}
	.nav_container {
		background-color: #231f20;
		color: #b4a2f8;
		height: 100vh;
		position: fixed;
		top: 0;
		right: -100vw;
		width: 100%;
		z-index: 100;
		transition: all 0.5s;
	}
	.open {
		display: block;
		background-color: #231f20;
		color: #b4a2f8;
		height: 100vh;
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		z-index: 100;
		transition: all 0.5s;
	}
	@media only screen and (max-width: 650px) {
		padding: 20px 10px;
		font-size: 18px;
		.menu-container {
			top: 10px;
			right: 10px;
			cursor: pointer;
			z-index: 200;
		}
		.menu_container ul {
			padding-top: 80px;
			font-size: 40px;
		}
	}
`;

function Header() {
	const [open, setOpen] = useState(true);
	function handleMenu() {
		setOpen(!open);
	}
	function handleClick() {
		handleMenu();
	}

	return (
		<StyledHeader>
			<h2>
				<Link to={'/'}> RI.</Link>
			</h2>
			<div className="menu-container">
				<h2 onClick={handleMenu} className={open ? 'menu' : 'menu_light'}>
					MENU
				</h2>
			</div>
			<div className={open ? 'nav_container ' : 'open'}>
				<div className="menu_container">
					<ul>
						<li onClick={handleClick}>
							<Link to={'/'}> Home</Link>
						</li>
						<li onClick={handleClick}>
							<Link to={'/projets'}> Projets</Link>
						</li>
						<li onClick={handleClick}>
							<Link to={'/contact'}> Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</StyledHeader>
	);
}

export default Header;
