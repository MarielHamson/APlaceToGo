import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function EditBathroomForm(props) {
	const firestore = useFirestore();
	const { bathroom, name } = props;

	function handleEditBathroomFormSubmission(event) {
		event.preventDefault();
		props.onEditBathroom();
		const propertiesToUpdate = {
			name: event.target.bathroomName.value,
			street: event.target.street.value,
			accessible: event.target.accessible.value,
			unisex: event.target.unisex.value,
			directions: event.target.directions.value,
			comments: event.target.comments.value,
		};
		return firestore.update(
			{ collection: 'bathrooms', doc: bathroom.id },
			propertiesToUpdate
		);
	}

	return (
		<React.Fragment>
			<ReusableForm
				formSubmissionHandler={handleEditBathroomFormSubmission}
				buttonText="Update Bathroom"
				bathroomName={name}
			/>
		</React.Fragment>
	);
}

EditBathroomForm.propTypes = {
	onEditBathroom: PropTypes.func,
	bathroom: PropTypes.object,
};

export default EditBathroomForm;
