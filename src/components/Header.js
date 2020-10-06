import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useFirestore } from 'react-redux-firebase';
import { withFirestore } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import firebase from '../firebase';

const StyledButton = withStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		// color: '#1e0253',
		height: 48,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	},
	label: {
		textTransform: 'capitalize',
	},
})(Button);

function Header(props) {
	const history = useHistory();
	const firestore = useFirestore();

	async function handleSearchQuery(event) {
		event.preventDefault();
		const propertiesToQuery = event.target.name.value;

		const snapshot = await firestore
			.collection('bathrooms')
			.where('name', '==', propertiesToQuery)
			.get();
		if (snapshot.empty) {
			console.log('no matches');
			return;
		}

		const bathroom = snapshot.docs.map((doc) => {
			const documentId = doc.id;
			const myObj = { documentId, ...doc.data() };
			return myObj;
		});

		props.onSearchQuery(bathroom);
	}

	function doSignOut() {
		firebase
			.auth()
			.signOut()
			.then(function () {
				console.log('Successfully signed out!');
				history.push('/');
				window.location.reload();
			})
			.catch(function (error) {
				console.log(error.message);
			});
	}

	return (
		<React.Fragment>
			<Navbar
				style={{
					backgroundColor: '#1e0253',
					color: '#c637a0',
				}}
				sticky="top"
				expand="lg"
			>
				<Navbar.Brand
					style={{
						color: 'lightcoral',
					}}
					as={Link}
					to="/"
				>
					A Place to Go
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link
							style={{
								color: 'lightcoral',
							}}
							as={Link}
							to="/signin"
						>
							Sign-in
						</Nav.Link>
					</Nav>
					<Form inline onSubmit={handleSearchQuery}>
						<Form.Control
							type="text"
							name="name"
							placeholder="Search bathrooms"
							className="mr-sm-2"
						/>

						<StyledButton type="submit">Search</StyledButton>
					</Form>
					<Form inline>
						<StyledButton onClick={doSignOut} className="ml-2">
							Sign Out
						</StyledButton>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</React.Fragment>
	);
}

Header.propTypes = {
	onSearchQuery: PropTypes.func,
	doSignOut: PropTypes.func,
};

export default withFirestore(Header);
