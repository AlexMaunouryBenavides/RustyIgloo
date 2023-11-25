import './Library.scss';
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Error from './Error';

function App() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0 });
	}, [location.pathname]);
	return (
		<Routes>
			<Route path="/" exact element={<Home />} />
			<Route path="/projets" exact element={<Projects />} />
			<Route path="/contact" exact element={<Contact />} />
			<Route path="*" exact element={<Error />} />
		</Routes>
	);
}

export default App;
