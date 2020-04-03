import React from 'react';
import styles from './styles.module.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

export default function Resume() {
	const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

	return (
		<Container className={styles.container}>
			<animated.div style={fadeIn}>
				<Row>
					<Col>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://docs.google.com/document/d/e/2PACX-1vSM2YedbyaLNP8yNYVMjL4spV5yC_ZW43CX3DCwP0LYt-qk6cCB0vGdEDxqkBC7OAl-KQDOTXdHEup7lp4aAEk/pub?embedded=true'
						>
							<Button className={styles.button}>
								Click for printable version
							</Button>
						</a>
					</Col>
				</Row>
				<iframe
					title='resume'
					className={styles.resume}
					height='1000px'
					width='1000px'
					src='https://docs.google.com/document/d/e/2PACX-1vSM2YedbyaLNP8yNYVMjL4spV5yC_ZW43CX3DCwP0LYt-qk6cCB0vGdEDxqkBC7OAl-KQDOTXdHEup7lp4aAEk/pub?embedded=true'
				></iframe>
			</animated.div>
		</Container>
	);
}
