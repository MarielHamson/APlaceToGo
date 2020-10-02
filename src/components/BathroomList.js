import React from 'react';
import PropTypes from 'prop-types';
import Bathroom from './Bathroom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function BathroomList(props) {
	// const { onSearchQuery } = props;

	// if (onSearchQuery == null){
	// 	onSearchQuery.forEach(doc => {
	// 		console.log(doc.data());
	// });
	// }

	// if (onSearchQuery != null){
	// 	let output = onSearchQuery.forEach(doc => {console.log(doc.data())});
	// 	// (doc.id, '=>', doc.data());

	// }

	useFirestoreConnect([{ collection: 'bathrooms' }]);

	const bathrooms = useSelector((state) => state.firestore.ordered.bathrooms);

	console.log(bathrooms);
	if (isLoaded(bathrooms)) {
		return (
			<React.Fragment>
				<h1 style={{ textAlign: 'center' }}>Bathroom Finder</h1>
				<hr />
				{bathrooms.map((bathroom) => {
					return (
						<Bathroom
							whenBathroomClicked={props.onBathroomSelection}
							name={bathroom.name}
							street={bathroom.street}
							city={bathroom.city}
							state={bathroom.state}
							accessible={bathroom.accessible}
							unisex={bathroom.unisex}
							directions={bathroom.directions}
							comment={bathroom.comment}
							upvote={bathroom.upvote}
							downvote={bathroom.downvote}
							id={bathroom.id}
							key={bathroom.id}
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

BathroomList.propTypes = {
	onBathroomSelection: PropTypes.func,
	onSearchQuery: PropTypes.object,
};

export default BathroomList;
