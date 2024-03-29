import React, { useEffect, useState, useId } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import { useAppContext } from '../context/state';

export default function PlayerSelect(props) {
	const methods = useFormContext();
	const appData = useAppContext();

	useEffect(() => {
		if (!methods)
			return
		if (!props.selected)
			return
		if (Array.isArray(props.selected)) {
			let data = [];
			props.selected.forEach(item => {
				data.push({value: item.id, label: `${item.firstname} ${item.lastname}`})
			});
			methods.setValue(props.name, data);
		}
		else
			methods.setValue(props.name, {value: props.selected.id, label: `${props.selected.firstname} ${props.selected.lastname}`});
	}, [props.selected]);

	const options = [];
	appData.players.map(player => 
		options.push({value: player.id , label: player.firstname + ' ' + player.lastname})
	)
	
	return ( (methods) ? 
		<div>
			<Controller
				name={props.name}
				defaultValue={methods.getValues(props.name) ?? ''}
				control={methods.control}
				rules={{ 
					required: props.required ? true : false, 
					validate: props.validate ? props.validate : null}}
				render={({ field }) =>
					<Select 
						{...field} 
						instanceId={useId()}
						options={options}
						isMulti={props.multiple ? 'isMulti' : ''}></Select>
				}
			/>
		</div>
		:
		<Select options={options} isMulti={props.multiple ? 'isMulti' : ''} value={props.selected} onChange={props.onChange} instanceId={useId()} isClearable="true"></Select>
	)
}
