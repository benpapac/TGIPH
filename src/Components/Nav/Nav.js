import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../../GameContext';

const Nav = () => {
	const game = useContext(GameContext);
	return (
		<nav>
			{!game.submitted || game.gameOver ? (
				<>
					<Link to='/'>
						<h1>Giph Heaven</h1>
					</Link>
					<Link to='/form'>
						<h1>Sign Up</h1>
					</Link>
				</>
			) : (
				<>
					<Link to='/game/common'>
						<h1>Common</h1>
					</Link>
					<Link to='/game/match'>
						<h1>Match</h1>
					</Link>
				</>
			)}
		</nav>
	);
};

export default Nav;
