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
              <a target="_blank" href="http://www.skunexus.com">
                <img src={skunexus} />
                <div className={styles.imgDescription}>
                  <h1>SkuNexus</h1>
                  <p>A warehouse management system using React, Redux, and GraphQL</p>
                </div>
              </a>
            </div>
          </Col>
          <Col md-4>
            <div className={styles.imageWrap}>
              <a target="_blank" href="https://peaceful-brushlands-41083.herokuapp.com/">
                <img src={spacex} />
                <div className={styles.imgDescription}>
                  <h1>SpaceX Launches</h1>
                  <p>Tracks SpaceX launches using React and GraphQL</p>
                </div>
              </a>
            </div>
          </Col>
          <Col md-4>
            <div className={styles.imageWrap}>
              <a target="_blank" href="https://koutouzosm.github.io/Project_1/index.html">
                <img src={moviemate} />
                <div className={styles.imgDescription}>
                  <h1>Movie-Flow</h1>
                  <p>Movie suggestions and information using JQuery</p>
                </div>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.imageWrap}>
              <a target="_blank" href="https://notetaker-express.herokuapp.com/">
                <img src={notetaker} />
                <div className={styles.imgDescription}>
                  <h1>Notetaker</h1>
                  <p>Notetaking app using JQuery, MYSQL, Node, and Express</p>
                </div>
              </a>
            </div>
          </Col>
          <Col>
            <div className={styles.imageWrap}>
              <a target="_blank" href="https://movie-mate-fullstack.herokuapp.com/">
                <img src={moviematereact} />
                <div className={styles.imgDescription}>
                  <h1>Movie-Mate</h1>
                  <p>App to share movies with friends using React</p>
                </div>
              </a>
            </div>
          </Col>
          <Col>
            <div className={styles.imageWrap}>
              <a target="_blank" href="https://michaellorzing.github.io/Crystal-Game/index.html">
                <img src={crystal} />
                <div className={styles.imgDescription}>
                  <h1>Crystal Game</h1>
                  <p>Guess the computer's chosen number using JQuery</p>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </animated.div>
    </Container>
  )
}
