import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const StyledAccordion = styled.div`
	padding: 100px 0;

	.collapse {
		max-width: 80%;
		margin: auto;
	}
	.header_collapse {
		display: flex;
		align-items: center;
		justify-content: space-between;
		h4 {
			font-family: 'wildWorld', sans-serif;
			font-size: 40px;
			padding-bottom: 30px;
		}
	}
	.content_collapse {
		padding: 30px 10px;

		border: 1px solid #fff;
		box-shadow: 3px 3px 0px #b4a2f8;
	}
	.collapse_buttons {
		height: 50px;
		width: auto;
	}
	@media only screen and (max-width: 650px) {
		padding: 50px 0;

		.header_collapse {
			display: flex;
			align-items: center;
			justify-content: space-between;
			h4 {
				font-size: 20px;
				padding-bottom: 0px;
			}
		}
		.content_collapse {
			padding: 10px 10px;
			font-size: 12px;

			border: 1px solid #fff;
			box-shadow: 3px 3px 0px #b4a2f8;
		}
	}
`;

function Collapse({ title, minus, plus, content, index }) {
	const [open, setOpen] = useState(index === 0);
	function handleCollapse() {
		setOpen(!open);
	}

	return (
		<StyledAccordion>
			<motion.div
				className="collapse"
				initial={{ height: 0 }}
				animate={{ height: open ? 'auto' : 0 }}
				transition={{ duration: 0.5 }}>
				<div className="header_collapse">
					<h4>{title}</h4>
					<div className="collapse_buttons">
						{open ? (
							<div onClick={handleCollapse}>
								<img className="collapse_buttons" src={minus} alt="minus" />
							</div>
						) : (
							<div className="close" onClick={handleCollapse}>
								<img className="collapse_buttons" src={plus} alt="plus" />
							</div>
						)}
					</div>
				</div>
				<AnimatePresence>
					{open ? (
						<motion.div
							className="content_collapse"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}>
							{content}
						</motion.div>
					) : null}
				</AnimatePresence>
			</motion.div>
		</StyledAccordion>
	);
}

export default Collapse;
