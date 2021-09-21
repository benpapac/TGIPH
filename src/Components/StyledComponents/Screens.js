import styled from 'styled-components';

export const Screen = styled.div`
	color: white;

	height: 400px;
	max-width: 800px;
	padding: 0.5em;
	grid-row: 1;
	grid-column: 2 / span 3;

	/* grid-template: repeat (150px) / repeat(150px); */
	/* grid-auto-flow: row; */
`;

export const Game = styled(Screen)`
	background-color: black;

	/* display: flex;
	flex-direction: row; */
	height: 600px;
	width: 800px;


	display: grid;
	grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr 1fr;
`;
