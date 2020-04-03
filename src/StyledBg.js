import styled from 'styled-components';
import bgImage from './images/background3.jpeg';

export const StyledBg = styled.div`
	width: 100vw;
	height: 100vh;
	background: url(${bgImage}) #000;
	background-size: cover;
	overflow-x: hidden;
	overflow-y: auto;
`;
