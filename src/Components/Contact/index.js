import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useSpring, animated } from 'react-spring';
import styles from './styles.module.css'


export default function Contact() {

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <Container className={styles.wrapper}>
      <Row>
        <Col>
          <a target="_blank" href='https://github.com/michaellorzing'>
            <animated.div style={fadeIn}>
              <FontAwesomeIcon className={styles.github} icon={faGithubSquare} />
            </animated.div>
          </a>
        </Col>
        <Col>
          <a target="_blank" href='https://www.linkedin.com/in/michael-lorzing-4aa2b4a9/'>
            <animated.div style={fadeIn}>
              <FontAwesomeIcon className={styles.linkedin} icon={faLinkedinIn} />
            </animated.div>
          </a>
        </Col>
      </Row>
    </Container>
  )
}
