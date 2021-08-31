import PropTypes from 'prop-types';
import Bathroom from './Bathroom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import '../index.css';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	gridContainer: {
		display: 'block',
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
						Welcome Bathroom Seeker!
					</animated.h1>
				</div>
				<Container class="container">
					<Grid
						container
						padding={0}
						className={classes.gridContainer}
						spacing={3}
					>
						{bathrooms.map((bathroom) => {
							return (
								<Grid item med>
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
