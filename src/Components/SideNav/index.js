import React from 'react'
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useTransition, animated } from 'react-spring'
import AboutMe from '../AboutMe'
import Work from '../Work'
import Contact from '../Contact'
import Resume from '../Resume'
import styles from './styles.module.css'
import logo from './images/logo.png'
import linkedin from './images/resizedlinked.png'

export default function SideNav(props) {

  return (
    <Router>
      <Nav className={styles.nav}>
        <NavItem>
          <NavLink>
            <Link to='/' >
              <img src={logo} />
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to='/work' className={styles.text}>Work</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to='/resume' className={styles.text}>Resume</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to='/contact' className={styles.text}>Contact</Link>
          </NavLink>
        </NavItem>
      </Nav>
      <Switch>
        <Route path="/work" component={Work}>
          <Work />
        </Route>
        <Route path="/resume" component={Resume}>
          <Resume />
        </Route>
        <Route path="/contact" component={Contact}>
          <Contact />
        </Route>
        <Route exact path="/" component={AboutMe}>
          <AboutMe />
        </Route>
      </Switch>
    </Router>
  )
}
