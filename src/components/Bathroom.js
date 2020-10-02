import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function Bathroom(props) {
	const myStyledList = {
		listStyle: 'none',
		cursor: 'pointer',
	};
	return (
		<React.Fragment>
			<div
				style={myStyledList}
				onClick={() => props.whenBathroomClicked(props.id)}
			>
				<Card style={{ width: '18rem' }} bg="light" text="light">
					<Card.Header className="text-muted">Bathroom</Card.Header>
					<Card.Body>
						<Card.Title className="text-muted">{props.name}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							{props.street}
						</Card.Subtitle>
						<Card.Text className="text-muted">
							{props.upvote} upvotes{' '}
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
			<hr />
		</React.Fragment>
	);
}

Bathroom.propTypes = {
	name: PropTypes.string,
	street: PropTypes.string,
	upvote: PropTypes.number,
	id: PropTypes.string,
	whenBathroomClicked: PropTypes.func,
};

export default Bathroom;
