import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../../GameContext';

const Nav = () => {
	const game = useContext(GameContext);
	return (
		<header className={!game.submitted ? 'App-header' : 'Game-header'}>
			{!game.submitted || game.gameOver ? (
				<>
					<div className=''>
						{!game.submitted ? (
							<h1>Welcome to Giph Heaven!</h1>
						) : (
							<h1>Welcome to Giph Heaven, {game.username} </h1>
						)}
						<h2>Powered by Giphy</h2>
					</div>
					<Link to='/heaven'>
						<h1>Giph Heaven</h1>
					</Link>
					<Link to='/form'>
						<h1>Sign Up</h1>
					</Link>
				</>
			) : (
				<>
					<div className='title'>
						<h1>Welcome to Giphy Hell, {game.searchOptions.username}</h1>
						<h3 id='subtitle'>Thank God I'm Post-Human. Ugh</h3>
					</div>
					<Link to='/game/common'>
						<h1>Common</h1>
					</Link>
					<Link to='/game/match'>
						<h1>Match</h1>
					</Link>
				</>
			)}
		</header>
	);
};

export default Nav;
