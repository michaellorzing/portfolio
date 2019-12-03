import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useSpring, animated } from 'react-spring';
import styles from './styles.module.css'
import skunexus from './images/skunexus.png'
import spacex from './images/spacex.png'
import moviemate from './images/moveimate.png'
import notetaker from './images/notetaker.png'
import moviematereact from './images/moviematereact.png'
import crystal from './images/crystal.png'

export default function Work() {

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <Container fluid className={styles.container}>
      <animated.div style={fadeIn}>
        <Row>
          <Col md-4>
            <div className={styles.imageWrap}>
              <a target="_blank" rel="noopener noreferrer" href="http://www.skunexus.com">
                <img src={skunexus} />
                <div className={styles.imgDescription}>
                  <h1 className={styles.text}>SkuNexus</h1>
                  <p className={styles.text}>A warehouse management system using React, Redux, and GraphQL</p>
                </div>
              </a>
            </div>
          </Col>
          <Col md-4>
            <div className={styles.imageWrap}>
              <a target="_blank" rel="noopener noreferrer" href="https://peaceful-brushlands-41083.herokuapp.com/">
                <img src={spacex} />
                <div className={styles.imgDescription}>
                  <h1 className={styles.text}>SpaceX Launches</h1>
                  <p className={styles.text}>Tracks SpaceX launches using React and GraphQL</p>
                </div>
              </a>
            </div>
          </Col>
          <Col md-4>
            <div className={styles.imageWrap}>
              <a target="_blank" rel="noopener noreferrer" href="https://koutouzosm.github.io/Project_1/index.html">
                <img src={moviemate} />
                <div className={styles.imgDescription}>
                  <h1 className={styles.text}>Movie-Flow</h1>
                  <p className={styles.text}>Movie suggestions and information using JQuery</p>
                </div>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.imageWrap}>
              <a target="_blank" rel="noopener noreferrer" href="https://notetaker-express.herokuapp.com/">
                <img src={notetaker} />
                <div className={styles.imgDescription}>
                  <h1 className={styles.text}>Notetaker</h1>
                  <p className={styles.text}>Notetaking app using JQuery, MYSQL, Node, and Express</p>
                </div>
              </a>
            </div>
          </Col>
          <Col>
            <div className={styles.imageWrap}>
              <a target="_blank" rel="noopener noreferrer" href="https://movie-mate-fullstack.herokuapp.com/">
                <img src={moviematereact} />
                <div className={styles.imgDescription}>
                  <h1 className={styles.text}>Movie-Mate</h1>
                  <p className={styles.text}>App to share movies with friends using React</p>
                </div>
              </a>
            </div>
          </Col>
          <Col>
            <div className={styles.imageWrap}>
              <a target="_blank" rel="noopener noreferrer" href="https://michaellorzing.github.io/Crystal-Game/index.html">
                <img src={crystal} />
                <div className={styles.imgDescription}>
                  <h1 className={styles.text}>Crystal Game</h1>
                  <p className={styles.text}>Guess the computer's chosen number using JQuery</p>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </animated.div>
    </Container>
  )
}
