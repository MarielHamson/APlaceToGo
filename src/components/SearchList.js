import React from 'react';
import PropTypes from 'prop-types';
import Bathroom from './Bathroom';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router-dom';
import { useFirestore } from 'react-redux-firebase';

const useStyles = makeStyles({
	root: {
		minWidth: 200,
		// maxWidth: 400,
		background: 'lightgrey',
		marginLeft: '20rem',
		marginRight: '20rem',
		marginTop: '10rem',
		marginBottom: '10rem',
	},
	title: {
		fontSize: 20,
		fontFamily: 'Sacramento, cursive, monospace',
		textAlign: 'center',
	},
	pos: {
		marginBottom: 12,
	},
});

function SearchList(props) {
	const history = useHistory();
	const firestore = useFirestore();
	const { searchReturn } = props;
	const classes = useStyles();

	useFirestoreConnect([{ collection: 'bathrooms' }]);

	async function handleSearchQuery(event) {
		event.preventDefault();
		const propertiesToQuery = event.target.name.value;

		const snapshot = await firestore
			.collection('bathrooms')
			.where('name', '>=', propertiesToQuery)
			.where('name', '<=', propertiesToQuery + '\uf8ff')
			.get();

		const bathroom = snapshot.docs.map((doc) => {
			const documentId = doc.id;
			const myObj = { documentId, ...doc.data() };
			return myObj;
		});

		props.onSearchQuery(bathroom);
	}

	if (isLoaded(searchReturn) && searchReturn.length !== 0) {
		return (
			<React.Fragment>
				<h1
					style={{
						textAlign: 'center',
						marginTop: '3rem',
						color: 'white',
					}}
				>
					Search List
				</h1>
				<hr />
				<Card className={classes.root}>
					<CardContent>
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
					</CardContent>
				</Card>
			</React.Fragment>
		);
	} else if (isLoaded(searchReturn)) {
		return (
			<React.Fragment>
				<Card className={classes.root}>
					<CardContent>
						<div id="results">No Results!</div>
					</CardContent>
				</Card>
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
