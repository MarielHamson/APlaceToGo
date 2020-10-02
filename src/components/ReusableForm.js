import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReusableForm(props) {
	const { bathroomName } = props;

	return (
		<React.Fragment>
			<Form onSubmit={props.formSubmissionHandler}>
				<Form.Group controlId="bathroomName">
					<Form.Control
						type="text"
						name="name"
						placeholder="Name"
						defaultValue={bathroomName}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						type="text"
						name="street"
						placeholder="Enter the street"
						defaultValue={props.street}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						type="text"
						name="city"
						placeholder="City"
						defaultValue={props.city}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						type="text"
						name="state"
						placeholder="State"
						defaultValue={props.state}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Check
						size="lg"
						type="checkbox"
						name="accessible"
						label="Accessible?"
						defaultValue={props.accessible}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Check
						size="lg"
						type="checkbox"
						name="unisex"
						label="Gender Neutral?"
						defaultValue={props.unisex}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						as="textarea"
						name="directions"
						placeholder="How do you access this bathroom?"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						as="textarea"
						name="comment"
						placeholder="Any additional comments?"
					/>
				</Form.Group>
				<Button className="mb-2" variant="info" type="submit">
					{props.buttonText}
				</Button>
			</Form>
		</React.Fragment>
	);
}

ReusableForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string,
	bathroomName: PropTypes.string,
};

export default ReusableForm;
