
import React, { useState } from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import styles from './styles.module.css';
import placeholder from './images/me2.png';

export default function AboutMe() {

  const [aboutMeOpen, setAboutMeOpen] = useState(0)

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <div className={styles.aboutMe}>
      {aboutMeOpen ? (
        <Container className={styles.container}>
          <Row>
            <img src={placeholder} className={styles.img} />
          </Row>
          <Row>
            <Container className={styles.textContainer}>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </Container>
          </Row>
        </Container>
      ) : (
          <Row>
            <Col>
              <Container className={styles.mainContainer}>
                <animated.div style={fadeIn}>
                  <h1 className={styles.h1}>Hi, my name is Mike</h1>
                  <h2 className={styles.h2}>I'm a web developer</h2>
                  <Button
                    block
                    size="lg"
                    onClick={() => setAboutMeOpen(1)}
                    className={styles.button}
                  >
                    Learn More About Me
                  </Button>
                </animated.div>
              </Container>
            </Col>
          </Row>
        )
      }
    </div>
  )
}
