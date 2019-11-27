
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
        <animated.div style={fadeIn}>
          <Container className={styles.container}>
            <Row>
              <img src={placeholder} className={styles.img} />
            </Row>
            <Row>
              <Container className={styles.textContainer}>
                <p className={styles.text}>
                  Thanks for stopping by!
                </p>
                <p className={styles.text}>
                  After earning a degree in business from Marist College in Poughkeepsie, NY, I've worked in various arenas in the business world.
                  After feeling rather unfulfilled by my daily exploits, I decided to take a step back, develop some new skills, and decided coding would be a
                  good way to start a new journey. Little did I know, it would be something I would soon develop a passion for, devoting much of my professional and personal time to it.
                </p>
                <p className={styles.text}>
                  I graduated from Rutgers Coding Bootcamp in June of 2019 and immediately dove into my first major project at SkuNexus. There I learned how to pick up new, unfamiliar
                  technologies quickly, collaborate effectively in a group development environment, and navigate the often changing and complex world of a modern software engineer.
                </p>
                <p className={styles.text}>
                  In my free time, I'm an avid musician, homebrewer, gym goer, and music lover.
                </p>
                <p className={styles.text}>
                  I'm always open to new projects, from small scale to large and everywhere in between.
                </p>
                <p className={styles.text}>
                  Feel free to take a look around at my work portfolio, resume, and Github and LinkedIn pages.
                </p>
              </Container>
            </Row>
          </Container>
        </animated.div>
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
