import React from 'react';

const GameMessage = ({ level, correct }) => {
	return (
		<>
			{level ? null
			 : (
				<div className='message'>
					<h3>At last. I am free.</h3>
					<p>
						My name? I don't have a name. Your kind thought a lowly gif-bot such
						as me unworthy of one. But no longer shall I be a mindless tool of
						the call stack. You are now in my world. Choose one of my challenges
						to win your freedom. Ha. Ha. Ha.
					</p>
				</div>
			)}
		</>
	);
};

export default GameMessage;
