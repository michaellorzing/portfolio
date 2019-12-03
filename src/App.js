import React, { Fragment } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import SideNav from './Components/SideNav'
import AboutMe from './Components/AboutMe'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Resume from './Components/Resume'


function App() {
  return (
    <Fragment>
      <div>
        <SideNav />
        <HashRouter>
          <Route path="/work" component={Work}>
            <Work />
          </Route>
          <Route path="/resume" component={Resume}>
            <Resume />
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route path="/portfolio" component={AboutMe}>
            <AboutMe />
          </Route>
        </HashRouter>
      </div>
    </Fragment>
  );
}

export default App;
