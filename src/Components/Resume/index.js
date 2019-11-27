import React from 'react';
import styles from './styles.module.css';
import { Row, Col, Button } from 'reactstrap';
import { useSpring, animated } from 'react-spring';


export default function Resume() {

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={fadeIn}>
      <Row>
        <Col>
          <a target="_blank" href='https://docs.google.com/document/d/e/2PACX-1vSBiH6IRjmtk-e5qxS-jD1KG_Y4DACUnSVLSteOUn38Dg9Dj6RVU70pmNGHDXoI8LihCjR2smtiSjof/pub'>
            <Button className={styles.button}>
              Click for printable version
            </Button>
          </a>
        </Col>
      </Row>
      <iframe
        className={styles.resume}
        height="1000px"
        width="1000px"
        src="https://docs.google.com/document/d/e/2PACX-1vSBiH6IRjmtk-e5qxS-jD1KG_Y4DACUnSVLSteOUn38Dg9Dj6RVU70pmNGHDXoI8LihCjR2smtiSjof/pub">
      </iframe>
    </animated.div>
  )
}
