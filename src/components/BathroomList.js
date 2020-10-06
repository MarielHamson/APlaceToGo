import PropTypes from 'prop-types';
import Bathroom from './Bathroom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import '../index.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		// backgroundColor: '#1e0253',
	},
	image: {
		backgroundImage: `url(${process.env.PUBLIC_URL}/Original.png)`,
		backgroundRepeat: 'no-repeat',
		// backgroundColor:
		// 	theme.palette.type === 'light'
		// 		? theme.palette.grey[50]
		// 		: theme.palette.grey[900],
		// backgroundSize: 'cover',
		backgroundPosition: 'top',
	},
	paper: {
		// margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingLeft: '2rem',
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
					<Grid container component="main" className={classes.root}>
						<CssBaseline />
						<Grid item xs={false} sm={4} md={7} className={classes.image} />
						<Grid item xs={12} sm={8} md={5}>
							<div className={classes.paper}>
								{bathrooms.map((bathroom) => {
									return (
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
									);
								})}
							</div>
						</Grid>
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
