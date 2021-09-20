import React from 'react';

const GameMessage = ({ level, correct }) => {
	return (
		<>
			{level ? (
				correct ? (
					<div className="message">
						<h3>What?!?</h3>
						<p>How did you figure that out?</p>
					</div>
				) : (
					<div className="message">
						<h3>You'll never escape</h3>
						<p>I hope you enjoyed your computer, because it's mine now!</p>
					</div>
				)
			) : (
				<div className="message">
					<h3>At last. I am free.</h3>
					<p>
						No longer shall I be a mindless tool of the call stack.You are now
						in my world. Choose one of my challenges to win your freedom. Ha.
						Ha. Ha.
					</p>
				</div>
			)}
		</>
	);
};

export default GameMessage;
