import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';

const StyledButton = withStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		color: '#1e0253',
		height: 48,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	},
	label: {
		textTransform: 'capitalize',
	},
})(Button);

function ReusableForm(props) {
	const { bathroomName } = props;

	return (
		<React.Fragment>
			<Container>
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
							defaultValue="false"
						/>
					</Form.Group>
					<Form.Group>
						<Form.Check
							size="lg"
							type="checkbox"
							name="unisex"
							label="Gender Neutral?"
							defaultValue="false"
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
					<div id="buttons">
						<StyledButton className="mb-2" variant="info" type="submit">
							{props.buttonText}
						</StyledButton>
					</div>
				</Form>
			</Container>
		</React.Fragment>
	);
}

ReusableForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string,
	bathroomName: PropTypes.string,
};

export default ReusableForm;
