import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { StyledBg } from './StyledBg';
import SideNav from './Components/SideNav';
import AboutMe from './Components/AboutMe';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Resume from './Components/Resume';

function App() {
	return (
		<StyledBg>
			<HashRouter>
				<SideNav />
				<Route path='/work' component={Work}></Route>
				<Route path='/resume' component={Resume}></Route>
				<Route path='/contact' component={Contact}></Route>
				<Route path='/portfolio' component={AboutMe}></Route>
			</HashRouter>
		</StyledBg>
	);
}

export default App;
