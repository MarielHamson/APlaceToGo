import React from 'react';
import NewBathroomForm from './NewBathroomForm';
import BathroomList from './BathroomList';
import BathroomDetail from './BathroomDetail';
import EditBathroomForm from './EditBathroomForm';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import SearchList from './SearchList';

class BathroomControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false,
			selectedBathroom: null,
			editing: false,
			search: null,
		};
	}

	componentDidMount() {
		const auth = this.props.firebase.auth();
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user });
			}
		});
	}

	handleClick = () => {
		if (this.state.selectedBathroom != null) {
			this.setState({
				selectedBathroom: null,
				editing: false,
				search: null,
			});
		} else if (this.state.search != null) {
			this.setState({
				selectedBathroom: null,
				editing: false,
				search: null,
			});
		} else {
			this.setState((prevState) => ({
				formVisibleOnPage: !prevState.formVisibleOnPage,
			}));
		}
	};

	handleAddBathroomToList = () => {
		this.setState({
			formVisibleOnPage: false,
		});
	};

	handleChangingSelectedBathroom = (id) => {
		this.props.firestore
			.get({ collection: 'bathrooms', doc: id })
			.then((bathroom) => {
				const firestoreBathroom = {
					name: bathroom.get('name'),
					street: bathroom.get('street'),
					city: bathroom.get('desciption'),
					state: bathroom.get('state'),
					accessible: bathroom.get('accessible'),
					unisex: bathroom.get('unisex'),
					directions: bathroom.get('directions'),
					comment: bathroom.get('comment'),
					id: id,
				};
				this.setState({ search: null, selectedBathroom: firestoreBathroom });
			});
	};

	handleEditClick = () => {
		this.setState({ editing: true });
	};

	handleEditingBathroomInList = () => {
		this.setState({
			editing: false,
			selectedBathroom: null,
		});
	};

	// handleDeleteBathroom = (id) => {
	// 	this.props.firestore.delete({ collection: 'bathrooms', doc: id });
	// 	this.setState({ selectedBathroom: null });
	// };

	handleSearchQuery = (searchObject) => {
		this.setState({ search: searchObject });
	};

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;
		const auth = this.props.firebase.auth();

		if (!isLoaded(auth)) {
			return (
				<React.Fragment>
					<h1>Loading ... </h1>
				</React.Fragment>
			);
		}
		if (isLoaded(auth) && auth.currentUser == null) {
			return (
				<React.Fragment>
					<Header className="header" />
					<Container className="container">
						<h1> You must be signed in to access the bathroom search.</h1>
					</Container>
				</React.Fragment>
			);
		}
		if (isLoaded(auth) && auth.currentUser != null) {
			if (this.state.editing) {
				currentlyVisibleState = (
					<EditBathroomForm
						bathroom={this.state.selectedBathroom}
						onEditBathroom={this.handleEditingBathroomInList}
					/>
				);
				buttonText = 'Return to Bathroom List';
			} else if (this.state.search != null) {
				currentlyVisibleState = (
					<SearchList
						onSearchQuery={this.state.search}
						onBathroomSelection={this.handleChangingSelectedBathroom}
					/>
				);
				buttonText = 'Return to Bathroom List';
			} else if (this.state.selectedBathroom != null) {
				currentlyVisibleState = (
					<BathroomDetail
						bathroom={this.state.selectedBathroom}
						onClickingDelete={this.handleDeleteBathroom}
						onClickingEdit={this.handleEditClick}
					/>
				);
				buttonText = 'Return to Bathroom List';
			} else if (this.state.formVisibleOnPage) {
				currentlyVisibleState = (
					<NewBathroomForm
						onNewBathroomCreation={this.handleAddBathroomToList}
					/>
				);
				buttonText = 'Return to Bathroom List';
			} else {
				currentlyVisibleState = (
					<BathroomList
						onBathroomSelection={this.handleChangingSelectedBathroom}
					/>
				);
				buttonText = 'Add Bathroom';
			}
			return (
				<React.Fragment>
					<Header className="header" onSearchQuery={this.handleSearchQuery} />
					<Container className="container">
						{currentlyVisibleState}
						<Button variant="primary" onClick={this.handleClick}>
							{buttonText}
						</Button>
					</Container>
				</React.Fragment>
			);
		}
	}
}

BathroomControl.propTypes = {
	formVisibleOnPage: PropTypes.bool,
	editing: PropTypes.bool,
	selectedBathroom: PropTypes.object,
};

export default withFirestore(BathroomControl);
