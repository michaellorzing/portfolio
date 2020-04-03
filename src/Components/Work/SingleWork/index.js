import React from 'react';
import { Col } from 'reactstrap';
import styles from '../styles.module.css';

const SingleWork = ({ url, img, job, desc, alt }) => {
	return (
		<div>
			<Col xs-2>
				<div className={styles.imageWrap}>
					<a target='_blank' rel='noopener noreferrer' href={url}>
						<img src={img} alt={alt} />
						<div className={styles.imgDescription}>
							<h1 className={styles.text}>{job}</h1>
							<p className={styles.text}>{desc}</p>
						</div>
					</a>
				</div>
			</Col>
		</div>
	);
};

export default SingleWork;
