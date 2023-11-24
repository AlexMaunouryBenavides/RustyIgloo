import React from 'react';
import styled from 'styled-components';

import HomeHero from './Components/Sections/HomeHero';
import HomeAbout from './Components/Sections/HomeAbout';
import HomeProject from './Components/Sections/HomeProject';
import HomeServices from './Components/Sections/HomeServices';
import HomeCollapses from './Components/Sections/HomeCollapses';

const StyledHome = styled.div`
	position: relative;
`;

function Home() {
	return (
		<StyledHome>
			<HomeHero />
			<HomeAbout />
			<HomeProject />
			<HomeServices />
			<HomeCollapses />
		</StyledHome>
	);
}

export default Home;
