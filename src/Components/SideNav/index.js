import React, { useState } from 'react'
import { Navbar, Nav, NavItem, NavLink, Collapse, NavbarBrand, NavbarToggler } from 'reactstrap';
import {
  HashRouter,
  Route,
  Router,
  Link
} from "react-router-dom";
import AboutMe from '../AboutMe'
import Work from '../Work'
import Contact from '../Contact'
import Resume from '../Resume'
import styles from './styles.module.css'
import logo from './images/logo.png'

export default function SideNav(props) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <HashRouter>
      <Navbar expand="lg" className={styles.nav} color="dark" dark>
        <NavbarBrand>
          <Link to='/portfolio'>
            <img src={logo} />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className={styles.toggler} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem >
              <NavLink className={styles.link}>
                <Link to='/work' className={styles.text}>Work</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={styles.link}>
                <Link to='/resume' className={styles.text}>Resume</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={styles.link}>
                <Link to='/contact' className={styles.text}>Contact</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </HashRouter>
  )
}
