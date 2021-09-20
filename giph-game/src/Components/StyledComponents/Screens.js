import styled from 'styled-components';

export const Screen = styled.div`
	background-size: cover;
	color: white;

	height: 100vh;
	max-width: 100%;
	grid-row: 1;
	grid-column: 1 / span 2;
`;

export const Game = styled(Screen)`
	background-color: black;

	display: grid;
	grid-template: repeat(1fr) / repeat(1fr);
	grid-auto-flow: row;
`;
