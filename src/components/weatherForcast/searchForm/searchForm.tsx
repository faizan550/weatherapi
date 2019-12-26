/** @format */
import React, { useState, Fragment } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../searchForm/searchForm.css';

const SearchForm = (props: any) => {
	const [value, setValue] = useState('Search by');

	const handleChange = (e: any) => {
		setValue(e.target.value);
	};

	return (
		<div>
			<form className='search-form' onSubmit={props.getWeatherData}>
				<select name='select' className='select-option' onChange={handleChange}>
					<option value='' disabled selected hidden>
						Search By
					</option>
					<option value='City'>City</option>
					<option value='Zip Code'>Zip Code</option>
					<option value='Geographical Cordinates'>
						Geographical Cordinates
					</option>
				</select>
				{value === 'Search by' && (
					<input
						className='input-field'
						placeholder='search Term'
						value=''></input>
				)}
				{value === 'City' && (
					<input
						name='city'
						className='input-field'
						placeholder='CityName'></input>
				)}
				{value === 'Zip Code' && (
					<input
						name='zipcode'
						className='input-field'
						placeholder='ZipCode'></input>
				)}
				{value === 'Geographical Cordinates' && (
					<input
						name='longitude'
						className='geographical-input-field'
						placeholder='longitude'></input>
				)}
				{value === 'Geographical Cordinates' && (
					<input
						name='latitude'
						className='geographical-input-field'
						placeholder='latitude'></input>
				)}
				<button className='search-button'>
					<SearchIcon />
				</button>
			</form>
		</div>
	);
};

export default SearchForm;
