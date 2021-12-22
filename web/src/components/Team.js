import React, { Fragment, useEffect, useState } from 'react';
import PlayerSelect from './PlayerSelect';

function Team(props) {
	const [numberOfPlayers, setNumberOfPlayers] = useState(6);
	const [players, setPlayers] = useState([]);
	const [name, setName] = useState('');

	useEffect(() => {
		if (props.data.name)
			setName(props.data.name);
		if (props.data.players)
			setPlayers(props.data.players);
	}, [props.data]);

	function handlePlayerChange(id, value) {
		setPlayers([...players, value]);
		props.onPlayerChange(props.id, id, value);
	}

	function addPlayer(event) {
		setNumberOfPlayers(numberOfPlayers+1);
	}

	function removePlayer(event) {
		setNumberOfPlayers(numberOfPlayers-1);
	}

	function handleNameChange(event) {
		event.preventDefault();
		setName(event.target.value);
		props.onNameChange(props.id, event.target.value);
	}

	let dds = []
	for (let i = 0; i < numberOfPlayers; ++i) {
		const id = `${props.id}${i}`;
		let value = '0';
		if (players)
			value = players[i];
		dds.push(
			<PlayerSelect key={id} id={id} onChange={handlePlayerChange} value={value}/>
		)
	}
	const placeholderName = `Team ${props.id}`;
	return (
		<>
			<div className="control">
				<input type="text" value={name} onChange={handleNameChange} className="input" placeholder={placeholderName}/>
			</div>
			{/*<button className="button" onClick={addPlayer}>+</button><br/>*/}
			{dds}
		</>
	)
}

export default Team;
