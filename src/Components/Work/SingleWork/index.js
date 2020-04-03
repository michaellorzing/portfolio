import React from 'react';
import { Col } from 'reactstrap';
import styles from '../styles.module.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [
	-(y - window.innerHeight / 2) / 20,
	(x - window.innerWidth / 2) / 20,
	1.1,
];
const trans = (x, y, s) =>
	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const SingleWork = ({ url, img, job, desc, alt }) => {
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 5, tension: 350, friction: 40 },
	}));

	return (
		<div>
			<Col xs-2>
				<animated.div
					class='card'
					onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
					onMouseLeave={() => set({ xys: [0, 0, 1] })}
					style={{
						transform: props.xys.interpolate(trans),
						margin: '15px',
						background: '#56ECFF',
					}}
				>
					<div className={styles.imageWrap}>
						<a target='_blank' rel='noopener noreferrer' href={url}>
							<img src={img} alt={alt} className={styles.img} />
							<div className={styles.imgDescription}>
								<h1 className={styles.text}>{job}</h1>
								<p className={styles.text}>{desc}</p>
							</div>
						</a>
					</div>
				</animated.div>
			</Col>
		</div>
	);
};

export default SingleWork;
