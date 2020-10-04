import PropTypes from 'prop-types';
import Bathroom from './Bathroom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import '../index.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Bathroom.js';

const items = ['Find A Place To Go'];
const config = { mass: 5, tension: 2000, friction: 200 };
const useStyles = makeStyles({
	gridContainer: {
		paddingLeft: '40px',
		paddingRight: '40px',
	},
});

function BathroomList(props) {
	const classes = useStyles();
	const [toggle, set] = useState(true);
	const trail = useTrail(items.length, {
		config,
		opacity: toggle ? 1 : 0,
		x: toggle ? 0 : 20,
		height: toggle ? 80 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});

	useFirestoreConnect([{ collection: 'bathrooms' }]);

	const bathrooms = useSelector((state) => state.firestore.ordered.bathrooms);

	console.log(bathrooms);
	if (isLoaded(bathrooms)) {
		return (
			<React.Fragment>
				<div className="trails-main" onClick={() => set((state) => !state)}>
					<div>
						{trail.map(({ x, height, ...rest }, index) => (
							<animated.div
								key={items[index]}
								className="trails-text"
								style={{
									...rest,
									transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
								}}
							>
								<animated.div style={{ height }}>{items[index]}</animated.div>
							</animated.div>
						))}
					</div>
				</div>
				{bathrooms.map((bathroom) => {
					return (
						<Grid
							container
							spacing={4}
							className={classes.gridContainer}
							justify="center"
						>
							<Grid item xs={12} sm={6} md={4}>
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
						</Grid>
					);
				})}
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

// render(<BathroomList />, document.getElementById('root'));

export default BathroomList;
