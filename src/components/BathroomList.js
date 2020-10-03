import PropTypes from 'prop-types';
import Bathroom from './Bathroom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { useTrail, animated } from 'react-spring';
import '../index.css';

const items = ['Welcome To Bathroom Finder'];
const config = { mass: 5, tension: 2000, friction: 200 };

function BathroomList(props) {
	const [toggle, set] = useState(true);
	const trail = useTrail(items.length, {
		config,
		opacity: toggle ? 1 : 0,
		x: toggle ? 0 : 20,
		height: toggle ? 80 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});
	// const { onSearchQuery } = props;

	// if (onSearchQuery == null){
	// 	onSearchQuery.forEach(doc => {
	// 		console.log(doc.data());
	// });
	// }

	// if (onSearchQuery != null){
	// 	let output = onSearchQuery.forEach(doc => {console.log(doc.data())});
	// 	// (doc.id, '=>', doc.data());

	// }

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
				{/* <h1 style={{ textAlign: 'center' }}>Bathroom Finder</h1> */}
				{/* <hr /> */}
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
