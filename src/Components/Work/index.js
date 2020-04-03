import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import styles from './styles.module.css';
import SingleWork from './SingleWork';
import skunexus from './images/skunexus.png';
import spacex from './images/spacex.png';
import moviemate from './images/moveimate.png';
import hotel from './images/hotel.png';
import tetris from './images/tetris.png';
import devcon from './images/devcon.png';

export default function Work() {
	const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

	return (
		<animated.div style={fadeIn}>
			<Container>
				<Row>
					<SingleWork
						url='http://www.skunexus.com'
						img={skunexus}
						job='SkuNexus'
						desc='A warehouse management system using React, Redux, and GraphQL'
						alt={skunexus}
					/>
					<SingleWork
						url='https://powerful-journey-58912.herokuapp.com/'
						img={devcon}
						job='Dev-Connector'
						desc='Full stack JS application using React and Redux with Express and MongoDB'
						alt={devcon}
					/>
					<SingleWork
						url='https://compassionate-mestorf-8e4ecd.netlify.com/'
						img={hotel}
						job='Luxurious Rooms'
						desc='Mock Hotel application using React with Context API'
						alt={hotel}
					/>
					<SingleWork
						url='https://compassionate-mestorf-8e4ecd.netlify.com/'
						img={tetris}
						job='Reactris'
						desc='Tetris with React and custom hooks'
						alt={tetris}
					/>
					<SingleWork
						url='https://peaceful-brushlands-41083.herokuapp.com/'
						img={spacex}
						job='SpaceX Launches'
						desc='Tracks SpaceX launches using React and GraphQL'
						alt={spacex}
					/>
					<SingleWork
						url='https://koutouzosm.github.io/Project_1/index.html'
						img={moviemate}
						job='Move-Flow'
						desc='Movie suggestions and information using JQuery'
						alt={moviemate}
					/>
				</Row>
			</Container>
		</animated.div>
	);
}
