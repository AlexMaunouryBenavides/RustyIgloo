import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './Library.scss';
import { ReactLenis } from '@studio-freight/react-lenis';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer.jsx';
import AnimatedCursor from 'react-animated-cursor';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ReactLenis root>
		<React.StrictMode>
			<BrowserRouter>
				<AnimatedCursor
					innerSize={10}
					outerSize={50}
					innerScale={1}
					outerScale={2}
					outerAlpha={0}
					hasBlendMode={true}
					innerStyle={{
						backgroundColor: '#231f20',
					}}
					outerStyle={{
						border: '2px solid  #b4a2f8',
					}}
				/>
				<Header />
				<App />
			</BrowserRouter>
			<Footer />
		</React.StrictMode>
	</ReactLenis>
);
