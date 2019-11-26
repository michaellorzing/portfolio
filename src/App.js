import React, { Fragment } from 'react';
import { Container, Col, Row } from 'reactstrap';
import SideNav from './Components/SideNav'
import Footer from './Components/Footer'
import styles from './styles.module.css'

function App() {
  return (
    <Fragment>
      <div>
        <SideNav />
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </Fragment>
  );
}

export default App;
