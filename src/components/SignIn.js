import React from 'react';
import firebase from 'firebase/app';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom';
import Header from './Header';

function SignIn() {
	function doSignUp(event) {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(function () {
				console.log('Successfully signed up!');
			})
			.catch(function (error) {
				console.log(error.message);
			});
	}

	function doSignIn(event) {
		event.preventDefault();
		const email = event.target.signinEmail.value;
		const password = event.target.signinPassword.value;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(function () {
				console.log('Successfully signed in!');
				history.push('/');
			})
			.catch(function (error) {
				console.log(error.message);
			});
	}

	function doSignOut() {
		firebase
			.auth()
			.signOut()
			.then(function () {
				console.log('Successfully signed out!');
				history.push('/');
			})
			.catch(function (error) {
				console.log(error.message);
			});
	}

	let history = useHistory();

	return (
		<React.Fragment>
			<Header />
			<Container className="container">
				<h1>Sign Up</h1>
				<Form onSubmit={doSignUp}>
					<Form.Group>
						<Form.Control type="text" name="email" placeholder="Email" />
					</Form.Group>
					<Form.Group>
						<Form.Control
							type="password"
							name="password"
							placeholder="Password"
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Sign up
					</Button>
					<hr />
					<h1>Sign Out</h1>
					<Button variant="warning" onClick={doSignOut}>
						Sign out
					</Button>
				</Form>
				<hr />
				<h1>Sign In</h1>
				<Form onSubmit={doSignIn}>
					<Form.Group>
						<Form.Control type="text" name="signinEmail" placeholder="Email" />
					</Form.Group>
					<Form.Group>
						<Form.Control
							type="password"
							name="signinPassword"
							placeholder="Password"
						/>
					</Form.Group>
					<Button type="submit" variant="info">
						Sign in
					</Button>
				</Form>
			</Container>
		</React.Fragment>
	);
}

export default SignIn;
