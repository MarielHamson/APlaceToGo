import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function BathroomDetail(props) {
	const { bathroom } = props;

	return (
		<React.Fragment>
			<h1>Bathroom Details</h1>
			<h2>
				{bathroom.name} - {bathroom.street}, {bathroom.state}
			</h2>
			<p>Accessible: {bathroom.accessible}</p>
			{console.log(bathroom.accessible)}
			<p>Gender Neutral: {bathroom.unisex}</p>
			{console.log(bathroom.unisex)}
			<p>Directions: {bathroom.directions} </p>
			<p>Comments: {bathroom.comment}</p>
			<p>Upvotes: {bathroom.upvote}</p>
			{console.log(bathroom.upvote)}
			<p>Downvotes: {bathroom.downvote}</p>
			{console.log(bathroom.downvote)}

			<Button className="mr-2" variant="info" onClick={props.onClickingEdit}>
				Edit Bathroom Details
			</Button>

			<hr />
		</React.Fragment>
	);
}

BathroomDetail.propTypes = {
	bathroom: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func,
};

export default BathroomDetail;
