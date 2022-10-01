import React, { useEffect, useState, Suspense } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import PlayerSelect from './PlayerSelect';

function ComparePlayers(props) {
	let history = useHistory();
	const [playerA, setPlayerA] = useState('playerA', null);
	const [playerB, setPlayerB] = useState('playerB', null);

	useEffect(() => {
	}, []);

	const onChange = async (tag, item) => {
		const response = await axios.get(`players/${item.value}`);
		console.log(response);
		if (tag == 'A')
			setPlayerA(response.data);
		else
			setPlayerB(response.data);
	}

	return (
		<div>
			<div className="columns">
				<div className="column">
					<PlayerSelect name="playerA" onChange={(item) => onChange('A', item)}></PlayerSelect>
					{playerA.firstname} {playerA.lastname}
					<figure className="image is-128x128">
  						<img src="https://bulma.io/images/placeholders/256x256.png"/>
					</figure>
				</div>
				<div className="column">
					<PlayerSelect name="playerB" onChange={(item) => onChange('B', item)}></PlayerSelect>
					{playerB.firstname} {playerB.lastname}
					<figure className="image is-128x128">
						<img src="https://bulma.io/images/placeholders/256x256.png"/>
					</figure>
				</div>
			</div>
		</div>
	)
}

export default ComparePlayers;