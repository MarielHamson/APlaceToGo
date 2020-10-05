import React from 'react';
import PropTypes from 'prop-types';
import Bathroom from './Bathroom';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function SearchList(props) {
	const { searchReturn } = props;

	useFirestoreConnect([{ collection: 'bathrooms' }]);

	console.log(searchReturn[0].documentId);

	// onBathroomSelection(id);

	if (isLoaded(searchReturn)) {
		return (
			<React.Fragment>
				<h1 style={{ textAlign: 'center' }}>Search List</h1>
				<hr />
				{searchReturn.map((bathroom) => {
					return (
						<Bathroom
							whenBathroomClicked={props.onBathroomSelection}
							name={bathroom.name}
							street={bathroom.street}
							state={bathroom.state}
							accessible={bathroom.accessible}
							unisex={bathroom.unisex}
							directions={bathroom.directions}
							comment={bathroom.comment}
							upvote={bathroom.upvote}
							downvote={bathroom.downvote}
							id={bathroom.documentId}
							key={bathroom.documentId}
						/>
					);
				})}
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<h3>Loading...</h3>
			</React.Fragment>
		);
	}
}

SearchList.propTypes = {
	onBathroomSelection: PropTypes.func,
	searchReturn: PropTypes.object,
	id: PropTypes.string,
};

export default SearchList;
