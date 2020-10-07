import PropTypes from 'prop-types';
import Bathroom from './Bathroom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import '../index.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
	root: {
		boxShadow: 'inset (0, 0, 50px, #fff)',
		boxShadow: 'inset (20px, 0, 80px, #f0f)',
		boxShadow: 'inset (-20px, 0, 80px, #0ff)',
		boxShadow: 'inset (20px, 0, 300px, #f0f)',
		boxShadow: 'inset (-20px, 0, 300px, #0ff)',
		boxShadow: '0 0 50px #fff',
		boxShadow: '-10px 0 80px #f0f',
		boxShadow: '10px 0 80px #0ff',
	},
}));

function BathroomList(props) {
	const classes = useStyles();

	const multiAnimation = useSpring({
		config: config.wobbly,
		from: { opacity: 0, color: 'red' },
		to: [
			{ opacity: 1, color: '#000000' },
			{ opacity: 1, color: '#1f0253' },
			{ opacity: 0.5, color: '#003977' },
			{ opacity: 0.8, color: 'white' },
		],
	});

	useFirestoreConnect([{ collection: 'bathrooms' }]);

	const bathrooms = useSelector((state) => state.firestore.ordered.bathrooms);

	if (isLoaded(bathrooms)) {
		return (
			<React.Fragment>
				<div id="headline">
					<animated.h1 style={multiAnimation}>
						Welcome, Bathroom Seeker!
					</animated.h1>
				</div>
				<Container class="container">
					<Grid container className={classes.root} spacing={3}>
						{bathrooms.map((bathroom) => {
							return (
								<Grid item lg>
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
								</Grid>
							);
						})}
					</Grid>
				</Container>
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
