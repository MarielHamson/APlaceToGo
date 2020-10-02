import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewBathroomForm(props) {
	const firestore = useFirestore();

	function addBathroomToFirestore(event) {
		event.preventDefault();
		props.onNewBathroomCreation();

		return firestore.collection('bathrooms').add({
			name: event.target.name.value,
			street: event.target.street.value,
			city: event.target.city.value,
			state: event.target.state.value,
			place: event.target.place.value,
			accessible: event.target.accessible.value,
			unisex: event.target.unisex.value,
			directions: event.target.directions.value,
			comment: event.target.comment.value,
			downvote: 0,
			upvote: 0,
		});
	}

	return (
		<React.Fragment>
			<ReusableForm
				formSubmissionHandler={addBathroomToFirestore}
				buttonText="Add Bathroom"
			/>
		</React.Fragment>
	);
}

NewBathroomForm.propTypes = {
	onNewBathroomCreation: PropTypes.func,
};

export default NewBathroomForm;
