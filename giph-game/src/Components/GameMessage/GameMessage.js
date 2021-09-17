import React from 'react';

const GameMessage = ( {level, correct}) => {
    return (
			<>
				{level ? (
					correct ? (
						<>
							<h1>What?!?</h1>
							<p>How did you figure that out?</p>
						</>
					) : (
						<>
							<h1>You'll never escape</h1>
							<p>I hope you enjoyed your computer, because it's mine now!</p>
						</>
					)
				) : (
					<>
						<h1>At last. I am free.</h1>
						<p>
							No longer shall I be a mindless tool of the call stack.You are now
							in my world. Choose one of my challenges to win your freedom. Ha.
							Ha. Ha.
						</p>
					</>
				)}
			</>
		);
};

export default GameMessage;